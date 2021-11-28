# frozen_string_literal: true

#
# Copyright (C) 2011 - present Instructure, Inc.
#
# This file is part of Canvas.
#
# Canvas is free software: you can redistribute it and/or modify it under
# the terms of the GNU Affero General Public License as published by the Free
# Software Foundation, version 3 of the License.
#
# Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
# WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
# A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
# details.
#
# You should have received a copy of the GNU Affero General Public License along
# with this program. If not, see <http://www.gnu.org/licenses/>.
#

class InfoController < ApplicationController
  skip_before_action :load_account, :only => [:health_check, :readiness, :deep]
  skip_before_action :load_user, :only => [:health_check, :readiness, :deep, :browserconfig]

  def styleguide
    render :layout => "layouts/styleguide"
  end

  def message_redirect
    m = AssetSignature.find_by(Message, params[:id])
    if m&.url
      redirect_to m.url
    else
      redirect_to "http://#{HostUrl.default_host}/"
    end
  end

  def help_links
    current_user_roles = @current_user.try(:roles, @domain_root_account) || []
    links = @domain_root_account&.help_links

    links = links.select do |link|
      available_to = link[:available_to] || []
      available_to.detect do |role|
        (role == 'user' || current_user_roles.include?(role)) ||
          (current_user_roles == ['user'] && role == 'unenrolled')
      end
    end

    render :json => links
  end

  def health_check
    # This action should perform checks on various subsystems, and raise an exception on failure.
    Account.connection.active?
    if Delayed::Job == Delayed::Backend::ActiveRecord::Job &&
       Account.connection != Delayed::Job.connection
      Delayed::Job.connection.active?
    end
    Tempfile.open("heartbeat", ENV['TMPDIR'] || Dir.tmpdir) { |f| f.write("heartbeat"); f.flush }
    # consul works; we don't really care about the result, but it should not error trying to
    # get the result
    DynamicSettings.find(tree: :private)['enable_rack_brotli']
    # vault works; asserting a hash is returned that is not null
    !Canvas::Vault.read("#{Canvas::Vault.kv_mount}/data/secrets").nil? if Canvas::Vault

    # javascript/css build process didn't die, right?
    asset_urls = {
      common_css: css_url_for("common"), # ensures brandable_css_bundles_with_deps exists
      common_js: ActionController::Base.helpers.javascript_url("#{js_base_url}/common"), # ensures webpack worked
      revved_url: Canvas::Cdn::RevManifest.gulp_manifest.values.first # makes sure `gulp rev` has ran
    }

    respond_to do |format|
      format.html { render plain: 'canvas ok' }
      format.json {
        render json:
                               { status: 'canvas ok',
                                 asset_urls: asset_urls,
                                 revision: Canvas.revision,
                                 installation_uuid: Canvas.installation_uuid }
      }
    end
  end

  def health_prognosis
    # do some checks on things that aren't a problem yet, but will be if nothing is done to fix them
    checks = {
      'messages_partition' => Messages::Partitioner.processed?,
      'quizzes_submission_events_partition' => Quizzes::QuizSubmissionEventPartitioner.processed?,
      'versions_partition' => SimplyVersioned::Partitioner.processed?,
    }
    failed = checks.reject { |_k, v| v }.map(&:first)
    if failed.any?
      render :json => { :status => "failed upcoming health checks - #{failed.join(", ")}" }, :status => :internal_server_error
    else
      render :json => { :status => "canvas will be ok, probably" }
    end
  end

  # for windows live tiles
  def browserconfig
    cancel_cache_buster
    expires_in 10.minutes, public: true
  end

  def test_error
    @context = Course.find(params[:course_id]) if params[:course_id].present?

    if params[:status].present?
      case params[:status].to_i
      when 401
        @unauthorized_reason = :unpublished if params[:reason] == 'unpublished'
        @needs_cookies = true if params[:reason] == 'needs_cookies'
        return render_unauthorized_action
      when 422
        raise ActionController::InvalidAuthenticityToken, 'test_error'
      else
        @not_found_message = '(test_error message details)' if params[:message].present?
        raise RequestError.new('test_error', params[:status].to_i)
      end
    end

    render status: :not_found, template: "shared/errors/404_message"
  end

  def web_app_manifest
    # brand_variable returns a value that we expect to go through a rails
    # asset helper, so we need to do that manually here
    icon = helpers.image_path(brand_variable('ic-brand-apple-touch-icon'))
    render json: {
      name: "Canvas",
      short_name: "Canvas",
      icons: [
        {
          src: icon,
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: icon,
          sizes: "192x192",
          type: "image/png"
        }
      ],
      prefer_related_applications: true,
      related_applications: [
        {
          platform: "play",
          url: "https://play.google.com/store/apps/details?id=com.instructure.candroid",
          id: "com.instructure.candroid"
        },
        {
          platform: "itunes",
          url: "https://itunes.apple.com/app/canvas-by-instructure/id480883488"
        }
      ],
      start_url: "/",
      display: "minimal-ui"
    }
  end

  def readiness(is_deep_check: false)
    # This action provides a clear signal for assessing system components that are "owned"
    # by Canvas and are ultimately responsible for being alive and able to serve consumer traffic
    #
    # Readiness Checks
    #
    check = ->(&proc) { component_check(proc, is_deep_check) }
    components = {
      # ensures brandable_css_bundles_with_deps exists, returns a string (path), treated as truthy
      common_css: check.call { css_url_for('common') },
      # ensures webpack worked; returns a string, treated as truthy
      common_js: check.call do
        ActionController::Base.helpers.javascript_url("#{js_base_url}/common")
      end,
      # returns a PrefixProxy instance, treated as truthy
      consul: check.call { DynamicSettings.find(tree: :private)[:readiness].nil? },
      # returns the value of the block <integer>, treated as truthy
      filesystem: check.call do
        Tempfile.open('readiness', ENV['TMPDIR'] || Dir.tmpdir) { |f| f.write('readiness') }
      end,
      # returns a boolean
      jobs: check.call { Delayed::Job.connection.active? },
      # returns a boolean
      postgresql: check.call { Account.connection.active? },
      # nil response treated as truthy
      ha_cache: check.call { MultiCache.cache.fetch('readiness').nil? },
      # ensures `gulp rev` has ran; returns a string, treated as truthy
      rev_manifest: check.call { Canvas::Cdn::RevManifest.gulp_manifest.values.first },
      # ensures we retrieved something back from Vault; returns a boolean
      vault: check.call { !Canvas::Vault.read("#{Canvas::Vault.kv_mount}/data/secrets").nil? }
    }
    failed = components.reject { |_k, v| v[:status] }.map(&:first)

    render_readiness_json(components, failed.any? ? 503 : 200, is_deep_check)
  end

  def deep
    # This action provides a clear signal for assessing our critical and secondary dependencies
    # such that we can successfully complete consumer requests
    #
    # Deep Checks
    #
    deep_check =
      Rails.cache.fetch(:deep_health_check, expires_in: 60.seconds) do
        {
          critical:
            critical_checks
              .transform_values { |v| execute_deep_check(v) }
              .transform_values { |v| component_check(v, true) },
          secondary:
            secondary_checks
              .transform_values { |v| execute_deep_check(v) }
              .transform_values { |v| component_check(v, true) }
        }
      end

    failed = deep_check[:critical].reject { |_k, v| v[:status] }.map(&:first)
    render_deep_json(deep_check[:critical], deep_check[:secondary], failed.any? ? 503 : 200)
  end

  private

  def execute_deep_check(proc)
    Thread.new do
      Thread.current.report_on_exception = false
      proc.call
    end
  end

  def critical_checks
    ret = {
      default_shard: -> { Shard.connection.active? }
    }

    if InstFS.enabled?
      ret[:insf_fs] = -> do
        CanvasHttp
          .get(URI.join(InstFS.app_host, '/readiness').to_s)
          .is_a?(Net::HTTPSuccess)
      end
    end

    if Canvas.redis_enabled?
      ret[:redis] = -> do
        nodes = Canvas.redis.try(:ring)&.nodes || Array.wrap(Canvas.redis)
        nodes.all? { |node| node.get("deep_check").nil? }
      end
    end

    if Services::RichContent.send(:service_settings)[:RICH_CONTENT_APP_HOST]
      ret[:rich_content_service] = -> do
        CanvasHttp
          .get(
            URI::HTTPS.build(
              host: Services::RichContent.send(:service_settings)[:RICH_CONTENT_APP_HOST],
              path: '/readiness'
            ).to_s
          ).is_a?(Net::HTTPSuccess)
      end
    end

    if MathMan.use_for_svg?
      ret[:mathman] = -> do
        CanvasHttp
          .get(MathMan.url_for(latex: 'x', target: :svg))
          .is_a?(Net::HTTPSuccess)
      end
    end

    if LiveEvents::Client.config
      ret[:live_events] = -> do
        !LiveEvents.send(:client).stream_client.put_records(
          records: [
            {
              data: {
                attributes: {
                  event_name: 'noop',
                  event_time: Time.now.utc.iso8601(3)
                },
                body: {}
              }.to_json,
              partition_key: rand(1000).to_s
            }
          ],
          stream_name: LiveEvents.send(:client).stream_name
        ).nil?
      end
    end
    ret
  end

  def secondary_checks
    ret = {}
    if PageView.pv4?
      ret[:pv4] = -> do
        CanvasHttp
          .get(URI.join(ConfigFile.load('pv4')['uri'], '/health_check').to_s)
          .is_a?(Net::HTTPSuccess)
      end
    end

    if Canvadocs.enabled?
      ret[:canvadocs] = -> do
        CanvasHttp
          .get(URI.join(Canvadocs.config['base_url'], '/readiness').to_s)
          .is_a?(Net::HTTPSuccess)
      end
    end

    if CutyCapt.enabled? && CutyCapt.screencap_service
      ret[:screencap] = -> do
        Tempfile.create('example.png', :encoding => 'ascii-8bit') do |f|
          CutyCapt.screencap_service.snapshot_url_to_file("about:blank", f)
        end
      end
    end

    if Account.site_admin.feature_enabled?(:notification_service)
      ret[:notification_queue] = -> do
        !Services::NotificationService.process(Account.site_admin.global_id, nil, 'noop', 'nobody').nil?
      end
    end

    if ReleaseNote.enabled?
      ret[:release_notes] = -> do
        !ReleaseNote.ddb_client.update_item(
          table_name: ReleaseNote.ddb_table_name,
          key: { 'PartitionKey' => "healthcheck",
                 'RangeKey' => "canvas" }
        ).nil?
      end
    end

    if IncomingMailProcessor::IncomingMessageProcessor.run_periodically?
      ret[:incoming_mail] = -> do
        IncomingMailProcessor::IncomingMessageProcessor.healthy?
      end
    end
    ret
  end

  def component_check(component, is_deep_check)
    status = false
    message = 'service is up'
    exception_type = is_deep_check ? :deep_health_check : :readiness_health_check
    timeout = Setting.get('healthcheck_timelimit', 5.seconds.to_s).to_f
    response_time_ms =
      Benchmark.ms do
        Timeout.timeout(timeout, Timeout::Error) do
          status = component.is_a?(Thread) ? component.value : component.call
        end
      rescue Timeout::Error => e
        message = e.message
        Canvas::Errors.capture_exception(exception_type, e.message, :warn)
      rescue => e
        message = e.message
        Canvas::Errors.capture_exception(exception_type, e, :error)
      end

    { status: status, message: message, time: response_time_ms }
  end

  def render_readiness_json(components, status_code, is_deep_check)
    readiness_json = { status: status_code, components: components_to_hash(components) }
    return readiness_json if is_deep_check

    render json: readiness_json, status: status_code
  end

  def render_deep_json(critical, secondary, status_code)
    readiness_response = readiness(is_deep_check: true)
    status = readiness_response[:status] == 503 ? readiness_response[:status] : status_code

    render json: {
      status: status,
      readiness: readiness_response,
      critical: components_to_hash(critical),
      secondary: components_to_hash(secondary)
    }, status: status
  end

  def components_to_hash(components)
    components.map do |name, value|
      status = value[:status] ? 200 : 503
      message = value[:message]
      time = value[:time]
      { name: name, status: status, message: message, response_time_ms: time }
    end
  end
end
