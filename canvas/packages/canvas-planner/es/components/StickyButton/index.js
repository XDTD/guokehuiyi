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
import { themeable } from '@instructure/ui-themeable';
import { bool, func, node, number, string, oneOf } from 'prop-types';
import { IconArrowUpSolid, IconArrowDownLine } from '@instructure/ui-icons';
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
const styles = {
  componentId: 'feqxT',
  template: function (theme) {
    return `

.StickyButton-styles__root {
  box-sizing: border-box;
  display: block;
  border: none;
  color: ${theme.color || 'inherit'};
  background-color: ${theme.background || 'inherit'};
  padding: 0;
  font-size: ${theme.fontSize || 'inherit'};
  font-weight: ${theme.fontWeight || 'inherit'};
  font-family: ${theme.fontFamily || 'inherit'};
  text-transform: ${theme.textTransform || 'inherit'};
  line-height: ${theme.lineHeight || 'inherit'};
  white-space: nowrap;
  cursor: pointer;
  -webkit-user-select: none;
          user-select: none;
  touch-action: manipulation;
  -webkit-appearance: none;
          appearance: none;
  transition: background-color 0.2s;
  outline: none;
  overflow: visible;
  border-bottom-left-radius: ${theme.borderRadius || 'inherit'};
  border-bottom-right-radius: ${theme.borderRadius || 'inherit'};
  position: fixed;
}

  .StickyButton-styles__root::before {
    content: "";
    box-sizing: border-box;
    width: calc(100% + 0.5rem);
    height: calc(100% + 0.5rem);
    border: ${theme.focusRingWidth || 'inherit'} solid ${theme.focusRingColor || 'inherit'};
    position: absolute;
    top: -0.25rem;
    
    left: -0.25rem;
    border-bottom-left-radius: ${theme.borderRadius || 'inherit'};
    border-bottom-right-radius: ${theme.borderRadius || 'inherit'};
    transform: scale(0.25);
    opacity: 0;
    transition: all 0.2s ease-out;
  }

  .StickyButton-styles__root:focus::before {
      opacity: 1;
      transform: scale(1);
    }

  .StickyButton-styles__root:focus,
  .StickyButton-styles__root:hover {
    background-color: ${theme.backgroundHover || 'inherit'};
  }

  .StickyButton-styles__root:focus .StickyButton-styles__icon, .StickyButton-styles__root:hover .StickyButton-styles__icon {
      transform: translate3d(0, -0.0625rem, 0) scale(1.2);
    }

  .StickyButton-styles__root[aria-disabled] {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }

.StickyButton-styles__icon {
  display: block;
  font-size: 0.75rem;
  margin-inline-start: ${theme.iconMargin || 'inherit'};
  transform: translate3d(0, -0.0625rem, 0);
  transition: all 0.2s;
}

[dir="ltr"] .StickyButton-styles__icon {
  margin-left: ${theme.iconMargin || 'inherit'};
}

[dir="rtl"] .StickyButton-styles__icon {
  margin-right: ${theme.iconMargin || 'inherit'};
}

.StickyButton-styles__direction--up .StickyButton-styles__layout, .StickyButton-styles__direction--down .StickyButton-styles__layout {
    padding-inline-end: ${theme.hasIconRightPadding || 'inherit'};
  }

[dir="ltr"] .StickyButton-styles__direction--up .StickyButton-styles__layout,
[dir="ltr"] .StickyButton-styles__direction--down .StickyButton-styles__layout {
    padding-right: ${theme.hasIconRightPadding || 'inherit'};
  }

[dir="rtl"] .StickyButton-styles__direction--up .StickyButton-styles__layout,
[dir="rtl"] .StickyButton-styles__direction--down .StickyButton-styles__layout {
    padding-left: ${theme.hasIconRightPadding || 'inherit'};
  }

.StickyButton-styles__layout {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${theme.padding || 'inherit'};
}

.StickyButton-styles__newActivityButton {
  offset-inline-start: 0;
  top: 100%;
  position: absolute;
}

[dir="ltr"] .StickyButton-styles__newActivityButton {
  left: 0;
}

[dir="rtl"] .StickyButton-styles__newActivityButton {
  right: 0;
}
`;
  },
  'root': 'StickyButton-styles__root',
  'icon': 'StickyButton-styles__icon',
  'direction--up': 'StickyButton-styles__direction--up',
  'layout': 'StickyButton-styles__layout',
  'direction--down': 'StickyButton-styles__direction--down',
  'newActivityButton': 'StickyButton-styles__newActivityButton'
};
import theme from './theme';

class StickyButton extends Component {
  constructor(...args) {
    super(...args);

    this.handleClick = e => {
      const _this$props = this.props,
            disabled = _this$props.disabled,
            onClick = _this$props.onClick;

      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
      } else if (typeof onClick === 'function') {
        onClick(e);
      }
    };
  }

  renderIcon() {
    const direction = this.props.direction;

    if (direction === 'up') {
      return /*#__PURE__*/React.createElement(IconArrowUpSolid, {
        className: styles.icon
      });
    } else if (direction === 'down') {
      return /*#__PURE__*/React.createElement(IconArrowDownLine, {
        className: styles.icon
      });
    } else {
      return null;
    }
  }

  get descriptionId() {
    return `${this.props.id}_desc`;
  }

  renderDescription() {
    if (this.props.description) {
      return /*#__PURE__*/React.createElement(ScreenReaderContent, {
        id: this.descriptionId
      }, this.props.description);
    }

    return null;
  }

  render() {
    const _this$props2 = this.props,
          id = _this$props2.id,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          hidden = _this$props2.hidden,
          direction = _this$props2.direction,
          zIndex = _this$props2.zIndex;
    const classes = {
      [styles.root]: true,
      [styles['direction--' + direction]]: direction !== 'none'
    };
    const style = {
      zIndex: zIndex || null
    };
    return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("button", {
      id: id,
      type: "button",
      onClick: this.handleClick,
      className: classnames(classes, styles.newActivityButton),
      style: style,
      "aria-disabled": disabled ? 'true' : null,
      "aria-hidden": hidden ? 'true' : null,
      ref: this.props.buttonRef,
      "aria-describedby": this.props.description ? this.descriptionId : null
    }, /*#__PURE__*/React.createElement("span", {
      className: styles.layout
    }, children, this.renderIcon())), this.renderDescription());
  }

}

StickyButton.propTypes = {
  id: string.isRequired,
  children: node.isRequired,
  onClick: func,
  disabled: bool,
  hidden: bool,
  direction: oneOf(['none', 'up', 'down']),
  zIndex: number,
  buttonRef: func,
  description: string
};
StickyButton.defaultProps = {
  direction: 'none'
};
export default themeable(theme, styles)(StickyButton);