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
import { scopeTab } from '@instructure/ui-a11y-utils';
import { AccessibleContent } from '@instructure/ui-a11y-content';
import keycode from 'keycode';
import { Tabs } from '@instructure/ui-tabs';
import { CloseButton } from '@instructure/ui-buttons';
import { array, string, func, number, oneOfType } from 'prop-types';
import Opportunity from '../Opportunity';
import { specialFallbackFocusId } from '../../dynamic-ui/util';
import { animatable } from '../../dynamic-ui';
import formatMessage from '../../format-message';
const styles = {
  componentId: 'duOmM',
  template: function (theme) {
    return `

.Opportunities-styles__root {
  padding: ${theme.padding || 'inherit'};
  max-height: 36rem;
  overflow: auto;
  box-sizing: border-box;
  width: 20rem;
  max-width: 100%;
  line-height: ${theme.lineHeight || 'inherit'};
}

.Opportunities-styles__header {
  border-bottom: ${theme.borderBottom || 'inherit'};
  text-align: center;
  margin-bottom: 0.25rem;
}

[dir="ltr"] .Opportunities-styles__header {
  text-align: center;
}

[dir="rtl"] .Opportunities-styles__header {
  text-align: center;
}

.Opportunities-styles__list {
  list-style-type: none;
  color: ${theme.color || 'inherit'};
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.Opportunities-styles__item {
  margin: 0;
  padding: 0;
}

.Opportunities-styles__item:not(:last-of-type) {
    margin-bottom: ${theme.itemMargin || 'inherit'};
  }

.Opportunities-styles__item:not(:first-of-type) {
    border-top: ${theme.borderWidth || 'inherit'} ${theme.borderStyle || 'inherit'} ${theme.borderColor || 'inherit'};
    padding-top: ${theme.itemPadding || 'inherit'};
  }


.Opportunities-styles__loading {
  text-align: center;
}


[dir="ltr"] .Opportunities-styles__loading {
  text-align: center;
}


[dir="rtl"] .Opportunities-styles__loading {
  text-align: center;
}

#Opportunities-styles__tabs_container > div:first-child {
  display: inline-block;
}
`;
  },
  'root': 'Opportunities-styles__root',
  'header': 'Opportunities-styles__header',
  'list': 'Opportunities-styles__list',
  'item': 'Opportunities-styles__item',
  'loading': 'Opportunities-styles__loading',
  'tabs_container': 'Opportunities-styles__tabs_container'
};
import theme from './theme';
export const OPPORTUNITY_SPECIAL_FALLBACK_FOCUS_ID = specialFallbackFocusId('opportunity');
export class Opportunities extends Component {
  constructor(props) {
    super(props);

    this.handleTabChange = (event, {
      index,
      id
    }) => {
      this.setState({
        selectedIndex: index
      });
    };

    this.handleKeyDown = event => {
      if (event.keyCode === keycode.codes.tab) {
        scopeTab(this._content, event);
      }

      if (event.keyCode === keycode.codes.escape) {
        event.preventDefault();
        this.props.togglePopover();
      }
    };

    this.courseAttr = (id, attr) => {
      const course = this.props.courses.find(c => c.id === id) || {};
      return course[attr];
    };

    this.getTabPanelContentDivRefFromList = ol => {
      this.tabPanelContentDiv = ol && ol.parentElement;
    };

    this.state = {
      innerMaxHeight: 'auto',
      selectedIndex: 0
    };
    this.closeButtonRef = null;
    this.tabPanelContentDiv = null;
  }

  componentDidMount() {
    this.props.registerAnimatable('opportunity', this, -1, [OPPORTUNITY_SPECIAL_FALLBACK_FOCUS_ID]);
    this.setMaxHeight(this.props);
    this.closeButtonRef.focus();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setMaxHeight(nextProps);
  }

  componentWillUnmount() {
    this.props.deregisterAnimatable('opportunity', this, [OPPORTUNITY_SPECIAL_FALLBACK_FOCUS_ID]);
  }

  getFocusable() {
    return this.closeButtonRef;
  }

