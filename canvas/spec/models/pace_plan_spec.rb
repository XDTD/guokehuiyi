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
require_relative '../spec_helper'

describe PacePlan do
  before :once do
    course_with_student active_all: true
    @module = @course.context_modules.create!
    @assignment = @course.assignments.create!
    @course_section = @course.course_sections.first
    @tag = @assignment.context_module_tags.create! context_module: @module, context: @course, tag_type: 'context_module'
    @pace_plan = @course.pace_plans.create! workflow_state: 'active'
    @pace_plan_module_item = @pace_plan.pace_plan_module_items.create! module_item: @tag
  end

  context "associations" do
    it "has functioning course association" do
      expect(@course.pace_plans).to match_array([@pace_plan])
      expect(@pace_plan.course).to eq @course
    end

    it "has functioning pace_plan_module_items association" do
      expect(@pace_plan.pace_plan_module_items.map(&:module_item)).to match_array([@tag])
    end
  end

  context "scopes" do
    before :once do
      @other_section = @course.course_sections.create! name: 'other_section'
      @section_plan = @course.pace_plans.create! course_section: @other_section
      @student_plan = @course.pace_plans.create! user: @student
    end

    it "has a working primary scope" do
      expect(@course.pace_plans.primary).to match_array([@pace_plan])
    end

    it "has a working for_user scope" do
      expect(@course.pace_plans.for_user(@student)).to match_array([@student_plan])
    end

    it "has a working for_section scope" do
      expect(@course.pace_plans.for_section(@other_section)).to match_array([@section_plan])
    end
  end

  context "pace_plan_context" do
    it "requires a course" do
      bad_plan = PacePlan.create
      expect(bad_plan).not_to be_valid

      bad_plan.course = course_factory
      expect(bad_plan).to be_valid
    end

    it "disallows a user and section simultaneously" do
      course_with_student
      bad_plan = @course.pace_plans.build(user: @student, course_section: @course.default_section)
      expect(bad_plan).not_to be_valid

      bad_plan.course_section = nil
      expect(bad_plan).to be_valid
    end
  end

  context "constraints" do
    it "has a unique constraint on course for active primary pace plans" do
      expect { @course.pace_plans.create! workflow_state: 'active' }.to raise_error(ActiveRecord::RecordNotUnique)
    end

    it "has a unique constraint for active section pace plans" do
      @course.pace_plans.create! course_section: @course.default_section, workflow_state: 'active'
      expect {
        @course.pace_plans.create! course_section: @course.default_section, workflow_state: 'active'
      }.to raise_error(ActiveRecord::RecordNotUnique)
    end

    it "has a unique constraint for active student pace plans" do
      @course.pace_plans.create! user: @student, workflow_state: 'active'
      expect {
        @course.pace_plans.create! user: @student, workflow_state: 'active'
      }.to raise_error(ActiveRecord::RecordNotUnique)
    end
  end

  context "root_account" do
    it "infers root_account_id from course" do
      expect(@pace_plan.root_account).to eq @course.root_account
    end
  end

  context "duplicate" do
    it "returns an initialized duplicate of the pace plan" do
      duplicate_pace_plan = @pace_plan.duplicate
      expect(duplicate_pace_plan.class).to eq(PacePlan)
      expect(duplicate_pace_plan.persisted?).to eq(false)
      expect(duplicate_pace_plan.id).to eq(nil)
    end

    it "supports passing in options" do
      opts = { user_id: 1 }
      duplicate_pace_plan = @pace_plan.duplicate(opts)
      expect(duplicate_pace_plan.user_id).to eq(opts[:user_id])
      expect(duplicate_pace_plan.course_section_id).to eq(opts[:course_section_id])
    end
  end

  context "publish" do
    before :once do
      @pace_plan.update! start_date: '2021-09-01', end_date: '2021-09-30'
    end

    it "creates an override for students" do
      expect(@assignment.due_at).to eq(nil)
      expect(@pace_plan.publish).to eq(true)
      expect(@assignment.assignment_overrides.count).to eq(1)
    end

    it "creates assignment overrides for the pace plan user" do
      @pace_plan.update(user_id: @student)
      expect(@assignment.assignment_overrides.count).to eq(0)
      expect(@pace_plan.publish).to eq(true)
      expect(@assignment.assignment_overrides.count).to eq(1)
      assignment_override = @assignment.assignment_overrides.first
      expect(assignment_override.due_at).to eq(Date.parse('2021-09-01').end_of_day)
      expect(assignment_override.assignment_override_students.first.user_id).to eq(@student.id)
    end

    it "removes the user from an adhoc assignment override if it includes other students" do
      student2 = user_model
      StudentEnrollment.create!(user: student2, course: @course)
      assignment_override = @assignment.assignment_overrides.create(
        title: 'ADHOC Test',
        workflow_state: 'active',
        set_type: 'ADHOC',
        due_at: '2021-09-05',
        due_at_overridden: true
      )
      assignment_override.assignment_override_students << AssignmentOverrideStudent.new(user_id: @student, no_enrollment: false)
      assignment_override.assignment_override_students << AssignmentOverrideStudent.new(user_id: student2, no_enrollment: false)

      @pace_plan.update(user_id: @student)
      expect(@assignment.assignment_overrides.count).to eq(1)
      assignment_override = @assignment.assignment_overrides.first
      expect(assignment_override.due_at).to eq(Date.parse('2021-09-05').end_of_day)
      expect(assignment_override.assignment_override_students.pluck(:user_id)).to eq([@student.id, student2.id])
      expect(@pace_plan.publish).to eq(true)
      expect(@assignment.assignment_overrides.count).to eq(2)
      expect(assignment_override.due_at).to eq(Date.parse('2021-09-05').end_of_day)
      expect(assignment_override.assignment_override_students.pluck(:user_id)).to eq([student2.id])
      assignment_override2 = @assignment.assignment_overrides.second
      expect(assignment_override2.due_at).to eq(Date.parse('2021-09-01').end_of_day)
      expect(assignment_override2.assignment_override_students.pluck(:user_id)).to eq([@student.id])
    end

    it "creates assignment overrides for the pace plan course section" do
      @pace_plan.update(course_section: @course_section)
      expect(@assignment.assignment_overrides.count).to eq(0)
      expect(@pace_plan.publish).to eq(true)
      expect(@assignment.assignment_overrides.count).to eq(1)
      assignment_override = @assignment.assignment_overrides.first
      expect(assignment_override.due_at).to eq(Date.parse('2021-09-01').end_of_day)
      expect(assignment_override.assignment_override_students.first.user_id).to eq(@student.id)
    end

    it "updates overrides that are already present if the days have changed" do
      @pace_plan.publish
      assignment_override = @assignment.assignment_overrides.first
      expect(assignment_override.due_at).to eq(Date.parse('2021-09-01').end_of_day)
      @pace_plan_module_item.update duration: 2
      @pace_plan.publish
      assignment_override.reload
      expect(assignment_override.due_at).to eq(Date.parse('2021-09-02').end_of_day)
    end

    it "updates user overrides that are already present if the days have changed" do
      @pace_plan.update(user_id: @student)
      @pace_plan.publish
      expect(@assignment.assignment_overrides.active.count).to eq(1)
      @pace_plan_module_item.update duration: 2
      @pace_plan.publish
      expect(@assignment.assignment_overrides.active.count).to eq(1)
      assignment_override = @assignment.assignment_overrides.active.first
      expect(assignment_override.due_at).to eq(Date.parse('2021-09-02').end_of_day)
      expect(assignment_override.assignment_override_students.first.user_id).to eq(@student.id)
    end

    it "updates course section overrides that are already present if the days have changed" do
      @pace_plan.update(course_section: @course_section)
      @pace_plan.publish
      expect(@assignment.assignment_overrides.active.count).to eq(1)
      @pace_plan_module_item.update duration: 2
      @pace_plan.publish
      expect(@assignment.assignment_overrides.active.count).to eq(1)
      assignment_override = @assignment.assignment_overrides.active.first
      expect(assignment_override.due_at).to eq(Date.parse('2021-09-02').end_of_day)
      expect(assignment_override.assignment_override_students.first.user_id).to eq(@student.id)
    end

    it "does not change assignment due date when user pace plan is published if an assignment override already exists" do
      @pace_plan.publish
      assignment_override = @assignment.assignment_overrides.first
      expect(assignment_override.due_at).to eq(Date.parse('2021-09-01').end_of_day)
      expect(@assignment.assignment_overrides.active.count).to eq(1)

      student_pace_plan = @course.pace_plans.create!(user: @student, workflow_state: 'active', start_date: '2021-09-01')
      student_pace_plan.publish
      assignment_override.reload
      expect(assignment_override.due_at).to eq(Date.parse('2021-09-01').end_of_day)
      expect(@assignment.assignment_overrides.active.count).to eq(1)
    end

    it "throws an error if start_date is nil" do
      expect { @pace_plan.publish }.not_to raise_error

      @pace_plan.update start_date: nil, end_date: nil
      expect { @pace_plan.publish }.to raise_error("A start_date is required to publish")

      @pace_plan.update start_date: '2021-09-01', end_date: nil
      expect { @pace_plan.publish }.not_to raise_error

      @pace_plan.update start_date: nil, end_date: '2021-09-30'
      expect { @pace_plan.publish }.to raise_error("A start_date is required to publish")
    end
  end
end
