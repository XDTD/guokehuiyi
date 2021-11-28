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
import React, {useRef, useState, useEffect} from 'react'
import {Flex} from '@instructure/ui-flex'
import {Button} from '@instructure/ui-buttons'
import {Checkbox} from '@instructure/ui-checkbox'
import {IconCheckMarkLine} from '@instructure/ui-icons'
import {Responsive} from '@instructure/ui-responsive'
import {Text} from '@instructure/ui-text'
import {responsiveQuerySizes} from '../../utils'
import {View} from '@instructure/ui-view'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import CanvasRce from '@canvas/rce/react/CanvasRce'
import {name as mentionsPluginName} from '@canvas/rce/plugins/canvas_mentions/plugin'
import {ReplyPreview} from '../ReplyPreview/ReplyPreview'
import {Spinner} from '@instructure/ui-spinner'

export const DiscussionEdit = props => {
  const rceRef = useRef()
  const [rceContent, setRceContent] = useState(false)
  const [includeReplyPreview, setIncludeReplyPreview] = useState(
    !!props.quotedEntry?.previewMessage
  )
  const textAreaId = useRef(`message-body-${nanoid()}`)
  const [draftTimeout, setDraftTimeout] = useState(null)
  const [awaitingChanges, setAwaitingChanges] = useState(false)

  const rceMentionsIsEnabled = () => {
    return !!ENV.rce_mentions_in_discussions
  }

  const getPlugins = () => {
    const plugins = []

    // Non-Editable
    plugins.push('noneditable')

    // Mentions
    if (rceMentionsIsEnabled()) {
      plugins.push(mentionsPluginName)
    }

    return plugins
  }

  useEffect(() => {
    setRceContent(props.value)
  }, [props.value, setRceContent])

  const handleDraftResponse = nextDraft => {
    if (!ENV.draft_discussions) return
    if (!nextDraft) return

    setAwaitingChanges(true)
    if (draftTimeout) {
      clearTimeout(draftTimeout)
      setDraftTimeout(
        setTimeout(() => {
          setAwaitingChanges(false)
          props.onSetDraftSaved(false)
          props.updateDraft(nextDraft)
        }, 1000)
      )
    } else {
      setDraftTimeout(
        setTimeout(() => {
          setAwaitingChanges(false)
          props.onSetDraftSaved(false)
          props.updateDraft(nextDraft)
        }, 1000)
      )
    }
  }

  return (
    <div
      style={{
        width: '100%',
        // props.show allows you to load an RCE without displaying it which can aleviate load times
        display: props.show ? '' : 'none'
      }}
      data-testid="DiscussionEdit-container"
    >
      {props.quotedEntry?.previewMessage && (
        <>
          <View as="div" margin="0 0 small 0">
            <Checkbox
              label={I18n.t('Include quoted reply in message')}
              variant="toggle"
              value="medium"
              checked={includeReplyPreview}
              onChange={() => {
                setIncludeReplyPreview(!includeReplyPreview)
              }}
            />
          </View>
          <ReplyPreview {...props.quotedEntry} />
        </>
      )}
      <View display="block">
        <span>
          <CanvasRce
            textareaId={textAreaId.current}
            onFocus={() => {}}
            onBlur={() => {}}
            onInit={() => {
              setTimeout(() => {
                rceRef?.current?.focus()
              }, 1000)
            }}
            ref={rceRef}
            onContentChange={content => {
              setRceContent(content)
              handleDraftResponse(content)
            }}
            editorOptions={{
              focus: true,
              plugins: getPlugins()
            }}
            height={300}
            defaultContent={props.value}
            mirroredAttrs={{'data-testid': 'message-body'}}
          />
        </span>
        <Responsive
          match="media"
          query={responsiveQuerySizes({mobile: true, desktop: true})}
          props={{
            mobile: {
              direction: 'column',
              display: 'block',
              marginCancel: 'xx-small',
              marginReply: 'xx-small',
              viewAs: 'div'
            },
            desktop: {
              direction: 'row',
              display: 'inline-block',
              marginCancel: '0 0 0 0',
              marginReply: '0 0 0 small',
              viewAs: 'span'
            }
          }}
          render={(responsiveProps, matches) => {
            const rceButtons = [
              <View
                as={responsiveProps.viewAs}
                padding={responsiveProps.marginCancel}
                key="cancelButton"
              >
                <Button
                  onClick={() => {
                    if (props.onCancel) {
                      props.onCancel()
                    }
                  }}
                  display={responsiveProps.display}
                  color="secondary"
                  data-testid="DiscussionEdit-cancel"
                  key="rce-cancel-button"
                >
                  <Text size="medium">{I18n.t('Cancel')}</Text>
                </Button>
              </View>,
              <View
                as={responsiveProps.viewAs}
                padding={responsiveProps.marginReply}
                key="replyButton"
              >
                <Button
                  onClick={() => {
                    if (props.onSubmit) {
                      props.onSubmit(rceContent, includeReplyPreview)
                    }
                  }}
                  display={responsiveProps.display}
                  color="primary"
                  data-testid="DiscussionEdit-submit"
                  key="rce-reply-button"
                >
                  <Text size="medium">{props.isEdit ? I18n.t('Save') : I18n.t('Reply')}</Text>
                </Button>
              </View>
            ]
            return matches.includes('mobile') ? (
              <View as="div" padding={undefined} key="mobileButtons">
                {rceButtons.reverse()}
              </View>
            ) : (
              <Flex key="nonMobileButtons">
                {ENV.draft_discussions && (
                  <Flex.Item shouldGrow textAlign="start">
                    {props.draftSaved ? (
                      !awaitingChanges && (
                        <span>
                          <Text size="small">{I18n.t('Saved')}</Text>
                          <View as="span" margin="0 0 0 small">
                            <IconCheckMarkLine color="success" />
                          </View>
                        </span>
                      )
                    ) : (
                      <span>
                        <Text size="small">{I18n.t('Saving')}</Text>
                        <Spinner
                          renderTitle="Saving draft in progress"
                          margin="0 0 0 small"
                          size="x-small"
                        />
                      </span>
                    )}
                  </Flex.Item>
                )}
                <Flex.Item shouldGrow textAlign="end">
                  {rceButtons}
                </Flex.Item>
              </Flex>
            )
          }}
        />
      </View>
    </div>
  )
}

DiscussionEdit.propTypes = {
  show: PropTypes.bool,
  draftSaved: PropTypes.bool,
  value: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSetDraftSaved: PropTypes.func,
  isEdit: PropTypes.bool,
  quotedEntry: PropTypes.object,
  updateDraft: PropTypes.func
}

DiscussionEdit.defaultProps = {
  show: true,
  isEdit: false,
  quotedEntry: null,
  value: '',
  updateDraft: () => {}
}

export default DiscussionEdit
