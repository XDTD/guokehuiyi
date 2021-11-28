/*
 * Copyright (C) 2021 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import {createGradebook} from './GradebookSpecHelper'
import {
  compareAssignmentPositions,
  compareAssignmentPointsPossible,
  wrapColumnSortFn
} from '../Gradebook.sorting'

const assignments = [
  {
    id: '1',
    object: {
      due_at: 1,
      name: 'Abc',
      position: 4,
      points_possible: 1,
      module_ids: [1],
      module_positions: [1],
      assignment_group: {position: 5}
    }
  },
  {
    id: '2',
    object: {
      due_at: 2,
      name: 'Bcd',
      position: 3,
      points_possible: 2,
      module_ids: [2],
      module_positions: [2],
      assignment_group: {position: 6}
    }
  }
]
const assignmentsReversed = [...assignments].reverse()

const contextModules = [
  {id: '1', name: 'Module 1', position: 1},
  {id: '2', name: 'Module 2', position: 2}
]

describe('makeColumnSortFn', () => {
  it('returns wrapped sort function for assignment_group, ascending', () => {
    const gradebook = createGradebook()
    const sortFn = gradebook.makeColumnSortFn({
      sortType: '__default__',
      direction: 'ascending'
    })

    let results = [...assignments].sort(sortFn)
    expect(results[0].object.assignment_group.position).toBe(5)
    expect(results[1].object.assignment_group.position).toBe(6)

    results = [...assignmentsReversed].sort(sortFn)
    expect(results[0].object.assignment_group.position).toBe(5)
    expect(results[1].object.assignment_group.position).toBe(6)
  })

  // since "alpha" isn't a type, sorts by assignment position (default)
  it('returns wrapped sort function for alpha, descending', () => {
    const gradebook = createGradebook()
    const sortFn = gradebook.makeColumnSortFn({
      sortType: 'alpha',
      direction: 'descending'
    })

    let results = [...assignments].sort(sortFn)
    expect(results[0].id).toBe('2')
    expect(results[1].id).toBe('1')

    results = [...assignmentsReversed].sort(sortFn)
    expect(results[0].id).toBe('2')
    expect(results[1].id).toBe('1')
  })

  it('returns wrapped sort function for name, ascending', () => {
    const gradebook = createGradebook()
    const sortFn = gradebook.makeColumnSortFn({
      sortType: 'name',
      direction: 'ascending'
    })

    let results = [...assignments].sort(sortFn)
    expect(results[0].object.name).toBe('Abc')
    expect(results[1].object.name).toBe('Bcd')

    results = [...assignmentsReversed].sort(sortFn)
    expect(results[0].object.name).toBe('Abc')
    expect(results[1].object.name).toBe('Bcd')
  })

  it('returns wrapped sort function for name, descending', () => {
    const gradebook = createGradebook()
    const sortFn = gradebook.makeColumnSortFn({
      sortType: 'name',
      direction: 'descending'
    })

    let results = [...assignments].sort(sortFn)
    expect(results[0].object.name).toBe('Bcd')
    expect(results[1].object.name).toBe('Abc')

    results = [...assignmentsReversed].sort(sortFn)
    expect(results[0].object.name).toBe('Bcd')
    expect(results[1].object.name).toBe('Abc')
  })

  it('returns wrapped sort function for due_date, ascending', () => {
    const gradebook = createGradebook()
    const sortFn = gradebook.makeColumnSortFn({sortType: 'due_date', direction: 'ascending'})

    let results = [...assignments].sort(sortFn)
    expect(results[0].object.due_at).toBe(1)
    expect(results[1].object.due_at).toBe(2)

    results = [...assignmentsReversed].sort(sortFn)
    expect(results[0].object.due_at).toBe(1)
    expect(results[1].object.due_at).toBe(2)
  })

  it('returns wrapped sort function for due_date, descending', () => {
    const gradebook = createGradebook()
    const sortFn = gradebook.makeColumnSortFn({sortType: 'due_date', direction: 'descending'})

    let results = [...assignments].sort(sortFn)
    expect(results[0].object.due_at).toBe(2)
    expect(results[1].object.due_at).toBe(1)

    results = [...assignmentsReversed].sort(sortFn)
    expect(results[0].object.due_at).toBe(2)
    expect(results[1].object.due_at).toBe(1)
  })

  it('returns wrapped sort function for points, ascending', () => {
    const gradebook = createGradebook()
    const sortFn = gradebook.makeColumnSortFn({sortType: 'points', direction: 'ascending'})

    let results = [...assignments].sort(sortFn)
    expect(results[0].object.points_possible).toBe(1)
    expect(results[1].object.points_possible).toBe(2)

    results = [...assignmentsReversed].sort(sortFn)
    expect(results[0].object.points_possible).toBe(1)
    expect(results[1].object.points_possible).toBe(2)
  })

  it('returns wrapped sort function for points, descending', () => {
    const gradebook = createGradebook()
    const sortFn = gradebook.makeColumnSortFn({sortType: 'points', direction: 'descending'})

    let results = [...assignments].sort(sortFn)
    expect(results[0].object.points_possible).toBe(2)
    expect(results[1].object.points_possible).toBe(1)

    results = [...assignmentsReversed].sort(sortFn)
    expect(results[0].object.points_possible).toBe(2)
    expect(results[1].object.points_possible).toBe(1)
  })

  it('returns wrapped sort function for module_position, ascending', () => {
    const gradebook = createGradebook()
    gradebook.setContextModules(contextModules)
    const sortFn = gradebook.makeColumnSortFn({sortType: 'module_position', direction: 'ascending'})

    let results = [...assignments].sort(sortFn)
    expect(results[0].object.module_positions[0]).toBe(1)
    expect(results[1].object.module_positions[0]).toBe(2)

    results = [...assignmentsReversed].sort(sortFn)
    expect(results[0].object.module_positions[0]).toBe(1)
    expect(results[1].object.module_positions[0]).toBe(2)
  })

  it('returns wrapped sort function for module_position, descending', () => {
    const gradebook = createGradebook()
    gradebook.setContextModules(contextModules)
    const sortFn = gradebook.makeColumnSortFn({
      sortType: 'module_position',
      direction: 'descending'
    })

    let results = [...assignments].sort(sortFn)
    expect(results[0].object.module_positions[0]).toBe(2)
    expect(results[1].object.module_positions[0]).toBe(1)

    results = [...assignmentsReversed].sort(sortFn)
    expect(results[0].object.module_positions[0]).toBe(2)
    expect(results[1].object.module_positions[0]).toBe(1)
  })
})

describe('Gradebook#makeCompareAssignmentCustomOrderFn', () => {
  it('returns position difference if both are defined in the index', () => {
    const sortOrder = {customOrder: ['foo', 'bar']}
    const gradeBook = createGradebook()
    const sortFn = gradeBook.makeCompareAssignmentCustomOrderFn(sortOrder)

    const a = {id: 'foo'}
    const b = {id: 'bar'}
    expect(sortFn(a, b)).toBe(-1)
  })

  it('returns -1 if the first arg is in the order and the second one is not', () => {
    const sortOrder = {customOrder: ['foo', 'bar']}
    const gradeBook = createGradebook()
    const sortFn = gradeBook.makeCompareAssignmentCustomOrderFn(sortOrder)

    const a = {id: 'foo'}
    const b = {id: 'NO'}
    expect(sortFn(a, b)).toBe(-1)
  })

  it('returns 1 if the second arg is in the order and the first one is not', () => {
    const sortOrder = {customOrder: ['foo', 'bar']}
    const gradeBook = createGradebook()
    const sortFn = gradeBook.makeCompareAssignmentCustomOrderFn(sortOrder)

    const a = {id: 'NO'}
    const b = {id: 'bar'}
    expect(sortFn(a, b)).toBe(1)
  })

  it('falls back to object id for the indexes if field is not in the map', () => {
    const sortOrder = {customOrder: ['5', '11']}
    const gradeBook = createGradebook()
    const sortFn = gradeBook.makeCompareAssignmentCustomOrderFn(sortOrder)

    const a = {id: 'NO', object: {id: 5}}
    const b = {id: 'NOPE', object: {id: 11}}
    expect(sortFn(a, b)).toBe(-1)
  })
})

describe('compareAssignmentPositions', () => {
  it('sorts by position (1)', () => {
    const a = {object: {position: 1, assignment_group: {position: 1}}}
    const b = {object: {position: 2, assignment_group: {position: 1}}}
    expect([a, b].sort(compareAssignmentPositions)).toStrictEqual([a, b])
  })

  it('sorts by position (2)', () => {
    const a = {object: {position: 1, assignment_group: {position: 1}}}
    const b = {object: {position: 2, assignment_group: {position: 1}}}
    expect([b, a].sort(compareAssignmentPositions)).toStrictEqual([a, b])
  })

  it('sorts by assignment_group.position (1)', () => {
    const a = {object: {position: 2, assignment_group: {position: 1}}}
    const b = {object: {position: 1, assignment_group: {position: 2}}}
    expect([a, b].sort(compareAssignmentPositions)).toStrictEqual([a, b])
  })

  it('sorts by assignment_group.position (2)', () => {
    const a = {object: {position: 2, assignment_group: {position: 1}}}
    const b = {object: {position: 1, assignment_group: {position: 2}}}
    expect([b, a].sort(compareAssignmentPositions)).toStrictEqual([a, b])
  })
})

describe('compareAssignmentPointsPossible', () => {
  it('returns 0 if the points_possible field is the same in both records', function () {
    expect(compareAssignmentPointsPossible(assignments[0], assignments[0])).toStrictEqual(0)
  })

  it('sorts by points_possible', () => {
    let results = [...assignments].sort(compareAssignmentPointsPossible)
    expect(results[0].object.points_possible).toBe(1)
    expect(results[1].object.points_possible).toBe(2)

    results = [...assignmentsReversed].sort(compareAssignmentPointsPossible)
    expect(results[0].object.points_possible).toBe(1)
    expect(results[1].object.points_possible).toBe(2)
  })
})

describe('wrapColumnSortFn', () => {
  it('returns -1 if second argument is of type total_grade', () => {
    const sortFn = wrapColumnSortFn(jest.fn())
    expect(sortFn({}, {type: 'total_grade'})).toBe(-1)
  })

  it('returns 1 if first argument is of type total_grade', () => {
    const sortFn = wrapColumnSortFn(jest.fn())
    expect(sortFn({type: 'total_grade'}, {})).toBe(1)
  })

  it('returns 1 if first argument is of type total_grade_override', () => {
    const sortFn = wrapColumnSortFn(jest.fn())
    expect(sortFn({type: 'total_grade_override'}, {})).toBe(1)
  })

  it('returns -1 if second argument is of type total_grade_override', () => {
    const sortFn = wrapColumnSortFn(jest.fn())
    expect(sortFn({}, {type: 'total_grade_override'})).toBe(-1)
  })

  it('returns -1 if second argument is an assignment_group and the first is not', () => {
    const sortFn = wrapColumnSortFn(jest.fn())
    expect(sortFn({}, {type: 'assignment_group'})).toBe(-1)
  })

  it('returns 1 if first arg is an assignment_group and second arg is not', () => {
    const sortFn = wrapColumnSortFn(jest.fn())
    expect(sortFn({type: 'assignment_group'}, {})).toBe(1)
  })

  it('returns difference in object.positions if both args are assignement_groups', () => {
    const sortFn = wrapColumnSortFn(jest.fn())
    const a = {type: 'assignment_group', object: {position: 10}}
    const b = {type: 'assignment_group', object: {position: 5}}

    expect(sortFn(a, b)).toBe(5)
  })

  it('calls wrapped function when either column is not total_grade nor assignment_group', () => {
    const wrappedFn = jest.fn()
    const sortFn = wrapColumnSortFn(wrappedFn)
    sortFn({}, {})
    expect(wrappedFn).toHaveBeenCalled()
  })

  it('calls wrapped function with arguments in given order when no direction is given', () => {
    const wrappedFn = jest.fn()
    const sortFn = wrapColumnSortFn(wrappedFn)
    const first = {field: 1}
    const second = {field: 2}
    const expectedArgs = [first, second]

    sortFn(first, second)

    expect(wrappedFn).toHaveBeenCalled()
    expect(wrappedFn.mock.calls[0]).toEqual(expectedArgs)
  })

  it('calls wrapped function with arguments in given order when direction is ascending', () => {
    const wrappedFn = jest.fn()
    const sortFn = wrapColumnSortFn(wrappedFn, 'ascending')
    const first = {field: 1}
    const second = {field: 2}
    const expectedArgs = [first, second]

    sortFn(first, second)

    expect(wrappedFn).toHaveBeenCalled()
    expect(wrappedFn.mock.calls[0]).toEqual(expectedArgs)
  })

  it('calls wrapped function with arguments in reverse order when direction is descending', () => {
    const wrappedFn = jest.fn()
    const sortFn = wrapColumnSortFn(wrappedFn, 'descending')
    const first = {field: 1}
    const second = {field: 2}
    const expectedArgs = [second, first]

    sortFn(first, second)

    expect(wrappedFn).toHaveBeenCalled()
    expect(wrappedFn.mock.calls[0]).toEqual(expectedArgs)
  })
})
