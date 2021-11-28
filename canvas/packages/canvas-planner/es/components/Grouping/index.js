import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

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
import classnames from 'classnames';
import { partition } from 'lodash';
import { arrayOf, bool, string, number, shape, func } from 'prop-types';
import moment from 'moment-timezone';
import { userShape, itemShape, sizeShape } from '../plannerPropTypes';
const styles = {
  componentId: 'bDBte',
  template: function (theme) {
    return `



.Grouping-styles__root {
  font-family: ${theme.fontFamily || 'inherit'};
  margin: ${theme.margin || 'inherit'};
  border-color: ${theme.groupColor || 'inherit'};
  color: ${theme.groupColor || 'inherit'};
  line-height: ${theme.lineHeight || 'inherit'};
  position: relative;
  display: flex;
}

.Grouping-styles__title {
  position: relative;
  z-index: 1;
  flex: 1;
  box-sizing: border-box;
  text-align: center;
  padding: ${theme.titlePadding || 'inherit'};
  background-color: ${theme.titleBackground || 'inherit'};
  text-transform: ${theme.titleTextTransform || 'inherit'};
  -webkit-text-decoration: ${theme.titleTextDecoration || 'inherit'};
          text-decoration: ${theme.titleTextDecoration || 'inherit'};
  font-size: ${theme.titleFontSize || 'inherit'};
  font-weight: ${theme.titleFontWeight || 'inherit'};
  color: ${theme.titleColor || 'inherit'};
  border-top-left-radius: 0.125rem;

  
  min-width: 1px;
  overflow: hidden;
  max-height: 3rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
          hyphens: auto;
}

[dir="ltr"] .Grouping-styles__title {
  text-align: center;
}

[dir="rtl"] .Grouping-styles__title {
  text-align: center;
}

.Grouping-styles__title::after {
    content: "";
    width: 100%;
    height: ${theme.titleOverflowGradientHeight || 'inherit'};
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${theme.titleBackground || 'inherit'} 100%);
  }

.Grouping-styles__hero {
  position: relative;
  display: flex;
  flex: 0 0 ${theme.heroWidth || 'inherit'};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  outline: none;
  padding: ${theme.heroPadding || 'inherit'};
  text-decoration: none;

  
  min-width: 1px;
}

.Grouping-styles__hero .Grouping-styles__groupingName {
    -webkit-text-decoration: ${theme.heroLinkTextDecoration || 'inherit'};
            text-decoration: ${theme.heroLinkTextDecoration || 'inherit'};
  }

.Grouping-styles__hero,
.Grouping-styles__overlay {
  border-bottom-inline-start-radius: ${theme.heroBorderRadius || 'inherit'};
  border-top-inline-start-radius: ${theme.heroBorderRadius || 'inherit'};
}

[dir="ltr"] .Grouping-styles__hero,
[dir="ltr"] .Grouping-styles__overlay {
  border-bottom-left-radius: ${theme.heroBorderRadius || 'inherit'};
  border-top-left-radius: ${theme.heroBorderRadius || 'inherit'};
}

[dir="rtl"] .Grouping-styles__hero,
[dir="rtl"] .Grouping-styles__overlay {
  border-bottom-right-radius: ${theme.heroBorderRadius || 'inherit'};
  border-top-right-radius: ${theme.heroBorderRadius || 'inherit'};
}

.Grouping-styles__heroHover:focus,
  .Grouping-styles__heroHover:hover {
    text-decoration: none;
  }

.Grouping-styles__heroHover:focus .Grouping-styles__title, .Grouping-styles__heroHover:hover .Grouping-styles__title {
      -webkit-text-decoration: ${theme.titleTextDecorationHover || 'inherit'};
              text-decoration: ${theme.titleTextDecorationHover || 'inherit'};
    }

.Grouping-styles__overlay {
  background-color: ${theme.groupColor || 'inherit'};
  opacity: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.Grouping-styles__overlay.Grouping-styles__withImage {
    opacity: ${theme.overlayOpacity || 'inherit'};
  }


.Grouping-styles__items {
  flex: 1;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-top: ${theme.borderTopWidth || 'inherit'} solid;
  border-color: ${theme.groupColor || 'inherit'};
  color: ${theme.groupColor || 'inherit'};
  min-width: 1px;
}

.Grouping-styles__medium.Grouping-styles__root, .Grouping-styles__small.Grouping-styles__root {
    display: block;
    margin: 0;
  }

.Grouping-styles__medium .Grouping-styles__hero, .Grouping-styles__medium .Grouping-styles__overlay, .Grouping-styles__small .Grouping-styles__hero, .Grouping-styles__small .Grouping-styles__overlay {
    border-radius: 0;
    background-color: transparent;
  }

.Grouping-styles__medium .Grouping-styles__hero, .Grouping-styles__small .Grouping-styles__hero {
    display: block;
    flex: none;
    min-height: unset;
    line-height: 2rem;
  }

.Grouping-styles__medium .Grouping-styles__title, .Grouping-styles__small .Grouping-styles__title {
    font-size: ${theme.titleFontSizeTablet || 'inherit'};
    padding-inline-start: 0;
  }

[dir="ltr"] .Grouping-styles__medium .Grouping-styles__title,
[dir="ltr"] .Grouping-styles__small .Grouping-styles__title {
    padding-left: 0;
  }

[dir="rtl"] .Grouping-styles__medium .Grouping-styles__title,
[dir="rtl"] .Grouping-styles__small .Grouping-styles__title {
    padding-right: 0;
  }

.Grouping-styles__medium .Grouping-styles__items, .Grouping-styles__small .Grouping-styles__items {
    border-top-width: ${theme.borderTopWidthTablet || 'inherit'};
  }
`;
  },
  'root': 'Grouping-styles__root',
  'title': 'Grouping-styles__title',
  'hero': 'Grouping-styles__hero',
  'groupingName': 'Grouping-styles__groupingName',
  'overlay': 'Grouping-styles__overlay',
  'heroHover': 'Grouping-styles__heroHover',
  'withImage': 'Grouping-styles__withImage',
  'items': 'Grouping-styles__items',
  'medium': 'Grouping-styles__medium',
  'small': 'Grouping-styles__small'
};
import theme from './theme';
import PlannerItem from '../PlannerItem';
import CompletedItemsFacade from '../CompletedItemsFacade';
import NotificationBadge, { MissingIndicator, NewActivityIndicator } from '../NotificationBadge';
import formatMessage from '../../format-message';
import { getBadgesForItem, getBadgesForItems, showPillForOverdueStatus } from '../../utilities/statusUtils';
import { animatable } from '../../dynamic-ui';
export class Grouping extends Component {
  constructor(props) {
    super(props);

    this.groupingLinkRef = link => {
      this.groupingLink = link;
    };

    this.getFocusable = () => {
      return this.groupingLink;
    };

    this.handleFacadeClick = e => {
      if (e) {
        e.preventDefault();
      }

      this.setState(() => ({
        showCompletedItems: true
      }), () => {
        if (this.groupingLink) this.groupingLink.focus();
      });
    };

    this.state = {
      showCompletedItems: false,
      badgeMap: this.setupItemBadgeMap(props.items)
    };
  }

