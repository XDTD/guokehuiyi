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

import {bool, number, shape, string} from 'prop-types'
import {DiscussionEntryPermissions} from './DiscussionEntryPermissions'
import gql from 'graphql-tag'
import {Attachment} from './Attachment'
import {PageInfo} from './PageInfo'
import {User} from './User'

export const DiscussionEntry = {
  fragment: gql`
    fragment DiscussionEntry on DiscussionEntry {
      id
      _id
      createdAt
      updatedAt
      deleted
      message
      ratingCount
      ratingSum
      subentriesCount
      attachment {
        ...Attachment
      }
      entryParticipant {
        rating
        read
        forcedReadState
      }
      rootEntryParticipantCounts {
        unreadCount
        repliesCount
      }
      lastReply {
        createdAt
      }
      permissions {
        ...DiscussionEntryPermissions
      }
      rootEntryId
      isolatedEntryId
      parentId
      quotedEntry {
        createdAt
        previewMessage
        author {
          shortName
        }
        editor {
          shortName
        }
        deleted
      }
    }
    ${Attachment.fragment}
    ${DiscussionEntryPermissions.fragment}
  `,

  shape: shape({
    id: string,
    _id: string,
    createdAt: string,
    updatedAt: string,
    deleted: bool,
    message: string,
    ratingCount: number,
    ratingSum: number,
    subentriesCount: number,
    attachment: Attachment.shape,
    author: User.shape,
    editor: User.shape,
    entryParticipant: shape({
      rating: bool,
      read: bool,
      forcedReadState: bool
    }),
    rootEntryParticipantCounts: shape({
      unreadCount: number,
      repliesCount: number
    }),
    lastReply: shape({
      createdAt: string
    }),
    permissions: DiscussionEntryPermissions.shape,
    rootEntryId: string,
    isolatedEntryId: string,
    parentId: string,
    quotedEntry: shape({
      createdAt: string,
      previewMessage: string,
      author: shape({
        shortName: string
      }),
      editor: shape({
        shortName: string
      }),
      deleted: bool
    })
  }),

  mock: ({
    id = 'RGlzY3Vzc2lvbkVudHJ5LTE=',
    _id = '1',
    createdAt = '2021-02-08T13:35:56-07:00',
    updatedAt = '2021-04-13T10:00:20-06:00',
    deleted = false,
    message = '<p>This is the parent reply</p>',
    ratingCount = null,
    ratingSum = null,
    subentriesCount = 2,
    attachment = Attachment.mock(),
    author = User.mock(),
    editor = User.mock(),
    entryParticipant = {
      rating: false,
      read: true,
      forcedReadState: false,
      __typename: 'EntryParticipant'
    },
    rootEntryParticipantCounts = {
      unreadCount: 0,
      repliesCount: 1,
      __typename: 'DiscussionEntryCounts'
    },
    lastReply = {
      createdAt: '2021-04-05T13:41:42-06:00',
      __typename: 'DiscussionEntry'
    },
    permissions = DiscussionEntryPermissions.mock(),
    discussionSubentriesConnection = {
      nodes: [],
      pageInfo: PageInfo.mock(),
      __typename: 'DiscussionSubentriesConnection'
    },
    rootEntryId = null,
    isolatedEntryId = null,
    parentId = null,
    quotedEntry = null
  } = {}) => ({
    id,
    _id,
    createdAt,
    updatedAt,
    deleted,
    message,
    ratingCount,
    ratingSum,
    subentriesCount,
    attachment,
    author,
    editor,
    entryParticipant,
    rootEntryParticipantCounts,
    lastReply,
    permissions,
    discussionSubentriesConnection,
    rootEntryId,
    isolatedEntryId,
    parentId,
    quotedEntry,
    __typename: 'DiscussionEntry'
  })
}
