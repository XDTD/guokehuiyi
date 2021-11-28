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
require 'spec_helper'

describe PacePlanDueDatesCalculator do
  before :once do
    course_with_student active_all: true
    @module = @course.context_modules.create!
    @assignment = @course.assignments.create!
    @tag = @assignment.context_module_tags.create! context_module: @module, context: @course, tag_type: 'context_module'
    @pace_plan = @course.pace_plans.create! workflow_state: 'active', start_date: '2021-09-01', end_date: '2021-09-30'
    @pace_plan_module_item = @pace_plan.pace_plan_module_items.create! module_item: @tag
    @pace_plan_module_items = @pace_plan.pace_plan_module_items.active
    @calculator = PacePlanDueDatesCalculator.new(@pace_plan)
  end

  context 'get_due_dates' do
    it 'returns the next due date' do
      expect(@calculator.get_due_dates(@pace_plan_module_items)).to eq(
        { @pace_plan_module_item.id => Date.parse('2021-09-01') }
      )
    end

    it 'respects blackout dates' do
      @course.blackout_dates.create! event_title: 'Blackout test', start_date: '2021-09-01', end_date: '2021-09-08'
      expect(@calculator.get_due_dates(@pace_plan_module_items)).to eq(
        { @pace_plan_module_item.id => Date.parse('2021-09-09') }
      )
    end

    it 'respects skipping weekends' do
      @course.blackout_dates.create! event_title: 'Blackout test', start_date: '2021-09-01', end_date: '2021-09-03'
      expect(@calculator.get_due_dates(@pace_plan_module_items)).to eq(
        { @pace_plan_module_item.id => Date.parse('2021-09-06') }
      )
      @pace_plan.update exclude_weekends: false
      expect(@calculator.get_due_dates(@pace_plan_module_items)).to eq(
        { @pace_plan_module_item.id => Date.parse('2021-09-04') }
      )
    end

    it 'calculates from a given enrollment start date' do
      enrollment = Enrollment.new(start_at: Date.parse('2021-09-09'))
      expect(@calculator.get_due_dates(@pace_plan_module_items, enrollment)).to eq(
        { @pace_plan_module_item.id => Date.parse('2021-09-09') }
      )
    end
  end
end