  componentDidMount() {
    this.props.registerAnimatable('group', this, this.props.animatableIndex, this.itemUniqueIds());
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    this.props.deregisterAnimatable('group', this, this.itemUniqueIds());
    this.props.registerAnimatable('group', this, newProps.animatableIndex, this.itemUniqueIds(newProps));
  }

  componentWillUnmount() {
    this.props.deregisterAnimatable('group', this, this.itemUniqueIds());
  }

  itemUniqueIds(props = this.props) {
    return props.items.map(item => item.uniqueId);
  }

  setupItemBadgeMap(items) {
    const mapping = {};
    items.forEach(item => {
      const badges = getBadgesForItem(item);
      if (badges.length) mapping[item.id] = badges;
    });
    return mapping;
  }

  getScrollable() {
    return this.groupingLink || this.plannerNoteHero;
  }

  getLayout() {
    return this.props.responsiveSize;
  }

  showNotificationBadgeOnItem() {
    return this.getLayout() !== 'large' && !this.props.simplifiedControls;
  }

  renderItemsAndFacade(items) {
    const _partition = partition(items, item => item.completed && !item.show),
          _partition2 = _slicedToArray(_partition, 2),
          completedItems = _partition2[0],
          otherItems = _partition2[1];

    let itemsToRender = otherItems;

    if (this.state.showCompletedItems) {
      itemsToRender = items;
    }

    const componentsToRender = this.renderItems(itemsToRender);
    componentsToRender.push(this.renderFacade(completedItems, this.props.animatableIndex * 100 + itemsToRender.length + 1));
    return componentsToRender;
  }

  renderItems(items) {
    return items.map((item, itemIndex) => /*#__PURE__*/React.createElement("li", {
      className: styles.item,
      key: item.uniqueId
    }, /*#__PURE__*/React.createElement(PlannerItem, {
      color: this.props.color,
      completed: item.completed,
      overrideId: item.overrideId,
      id: item.id,
      uniqueId: item.uniqueId,
      animatableIndex: this.props.animatableIndex * 100 + itemIndex + 1,
      courseName: this.props.title,
      context: item.context || {},
      date: moment(item.date).tz(this.props.timeZone),
      associated_item: item.type,
      title: item.title,
      points: item.points,
      updateTodo: this.props.updateTodo,
      html_url: item.html_url,
      toggleCompletion: () => this.props.toggleCompletion(item),
      badges: this.state.badgeMap[item.id],
      details: item.details,
      toggleAPIPending: item.toggleAPIPending,
      status: item.status,
      newActivity: item.newActivity,
      allDay: item.allDay,
      showNotificationBadge: this.showNotificationBadgeOnItem(),
      currentUser: this.props.currentUser,
      feedback: item.feedback,
      location: item.location,
      address: item.address,
      endTime: item.endTime,
      dateStyle: item.dateStyle,
      timeZone: this.props.timeZone,
      simplifiedControls: this.props.simplifiedControls,
      readOnly: item.readOnly,
      responsiveSize: this.props.responsiveSize,
      onlineMeetingURL: item.onlineMeetingURL
    })));
  }

