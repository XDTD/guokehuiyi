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
import { themeable } from '@instructure/ui-themeable';
import { bool, string, arrayOf, shape } from 'prop-types';
import { View } from '@instructure/ui-view';
import { Heading } from '@instructure/ui-heading';
import { Text } from '@instructure/ui-text';
import { Spinner } from '@instructure/ui-spinner';
import { Button } from '@instructure/ui-buttons';
import { courseShape } from '../plannerPropTypes';
import formatMessage from '../../format-message';
import ErrorAlert from '../ErrorAlert';
const styles = {
  componentId: 'cMptf',
  template: function (theme) {
    return `



.GradesDisplay-styles__course {
  border-bottom-color: ${theme.courseColor || 'inherit'}
}
`;
  },
  'course': 'GradesDisplay-styles__course'
};
import theme from './theme';
export class GradesDisplay extends React.Component {
  scoreString(score) {
    const fixedScore = parseFloat(score); // eslint-disable-next-line no-restricted-globals

    if (isNaN(fixedScore)) return formatMessage('No Grade');
    return `${fixedScore.toFixed(2)}%`;
  }

  renderSpinner() {
    return /*#__PURE__*/React.createElement(View, {
      as: "div",
      textAlign: "center",
      margin: "0 0 large 0"
    }, /*#__PURE__*/React.createElement(Spinner, {
      renderTitle: () => formatMessage('Grades are loading'),
      size: "small"
    }));
  }

  renderCaveat() {
    if (this.props.loading) return;

    if (this.props.courses.some(course => course.hasGradingPeriods)) {
      return /*#__PURE__*/React.createElement(View, {
        as: "div",
        textAlign: "center"
      }, /*#__PURE__*/React.createElement(Text, {
        size: "x-small",
        fontStyle: "italic"
      }, formatMessage('*Only most recent grading period shown.')));
    }
  }

  renderGrades() {
    if (this.props.loadingError) return;
    return this.props.courses.map(course => {
      const courseNameStyles = {
        borderBottom: `solid thin`,
        borderBottomColor: course.color
      };
      return /*#__PURE__*/React.createElement(View, {
        key: course.id,
        as: "div",
        margin: "0 0 large 0"
      }, /*#__PURE__*/React.createElement("div", {
        className: styles.course,
        style: courseNameStyles
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "link",
        size: "small",
        theme: {
          smallPaddingHorizontal: '0',
          smallHeight: 'normal'
        },
        href: `${course.href}/grades`
      }, /*#__PURE__*/React.createElement(Text, {
        transform: "uppercase"
      }, course.shortName))), /*#__PURE__*/React.createElement(Text, {
        as: "div",
        size: "large",
        weight: "light"
      }, this.scoreString(course.score)));
    });
  }

  renderError() {
    if (this.props.loadingError) {
      return /*#__PURE__*/React.createElement(ErrorAlert, {
        error: this.props.loadingError
      }, formatMessage('Error loading grades'));
    }
  }

  render() {
    return /*#__PURE__*/React.createElement(View, null, this.renderError(), /*#__PURE__*/React.createElement(View, {
      textAlign: "center"
    }, /*#__PURE__*/React.createElement(Heading, {
      level: "h2",
      margin: "0 0 large 0"
    }, /*#__PURE__*/React.createElement(Text, {
      size: "medium",
      weight: "bold"
    }, formatMessage('My Grades')))), this.props.loading ? this.renderSpinner() : this.renderGrades(), this.renderCaveat());
  }

}
GradesDisplay.propTypes = {
  loading: bool,
  loadingError: string,
  courses: arrayOf(shape(courseShape)).isRequired
};
GradesDisplay.defaultProps = {
  loading: false
};
export default themeable(theme, styles)(GradesDisplay);