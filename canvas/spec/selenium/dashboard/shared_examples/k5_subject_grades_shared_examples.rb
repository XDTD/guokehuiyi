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

require_relative '../../common'
require_relative '../pages/k5_dashboard_page'
require_relative '../pages/k5_dashboard_common_page'
require_relative '../../../helpers/k5_common'
require_relative '../../helpers/shared_examples_common'

shared_examples_for 'k5 subject grades' do
  include K5DashboardPageObject
  include K5DashboardCommonPageObject
  include K5Common
  include SharedExamplesCommon

  context 'grades tab' do
    it 'shows panda image when no grades posted' do
      get "/courses/#{@subject_course.id}#grades"

      expect(empty_grades_image).to be_displayed
    end
  end

  context 'course grades' do
    before :once do
      @assignment1 = create_assignment(@subject_course, "assignment 1", "assignment1 not submitted", 100)
      @assignment2 = create_dated_assignment(@subject_course, "assignment 2 missing", 1.day.ago(Time.zone.now), 15)
      @assignment3 = create_and_submit_assignment(@subject_course, "assignment 3", "assignment2 submitted", 100)
      @assignment3.grade_student(@student, grader: @homeroom_teacher, score: "90", points_deducted: 0)
    end

    it 'shows 3 assignments in the list' do
      get "/courses/#{@subject_course.id}#grades"

      expect(grades_assignments_list.count).to eq(3)
    end

    it 'shows late assignment as Missing' do
      get "/courses/#{@subject_course.id}#grades"

      expect(grades_assignments_list[0].text).to include("Missing")
    end

    it 'shows submitted assignment with Submitted info' do
      get "/courses/#{@subject_course.id}#grades"

      expect(grades_assignments_list[2].text).to include("Submitted")
    end

    it 'shows graded assignment with points awarded' do
      get "/courses/#{@subject_course.id}#grades"

      expect(grades_assignments_list[2].text).to include("90 pts")
    end

    it 'shows ungraded assignment with no points awarded' do
      get "/courses/#{@subject_course.id}#grades"

      expect(grades_assignments_list[1].text).to include("\u2014 pts")
    end

    it 'shows the total points of graded assignments' do
      get "/courses/#{@subject_course.id}#grades"

      expect(grades_total.text).to include("90.00%")
    end

    it 'includes the total number of points' do
      get "/courses/#{@subject_course.id}#grades"

      expect(grades_assignments_list[0].text).to include("Out of 15")
    end
  end
end
