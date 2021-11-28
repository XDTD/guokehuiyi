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
import PropTypes from 'prop-types'
import React from 'react'
import {responsiveQuerySizes} from '../../utils'

import {AccessibleContent} from '@instructure/ui-a11y-content'
import {CondensedButton} from '@instructure/ui-buttons'
import {IconEditLine} from '@instructure/ui-icons'
import {Responsive} from '@instructure/ui-responsive'
import {Text} from '@instructure/ui-text'
import {View} from '@instructure/ui-view'

export function Reply({...props}) {
  let replyButtonText = I18n.t('Reply')
  if (props.isIsolatedView) replyButtonText = I18n.t('Quote')
  return (
    <Responsive
      match="media"
      query={responsiveQuerySizes({mobile: true, desktop: true})}
      props={{
        mobile: {
          textSize: 'small',
          itemSpacing: 'none small 0 none'
        },
        desktop: {
          textSize: undefined,
          itemSpacing: undefined
        }
      }}
      render={responsiveProps => (
        <CondensedButton
          onClick={props.onClick}
          withBackground={props.withBackground}
          color="primary"
          data-testid="threading-toolbar-reply"
          interaction={props.isReadOnly ? 'disabled' : 'enabled'}
          margin={responsiveProps.itemSpacing}
        >
          <AccessibleContent
            alt={I18n.t('Reply to post from %{author}', {author: props.authorName})}
          >
            <Text weight="bold" size={responsiveProps.textSize}>
              {props.hasDraftEntry && (
                <View margin="0 small 0 0">
                  <IconEditLine size="x-small" />
                </View>
              )}
              {replyButtonText}
            </Text>
          </AccessibleContent>
        </CondensedButton>
      )}
    />
  )
}

Reply.defaultProps = {
  withBackground: false,
  isIsolatedView: false
}

Reply.propTypes = {
  /**
   * Behavior when clicking the reply button
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Specifies if the Button should render with a solid background.
   * When false, the background is transparent.
   */
  withBackground: PropTypes.bool,
  /**
   * Key consumed by ThreadingToolbar's InlineList
   */
  delimiterKey: PropTypes.string.isRequired,
  /**
   * Name of author of the post being replied to
   */
  authorName: PropTypes.string.isRequired,
  /**
   * Disable/Enable for the button
   */
  isReadOnly: PropTypes.bool,
  /**
   * True if rendered in isolated view
   */
  isIsolatedView: PropTypes.bool,
  hasDraftEntry: PropTypes.bool
}