  renderFacade(completedItems, animatableIndex) {
    if (!this.state.showCompletedItems && completedItems.length > 0) {
      const theDay = completedItems[0].date.clone();
      theDay.startOf('day');
      let missing = false;
      let newActivity = false;
      const completedItemIds = completedItems.map(item => {
        if (showPillForOverdueStatus('missing', item)) missing = true;
        if (item.newActivity) newActivity = true;
        return item.uniqueId;
      });
      let notificationBadge = 'none';

      if (this.showNotificationBadgeOnItem()) {
        if (newActivity) {
          notificationBadge = 'newActivity';
        } else if (missing) {
          notificationBadge = 'missing';
        }
      }

      return /*#__PURE__*/React.createElement("li", {
        className: styles.item,
        key: "completed"
      }, /*#__PURE__*/React.createElement(CompletedItemsFacade, {
        onClick: this.handleFacadeClick,
        itemCount: completedItems.length,
        badges: getBadgesForItems(completedItems),
        animatableIndex: animatableIndex,
        animatableItemIds: completedItemIds,
        notificationBadge: notificationBadge,
        theme: {
          labelColor: this.props.simplifiedControls ? void 0 : this.props.color
        },
        date: theDay,
        responsiveSize: this.props.responsiveSize
      }));
    }

    return null;
  }

  renderToDoText() {
    return formatMessage('To Do');
  }

  renderNotificationBadge() {
    // narrower layout puts the indicator next to the actual items
    if (this.getLayout() !== 'large' || this.props.simplifiedControls) {
      return null;
    }

    let missing = false;
    const newItem = this.props.items.find(item => {
      if (showPillForOverdueStatus('missing', item)) missing = true;
      return item.newActivity;
    });

    if (newItem || missing) {
      const IndicatorComponent = newItem ? NewActivityIndicator : MissingIndicator;
      const badgeMessage = this.props.title ? this.props.title : this.renderToDoText();
      return /*#__PURE__*/React.createElement(NotificationBadge, null, /*#__PURE__*/React.createElement(IndicatorComponent, {
        title: badgeMessage,
        itemIds: this.itemUniqueIds(),
        animatableIndex: this.props.animatableIndex,
        getFocusable: this.getFocusable
      }));
    } else {
      return /*#__PURE__*/React.createElement(NotificationBadge, null);
    }
  } // I wouldn't have broken the background and title apart, but wrapping them in a container span breaks styling


  renderGroupLinkBackground() {
    const clazz = classnames({
      [styles.overlay]: true,
      [styles.withImage]: this.props.image_url
    });
    const style = this.getLayout() === 'large' ? {
      backgroundColor: this.props.color
    } : null;
    return /*#__PURE__*/React.createElement("span", {
      className: clazz,
      style: style
    });
  }

  renderGroupLinkTitle() {
    return /*#__PURE__*/React.createElement("span", {
      className: styles.title
    }, this.props.title || this.renderToDoText());
  }

  renderGroupLink() {
    if (this.props.singleCourseView) return null;

    if (!this.props.title || this.props.items[0].readOnly) {
      return /*#__PURE__*/React.createElement("span", {
        className: styles.hero,
        ref: elt => this.plannerNoteHero = elt
      }, this.renderGroupLinkBackground(), this.renderGroupLinkTitle());
    }

    const style = this.getLayout() === 'large' ? {
      backgroundImage: `url(${this.props.image_url || ''})`
    } : null;
    return /*#__PURE__*/React.createElement("a", {
      href: this.props.url || '#',
      ref: this.groupingLinkRef,
      className: `${styles.hero} ${styles.heroHover}`,
      style: style
    }, this.renderGroupLinkBackground(), this.renderGroupLinkTitle());
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: classnames(styles.root, styles[this.getLayout()], 'planner-grouping')
    }, this.renderNotificationBadge(), this.renderGroupLink(), /*#__PURE__*/React.createElement("ol", {
      className: styles.items,
      style: {
        borderColor: this.props.color
      }
    }, this.renderItemsAndFacade(this.props.items)));
  }

}
Grouping.propTypes = {
  items: arrayOf(shape(itemShape)).isRequired,
  animatableIndex: number,
  title: string,
  color: string,
  image_url: string,
  timeZone: string.isRequired,
  url: string,
  toggleCompletion: func,
  updateTodo: func,
  registerAnimatable: func,
  deregisterAnimatable: func,
  currentUser: shape(userShape),
  responsiveSize: sizeShape,
  simplifiedControls: bool,
  singleCourseView: bool
};
Grouping.defaultProps = {
  registerAnimatable: () => {},
  deregisterAnimatable: () => {},
  responsiveSize: 'large',
  simplifiedControls: false,
  singleCourseView: false
};
const ThemeableGrouping = themeable(theme, styles)(Grouping);
const AnimatableGrouping = animatable(ThemeableGrouping);
AnimatableGrouping.theme = ThemeableGrouping.theme;
export default AnimatableGrouping;