  // the only place on the <Tabs> hierarchy where we can set a maxHeight is on
  // TabPanel, which puts the style on it's child content-holding div.
  // To keep the scrolling area w/in the TabPanel's content so that
  // the <Tabs> doesn't outgrow its parent and the user winds up scrolling the tabs
  // out of view, we need to subtract out how much space the <Tabs>'s boilerplate takes
  // up to set the TabPanel's maxHeight appropriately.
  // Unfortunately TabPanel's tabRef returns a ref to the Tab, and TabPanel's ref returns
  // a ref to the TabPanel component. Even if we get it's div, it doesn't have it's padding
  // at the time when the component mounts and our calculation is off.
  setMaxHeight(props) {
    let mxht = 'auto';

    if (this.tabPanelContentDiv) {
      const style = window.getComputedStyle(this.tabPanelContentDiv);
      const padding = parseInt(style['padding-top'], 10) + parseInt(style['padding-bottom'], 10);
      const border = parseInt(style['border-top-width'], 10) + parseInt(style['border-bottom-width'], 10);
      mxht = `${props.maxHeight - this.tabPanelContentDiv.offsetTop - padding - border}px`;
    }

    this.setState({
      innerMaxHeight: mxht
    });
  } // the parent of the <ol> holding the opportunities is the div TabPanel will assign
  // TabPanel's maxHeight prop to.


  renderOpportunities(opportunities, dismissed) {
    return /*#__PURE__*/React.createElement("ol", {
      className: styles.list,
      ref: this.getTabPanelContentDivRefFromList
    }, opportunities.map((opportunity, oppIndex) => /*#__PURE__*/React.createElement("li", {
      key: opportunity.id,
      className: styles.item
    }, /*#__PURE__*/React.createElement(Opportunity, {
      id: opportunity.id,
      dueAt: opportunity.due_at,
      points: opportunity.points_possible,
      courseName: this.courseAttr(opportunity.course_id, 'shortName'),
      opportunityTitle: opportunity.name,
      timeZone: this.props.timeZone,
      dismiss: dismissed ? null : this.props.dismiss,
      plannerOverride: opportunity.planner_override,
      url: opportunity.html_url,
      animatableIndex: oppIndex
    }))));
  }

  renderNewOpportunities() {
    return this.props.newOpportunities.length ? this.renderOpportunities(this.props.newOpportunities, false) : /*#__PURE__*/React.createElement("div", null, formatMessage('Nothing new needs attention.'));
  }

  renderDismissedOpportunities() {
    return this.props.dismissedOpportunities.length ? this.renderOpportunities(this.props.dismissedOpportunities, true) : /*#__PURE__*/React.createElement("div", null, formatMessage('Nothing here needs attention.'));
  }

  renderTitle(which) {
    const srtitle = which === 'new' ? formatMessage('New Opportunities') : formatMessage('Dismissed Opportunities');
    const title = which === 'new' ? formatMessage('New') : formatMessage('Dismissed');
    return /*#__PURE__*/React.createElement(AccessibleContent, {
      alt: srtitle
    }, title);
  }

  renderCloseButton() {
    return /*#__PURE__*/React.createElement(CloseButton, {
      placement: "end",
      offset: "x-small",
      variant: "icon",
      onClick: this.props.togglePopover,
      buttonRef: el => {
        this.closeButtonRef = el;
      }
    }, formatMessage('Close Opportunity Center popup'));
  }

  render() {
    const selectedIndex = this.state.selectedIndex;
    return /*#__PURE__*/React.createElement("div", {
      id: "opportunities_parent",
      className: styles.root,
      onKeyDown: this.handleKeyDown,
      ref: c => {
        this._content = c;
      },
      style: {
        maxHeight: this.props.maxHeight
      }
    }, this.renderCloseButton(), /*#__PURE__*/React.createElement(Tabs, {
      id: styles.tabs_container,
      onRequestTabChange: this.handleTabChange
    }, /*#__PURE__*/React.createElement(Tabs.Panel, {
      renderTitle: this.renderTitle('new'),
      maxHeight: this.state.innerMaxHeight,
      isSelected: selectedIndex === 0
    }, this.renderNewOpportunities()), /*#__PURE__*/React.createElement(Tabs.Panel, {
      renderTitle: this.renderTitle('dismissed'),
      maxHeight: this.state.innerMaxHeight,
      isSelected: selectedIndex === 1
    }, this.renderDismissedOpportunities())));
  }

}
Opportunities.propTypes = {
  newOpportunities: array.isRequired,
  dismissedOpportunities: array.isRequired,
  timeZone: string.isRequired,
  courses: array.isRequired,
  dismiss: func.isRequired,
  togglePopover: func.isRequired,
  maxHeight: oneOfType([number, string]),
  registerAnimatable: func,
  deregisterAnimatable: func
};
Opportunities.defaultProps = {
  maxHeight: 'none',
  registerAnimatable: () => {},
  deregisterAnimatable: () => {}
};
export default animatable(themeable(theme, styles)(Opportunities));