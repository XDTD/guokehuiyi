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
import { themeable } from '@instructure/ui-themeable';
import moment from 'moment-timezone';
import { Button } from '@instructure/ui-buttons';
import { Pill } from '@instructure/ui-pill';
import { PresentationContent, ScreenReaderContent } from '@instructure/ui-a11y-content';
import { IconXLine } from '@instructure/ui-icons';
import { string, number, func, object } from 'prop-types';
import { getFullDateAndTime } from '../../utilities/dateUtils';
import formatMessage from '../../format-message';
import { animatable } from '../../dynamic-ui';
const styles = {
  componentId: 'eAJaG',
  template: function (theme) {
    return `

.Opportunity-styles__root {
  position: relative;
  font-size: ${theme.fontSize || 'inherit'};
  font-family: ${theme.fontFamily || 'inherit'};
  font-weight: ${theme.fontWeight || 'inherit'};
  color: ${theme.color || 'inherit'};
  background: ${theme.background || 'inherit'};
  padding: ${theme.padding || 'inherit'};
  box-sizing: border-box;
  line-height: ${theme.lineHeight || 'inherit'};
}

.Opportunity-styles__oppNameAndTitle {
  max-width: 16.5rem;
}
.Opportunity-styles__oppName {
  box-sizing: border-box;
  min-width: 1px;
  flex: 1;
  padding-top: ${theme.namePaddingTop || 'inherit'};
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  color: ${theme.secondaryColor || 'inherit'};
  font-size: ${theme.nameFontSize || 'inherit'};
  margin-right: ${theme.closeButtonIconSize || 'inherit'};
}

.Opportunity-styles__title {
  margin-bottom: ${theme.titleMargin || 'inherit'};
}

.Opportunity-styles__close {
  position: absolute;
  top: 0;
  offset-inline-end: 0;
}

[dir="ltr"] .Opportunity-styles__close {
  right: 0;
}

[dir="rtl"] .Opportunity-styles__close {
  left: 0;
}

.Opportunity-styles__oppName,
.Opportunity-styles__title {
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
          hyphens: auto;
}

.Opportunity-styles__footer {
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-inline-end: ${theme.footerPadding || 'inherit'};
}

[dir="ltr"] .Opportunity-styles__footer {
  padding-right: ${theme.footerPadding || 'inherit'};
}

[dir="rtl"] .Opportunity-styles__footer {
  padding-left: ${theme.footerPadding || 'inherit'};
}

.Opportunity-styles__status {
  box-sizing: border-box;
  min-width: 1px;
  flex-grow: 1;
  padding-inline-end: ${theme.statusPadding || 'inherit'};
}

[dir="ltr"] .Opportunity-styles__status {
  padding-right: ${theme.statusPadding || 'inherit'};
}

[dir="rtl"] .Opportunity-styles__status {
  padding-left: ${theme.statusPadding || 'inherit'};
}

.Opportunity-styles__points {
  box-sizing: border-box;
  min-width: 1px;
  flex-shrink: 0;
  text-align: end;
  color: ${theme.secondaryColor || 'inherit'};
  text-transform: uppercase;
  font-size: ${theme.pointsFontSize || 'inherit'};
  line-height: ${theme.pointsLineHeight || 'inherit'};
}

[dir="ltr"] .Opportunity-styles__points {
  text-align: right;
}

[dir="rtl"] .Opportunity-styles__points {
  text-align: left;
}

.Opportunity-styles__pointsNumber {
  display: block;
  font-size: ${theme.pointsNumberFontSize || 'inherit'};
}

.Opportunity-styles__due {
  margin-top: ${theme.dueMargin || 'inherit'};
  font-size: ${theme.dueFontSize || 'inherit'};
  color: ${theme.secondaryColor || 'inherit'};
}

.Opportunity-styles__dueText {
  font-weight: ${theme.dueTextFontWeight || 'inherit'};
}
`;
  },
  'root': 'Opportunity-styles__root',
  'oppNameAndTitle': 'Opportunity-styles__oppNameAndTitle',
  'oppName': 'Opportunity-styles__oppName',
  'title': 'Opportunity-styles__title',
  'close': 'Opportunity-styles__close',
  'footer': 'Opportunity-styles__footer',
  'status': 'Opportunity-styles__status',
  'points': 'Opportunity-styles__points',
  'pointsNumber': 'Opportunity-styles__pointsNumber',
  'due': 'Opportunity-styles__due',
  'dueText': 'Opportunity-styles__dueText'
};
import theme from './theme';
export class Opportunity extends Component {
  constructor(props) {
    super(props);

    this.linkRef = ref => {
      this.link = ref;
    };

    this.dismiss = () => {
      if (this.props.dismiss) {
        this.props.dismiss(this.props.id, this.props.plannerOverride);
      }
    };

    const tzMomentizedDate = moment.tz(props.dueAt, props.timeZone);
    this.fullDate = getFullDateAndTime(tzMomentizedDate);
  }

