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

class CreateBlackoutDates < ActiveRecord::Migration[6.0]
  tag :predeploy
  disable_ddl_transaction!

  def up
    create_table :blackout_dates do |t|
      t.belongs_to :context, polymorphic: true, index: true, null: false
      t.date :start_date, :end_date, null: false
      t.string :event_title, limit: 255, null: false
      t.timestamps
      t.references :root_account, foreign_key: { to_table: 'accounts' }, limit: 8, null: false, index: false
    end
    add_replica_identity 'BlackoutDate', :root_account_id, 0
  end

  def down
    drop_table :blackout_dates
  end
end
