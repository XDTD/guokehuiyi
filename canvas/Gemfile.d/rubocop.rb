# frozen_string_literal: true

#
# Copyright (C) 2014 - present Instructure, Inc.
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

# these gems are separate from test.rb so that we can treat it as a dedicated
# Gemfile for script/rlint, and it will run very quickly

gem 'parallel', '1.21.0', require: false # dependency of rubocop and canvas
  gem 'ruby-progressbar', '1.11.0', require: false # used to show progress of S3Uploader

gem 'regexp_parser', '1.8.2', require: false # dependency of rubocop and several other gems

group :test do
  gem 'gergich', '2.0.0', require: false
    gem 'mime-types-data', '3.2021.0901', require: false

  gem 'rubocop', '1.22.0', require: false
    gem 'rubocop-ast', '1.12.0', require: false
    gem 'unicode-display_width', '2.1.0', require: false
  gem 'rubocop-canvas', require: false, path: "gems/rubocop-canvas"
    gem 'rainbow', '3.0.0', require: false
  gem 'rubocop-rails', '2.12.3', require: false
  gem 'rubocop-rake', '0.6.0', require: false
  gem 'rubocop-rspec', '2.5.0', require: false
  gem 'rubocop-performance', '1.11.5', require: false
end
