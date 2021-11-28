# frozen_string_literal: true

#
# Copyright (C) 2021 - present Instructure, Inc.
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

# this CANVAS_ZEITWERK constant flag is defined in canvas' "application.rb"
# from an env var. It should be temporary,
# and removed once we've fully upgraded to zeitwerk autoloading.
if CANVAS_ZEITWERK
  # This is because the jsx folder does not contain ruby to
  # autoload.  You should NOT use this pattern as a workaround
  # for badly-named ruby code.
  Rails.autoloaders.main.ignore(Rails.root.join('app', 'jsx'))

  # # This one exists because we require plugins to be const get'd from Canvas::Plugins::Validators::
  # require 'canvas'
  # require 'canvas/plugins'
  # require 'canvas/plugins/validators'
  # require 'canvas/plugins/adobe_connect'
  require 'canvas_webex'
  require 'canvas_webex/version'

  # we don't want zeitwerk to try to eager_load some
  # "Version" constant from any plugins
  Rails.autoloaders.main.ignore(
    "#{__dir__}/../../gems/plugins/simply_versioned/lib/simply_versioned/gem_version.rb",
    "#{__dir__}/../../lib/cdc_migration_testing" # these aren't really modules we use in canvas runtime
  )

  Rails.autoloaders.each do |autoloader|
    autoloader.inflector.inflect(
      "api_array_serializer" => "APIArraySerializer",
      "api_serialization" => "APISerialization",
      "api_serializer" => "APISerializer",
      "aws" => "AWS",
      "basic_lti" => "BasicLTI",
      "basic_lti_links" => "BasicLTILinks",
      "brandable_css" => "BrandableCSS",
      "cas" => "CAS",
      "cc" => "CC",
      "cc_helper" => "CCHelper",
      "cc_exporter" => "CCExporter",
      "cc_worker" => "CCWorker",
      "dynamo_db" => "DynamoDB",
      "icu" => "ICU",
      "id_loader" => "IDLoader",
      "ims" => "IMS",
      "inst_fs" => "InstFS",
      "ldap" => "LDAP",
      "legacy_id_interface" => "LegacyIDInterface",
      "open_id_connect" => "OpenIDConnect",
      "saml" => "SAML",
      "sis" => "SIS",
      "sisid_loader" => "SISIDLoader",
      "sms_presenter" => "SMSPresenter",
      "ssl_common" => "SSLCommon",
      "turnitin_id" => "TurnitinID",
      "uk_federation" => "UKFederation",
      "vericite" => "VeriCite",
      "xml_helper" => "XMLHelper",
    )
  end
end
