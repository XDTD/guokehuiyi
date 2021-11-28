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

import I18n from 'i18n!discussion_posts'

import DateHelper from '@canvas/datetime/dateHelper'
import React from 'react'
import {responsiveQuerySizes} from '../../utils/index'

import PropTypes from 'prop-types'
import {Text} from '@instructure/ui-text'
import {CondensedButton} from '@instructure/ui-buttons'
import {Responsive} from '@instructure/ui-responsive'

export function AssignmentDueDate({...props}) {
  let assignmentDueDate = null
  if (props.dueDate) {
    assignmentDueDate = I18n.t('Due %{date}', {
      date: DateHelper.formatDatetimeForDiscussions(props.dueDate)
    })
  } else {
    assignmentDueDate = I18n.t('No Due Date')
  }

  return (
    <Responsive
      match="media"
      query={responsiveQuerySizes({tablet: true, desktop: true})}
      props={{
        tablet: {
          textSize: 'x-small'
        },
        desktop: {
          textSize: 'small'
        }
      }}
      render={(responsiveProps, matches) => {
        if (matches.includes('tablet') && props.dueDate) {
          return (
            <CondensedButton
              data-testid="mobile-due-date-tray-expansion"
              onClick={() => {
                props.onSetDueDateTrayOpen(true)
              }}
            >
              <Text weight="normal" size={responsiveProps.textSize}>
                {I18n.t('Due %{date}', {
                  date: DateHelper.formatDateForDisplay(props.dueDate, 'short')
                })}
              </Text>
            </CondensedButton>
          )
        }

        return assignmentDueDate ? (
          <Text weight="normal" size={responsiveProps.textSize}>
            {assignmentDueDate}
          </Text>
        ) : null
      }}
    />
  )
}

AssignmentDueDate.propsTypes = {
  dueDate: PropTypes.string,
  onSetDueDateTrayOpen: PropTypes.func
}
