import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

/*
 * Copyright (C) 2017 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that they will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import moment from 'moment-timezone';
import { colors } from '@instructure/canvas-theme';
import { themeable, ApplyTheme } from '@instructure/ui-themeable';
import { AccessibleContent, ScreenReaderContent, PresentationContent } from '@instructure/ui-a11y-content';
import { Text } from '@instructure/ui-text';
import { Pill } from '@instructure/ui-pill';
import { Avatar } from '@instructure/ui-avatar';
import { Checkbox, CheckboxFacade } from '@instructure/ui-checkbox';
import { Button } from '@instructure/ui-buttons';
import { IconAssignmentLine, IconQuizLine, IconAnnouncementLine, IconDiscussionLine, IconCalendarMonthLine, IconDocumentLine, IconEditLine, IconPeerReviewLine, IconWarningLine, IconVideoCameraSolid, IconVideoCameraLine } from '@instructure/ui-icons';
import { arrayOf, bool, number, string, func, shape, object } from 'prop-types';
import { momentObj } from 'react-moment-proptypes'; // eslint-disable-next-line import/no-named-as-default

import NotificationBadge, { MissingIndicator, NewActivityIndicator } from '../NotificationBadge';
import BadgeList from '../BadgeList';
import CalendarEventModal from '../CalendarEventModal';
const styles = {
  componentId: 'bIrId',
  template: function (theme) {
    return `

.PlannerItem-styles__root {
  font-family: ${theme.fontFamily || 'inherit'};
  box-sizing: border-box;
  padding: ${theme.padding || 'inherit'};
  border-bottom: ${theme.borderWidth || 'inherit'} solid ${theme.borderColor || 'inherit'};
  flex: 1;
  display: flex;
  align-items: center;
  color: ${theme.color || 'inherit'};
  line-height: ${theme.lineHeight || 'inherit'};
}
  .PlannerItem-styles__root.PlannerItem-styles__small {
    align-items: flex-start;
  }
  .PlannerItem-styles__root.PlannerItem-styles__small.PlannerItem-styles__missingItem {
      padding-inline-start: 0;
    }
  [dir="ltr"] .PlannerItem-styles__root.PlannerItem-styles__small.PlannerItem-styles__missingItem {
      padding-left: 0;
    }
  [dir="rtl"] .PlannerItem-styles__root.PlannerItem-styles__small.PlannerItem-styles__missingItem {
      padding-right: 0;
    }
  .PlannerItem-styles__root.PlannerItem-styles__missingItem {
    padding-inline-start: 0.5rem;
    padding-inline-end: 0;
  }
  [dir="ltr"] .PlannerItem-styles__root.PlannerItem-styles__missingItem {
    padding-left: 0.5rem;
    padding-right: 0;
  }
  [dir="rtl"] .PlannerItem-styles__root.PlannerItem-styles__missingItem {
    padding-right: 0.5rem;
    padding-left: 0;
  }

.PlannerItem-styles__completed,
.PlannerItem-styles__avatar,
.PlannerItem-styles__icon,
.PlannerItem-styles__layout {
  box-sizing: border-box;
}

.PlannerItem-styles__completed {
  width: 1.375rem;
  margin-inline-start: ${theme.gutterWidth || 'inherit'};
}

[dir="ltr"] .PlannerItem-styles__completed {
  margin-left: ${theme.gutterWidth || 'inherit'};
}

[dir="rtl"] .PlannerItem-styles__completed {
  margin-right: ${theme.gutterWidth || 'inherit'};
}

.PlannerItem-styles__activityIndicator {
  padding-inline-end: 0;
  padding-inline-start: 0;
}

[dir="ltr"] .PlannerItem-styles__activityIndicator {
  padding-right: 0;
  padding-left: 0;
}

[dir="rtl"] .PlannerItem-styles__activityIndicator {
  padding-left: 0;
  padding-right: 0;
}

.PlannerItem-styles__activityIndicator + .PlannerItem-styles__completed {
  margin-inline-start: calc(${theme.gutterWidth || 'inherit'} - ${theme.activityIndicatorWidth || 'inherit'});
}

[dir="ltr"] .PlannerItem-styles__activityIndicator + .PlannerItem-styles__completed {
  margin-left: calc(${theme.gutterWidth || 'inherit'} - ${theme.activityIndicatorWidth || 'inherit'});
}

[dir="rtl"] .PlannerItem-styles__activityIndicator + .PlannerItem-styles__completed {
  margin-right: calc(${theme.gutterWidth || 'inherit'} - ${theme.activityIndicatorWidth || 'inherit'});
}

.PlannerItem-styles__icon {
  color: ${theme.iconColor || 'inherit'};
  margin: 0 ${theme.gutterWidth || 'inherit'};
}

.PlannerItem-styles__icon > svg {
    
    display: block;
  }

.PlannerItem-styles__avatar {
  
  margin: 0 calc(${theme.gutterWidth || 'inherit'} - ((1em * 2.5) - ${theme.iconFontSize || 'inherit'}) / 2);
}

.PlannerItem-styles__layout {
  display: flex;
  flex-direction: column;
  flex: 1 0;
  min-width: 1px;
}
.PlannerItem-styles__innerLayout {
  display: flex;
  flex: 1 0;
  align-items: center;
  min-width: 1px;
  min-height: 2.5rem; 
}

.PlannerItem-styles__details {
  flex: 0 0 50%;
  margin-bottom: 0;
  box-sizing: border-box;
  min-width: 1px;
}

.PlannerItem-styles__details.PlannerItem-styles__details_no_badges {
    flex: 0 0 75%;
  }

.PlannerItem-styles__secondary {
  flex: 0 0 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 1px;
}

.PlannerItem-styles__secondary.PlannerItem-styles__secondary_no_badges {
    flex: 0 0 25%;
  }

.PlannerItem-styles__type {
  box-sizing: border-box;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  margin-bottom: ${theme.typeMargin || 'inherit'};
}

.PlannerItem-styles__title {
  box-sizing: border-box;
  line-height: ${theme.titleLineHeight || 'inherit'};
}

.PlannerItem-styles__metrics {
  box-sizing: border-box;
  text-align: end;
  flex: 0 0 10rem;
  min-width: 1px;
  padding-inline-start: ${theme.metricsPadding || 'inherit'};
}

[dir="ltr"] .PlannerItem-styles__metrics {
  text-align: right;
  padding-left: ${theme.metricsPadding || 'inherit'};
}

[dir="rtl"] .PlannerItem-styles__metrics {
  text-align: left;
  padding-right: ${theme.metricsPadding || 'inherit'};
}

.PlannerItem-styles__metrics.PlannerItem-styles__with_end_time {
    flex-basis: 14rem;
  }

.PlannerItem-styles__metrics.PlannerItem-styles__with_end_time .PlannerItem-styles__due {
      text-transform: none;
    }

.PlannerItem-styles__missingItem .PlannerItem-styles__metrics {
    flex-basis: 16rem;
  }

.PlannerItem-styles__missingItem .PlannerItem-styles__metrics.PlannerItem-styles__with_end_time {
      flex-basis: 20rem;
    }

.PlannerItem-styles__due,
.PlannerItem-styles__score {
  color: ${theme.secondaryColor || 'inherit'};
  box-sizing: border-box;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  line-height: 1;
  white-space: nowrap;
}

.PlannerItem-styles__badges {
  flex: 1;
  text-align: end;
  min-width: 1px;
}

[dir="ltr"] .PlannerItem-styles__badges {
  text-align: right;
}

[dir="rtl"] .PlannerItem-styles__badges {
  text-align: left;
}

.PlannerItem-styles__feedback {
  display: flex;
  align-items: center;
  min-height: 40px;
}



.PlannerItem-styles__feedback .PlannerItem-styles__feedbackAvatar {
    flex-shrink: 0;
    margin-inline-end: ${theme.gutterWidth || 'inherit'};
  }

[dir="ltr"] .PlannerItem-styles__feedback .PlannerItem-styles__feedbackAvatar {
    margin-right: ${theme.gutterWidth || 'inherit'};
  }

[dir="rtl"] .PlannerItem-styles__feedback .PlannerItem-styles__feedbackAvatar {
    margin-left: ${theme.gutterWidth || 'inherit'};
  }

.PlannerItem-styles__feedback .PlannerItem-styles__feedbackComment {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

.PlannerItem-styles__location {
  text-overflow: ellipsis;
  overflow: hidden;
}

.PlannerItem-styles__small .PlannerItem-styles__title, .PlannerItem-styles__medium .PlannerItem-styles__title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-inline-end: 0.5rem;
  }

[dir="ltr"] .PlannerItem-styles__small .PlannerItem-styles__title,
[dir="ltr"] .PlannerItem-styles__medium .PlannerItem-styles__title {
    padding-right: 0.5rem;
  }

[dir="rtl"] .PlannerItem-styles__small .PlannerItem-styles__title,
[dir="rtl"] .PlannerItem-styles__medium .PlannerItem-styles__title {
    padding-left: 0.5rem;
  }

.PlannerItem-styles__small {
  padding-left: 0;
  padding-right: 0;
}

.PlannerItem-styles__small .PlannerItem-styles__completed {
    margin-inline-start: 6px;
  }

[dir="ltr"] .PlannerItem-styles__small .PlannerItem-styles__completed {
    margin-left: 6px;
  }

[dir="rtl"] .PlannerItem-styles__small .PlannerItem-styles__completed {
    margin-right: 6px;
  }

.PlannerItem-styles__small .PlannerItem-styles__innerLayout {
    flex-direction: column;
    align-items: flex-start;
    margin-inline-start: 1rem;
  }

[dir="ltr"] .PlannerItem-styles__small .PlannerItem-styles__innerLayout {
    margin-left: 1rem;
  }

[dir="rtl"] .PlannerItem-styles__small .PlannerItem-styles__innerLayout {
    margin-right: 1rem;
  }

.PlannerItem-styles__small .PlannerItem-styles__details {
    margin-bottom: 1rem;
    flex: 1 0 auto;
    width: 100%;
  }

.PlannerItem-styles__small .PlannerItem-styles__moreDetails {
    display: flex;
    justify-content: space-between;
  }

.PlannerItem-styles__small .PlannerItem-styles__secondary {
    flex: 1 0 auto;
    width: 100%;
  }

.PlannerItem-styles__small .PlannerItem-styles__metrics {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
    flex: 1 0 auto;
    text-align: unset;
    padding-inline-start: 0;
  }

[dir="ltr"] .PlannerItem-styles__small .PlannerItem-styles__metrics {
    text-align: unset;
    padding-left: 0;
  }

[dir="rtl"] .PlannerItem-styles__small .PlannerItem-styles__metrics {
    text-align: unset;
    padding-right: 0;
  }

.PlannerItem-styles__small .PlannerItem-styles__due {
    width: 100%;
  }

.PlannerItem-styles__small .PlannerItem-styles__icon,
  .PlannerItem-styles__small .PlannerItem-styles__avatar,
  .PlannerItem-styles__small .PlannerItem-styles__badges,
  .PlannerItem-styles__small .PlannerItem-styles__feedback,
  .PlannerItem-styles__small .PlannerItem-styles__editButton {
    display: none;
  }

.PlannerItem-styles__small .PlannerItem-styles__location {
    color: ${theme.secondaryColor || 'inherit'};
    margin-inline-start: 1rem;
  }

[dir="ltr"] .PlannerItem-styles__small .PlannerItem-styles__location {
    margin-left: 1rem;
  }

[dir="rtl"] .PlannerItem-styles__small .PlannerItem-styles__location {
    margin-right: 1rem;
  }

.k5 .PlannerItem-styles__type {
  display: none;
}
`;
  },
  'root': 'PlannerItem-styles__root',
  'small': 'PlannerItem-styles__small',
  'missingItem': 'PlannerItem-styles__missingItem',
  'completed': 'PlannerItem-styles__completed',
  'avatar': 'PlannerItem-styles__avatar',
  'icon': 'PlannerItem-styles__icon',
  'layout': 'PlannerItem-styles__layout',
  'activityIndicator': 'PlannerItem-styles__activityIndicator',
  'innerLayout': 'PlannerItem-styles__innerLayout',
  'details': 'PlannerItem-styles__details',
  'details_no_badges': 'PlannerItem-styles__details_no_badges',
  'secondary': 'PlannerItem-styles__secondary',
  'secondary_no_badges': 'PlannerItem-styles__secondary_no_badges',
  'type': 'PlannerItem-styles__type',
  'title': 'PlannerItem-styles__title',
  'metrics': 'PlannerItem-styles__metrics',
  'with_end_time': 'PlannerItem-styles__with_end_time',
  'due': 'PlannerItem-styles__due',
  'score': 'PlannerItem-styles__score',
  'badges': 'PlannerItem-styles__badges',
  'feedback': 'PlannerItem-styles__feedback',
  'feedbackAvatar': 'PlannerItem-styles__feedbackAvatar',
  'feedbackComment': 'PlannerItem-styles__feedbackComment',
  'location': 'PlannerItem-styles__location',
  'medium': 'PlannerItem-styles__medium',
  'moreDetails': 'PlannerItem-styles__moreDetails',
  'editButton': 'PlannerItem-styles__editButton'
};
import theme from './theme';
import { badgeShape, userShape, statusShape, sizeShape, feedbackShape } from '../plannerPropTypes';
import { getDynamicFullDateAndTime } from '../../utilities/dateUtils';
import { showPillForOverdueStatus } from '../../utilities/statusUtils';
import { assignmentType as getAssignmentType } from '../../utilities/contentUtils';
import formatMessage from '../../format-message';
import { animatable } from '../../dynamic-ui';
export class PlannerItem_raw extends Component {
  constructor(props) {
    super(props);

    this.toDoLinkClick = e => {
      e.preventDefault();
      this.props.updateTodo && this.props.updateTodo({
        updateTodoItem: _objectSpread({}, this.props)
      });
    };

    this.registerRootDivRef = elt => {
      this.rootDivRef = elt;
    };

    this.registerFocusElementRef = elt => {
      this.checkboxRef = elt;
    };

    this.getFocusable = which => {
      return which === 'update' || which === 'delete' ? this.itemLink : this.checkboxRef;
    };

    this.formatDate = date => {
      return this.props.isMissingItem ? getDynamicFullDateAndTime(date, this.props.timeZone) : date.format('LT');
    };

    this.renderDateField = () => {
      if (this.props.date && this.props.date.isValid()) {
        if (this.props.allDay) {
          return formatMessage('All Day');
        }

        if (this.props.associated_item === 'Calendar Event') {
          if (this.showEndTime()) {
            return formatMessage('{startTime} to {endTime}', {
              startTime: this.formatDate(this.props.date),
              endTime: this.formatDate(this.props.endTime)
            });
          } else {
            return this.formatDate(this.props.date);
          }
        }

        if (this.hasDueTime()) {
          if (this.props.associated_item === 'Peer Review') {
            return formatMessage('Reminder: {date}', {
              date: this.formatDate(this.props.date)
            });
          } else if (this.props.dateStyle === 'todo') {
            return formatMessage('To Do: {date}', {
              date: this.formatDate(this.props.date)
            });
          } else {
            return formatMessage('Due: {date}', {
              date: this.formatDate(this.props.date)
            });
          }
        }

        return this.formatDate(this.props.date);
      }

      return null;
    };

    this.openCalendarEventModal = () => {
      this.setState({
        calendarEventModalOpen: true
      });
    };

    this.closeCalendarEventModal = () => {
      this.setState({
        calendarEventModalOpen: false
      });
    };

    this.renderIcon = () => {
      const currentUser = this.props.currentUser || {};

      switch (this.props.associated_item) {
        case 'Assignment':
          return /*#__PURE__*/React.createElement(IconAssignmentLine, null);

        case 'Quiz':
          return /*#__PURE__*/React.createElement(IconQuizLine, null);

        case 'Discussion':
          return /*#__PURE__*/React.createElement(IconDiscussionLine, null);

        case 'Announcement':
          return /*#__PURE__*/React.createElement(IconAnnouncementLine, null);

        case 'Calendar Event':
          return /*#__PURE__*/React.createElement(IconCalendarMonthLine, null);

        case 'Page':
          return /*#__PURE__*/React.createElement(IconDocumentLine, null);

        case 'Peer Review':
          return /*#__PURE__*/React.createElement(IconPeerReviewLine, null);

        default:
          return /*#__PURE__*/React.createElement(Avatar, {
            name: currentUser.displayName || '?',
            src: currentUser.avatarUrl,
            size: "small",
            "data-fs-exclude": true
          });
      }
    };

    this.renderBadges = () => {
      if (this.props.badges.length) {
        return /*#__PURE__*/React.createElement(BadgeList, null, this.props.badges.map(b => /*#__PURE__*/React.createElement(Pill, {
          key: b.id,
          text: b.text,
          variant: b.variant
        })));
      }

      return null;
    };

    this.renderItemSubMetric = () => {
      if (this.props.points) {
        return /*#__PURE__*/React.createElement("div", {
          className: styles.score
        }, /*#__PURE__*/React.createElement(Text, {
          size: "large"
        }, this.props.points), /*#__PURE__*/React.createElement(Text, {
          size: "x-small"
        }, "\xA0", formatMessage('pts')));
      }

      if (this.props.associated_item === 'To Do') {
        return /*#__PURE__*/React.createElement("div", {
          className: styles.editButton
        }, /*#__PURE__*/React.createElement(ApplyTheme, {
          theme: {
            [Button.theme]: {
              iconColor: this.props.simplifiedControls ? void 0 : this.props.color
            }
          }
        }, /*#__PURE__*/React.createElement(Button, {
          variant: "icon",
          icon: IconEditLine,
          onClick: this.toDoLinkClick
        }, /*#__PURE__*/React.createElement(ScreenReaderContent, null, formatMessage('Edit')))));
      }

      return null;
    };

    this.renderItemMetrics = () => {
      const secondaryClasses = classnames(styles.secondary, !this.hasBadges() ? styles.secondary_no_badges : '');
      const metricsClasses = classnames(styles.metrics, {
        [styles.with_end_time]: this.showEndTime()
      });
      return /*#__PURE__*/React.createElement("div", {
        className: secondaryClasses
      }, /*#__PURE__*/React.createElement("div", {
        className: styles.badges
      }, this.renderBadges()), /*#__PURE__*/React.createElement("div", {
        className: metricsClasses
      }, this.renderItemSubMetric(), /*#__PURE__*/React.createElement("div", {
        className: styles.due
      }, /*#__PURE__*/React.createElement(Text, {
        size: "x-small"
      }, /*#__PURE__*/React.createElement(PresentationContent, null, this.renderDateField())))), this.props.responsiveSize !== 'small' && this.renderOnlineMeeting());
    };

    this.renderType = () => {
      if (!this.props.associated_item) {
        return formatMessage('{course} TO DO', {
          course: this.props.courseName || ''
        });
      } else {
        return `${this.props.courseName || ''} ${this.assignmentType()}`;
      }
    };

    this.renderCourseName = () => {
      if (!this.props.isMissingItem || !this.props.courseName) return null;
      return /*#__PURE__*/React.createElement(Text, {
        size: "x-small",
        weight: "bold",
        color: "primary",
        letterSpacing: "expanded",
        transform: "uppercase",
        theme: {
          primaryColor: this.props.color
        },
        "data-testid": "MissingAssignments-CourseName"
      }, this.props.courseName);
    };

    this.renderItemDetails = () => {
      return /*#__PURE__*/React.createElement("div", {
        className: classnames(styles.details, !this.hasBadges() ? styles.details_no_badges : '')
      }, !this.props.simplifiedControls && /*#__PURE__*/React.createElement("div", {
        className: styles.type
      }, /*#__PURE__*/React.createElement(Text, {
        size: "x-small",
        color: "secondary"
      }, this.renderType())), this.renderMoreDetails());
    };

    this.getCheckboxTheme = () => {
      return this.props.simplifiedControls ? {} : {
        checkedBackground: this.props.color,
        checkedBorderColor: this.props.color,
        borderColor: this.props.color,
        hoverBorderColor: this.props.color
      };
    };

    this.state = {
      calendarEventModalOpen: false,
      completed: props.completed
    };
  }

  componentDidMount() {
    this.props.registerAnimatable('item', this, this.props.animatableIndex, [this.props.uniqueId]);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.props.deregisterAnimatable('item', this, [this.props.uniqueId]);
    this.props.registerAnimatable('item', this, nextProps.animatableIndex, [nextProps.uniqueId]);
    this.setState({
      completed: nextProps.completed
    });
  }

  componentWillUnmount() {
    this.props.deregisterAnimatable('item', this, [this.props.uniqueId]);
  }

  getScrollable() {
    return this.rootDivRef;
  }

  getLayout() {
    return this.props.responsiveSize;
  }

  hasDueTime() {
    return this.props.date && !(this.props.associated_item === 'Announcement' || this.props.associated_item === 'Calendar Event');
  }

  showEndTime() {
    return this.props.date && !this.props.allDay && this.props.endTime && !this.props.endTime.isSame(this.props.date);
  }

  hasBadges() {
    return this.props.badges && this.props.badges.length && this.props.badges.length > 0;
  }

  assignmentType() {
    return getAssignmentType(this.props.associated_item);
  }

  linkLabel() {
    const assignmentType = this.assignmentType();
    const datetimeformat = this.props.allDay === true ? 'LL' : 'LLLL';
    const params = {
      assignmentType,
      title: this.props.title,
      datetime: this.props.date ? this.props.date.format(datetimeformat) : null
    };

    if (this.props.date) {
      if (this.props.allDay) {
        return formatMessage('{assignmentType} {title}, all day on {datetime}.', params);
      }

      if (this.props.associated_item === 'Calendar Event') {
        if (this.showEndTime()) {
          params.endTime = this.props.endTime.format('LT');
          return formatMessage('{assignmentType} {title}, at {datetime} until {endTime}', params);
        } else {
          return formatMessage('{assignmentType} {title}, at {datetime}.', params);
        }
      }

      if (this.hasDueTime()) {
        if (this.props.dateStyle === 'todo') {
          return formatMessage('{assignmentType} {title} has a to do time at {datetime}.', params);
        } else if (this.props.associated_item === 'Peer Review') {
          return formatMessage('{assignmentType} {title}, reminder {datetime}.', params);
        } else {
          return formatMessage('{assignmentType} {title}, due {datetime}.', params);
        }
      }

      if (this.props.associated_item === 'Announcement') {
        return formatMessage('{assignmentType} {title} posted {datetime}.', params);
      }
    }

    return formatMessage('{assignmentType} {title}.', params);
  }

  renderCalendarEventModal() {
    if (this.props.associated_item !== 'Calendar Event') return null;
    return /*#__PURE__*/React.createElement(CalendarEventModal, {
      open: this.state.calendarEventModalOpen,
      requestClose: this.closeCalendarEventModal,
      title: this.props.title,
      html_url: this.props.html_url,
      courseName: this.props.courseName,
      currentUser: this.props.currentUser,
      location: this.props.location,
      address: this.props.address,
      details: this.props.details,
      startTime: this.props.date,
      endTime: this.props.endTime,
      allDay: !!this.props.allDay,
      timeZone: this.props.timeZone
    });
  }

  renderTitle() {
    const linkProps = {};

    if (this.props.associated_item === 'To Do') {
      linkProps.onClick = this.toDoLinkClick;
    }

    if (this.props.associated_item === 'Calendar Event') {
      linkProps.onClick = this.openCalendarEventModal;
    } else {
      linkProps.href = this.props.html_url;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: styles.title,
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(Button, Object.assign({
      variant: "link",
      theme: {
        mediumPaddingHorizontal: '0',
        mediumHeight: 'normal',
        linkColor: this.props.simplifiedControls ? colors.licorice : void 0,
        linkHoverColor: this.props.simplifiedControls ? colors.licorice : void 0
      },
      buttonRef: link => {
        this.itemLink = link;
      }
    }, linkProps, {
      readOnly: this.props.readOnly
    }), /*#__PURE__*/React.createElement(ScreenReaderContent, null, this.linkLabel()), /*#__PURE__*/React.createElement(PresentationContent, null, this.props.title)), this.renderCalendarEventModal());
  }

  renderMoreDetails() {
    if (this.props.responsiveSize === 'small') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: styles.moreDetails
      }, this.renderTitle(), this.renderOnlineMeeting()), this.renderCourseName());
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, this.renderTitle(), this.renderCourseName());
  }

  renderNotificationBadge() {
    if (!this.props.showNotificationBadge) {
      return null;
    }

    const newItem = this.props.newActivity;
    let missing = false;

    if (showPillForOverdueStatus('missing', {
      status: this.props.status,
      context: this.props.context
    })) {
      missing = true;
    }

    if (newItem || missing) {
      const IndicatorComponent = newItem ? NewActivityIndicator : MissingIndicator;
      return /*#__PURE__*/React.createElement(NotificationBadge, {
        responsiveSize: this.props.responsiveSize
      }, /*#__PURE__*/React.createElement("div", {
        className: styles.activityIndicator
      }, /*#__PURE__*/React.createElement(IndicatorComponent, {
        title: this.props.title,
        itemIds: [this.props.uniqueId],
        animatableIndex: this.props.animatableIndex,
        getFocusable: this.getFocusable
      })));
    } else {
      return /*#__PURE__*/React.createElement(NotificationBadge, {
        responsiveSize: this.props.responsiveSize
      });
    }
  }

  renderExtraInfo() {
    const feedback = this.props.feedback;

    if (feedback) {
      const comment = feedback.is_media ? formatMessage('You have media feedback.') : feedback.comment;
      return /*#__PURE__*/React.createElement("div", {
        className: styles.feedback
      }, /*#__PURE__*/React.createElement("span", {
        className: styles.feedbackAvatar
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: feedback.author_name || '?',
        src: feedback.author_avatar_url,
        size: "small",
        "data-fs-exclude": true
      })), /*#__PURE__*/React.createElement("span", {
        className: styles.feedbackComment
      }, /*#__PURE__*/React.createElement(Text, {
        fontStyle: "italic"
      }, comment)));
    }

    const location = this.props.location;

    if (location) {
      return /*#__PURE__*/React.createElement("div", {
        className: styles.location
      }, /*#__PURE__*/React.createElement(Text, null, location));
    }

    return null;
  }

  renderCompletedCheckbox() {
    if (this.props.isMissingItem) {
      return /*#__PURE__*/React.createElement("div", {
        className: styles.completed
      }, /*#__PURE__*/React.createElement(IconWarningLine, {
        color: "error"
      }));
    }

    const assignmentType = this.assignmentType();
    const checkboxLabel = this.state.completed ? formatMessage('{assignmentType} {title} is marked as done.', {
      assignmentType,
      title: this.props.title
    }) : formatMessage('{assignmentType} {title} is not marked as done.', {
      assignmentType,
      title: this.props.title
    });
    return /*#__PURE__*/React.createElement("div", {
      className: styles.completed
    }, /*#__PURE__*/React.createElement(ApplyTheme, {
      theme: {
        [CheckboxFacade.theme]: this.getCheckboxTheme()
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      ref: this.registerFocusElementRef,
      label: /*#__PURE__*/React.createElement(ScreenReaderContent, null, checkboxLabel),
      checked: this.props.toggleAPIPending ? !this.state.completed : this.state.completed,
      onChange: this.props.toggleCompletion,
      disabled: this.props.toggleAPIPending,
      readOnly: this.props.readOnly
    })));
  }

  renderOnlineMeeting() {
    var _window$ENV;

    // simplifiedControls is a surrogate for k5Mode (see PlannerApp/index.js)
    if ((this.props.simplifiedControls || (_window$ENV = window.ENV) !== null && _window$ENV !== void 0 && _window$ENV.FEATURES.conferencing_in_planner) && this.props.onlineMeetingURL) {
      const now = moment();
      const enabled = this.props.allDay && now.isSame(this.props.date, 'day') || this.props.endTime && now.isBetween(this.props.date, this.props.endTime) || !this.props.endTime && now.isSame(this.props.date, 'day') && now > this.props.date; // after start time today for an event with no end time

      const srlabel = enabled ? formatMessage('join active online meeting') : formatMessage('join online meeting');
      return /*#__PURE__*/React.createElement("div", {
        className: styles.onlineMeeting
      }, /*#__PURE__*/React.createElement(Button, {
        "data-testid": enabled ? 'join-button-hot' : 'join-button',
        size: "small",
        color: enabled ? 'success' : 'secondary',
        margin: this.props.responsiveSize === 'small' ? '0' : '0 0 0 x-small',
        renderIcon: enabled ? IconVideoCameraSolid : IconVideoCameraLine,
        onClick: () => {
          window.open(this.props.onlineMeetingURL);
        }
      }, /*#__PURE__*/React.createElement(AccessibleContent, {
        alt: srlabel
      }, formatMessage('Join'))));
    }
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: classnames(styles.root, styles[this.getLayout()], 'planner-item', {
        [styles.missingItem]: this.props.isMissingItem
      }),
      ref: this.registerRootDivRef
    }, this.renderNotificationBadge(), this.renderCompletedCheckbox(), /*#__PURE__*/React.createElement("div", {
      className: this.props.associated_item === 'To Do' ? styles.avatar : styles.icon,
      style: {
        color: this.props.simplifiedControls ? void 0 : this.props.color
      },
      "aria-hidden": "true"
    }, this.renderIcon()), /*#__PURE__*/React.createElement("div", {
      className: styles.layout
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.innerLayout
    }, this.renderItemDetails(), this.renderItemMetrics()), this.renderExtraInfo()));
  }

}
PlannerItem_raw.propTypes = {
  color: string,
  id: string.isRequired,
  uniqueId: string.isRequired,
  animatableIndex: number,
  title: string.isRequired,
  points: number,
  date: momentObj,
  address: string,
  dateStyle: string,
  details: string,
  courseName: string,
  completed: bool,
  overrideId: string,
  associated_item: string,
  context: object,
  html_url: string,
  toggleCompletion: func,
  updateTodo: func,
  badges: arrayOf(shape(badgeShape)),
  registerAnimatable: func,
  deregisterAnimatable: func,
  toggleAPIPending: bool,
  status: statusShape,
  newActivity: bool,
  showNotificationBadge: bool,
  currentUser: shape(userShape),
  responsiveSize: sizeShape,
  allDay: bool,
  feedback: shape(feedbackShape),
  location: string,
  endTime: momentObj,
  timeZone: string.isRequired,
  simplifiedControls: bool,
  isMissingItem: bool,
  readOnly: bool,
  onlineMeetingURL: string
};
PlannerItem_raw.defaultProps = {
  badges: [],
  responsiveSize: 'large',
  allDay: false,
  simplifiedControls: false,
  isMissingItem: false
};
const ThemeablePlannerItem = themeable(theme, styles)(PlannerItem_raw);
const AnimatablePlannerItem = animatable(ThemeablePlannerItem);
AnimatablePlannerItem.theme = ThemeablePlannerItem.theme;
export default AnimatablePlannerItem;