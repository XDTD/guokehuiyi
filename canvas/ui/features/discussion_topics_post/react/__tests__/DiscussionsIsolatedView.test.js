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
import {
  createDiscussionEntryMock,
  getDiscussionQueryMock,
  getDiscussionSubentriesQueryMock,
  updateDiscussionEntryMock
} from '../../graphql/Mocks'
import DiscussionTopicManager from '../DiscussionTopicManager'
import {fireEvent, render, waitFor} from '@testing-library/react'
import {MockedProvider} from '@apollo/react-testing'
import React from 'react'

jest.mock('@canvas/rce/RichContentEditor')
jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  responsiveQuerySizes: () => ({desktop: {maxWidth: '1024px'}})
}))
jest.mock('../utils/constants', () => ({
  ...jest.requireActual('../utils/constants'),
  SEARCH_TERM_DEBOUNCE_DELAY: 0
}))

describe('DiscussionsIsolatedView', () => {
  const setOnFailure = jest.fn()
  const setOnSuccess = jest.fn()

  beforeAll(() => {
    window.ENV = {
      discussion_topic_id: '1',
      course_id: '1',
      isolated_view: true,
      current_user: {
        id: '2',
        avatar_image_url:
          'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
        display_name: 'Hank Mccoy'
      }
    }

    window.matchMedia = jest.fn().mockImplementation(() => {
      return {
        matches: true,
        media: '',
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn()
      }
    })
  })

  afterEach(() => {
    setOnFailure.mockClear()
    setOnSuccess.mockClear()
  })

  const setup = mocks => {
    return render(
      <MockedProvider mocks={mocks}>
        <AlertManagerContext.Provider value={{setOnFailure, setOnSuccess}}>
          <DiscussionTopicManager discussionTopicId="1" />
        </AlertManagerContext.Provider>
      </MockedProvider>
    )
  }

  it('should be able to post a reply to an entry', async () => {
    const mocks = [
      ...getDiscussionQueryMock(),
      ...getDiscussionSubentriesQueryMock({
        includeRelativeEntry: false,
        last: 5
      }),
      ...getDiscussionSubentriesQueryMock({
        beforeRelativeEntry: false,
        first: 0,
        includeRelativeEntry: false
      }),
      ...createDiscussionEntryMock({
        includeReplyPreview: false,
        replyFromEntryId: '1'
      })
    ]
    const {findByText, findByTestId, queryByTestId} = setup(mocks)

    const replyButton = await findByTestId('threading-toolbar-reply')
    fireEvent.click(replyButton)

    expect(await findByText('Thread')).toBeTruthy()

    const doReplyButton = await findByTestId('DiscussionEdit-submit')
    fireEvent.click(doReplyButton)

    await waitFor(() => expect(queryByTestId('DiscussionEdit-container')).not.toBeInTheDocument())

    await waitFor(() =>
      expect(setOnSuccess).toHaveBeenCalledWith('The discussion entry was successfully created.')
    )
  })

  it('should be able to edit a root entry', async () => {
    const mocks = [
      ...getDiscussionQueryMock(),
      ...getDiscussionSubentriesQueryMock({
        includeRelativeEntry: false,
        last: 5
      }),
      ...getDiscussionSubentriesQueryMock({
        beforeRelativeEntry: false,
        first: 0,
        includeRelativeEntry: false
      }),
      ...updateDiscussionEntryMock()
    ]
    const {findByText, findByTestId, findAllByTestId} = setup(mocks)

    const expandButton = await findByTestId('expand-button')
    fireEvent.click(expandButton)

    const actionsButtons = await findAllByTestId('thread-actions-menu')
    fireEvent.click(actionsButtons[0]) // Root Entry kebab

    const editButton = await findByText('Edit')
    fireEvent.click(editButton)

    const saveButton = await findByText('Save')
    fireEvent.click(saveButton)

    await waitFor(() =>
      expect(setOnSuccess).toHaveBeenCalledWith('The reply was successfully updated.')
    )
  })

  it('should not render go to reply button with single character search term', async () => {
    const mocks = [
      ...getDiscussionQueryMock(),
      ...getDiscussionQueryMock({searchTerm: 'a', rootEntries: false})
    ]
    const container = setup(mocks)
    await waitFor(() => expect(container.queryByTestId('isolated-view-container')).toBeNull())
    fireEvent.change(await container.findByTestId('search-filter'), {
      target: {value: 'a'}
    })

    await waitFor(() => expect(container.queryByTestId('go-to-reply')).toBeNull())
  })

  it('should open isolated view when go to reply button is clicked', async () => {
    const mocks = [
      ...getDiscussionQueryMock(),
      ...getDiscussionQueryMock({searchTerm: 'parent', rootEntries: false}),
      ...getDiscussionSubentriesQueryMock({
        includeRelativeEntry: false,
        last: 5
      }),
      ...getDiscussionSubentriesQueryMock({
        beforeRelativeEntry: false,
        first: 0,
        includeRelativeEntry: false
      })
    ]
    const container = setup(mocks)
    await waitFor(() => expect(container.queryByTestId('isolated-view-container')).toBeNull())
    fireEvent.change(await container.findByTestId('search-filter'), {
      target: {value: 'parent'}
    })
    const goToReply = await container.findByTestId('go-to-reply')
    fireEvent.click(goToReply)

    expect(await container.findByTestId('isolated-view-container')).toBeInTheDocument()
  })

  it('should show reply button in isolated view when search term is present', async () => {
    const mocks = [
      ...getDiscussionQueryMock(),
      ...getDiscussionQueryMock({searchTerm: 'parent', rootEntries: false})
    ]
    const container = setup(mocks)
    fireEvent.change(await container.findByTestId('search-filter'), {
      target: {value: 'parent'}
    })
    const goToReply = await container.findByTestId('go-to-reply')
    fireEvent.click(goToReply)
    await waitFor(() => expect(container.queryByTestId('threading-toolbar-reply')).toBeNull())
  })

  it('should clear input when button is pressed', async () => {
    const mocks = [
      ...getDiscussionQueryMock(),
      ...getDiscussionQueryMock({searchTerm: 'A new Search', rootEntries: false}),
      ...getDiscussionQueryMock()
    ]
    const container = setup(mocks)
    let searchInput = container.findByTestId('search-filter')

    fireEvent.change(await container.findByTestId('search-filter'), {
      target: {value: 'A new Search'}
    })
    let clearSearchButton = container.queryByTestId('clear-search-button')
    searchInput = container.getByLabelText('Search entries or author')
    expect(searchInput.value).toBe('A new Search')
    expect(clearSearchButton).toBeInTheDocument()

    fireEvent.click(clearSearchButton)
    clearSearchButton = container.queryByTestId('clear-search-button')
    searchInput = container.getByLabelText('Search entries or author')
    expect(searchInput.value).toBe('')
    expect(clearSearchButton).toBeNull()
  })
})
