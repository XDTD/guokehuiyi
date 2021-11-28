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
import { momentObj } from 'react-moment-proptypes';
import { themeable } from '@instructure/ui-themeable';
import { ToggleDetails } from '@instructure/ui-toggle-details';
import { Pill } from '@instructure/ui-pill';
import { func, number, string, arrayOf, shape, oneOf } from 'prop-types';
import BadgeList from '../BadgeList';
import NotificationBadge, { MissingIndicator, NewActivityIndicator } from '../NotificationBadge';
import { badgeShape, sizeShape } from '../plannerPropTypes';
import { animatable } from '../../dynamic-ui';
const styles = {
  componentId: 'ekpsc',
  template: function (theme) {
    return `

.CompletedItemsFacade-styles__root {
  display: flex;
  flex:1;
  align-items: center;
  font-family: ${theme.fontFamily || 'inherit'};
  color: ${theme.color || 'inherit'};
  box-sizing: border-box;
  padding: ${theme.padding || 'inherit'};
  border-bottom: ${theme.borderWidth || 'inherit'} solid ${theme.borderColor || 'inherit'};
}

.CompletedItemsFacade-styles__activityIndicator {
  padding-inline-end: 0;
  padding-inline-start: 0;
}

[dir="ltr"] .CompletedItemsFacade-styles__activityIndicator {
  padding-right: 0;
  padding-left: 0;
}

[dir="rtl"] .CompletedItemsFacade-styles__activityIndicator {
  padding-left: 0;
  padding-right: 0;
}

.CompletedItemsFacade-styles__showLabel {
  margin-inline-start: ${theme.gutterWidth || 'inherit'};
}

[dir="ltr"] .CompletedItemsFacade-styles__showLabel {
  margin-left: ${theme.gutterWidth || 'inherit'};
}

[dir="rtl"] .CompletedItemsFacade-styles__showLabel {
  margin-right: ${theme.gutterWidth || 'inherit'};
}

.CompletedItemsFacade-styles__contentPrimary {
  flex: 0 0 50%;
  margin-bottom: 0;
  margin-inline-start: ${theme.gutterWidth || 'inherit'};
  box-sizing: border-box;
  min-width: 1px;
}

[dir="ltr"] .CompletedItemsFacade-styles__contentPrimary {
  margin-left: ${theme.gutterWidth || 'inherit'};
}

[dir="rtl"] .CompletedItemsFacade-styles__contentPrimary {
  margin-right: ${theme.gutterWidth || 'inherit'};
}

.CompletedItemsFacade-styles__contentSecondary {
  flex: 1 0;
  justify-content: flex-end;
  box-sizing: border-box;
  min-width: 1px;
  text-align: end;
}

[dir="ltr"] .CompletedItemsFacade-styles__contentSecondary {
  text-align: right;
}

[dir="rtl"] .CompletedItemsFacade-styles__contentSecondary {
  text-align: left;
}

.CompletedItemsFacade-styles__activityIndicator + .CompletedItemsFacade-styles__contentPrimary {
  margin-inline-start: calc(${theme.gutterWidth || 'inherit'} - ${theme.buttonPadding || 'inherit'} - ${theme.activityIndicatorWidth || 'inherit'});
}

[dir="ltr"] .CompletedItemsFacade-styles__activityIndicator + .CompletedItemsFacade-styles__contentPrimary {
  margin-left: calc(${theme.gutterWidth || 'inherit'} - ${theme.buttonPadding || 'inherit'} - ${theme.activityIndicatorWidth || 'inherit'});
}

[dir="rtl"] .CompletedItemsFacade-styles__activityIndicator + .CompletedItemsFacade-styles__contentPrimary {
  margin-right: calc(${theme.gutterWidth || 'inherit'} - ${theme.buttonPadding || 'inherit'} - ${theme.activityIndicatorWidth || 'inherit'});
}

.CompletedItemsFacade-styles__small {
  padding-left: 0;
  padding-right: 0;
}

.CompletedItemsFacade-styles__small .CompletedItemsFacade-styles__contentPrimary {
    margin-inline-start: 10px;
    flex-basis: auto;
  }

[dir="ltr"] .CompletedItemsFacade-styles__small .CompletedItemsFacade-styles__contentPrimary {
    margin-left: 10px;
  }

[dir="rtl"] .CompletedItemsFacade-styles__small .CompletedItemsFacade-styles__contentPrimary {
    margin-right: 10px;
  }

.CompletedItemsFacade-styles__small .CompletedItemsFacade-styles__contentSecondary {
    display: none;
  }
`;
  },
  'root': 'CompletedItemsFacade-styles__root',
  'activityIndicator': 'CompletedItemsFacade-styles__activityIndicator',
  'showLabel': 'CompletedItemsFacade-styles__showLabel',
  'contentPrimary': 'CompletedItemsFacade-styles__contentPrimary',
  'contentSecondary': 'CompletedItemsFacade-styles__contentSecondary',
  'small': 'CompletedItemsFacade-styles__small'
};
import theme from './theme';
import formatMessage from '../../format-message';
export class CompletedItemsFacade extends Component {
  constructor(...args) {
    super(...args);

    this.getFocusable = () => {
      return this.buttonRef;
    };
  }

