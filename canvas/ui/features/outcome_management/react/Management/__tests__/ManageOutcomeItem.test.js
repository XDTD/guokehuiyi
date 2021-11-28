/*
 * Copyright (C) 2020 - present Instructure, Inc.
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
import {render as rtlRender, fireEvent} from '@testing-library/react'

import ManageOutcomeItem from '../ManageOutcomeItem'
import OutcomesContext from '@canvas/outcomes/react/contexts/OutcomesContext'
import {MockedProvider} from '@apollo/react-testing'

const render = (
  children,
  {
    canManage = true,
    isAdmin = true,
    contextId = '2',
    contextType = 'Account',
    friendlyDescriptionFF = true,
    renderer = rtlRender
  } = {}
) => {
  return renderer(
    <OutcomesContext.Provider
      value={{
        env: {
          canManage,
          isAdmin,
          contextId,
          contextType,
          friendlyDescriptionFF
        }
      }}
    >
      <MockedProvider mocks={[]}>{children}</MockedProvider>
    </OutcomesContext.Provider>
  )
}

describe('ManageOutcomeItem', () => {
  let onMenuHandlerMock
  let onCheckboxHandlerMock
  const defaultProps = (props = {}) => ({
    linkId: '2',
    title: 'Outcome Title',
    description: 'Outcome Description',
    outcomeContextType: 'Account',
    outcomeContextId: '1',
    isChecked: false,
    canManageOutcome: true,
    canUnlink: true,
    onMenuHandler: onMenuHandlerMock,
    onCheckboxHandler: onCheckboxHandlerMock,
    ...props
  })

  beforeEach(() => {
    onMenuHandlerMock = jest.fn()
    onCheckboxHandlerMock = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders title if title prop passed', () => {
    const {getByText} = render(<ManageOutcomeItem {...defaultProps()} />)
    expect(getByText('Outcome Title')).toBeInTheDocument()
  })

  it('does not render component if title prop not passed', () => {
    const {queryByTestId} = render(<ManageOutcomeItem {...defaultProps({title: ''})} />)
    expect(queryByTestId('outcome-management-item')).not.toBeInTheDocument()
  })

  it('handles click on checkbox', () => {
    const {getByText} = render(<ManageOutcomeItem {...defaultProps()} />)
    fireEvent.click(getByText('Select outcome Outcome Title'))
    expect(onCheckboxHandlerMock).toHaveBeenCalledTimes(1)
  })

  it('passes selected outcome obj to checkbox onClick handler', () => {
    const {getByText} = render(<ManageOutcomeItem {...defaultProps()} />)
    fireEvent.click(getByText('Select outcome Outcome Title'))
    expect(onCheckboxHandlerMock).toHaveBeenCalledWith({linkId: '2'})
  })

  it('displays right pointing caret when description is truncated', () => {
    const {queryByTestId} = render(<ManageOutcomeItem {...defaultProps()} />)
    expect(queryByTestId('icon-arrow-right')).toBeInTheDocument()
  })

  it('displays down pointing caret when description is expanded', () => {
    const {queryByTestId, getByText} = render(<ManageOutcomeItem {...defaultProps()} />)
    fireEvent.click(getByText('Expand description for outcome Outcome Title'))
    expect(queryByTestId('icon-arrow-down')).toBeInTheDocument()
  })

  it('expands description when user clicks on button with right pointing caret', () => {
    const {queryByTestId, getByText} = render(<ManageOutcomeItem {...defaultProps()} />)
    fireEvent.click(getByText('Expand description for outcome Outcome Title'))
    expect(queryByTestId('description-expanded')).toBeInTheDocument()
  })

  it('collapses description when user clicks on button with down pointing caret', () => {
    const {queryByTestId, getByText} = render(<ManageOutcomeItem {...defaultProps()} />)
    fireEvent.click(getByText('Expand description for outcome Outcome Title'))
    fireEvent.click(getByText('Collapse description for outcome Outcome Title'))
    expect(queryByTestId('description-truncated')).toBeInTheDocument()
  })

  it('displays disabled caret button with "not-allowed" cursor if no description', () => {
    const {queryByTestId} = render(<ManageOutcomeItem {...defaultProps({description: null})} />)
    expect(queryByTestId('icon-arrow-right').closest('button')).toHaveAttribute('disabled')
    expect(queryByTestId('icon-arrow-right').closest('button').style).toHaveProperty(
      'cursor',
      'not-allowed'
    )
  })

  it('handles click on individual outcome -> kebab menu -> remove option', () => {
    const {getByText} = render(<ManageOutcomeItem {...defaultProps()} />)
    fireEvent.click(getByText('Menu for outcome Outcome Title'))
    fireEvent.click(getByText('Remove'))
    expect(onMenuHandlerMock).toHaveBeenCalledTimes(1)
    expect(onMenuHandlerMock.mock.calls[0][0]).toBe('2')
    expect(onMenuHandlerMock.mock.calls[0][1]).toBe('remove')
  })

  it('hides checkbox if canManageOutcome is false', () => {
    const {queryByText} = render(<ManageOutcomeItem {...defaultProps({canManageOutcome: false})} />)
    expect(queryByText('Select outcome Outcome Title')).not.toBeInTheDocument()
  })

  describe('Kebab menu -> edit option', () => {
    it('enables option if Friendly Description FF is enabled', () => {
      const {getByText} = render(<ManageOutcomeItem {...defaultProps()} />)
      fireEvent.click(getByText('Menu for outcome Outcome Title'))
      fireEvent.click(getByText('Edit'))
      expect(onMenuHandlerMock).toHaveBeenCalledTimes(1)
      expect(onMenuHandlerMock.mock.calls[0][0]).toBe('2')
      expect(onMenuHandlerMock.mock.calls[0][1]).toBe('edit')
    })

    it('enables option if user is admin within course context', () => {
      const {getByText} = render(<ManageOutcomeItem {...defaultProps()} />, {
        contextType: 'Course',
        friendlyDescriptionFF: false
      })
      fireEvent.click(getByText('Menu for outcome Outcome Title'))
      fireEvent.click(getByText('Edit'))
      expect(onMenuHandlerMock).toHaveBeenCalledTimes(1)
      expect(onMenuHandlerMock.mock.calls[0][0]).toBe('2')
      expect(onMenuHandlerMock.mock.calls[0][1]).toBe('edit')
    })

    it('enables option if outcome is created within the same context', () => {
      const {getByText} = render(<ManageOutcomeItem {...defaultProps()} />, {
        contextId: '1',
        friendlyDescriptionFF: false
      })
      fireEvent.click(getByText('Menu for outcome Outcome Title'))
      fireEvent.click(getByText('Edit'))
      expect(onMenuHandlerMock).toHaveBeenCalledTimes(1)
      expect(onMenuHandlerMock.mock.calls[0][0]).toBe('2')
      expect(onMenuHandlerMock.mock.calls[0][1]).toBe('edit')
    })
  })

  describe('With manage_outcomes permisssion', () => {
    it('displays kebab menu', () => {
      const {queryByText} = render(<ManageOutcomeItem {...defaultProps()} />)
      expect(queryByText('Menu for outcome Outcome Title')).toBeInTheDocument()
    })

    it('displays kebab menu even if canManageOutcome is false', () => {
      const {queryByText} = render(
        <ManageOutcomeItem {...defaultProps({canManageOutcome: false})} />
      )
      expect(queryByText('Menu for outcome Outcome Title')).toBeInTheDocument()
    })
  })
})
