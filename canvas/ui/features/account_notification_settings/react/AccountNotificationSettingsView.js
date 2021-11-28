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

import {
  NotificationPreferencesContext,
  NotificationPreferencesContextProvider
} from '@canvas/notification-preferences/react/NotificationPreferencesContextProvider'
import AccountNotificationSettingsQuery from './AccountNotificationSettingsQuery'
import CourseNotificationSettingsQuery from '../../course_notification_settings/react/CourseNotificationSettingsQuery'
import React from 'react'
import AlertManager from '@canvas/alerts/react/AlertManager'
import {bool, string} from 'prop-types'

export default function AccountNotificationSettingsView({
  courseSelectorEnabled,
  accountId,
  userId
}) {
  return (
    <AlertManager>
      {courseSelectorEnabled ? (
        <NotificationPreferencesContextProvider>
          <NotificationPreferencesContext.Consumer>
            {({currentContext}) =>
              currentContext === 'account' ? (
                <AccountNotificationSettingsQuery accountId={accountId} userId={userId} />
              ) : (
                <CourseNotificationSettingsQuery courseId={currentContext} userId={userId} />
              )
            }
          </NotificationPreferencesContext.Consumer>
        </NotificationPreferencesContextProvider>
      ) : (
        <AccountNotificationSettingsQuery accountId={accountId} userId={userId} />
      )}
    </AlertManager>
  )
}

AccountNotificationSettingsView.propTypes = {
  courseSelectorEnabled: bool,
  accountId: string.isRequired,
  userId: string.isRequired
}