  componentDidMount() {
    this.props.registerAnimatable('item', this, this.props.animatableIndex, this.props.animatableItemIds);
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    this.props.deregisterAnimatable('item', this, this.props.animatableItemIds);
    this.props.registerAnimatable('item', this, newProps.animatableIndex, newProps.animatableItemIds);
  }

  componentWillUnmount() {
    this.props.deregisterAnimatable('item', this, this.props.animatableItemIds);
  }

  getScrollable() {
    return this.rootDiv;
  }

  renderBadges() {
    if (this.props.badges.length) {
      return /*#__PURE__*/React.createElement(BadgeList, null, this.props.badges.map(b => /*#__PURE__*/React.createElement(Pill, {
        key: b.id,
        text: b.text,
        variant: b.variant
      })));
    }

    return null;
  }

  renderNotificationBadge() {
    if (this.props.notificationBadge === 'none') return /*#__PURE__*/React.createElement(NotificationBadge, {
      responsiveSize: this.props.responsiveSize
    });
    const isNewItem = this.props.notificationBadge === 'newActivity';
    const IndicatorComponent = isNewItem ? NewActivityIndicator : MissingIndicator;
    const badgeMessage = formatMessage('{items} completed {items, plural,=1 {item} other {items}}', {
      items: this.props.itemCount
    });
    return /*#__PURE__*/React.createElement(NotificationBadge, {
      responsiveSize: this.props.responsiveSize
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.activityIndicator
    }, /*#__PURE__*/React.createElement(IndicatorComponent, {
      title: badgeMessage,
      itemIds: this.props.animatableItemIds,
      animatableIndex: this.props.animatableIndex,
      getFocusable: this.getFocusable
    })));
  }

  render() {
    const theme = this.theme ? {
      textColor: this.theme.labelColor,
      iconColor: this.theme.labelColor,
      iconMargin: this.theme.gutterWidth
    } : null;
    return /*#__PURE__*/React.createElement("div", {
      className: classnames(styles.root, styles[this.props.responsiveSize], 'planner-completed-items'),
      ref: elt => this.rootDiv = elt
    }, this.renderNotificationBadge(), /*#__PURE__*/React.createElement("div", {
      className: styles.contentPrimary
    }, /*#__PURE__*/React.createElement(ToggleDetails, {
      ref: ref => this.buttonRef = ref,
      onToggle: this.props.onClick,
      summary: formatMessage(`{
                  count, plural,
                  one {Show # completed item}
                  other {Show # completed items}
                }`, {
        count: this.props.itemCount
      }),
      theme: theme
    }, "ToggleDetails requires a child")), /*#__PURE__*/React.createElement("div", {
      className: styles.contentSecondary
    }, this.renderBadges()));
  }

}
CompletedItemsFacade.propTypes = {
  onClick: func.isRequired,
  itemCount: number.isRequired,
  badges: arrayOf(shape(badgeShape)),
  animatableIndex: number,
  animatableItemIds: arrayOf(string),
  registerAnimatable: func,
  deregisterAnimatable: func,
  notificationBadge: oneOf(['none', 'newActivity', 'missing']),
  date: momentObj,
  // the scroll-to-today animation requires a date on each component in the planner
  responsiveSize: sizeShape
};
CompletedItemsFacade.defaultProps = {
  badges: [],
  registerAnimatable: () => {},
  deregisterAnimatable: () => {},
  notificationBadge: 'none',
  responsiveSize: 'large'
};
export default animatable(themeable(theme, styles)(CompletedItemsFacade));