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

import React from 'react'
import moment from 'moment-timezone'
import {IconButton} from '@instructure/ui-buttons'
import {IconTrashLine} from '@instructure/ui-icons'
import {ScreenReaderContent} from '@instructure/ui-a11y-content'
import {Table} from '@instructure/ui-table'

import {BlackoutDate} from '../types'

// Doing this to avoid TS2339 errors-- remove once we're on InstUI 8
const {Body, Cell, ColHeader, Head, Row} = Table as any

/* React Components */

interface PassedProps {
  readonly blackoutDates: BlackoutDate[]
  readonly deleteBlackoutDate: (blackoutDate: BlackoutDate) => any
  readonly displayType: 'admin' | 'course'
}

type ComponentProps = PassedProps

interface LocalState {}

export class BlackoutDatesTable extends React.Component<ComponentProps, LocalState> {
  /* Lifecycle */

  constructor(props: ComponentProps) {
    super(props)
    this.state = {}
  }

  /* Helpers */

  sortBlackoutDates = (dates: BlackoutDate[]): BlackoutDate[] => {
    return dates.sort((a, b) => {
      const aStart = moment(a.start_date)
      const bStart = moment(b.start_date)
      const diff = aStart.diff(bStart, 'days')
      if (diff > 0) {
        return 1
      } else if (diff < 0) {
        return -1
      } else {
        return 0
      }
    })
  }

  sortedBlackoutDates = (): BlackoutDate[] => {
    if (this.props.displayType === 'course') {
      const adminDates = this.props.blackoutDates.filter(blackoutDate => blackoutDate.admin_level)
      const courseDates = this.props.blackoutDates.filter(blackoutDate => !blackoutDate.admin_level)
      return this.sortBlackoutDates(adminDates).concat(this.sortBlackoutDates(courseDates))
    } else {
      return this.sortBlackoutDates(this.props.blackoutDates)
    }
  }

  /* Renderers */

  // @ts-ignore
  renderRows = () =>
    this.sortedBlackoutDates().map(bd => (
      <Row key={`blackout-date-${bd.id}`}>
        <Cell>{bd.event_title}</Cell>
        <Cell>{bd.start_date.format('L')}</Cell>
        <Cell>{bd.end_date.format('L')}</Cell>
        <Cell textAlign="end">{this.renderTrash(bd)}</Cell>
      </Row>
    ))

  renderTrash = (blackoutDate: BlackoutDate) => {
    if (this.props.displayType === 'course' && blackoutDate.admin_level) {
      return null
    } else {
      return (
        <IconButton
          onClick={() => this.props.deleteBlackoutDate(blackoutDate)}
          screenReaderLabel={`Delete blackout date ${blackoutDate.event_title}`}
        >
          <IconTrashLine />
        </IconButton>
      )
    }
  }

  render() {
    return (
      <Table caption="Blackout Dates">
        <Head>
          <Row>
            <ColHeader id="blackout-dates-title">Event Title</ColHeader>
            <ColHeader id="blackout-dates-start-date">Start Date</ColHeader>
            <ColHeader id="blackout-dates-end-date">End Date</ColHeader>
            <ColHeader id="blackout-dates-actions" width="4rem">
              <ScreenReaderContent>Actions</ScreenReaderContent>
            </ColHeader>
          </Row>
        </Head>
        <Body>{this.renderRows()}</Body>
      </Table>
    )
  }
}

export default BlackoutDatesTable
