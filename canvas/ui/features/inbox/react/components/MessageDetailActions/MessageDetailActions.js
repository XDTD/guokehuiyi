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

import {Button, IconButton} from '@instructure/ui-buttons'
import {IconMiniArrowDownLine, IconReplyLine, IconSettingsLine} from '@instructure/ui-icons'
import {Menu} from '@instructure/ui-menu'
import PropTypes from 'prop-types'
import React from 'react'
import {ScreenReaderContent} from '@instructure/ui-a11y-content'
import {Tooltip} from '@instructure/ui-tooltip'
import I18n from 'i18n!conversations_2'

export const MessageDetailActions = ({...props}) => {
  return (
    <>
      <Tooltip renderTip={I18n.t('Reply')} on={['hover', 'focus']}>
        <IconButton
          size="small"
          margin="0 x-small 0 0"
          screenReaderLabel={I18n.t('Reply')}
          onClick={() => props.handleOptionSelect('reply')}
        >
          <IconReplyLine />
        </IconButton>
      </Tooltip>
      <Menu
        placement="bottom"
        onSelect={(event, value) => {
          props.handleOptionSelect(value)
        }}
        trigger={
          <Tooltip renderTip={I18n.t('More options')} on={['hover', 'focus']}>
            <Button margin="0 x-small 0 0" size="small" renderIcon={IconSettingsLine}>
              <ScreenReaderContent>{I18n.t('More options')}</ScreenReaderContent>
              <IconMiniArrowDownLine />
            </Button>
          </Tooltip>
        }
      >
        <Menu.Item value="reply-all">{I18n.t('Reply All')}</Menu.Item>
        <Menu.Item value="forward">{I18n.t('Forward')}</Menu.Item>
        <Menu.Item value="delete">{I18n.t('Delete')}</Menu.Item>
      </Menu>
    </>
  )
}

MessageDetailActions.propTypes = {
  handleOptionSelect: PropTypes.func
}
