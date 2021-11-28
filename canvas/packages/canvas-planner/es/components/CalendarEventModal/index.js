/*
 * Copyright (C) 2018 - present Instructure, Inc.
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
import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { momentObj } from 'react-moment-proptypes';
import { Button, CloseButton } from '@instructure/ui-buttons';
import { Heading } from '@instructure/ui-heading';
import { List } from '@instructure/ui-list';
import { Text } from '@instructure/ui-text';
import { Modal } from '@instructure/ui-modal';
import { View } from '@instructure/ui-view';
import formatMessage from '../../format-message';
import { dateString, dateTimeString, dateRangeString } from '../../utilities/dateUtils';
import { convertApiUserContent } from '../../utilities/contentUtils';
import { userShape } from '../plannerPropTypes';
export default class CalendarEventModal extends React.Component {
  renderRow(firstColumnContent, secondColumnContent) {
    return /*#__PURE__*/React.createElement(List.Item, null, /*#__PURE__*/React.createElement(Text, {
      weight: "bold"
    }, firstColumnContent), /*#__PURE__*/React.createElement(View, {
      margin: "0 0 0 x-small"
    }, /*#__PURE__*/React.createElement(Text, null, secondColumnContent)));
  }

  renderTimeString() {
    const _this$props = this.props,
          startTime = _this$props.startTime,
          endTime = _this$props.endTime,
          timeZone = _this$props.timeZone;

    if (this.props.allDay) {
      return dateString(startTime, timeZone);
    } else if (endTime && !startTime.isSame(endTime)) {
      return dateRangeString(startTime, endTime, timeZone);
    } else {
      return dateTimeString(startTime, timeZone);
    }
  }

  renderDateTimeRow() {
    return this.renderRow(formatMessage('Date & Time:'), this.renderTimeString());
  }

  renderCalendarRow() {
    const calendarName = this.props.courseName || this.props.currentUser.displayName;
    return this.renderRow(formatMessage('Calendar:'), calendarName);
  }

  renderLocationRow() {
    if (this.props.location) {
      return this.renderRow(formatMessage('Location:'), this.props.location);
    }
  }

  renderAddressRow() {
    if (this.props.address) {
      return this.renderRow(formatMessage('Address:'), this.props.address);
    }
  }

  renderDetails() {
    if (this.props.details) {
      const convertedHtml = convertApiUserContent(this.props.details);
      return /*#__PURE__*/React.createElement(List.Item, {
        margin: "large 0 0 0"
      }, /*#__PURE__*/React.createElement(Text, {
        weight: "bold"
      }, formatMessage('Details:')), /*#__PURE__*/React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: convertedHtml
        }
      }));
    }
  }

  render() {
    return /*#__PURE__*/React.createElement(Modal, {
      label: "Calendar Event Details",
      size: "small",
      open: this.props.open,
      onDismiss: this.props.requestClose,
      shouldCloseOnDocumentClick: true
    }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Heading, null, /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      size: "large",
      theme: {
        largePadding: '0',
        largeHeight: 'normal'
      },
      href: this.props.html_url
    }, this.props.title)), /*#__PURE__*/React.createElement(CloseButton, {
      placement: "end",
      onClick: this.props.requestClose
    }, formatMessage('Close'))), /*#__PURE__*/React.createElement(Modal.Body, {
      padding: "medium"
    }, /*#__PURE__*/React.createElement(List, {
      variant: "unstyled",
      itemSpacing: "small"
    }, this.renderCalendarRow(), this.renderDateTimeRow(), this.renderLocationRow(), this.renderAddressRow(), this.renderDetails())));
  }

}
CalendarEventModal.propTypes = {
  open: bool.isRequired,
  requestClose: func.isRequired,
  title: string.isRequired,
  html_url: string.isRequired,
  courseName: string,
  currentUser: shape(userShape),
  location: string,
  address: string,
  details: string,
  startTime: momentObj.isRequired,
  endTime: momentObj,
  allDay: bool.isRequired,
  timeZone: string.isRequired
};