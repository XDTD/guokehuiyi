/*
 * Copyright (C) 2017 - present Instructure, Inc.
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
import { Button, CloseButton } from '@instructure/ui-buttons';
import { Text } from '@instructure/ui-text';
import { List } from '@instructure/ui-list';
import { IconAssignmentLine, IconQuizLine, IconAnnouncementLine, IconDiscussionLine, IconNoteLine, IconCalendarMonthLine, IconDocumentLine, IconPeerReviewLine } from '@instructure/ui-icons';
import { func, shape, object, arrayOf, number, string } from 'prop-types';
import { dateTimeString } from '../../utilities/dateUtils';
import formatMessage from '../../format-message';

const getIconComponent = itemType => {
  switch (itemType) {
    case 'Assignment':
      return /*#__PURE__*/React.createElement(IconAssignmentLine, {
        label: formatMessage('Assignment'),
        className: "ToDoSidebarItem__Icon"
      });

    case 'Quiz':
      return /*#__PURE__*/React.createElement(IconQuizLine, {
        label: formatMessage('Quiz'),
        className: "ToDoSidebarItem__Icon"
      });

    case 'Discussion':
      return /*#__PURE__*/React.createElement(IconDiscussionLine, {
        label: formatMessage('Discussion'),
        className: "ToDoSidebarItem__Icon"
      });

    case 'Announcement':
      return /*#__PURE__*/React.createElement(IconAnnouncementLine, {
        label: formatMessage('Announcement'),
        className: "ToDoSidebarItem__Icon"
      });

    case 'Calendar Event':
      return /*#__PURE__*/React.createElement(IconCalendarMonthLine, {
        label: formatMessage('Calendar Event'),
        className: "ToDoSidebarItem__Icon"
      });

    case 'Page':
      return /*#__PURE__*/React.createElement(IconDocumentLine, {
        label: formatMessage('Page'),
        className: "ToDoSidebarItem__Icon"
      });

    case 'Peer Review':
      return /*#__PURE__*/React.createElement(IconPeerReviewLine, {
        label: formatMessage('Peer Review'),
        className: "ToDoSidebarItem__Icon"
      });

    default:
      return /*#__PURE__*/React.createElement(IconNoteLine, {
        label: formatMessage('To Do'),
        className: "ToDoSidebarItem__Icon"
      });
  }
};

const getContextShortName = (courses, courseId) => {
  const course = courses.find(x => x.id === courseId);
  return course ? course.shortName : '';
};

export default class ToDoItem extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      this.props.handleDismissClick(this.props.item);
    };

    this.getInformationRow = (dueAt, points) => {
      const toDisplay = [];

      if (points) {
        toDisplay.push( /*#__PURE__*/React.createElement(List.Item, {
          key: "points"
        }, formatMessage('{numPoints} points', {
          numPoints: points
        })));
      }

      toDisplay.push( /*#__PURE__*/React.createElement(List.Item, {
        key: "date"
      }, dateTimeString(dueAt, this.props.timeZone)));
      return toDisplay;
    };
  }

  focus() {
    const focusable = this.linkRef || this.buttonRef;
    if (focusable) focusable.focus();
  }

  itemTitle() {
    if (this.props.item.type === 'Peer Review') {
      return formatMessage('Peer Review for {itemTitle}', {
        itemTitle: this.props.item.title
      });
    }

    return this.props.item.title;
  }

  render() {
    const title = /*#__PURE__*/React.createElement(Text, {
      size: "small",
      lineHeight: "fit"
    }, this.itemTitle());
    const titleComponent = this.props.item.html_url ? /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      theme: {
        mediumPaddingHorizontal: '0',
        mediumHeight: 'normal'
      },
      buttonRef: elt => {
        this.linkRef = elt;
      },
      href: this.props.item.html_url
    }, title) : /*#__PURE__*/React.createElement(Text, null, title);
    return /*#__PURE__*/React.createElement("div", {
      className: "ToDoSidebarItem"
    }, getIconComponent(this.props.item.type), /*#__PURE__*/React.createElement("div", {
      className: "ToDoSidebarItem__Info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ToDoSidebarItem__Title"
    }, titleComponent), /*#__PURE__*/React.createElement(Text, {
      color: "secondary",
      size: "small",
      weight: "bold",
      lineHeight: "fit"
    }, getContextShortName(this.props.courses, this.props.item.course_id)), /*#__PURE__*/React.createElement(List, {
      variant: "inline",
      delimiter: "pipe",
      size: "small"
    }, this.getInformationRow(this.props.item.date, this.props.item.points))), /*#__PURE__*/React.createElement("div", {
      className: "ToDoSidebarItem__Close"
    }, /*#__PURE__*/React.createElement(CloseButton, {
      variant: "icon",
      size: "small",
      onClick: this.handleClick,
      buttonRef: elt => {
        this.buttonRef = elt;
      }
    }, formatMessage('Dismiss {itemTitle}', {
      itemTitle: this.props.item.title
    }))));
  }

}
ToDoItem.propTypes = {
  item: shape({
    title: string,
    html_url: string,
    type: string,
    course_id: string,
    date: object,
    // moment
    points: number
  }),
  courses: arrayOf(object).isRequired,
  handleDismissClick: func.isRequired,
  timeZone: string
};