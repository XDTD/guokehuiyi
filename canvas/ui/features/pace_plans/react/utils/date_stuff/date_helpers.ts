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

import moment from 'moment-timezone'

import {BlackoutDate} from '../../shared/types'
import {
  weekendIntegers,
  sundayWeekdayInteger,
  saturdayWeekdayInteger
} from '../../shared/api/backend_serializer'

/*
 * Any date manipulation should be consolidated into helper functions in this file
 */

// Takes a date and shifts it to the next weekday if it lands on a weekend
export const adjustDateOnSkipWeekends = (rawDate: string): string => {
  const date = moment(rawDate)
  switch (date.weekday()) {
    case sundayWeekdayInteger:
      date.add(1, 'day')
      break
    case saturdayWeekdayInteger:
      date.subtract(1, 'day')
      break
  }
  return formatDate(date)
}

// Takes a date string and formats it in YYYY-MM-DD format
export const formatDate = (date: string | moment.Moment): string => {
  return moment(date).format('YYYY-MM-DD')
}

// Calculates the days between the start and end dates.
// Skips weekends if excludeWeekends is true, and includes
// the end date if inclusiveEnd is true.
export const daysBetween = (
  start: string | moment.Moment,
  end: string | moment.Moment,
  excludeWeekends: boolean,
  blackoutDates: BlackoutDate[] = [],
  inclusiveEnd = true
): number => {
  const startDate = moment(start).startOf('day')
  const endDate = moment(end).startOf('day')

  if (inclusiveEnd) {
    endDate.endOf('day').add(1, 'day')
  }

  const fullDiff = endDate.diff(startDate, 'days')

  if (fullDiff === 0) {
    return fullDiff
  }

  const smallerDate = fullDiff > 0 ? startDate : endDate
  const sign: 'plus' | 'minus' = fullDiff > 0 ? 'plus' : 'minus'

  const countingDate = smallerDate.clone()
  let count = 0

  for (let i = 0; i < Math.abs(fullDiff); i++) {
    if (!dayIsDisabled(countingDate, excludeWeekends, blackoutDates)) {
      count = sign === 'plus' ? count + 1 : count - 1
    }
    countingDate.add(1, 'day')
  }

  return count
}

// Modifies a starting date string by numberOfDays. Doesn't include the start in that calculation.
// e.g., 2018-01-01 + 2 would equal 2018-01-03. (So make sure to subtract a day from start if you want
// the starting day included.) Skips blackout days if they are provided.
export const addDays = (
  start: string | moment.Moment,
  numberOfDays: number,
  excludeWeekends: boolean,
  blackoutDates: BlackoutDate[] = []
): string => {
  const date = moment(start)

  while (numberOfDays > 0) {
    date.add(1, 'days')

    if (!dayIsDisabled(date, excludeWeekends, blackoutDates)) {
      numberOfDays--
    }
  }

  return formatDate(date.startOf('day'))
}

export const stripTimezone = (date: string): string => {
  return date.split('T')[0]
}

export const inBlackoutDate = (
  date: moment.Moment | string,
  blackoutDates: BlackoutDate[]
): boolean => {
  date = moment(date)

  return blackoutDates.some(blackoutDate => {
    const blackoutStart = blackoutDate.start_date
    const blackoutEnd = blackoutDate.end_date
    return date >= blackoutStart && date <= blackoutEnd
  })
}

/* Non exported helper functions */

const dayIsDisabled = (
  date: moment.Moment,
  excludeWeekends: boolean,
  blackoutDates: BlackoutDate[]
) => {
  return (
    (excludeWeekends && weekendIntegers.includes(date.weekday())) ||
    inBlackoutDate(date, blackoutDates)
  )
}
