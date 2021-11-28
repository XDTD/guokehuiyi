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

import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'

import {
  createPlannerApp,
  createPlannerPreview,
  renderWeeklyPlannerHeader,
  JumpToHeaderButton,
  preloadInitialItems,
  reloadPlannerForObserver
} from '@instructure/canvas-planner'
import {ApplyTheme} from '@instructure/ui-themeable'

import EmptyDashboardState from '@canvas/k5/react/EmptyDashboardState'
import {plannerTheme} from '@canvas/k5/react/k5-theme'

const SchedulePage = ({
  plannerEnabled,
  plannerInitialized,
  timeZone,
  userHasEnrollments,
  visible,
  singleCourse,
  observedUserId,
  contextCodes
}) => {
  const [isPlannerCreated, setPlannerCreated] = useState(false)
  const [hasPreloadedItems, setHasPreloadedItems] = useState(false)
  const plannerApp = useRef()

  useEffect(() => {
    if (plannerInitialized) {
      plannerApp.current = createPlannerApp()
      setPlannerCreated(true)
    }
  }, [plannerInitialized])

  const plannerReady = isPlannerCreated && userHasEnrollments && visible

  // Only preload the previous and next weeks' items once the schedule tab is active
  // The present week's items are loaded regardless of tab state
  useEffect(() => {
    if (plannerReady && !hasPreloadedItems && !observedUserId) {
      preloadInitialItems()
      setHasPreloadedItems(true)
    }
  }, [plannerReady, hasPreloadedItems, observedUserId])

  useEffect(() => {
    if (plannerReady) {
      reloadPlannerForObserver(observedUserId, contextCodes)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    plannerReady,
    observedUserId,
    // contextCodes is included in the dependency array in its stringified form
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(contextCodes)
  ])

  let content = <></>
  if (plannerInitialized && isPlannerCreated) {
    content = (
      <>
        {renderWeeklyPlannerHeader({visible})}
        {plannerApp.current}
        <JumpToHeaderButton />
      </>
    )
  } else if (!userHasEnrollments) {
    content = <EmptyDashboardState />
  } else if (!plannerEnabled) {
    content = createPlannerPreview(timeZone, singleCourse)
  }

  return (
    <ApplyTheme theme={plannerTheme}>
      <section
        id="dashboard_page_schedule"
        style={{
          display: visible ? 'flex' : 'none',
          flexDirection: 'column'
        }}
        aria-hidden={!visible}
      >
        {content}
      </section>
    </ApplyTheme>
  )
}

SchedulePage.propTypes = {
  plannerEnabled: PropTypes.bool.isRequired,
  plannerInitialized: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  timeZone: PropTypes.string.isRequired,
  userHasEnrollments: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  singleCourse: PropTypes.bool.isRequired,
  observedUserId: PropTypes.string,
  contextCodes: PropTypes.arrayOf(PropTypes.string)
}

export default SchedulePage
