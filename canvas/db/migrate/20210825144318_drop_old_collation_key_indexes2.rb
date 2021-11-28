# frozen_string_literal: true

#
# Copyright (C) 2017 - present Instructure, Inc.
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

class DropOldCollationKeyIndexes2 < ActiveRecord::Migration[5.0]
  tag :postdeploy
  disable_ddl_transaction!

  def up
    remove_index :users, name: :index_users_on_sortable_name_old2, if_exists: true, algorithm: :concurrently
    remove_index :attachments, name: :index_attachments_on_fi_and_fs_and_dn_temp, if_exists: true, algorithm: :concurrently
  end
end
