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
import React, { Component } from 'react';
import { arrayOf, func, number, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import moment from 'moment-timezone';
import { IconWarningLine } from '@instructure/ui-icons';
import { PresentationContent } from '@instructure/ui-a11y-content';
import { themeable } from '@instructure/ui-themeable';
import { ToggleDetails } from '@instructure/ui-toggle-details';
import { View } from '@instructure/ui-view';
import { courseShape, opportunityShape, sizeShape } from '../plannerPropTypes';
import { toggleMissingItems } from '../../actions';
import formatMessage from '../../format-message';
import PlannerItem from '../PlannerItem';
const styles = {
  componentId: 'bCuTz',
  template: function (theme) {
    return `

.MissingAssignments-styles__root {
  display: flex;
  align-items: center;
  position: relative;
  margin-top: ${theme.toggleMarginTop || 'inherit'};
}

  .MissingAssignments-styles__root > :last-child {
    width: 100%;
  }

  .MissingAssignments-styles__root > div > button {
    margin: ${theme.toggleButtonMarginTop || 'inherit'} 0;
  }

  .MissingAssignments-styles__root > div > button svg {
      margin-inline-start: ${theme.toggleButtonMarginStart || 'inherit'};
    }

  [dir="ltr"] .MissingAssignments-styles__root > div > button svg {
      margin-left: ${theme.toggleButtonMarginStart || 'inherit'};
    }

  [dir="rtl"] .MissingAssignments-styles__root > div > button svg {
      margin-right: ${theme.toggleButtonMarginStart || 'inherit'};
    }

.MissingAssignments-styles__icon {
  position: absolute;
  top: calc(${theme.toggleMarginTop || 'inherit'} - 2px);
  left: 0;
}

.MissingAssignments-styles__medium.MissingAssignments-styles__root, .MissingAssignments-styles__small.MissingAssignments-styles__root {
    margin-inline-start: 0;
  }

[dir="ltr"] .MissingAssignments-styles__medium.MissingAssignments-styles__root,
[dir="ltr"] .MissingAssignments-styles__small.MissingAssignments-styles__root {
    margin-left: 0;
  }

[dir="rtl"] .MissingAssignments-styles__medium.MissingAssignments-styles__root,
[dir="rtl"] .MissingAssignments-styles__small.MissingAssignments-styles__root {
    margin-right: 0;
  }
`;
  },
  'root': 'MissingAssignments-styles__root',
  'icon': 'MissingAssignments-styles__icon',
  'medium': 'MissingAssignments-styles__medium',
  'small': 'MissingAssignments-styles__small'
};
import theme from './theme';
export const convertSubmissionType = submissionTypes => {
  if ((submissionTypes === null || submissionTypes === void 0 ? void 0 : submissionTypes.length) > 0) {
    switch (submissionTypes[0]) {
      case 'discussion_topic':
        return 'Discussion';

      case 'online_quiz':
        return 'Quiz';
    }
  }

  return 'Assignment';
};
export const getMissingItemsText = (isExpanded, count) => {
  return isExpanded ? formatMessage(`{
                  count, plural,
                  one {Hide # missing item}
                  other {Hide # missing items}
               }`, {
    count
  }) : formatMessage(`{
                  count, plural,
                  one {Show # missing item}
                  other {Show # missing items}
               }`, {
    count
  });
};

function MissingAssignment({
  id,
  name,
  points_possible,
  html_url,
  due_at,
  submission_types,
  timeZone,
  course = {},
  responsiveSize = 'large'
}) {
  return /*#__PURE__*/React.createElement(PlannerItem, {
    id: id,
    uniqueId: id,
    title: name,
    courseName: course.originalName,
    color: course.color,
    points: points_possible,
    html_url: html_url,
    date: due_at && moment(due_at).tz(timeZone),
    timeZone: timeZone,
    associated_item: convertSubmissionType(submission_types),
    simplifiedControls: true,
    isMissingItem: true,
    responsiveSize: responsiveSize
  });
}

MissingAssignment.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  points_possible: number.isRequired,
  html_url: string.isRequired,
  due_at: string,
  submission_types: arrayOf(string).isRequired,
  timeZone: string.isRequired,
  course: shape(courseShape),
  responsiveSize: sizeShape
}; // Themeable doesn't support pure functional components
// and redux's connect throws an error with PureComponent
// eslint-disable-next-line react/prefer-stateless-function

export class MissingAssignments extends Component {
  render() {
    const _this$props = this.props,
          courses = _this$props.courses,
          opportunities = _this$props.opportunities,
          timeZone = _this$props.timeZone,
          toggleMissing = _this$props.toggleMissing,
          _this$props$responsiv = _this$props.responsiveSize,
          responsiveSize = _this$props$responsiv === void 0 ? 'large' : _this$props$responsiv;
    const _opportunities$items = opportunities.items,
          items = _opportunities$items === void 0 ? [] : _opportunities$items,
          expanded = opportunities.missingItemsExpanded;

    if (items.length === 0) {
      return null;
    }

    return /*#__PURE__*/React.createElement("section", {
      className: classnames(styles.root, styles[responsiveSize])
    }, !expanded && /*#__PURE__*/React.createElement("div", {
      className: styles.icon,
      "data-testid": "warning-icon"
    }, /*#__PURE__*/React.createElement(View, {
      margin: "0 small 0 0"
    }, /*#__PURE__*/React.createElement(PresentationContent, null, /*#__PURE__*/React.createElement(IconWarningLine, {
      color: "error"
    })))), /*#__PURE__*/React.createElement(ToggleDetails, {
      id: "MissingAssignments",
      expanded: expanded,
      "data-testid": "missing-item-info",
      fluidWidth: true,
      onToggle: () => toggleMissing(),
      summary: /*#__PURE__*/React.createElement(View, {
        "data-testid": "missing-data",
        margin: "0 0 0 x-small"
      }, getMissingItemsText(expanded, items.length))
    }, /*#__PURE__*/React.createElement(View, {
      as: "div",
      borderWidth: "small none none none"
    }, items.map(opp => /*#__PURE__*/React.createElement(MissingAssignment, Object.assign({
      key: opp.id
    }, opp, {
      course: courses.find(c => c.id === opp.course_id),
      timeZone: timeZone
    }))))));
  }

}
MissingAssignments.propTypes = {
  courses: arrayOf(shape(courseShape)).isRequired,
  opportunities: shape(opportunityShape).isRequired,
  timeZone: string.isRequired,
  toggleMissing: func.isRequired,
  responsiveSize: string
};

const mapStateToProps = ({
  courses,
  opportunities
}) => ({
  courses,
  opportunities
});

const mapDispatchToProps = {
  toggleMissing: toggleMissingItems
};
const ThemeableMissingAssignments = themeable(theme, styles)(MissingAssignments);
const ConnectedMissingAssignments = connect(mapStateToProps, mapDispatchToProps)(ThemeableMissingAssignments);
ConnectedMissingAssignments.theme = ThemeableMissingAssignments.theme;
export default ConnectedMissingAssignments;