  componentDidMount() {
    this.props.registerAnimatable('opportunity', this, this.props.animatableIndex, [this.props.id]);
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    this.props.deregisterAnimatable('opportunity', this, [this.props.id]);
    this.props.registerAnimatable('opportunity', this, newProps.animatableIndex, [newProps.id]);
  }

  componentWillUnmount() {
    this.props.deregisterAnimatable('opportunity', this, [this.props.id]);
  }

  getFocusable() {
    return this.link;
  }

  renderButton() {
    const isDismissed = this.props.plannerOverride && this.props.plannerOverride.dismissed;
    return /*#__PURE__*/React.createElement("div", {
      className: styles.close
    }, isDismissed ? null : /*#__PURE__*/React.createElement(Button, {
      onClick: this.dismiss,
      variant: "icon",
      icon: IconXLine,
      size: "small",
      title: formatMessage('Dismiss {opportunityName}', {
        opportunityName: this.props.opportunityTitle
      })
    }, /*#__PURE__*/React.createElement(ScreenReaderContent, null, formatMessage('Dismiss {opportunityName}', {
      opportunityName: this.props.opportunityTitle
    }))));
  }

  renderPoints() {
    if (typeof this.props.points !== 'number') {
      return /*#__PURE__*/React.createElement(ScreenReaderContent, null, formatMessage('There are no points associated with this item'));
    }

    return /*#__PURE__*/React.createElement("div", {
      className: styles.points
    }, /*#__PURE__*/React.createElement(ScreenReaderContent, null, formatMessage('{points} points', {
      points: this.props.points
    })), /*#__PURE__*/React.createElement(PresentationContent, null, /*#__PURE__*/React.createElement("span", {
      className: styles.pointsNumber
    }, this.props.points), formatMessage('points')));
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: styles.root
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.oppNameAndTitle
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.oppName
    }, this.props.courseName), /*#__PURE__*/React.createElement("div", {
      className: styles.title
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      theme: {
        mediumPaddingHorizontal: '0',
        mediumHeight: 'normal'
      },
      href: this.props.url,
      buttonRef: this.linkRef
    }, this.props.opportunityTitle))), /*#__PURE__*/React.createElement("div", {
      className: styles.footer
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.status
    }, /*#__PURE__*/React.createElement(Pill, {
      text: formatMessage('Missing'),
      variant: "danger"
    }), /*#__PURE__*/React.createElement("div", {
      className: styles.due
    }, /*#__PURE__*/React.createElement("span", {
      className: styles.dueText
    }, formatMessage('Due:')), " ", this.fullDate)), this.renderPoints()), this.renderButton());
  }

}
Opportunity.propTypes = {
  id: string.isRequired,
  dueAt: string.isRequired,
  points: number,
  courseName: string.isRequired,
  opportunityTitle: string.isRequired,
  timeZone: string.isRequired,
  url: string.isRequired,
  dismiss: func,
  plannerOverride: object,
  registerAnimatable: func,
  deregisterAnimatable: func,
  animatableIndex: number
};
Opportunity.defaultProps = {
  registerAnimatable: () => {},
  deregisterAnimatable: () => {},
  dismiss: () => {}
};
export default animatable(themeable(theme, styles)(Opportunity));