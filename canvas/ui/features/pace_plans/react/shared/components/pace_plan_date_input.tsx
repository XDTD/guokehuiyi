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

import React, {useState} from 'react'
import moment, {Moment, MomentInput} from 'moment-timezone'
import tz from '@canvas/timezone'

import {Flex} from '@instructure/ui-flex'
import {View} from '@instructure/ui-view'
import {Text} from '@instructure/ui-text'

import CanvasDateInput from '@canvas/datetime/react/components/DateInput'
import {BlackoutDate, InputInteraction} from '../types'
import {weekendIntegers} from '../api/backend_serializer'
// @ts-ignore: TS doesn't understand i18n scoped imports
import I18n from 'i18n!pace_plan_date_input'
import * as DateHelpers from '../../utils/date_stuff/date_helpers'

export type PacePlansDateInputProps = {
  dateValue?: string
  label: string | JSX.Element
  onDateChange: (rawDate: string) => void
  /**
   * Callback that takes a date and returns a truthy error message if it is invalid (or a falsy value if it is valid).
   */
  validateDay?: (date: Moment) => string | undefined
  interaction?: InputInteraction
  width?: string
  weekendsDisabled?: boolean
  /**
   * A list of blackout dates that may be provided. These dates will be disabled for selection (or will display an error
   * if selected).
   */
  blackoutDates?: BlackoutDate[]
  /**
   * The earliest date that may be selected (any earlier dates will be disabled).
   */
  startDate?: MomentInput
  /**
   * The latest date that may be selected (any later dates will be disabled).
   */
  endDate?: MomentInput
}

const formatDate = date => tz.format(date, 'date.formats.long')

/**
 * A wrapper around the `instructure-ui` `DateInput` component
 *
 * This wrapper does the following:
 *
 * - Renders the `DateInput` with the passed in props
 * - Handles date changes and ensures the user doesn't manually enter a disabled date
 */
const PacePlanDateInput = ({
  dateValue,
  label,
  onDateChange,
  validateDay,
  interaction = 'enabled',
  width = '14rem',
  weekendsDisabled = false,
  blackoutDates = [],
  startDate,
  endDate
}: PacePlansDateInputProps) => {
  const [customErrors, setCustomErrors] = useState<string[]>([])

  const calculateErrors = (date: Moment = moment(dateValue)): string[] => {
    const errors: string[] = []

    if (!date.isValid()) return [I18n.t('The date entered is invalid.')]

    if (weekendsDisabled && weekendIntegers.includes(date.weekday()))
      errors.push(I18n.t('The selected date is on a weekend. This pace plan skips weekends.'))
    if (DateHelpers.inBlackoutDate(date, blackoutDates))
      errors.push(I18n.t('The selected date is on a blackout day.'))
    if (startDate && date.isBefore(startDate))
      errors.push(I18n.t('The selected date is too early.'))
    if (endDate && date.isAfter(endDate)) errors.push(I18n.t('The selected date is too late.'))

    const parentValidationError = validateDay && validateDay(date)
    if (parentValidationError) errors.push(parentValidationError)

    return errors
  }

  const handleDateChange = (date: MomentInput) => {
    const parsedDate = moment(date).startOf('day')

    if (parsedDate.isValid()) {
      onDateChange(parsedDate.format('YYYY-MM-DD'))
      setCustomErrors([])
    } else {
      setCustomErrors([I18n.t('The date entered is invalid.')])
    }
  }

  if (interaction === 'readonly') {
    return (
      <div style={{display: 'inline-block', lineHeight: '1.125rem'}}>
        <View as="div" margin="0 0 small">
          <Text weight="bold">{label}</Text>
        </View>
        <Flex as="div" height="2.25rem" alignItems="center">
          {formatDate(dateValue)}
        </Flex>
      </div>
    )
  }

  return (
    <CanvasDateInput
      renderLabel={label}
      formatDate={formatDate}
      onSelectedDateChange={handleDateChange}
      selectedDate={dateValue}
      dateIsDisabled={d => !!calculateErrors(d).length}
      width={width}
      messages={(customErrors.length ? customErrors : calculateErrors()).map(e => ({
        type: 'error',
        text: e
      }))}
      interaction={interaction}
    />
  )
}

export default PacePlanDateInput
