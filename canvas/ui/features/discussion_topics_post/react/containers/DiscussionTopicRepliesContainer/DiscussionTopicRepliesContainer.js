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

import {AlertManagerContext} from '@canvas/alerts/react/AlertManager'
import {AUTO_MARK_AS_READ_DELAY, PER_PAGE, SearchContext} from '../../utils/constants'
import {Discussion} from '../../../graphql/Discussion'
import {DiscussionThreadContainer} from '../DiscussionThreadContainer/DiscussionThreadContainer'
import I18n from 'i18n!discussion_topics_post'
import {updateDiscussionTopicEntryCounts} from '../../utils/index'
import PropTypes from 'prop-types'
import React, {useContext, useEffect, useState} from 'react'
import {SearchResultsCount} from '../../components/SearchResultsCount/SearchResultsCount'
import {ThreadPagination} from '../../components/ThreadPagination/ThreadPagination'
import {UPDATE_DISCUSSION_ENTRIES_READ_STATE} from '../../../graphql/Mutations'
import {useMutation} from 'react-apollo'
import {View} from '@instructure/ui-view'

export const DiscussionTopicRepliesContainer = props => {
  const {setOnFailure, setOnSuccess} = useContext(AlertManagerContext)
  const {filter, searchTerm, setPageNumber} = useContext(SearchContext)

  const [discussionEntriesToUpdate, setDiscussionEntriesToUpdate] = useState(new Set())

  const updateCache = (cache, result) => {
    updateDiscussionTopicEntryCounts(cache, props.discussionTopic.id, {
      unreadCountChange: -result.data.updateDiscussionEntriesReadState.discussionEntries.length
    })
  }

  const [updateDiscussionEntriesReadState] = useMutation(UPDATE_DISCUSSION_ENTRIES_READ_STATE, {
    update: updateCache,
    onCompleted: () => {
      setOnSuccess(I18n.t('The replies were successfully updated'))
    },
    onError: () => {
      setOnFailure(I18n.t('There was an unexpected error while updating the replies'))
    }
  })

  useEffect(() => {
    if (discussionEntriesToUpdate.size > 0 && filter !== 'drafts') {
      const interval = setInterval(() => {
        let entryIds = Array.from(discussionEntriesToUpdate)
        const entries = props.discussionTopic.discussionEntriesConnection.nodes.filter(
          entry => entryIds.includes(entry._id) && entry.entryParticipant?.read === false
        )
        entryIds = entries.map(entry => entry._id)
        entries.forEach(entry => (entry.entryParticipant.read = true))
        setDiscussionEntriesToUpdate(new Set())
        updateDiscussionEntriesReadState({
          variables: {
            discussionEntryIds: entryIds,
            read: true
          },
          optimisticResponse: {
            updateDiscussionEntriesReadState: {
              discussionEntries: entries,
              __typename: 'UpdateDiscussionEntriesReadStatePayload'
            }
          }
        })
      }, AUTO_MARK_AS_READ_DELAY)

      return () => clearInterval(interval)
    }
  }, [
    discussionEntriesToUpdate,
    props.discussionTopic.discussionEntriesConnection.nodes,
    updateDiscussionEntriesReadState,
    filter
  ])

  const markAsRead = entryId => {
    if (!discussionEntriesToUpdate.has(entryId)) {
      const entries = Array.from(discussionEntriesToUpdate)
      setDiscussionEntriesToUpdate(new Set([...entries, entryId]))
    }
  }

  const setPage = pageNum => {
    setPageNumber(pageNum)
  }

  return (
    <View as="div">
      {searchTerm && <SearchResultsCount resultsFound={props.discussionTopic.searchEntryCount} />}
      {props.discussionTopic.discussionEntriesConnection.nodes.map(thread => {
        return (
          <DiscussionThreadContainer
            key={`discussion-thread-${thread.id}`}
            discussionEntry={thread}
            discussionTopic={props.discussionTopic}
            markAsRead={markAsRead}
            onOpenIsolatedView={props.onOpenIsolatedView}
            goToTopic={props.goToTopic}
            highlightEntryId={props.highlightEntryId}
            removeDraftFromDiscussionCache={props.removeDraftFromDiscussionCache}
            updateDraftCache={props.updateDraftCache}
          />
        )
      })}
      {props.discussionTopic.entriesTotalPages > 1 && (
        <ThreadPagination
          setPage={setPage}
          selectedPage={Math.ceil(
            atob(props.discussionTopic.discussionEntriesConnection.pageInfo.startCursor) / PER_PAGE
          )}
          totalPages={props.discussionTopic.entriesTotalPages}
        />
      )}
    </View>
  )
}

DiscussionTopicRepliesContainer.propTypes = {
  discussionTopic: Discussion.shape,
  onOpenIsolatedView: PropTypes.func,
  goToTopic: PropTypes.func,
  highlightEntryId: PropTypes.string,
  removeDraftFromDiscussionCache: PropTypes.func,
  updateDraftCache: PropTypes.func
}

export default DiscussionTopicRepliesContainer
