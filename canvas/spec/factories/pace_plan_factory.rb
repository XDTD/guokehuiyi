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
#

module Factories
  def pace_plan_model(opts = {})
    course = opts.delete(:course) || opts[:context] || course_model(reusable: true)
    @pace_plan = factory_with_protected_attributes(course.pace_plans, valid_pace_plan_attributes.merge(opts))
  end

  def valid_pace_plan_attributes
    {
      workflow_state: 'active',
      start_date: '2021-09-01',
      end_date: '2021-09-30',
      exclude_weekends: true,
      hard_end_dates: true,
      published_at: Time.current
    }
  end
end
