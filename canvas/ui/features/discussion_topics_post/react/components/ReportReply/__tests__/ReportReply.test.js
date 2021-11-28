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

import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {ReportReply} from '../ReportReply'

const mockProps = ({
  onCloseReportModal = jest.fn(),
  onSubmit = jest.fn(),
  showReportModal = true
} = {}) => ({onCloseReportModal, onSubmit, showReportModal})

const setup = props => {
  return render(<ReportReply {...props} />)
}

describe('Report Reply', () => {
  it('should render', () => {
    const container = setup(mockProps())
    expect(container).toBeTruthy()
  })

  it('should call onCloseReportModal from the cancel button', async () => {
    const onCloseReportModalMock = jest.fn()
    const container = setup(mockProps({onCloseReportModal: onCloseReportModalMock}))
    const cancelButton = await container.findByTestId('report-reply-cancel-modal-button')
    expect(cancelButton).toBeTruthy()
    fireEvent.click(cancelButton)
    expect(onCloseReportModalMock.mock.calls.length).toBe(1)
  })

  it('should call onCloseReportModal from the close button', async () => {
    const onCloseReportModalMock = jest.fn()
    const container = setup(mockProps({onCloseReportModal: onCloseReportModalMock}))
    const cancelButton = await container.findByText('Close')
    expect(cancelButton).toBeTruthy()
    fireEvent.click(cancelButton)
    expect(onCloseReportModalMock.mock.calls.length).toBe(1)
  })

  it('should call onSubmit', async () => {
    const onSubmitMock = jest.fn()
    const container = setup(mockProps({onSubmit: onSubmitMock}))
    const option = await container.findByText('Other')
    expect(option).toBeTruthy()
    fireEvent.click(option)
    const submitButton = await container.findByTestId('report-reply-submit-button')
    expect(submitButton).toBeTruthy()
    fireEvent.click(submitButton)
    expect(onSubmitMock.mock.calls.length).toBe(1)
  })

  it('submit button should be disabled unless an option is selected', async () => {
    const container = setup(mockProps())
    expect(container.getByText('Submit').closest('button').hasAttribute('disabled')).toBeTruthy()
    const option = await container.findByText('Other')
    expect(option).toBeTruthy()
    fireEvent.click(option)
    expect(container.getByText('Submit').closest('button').hasAttribute('disabled')).toBeFalsy()
  })
})
