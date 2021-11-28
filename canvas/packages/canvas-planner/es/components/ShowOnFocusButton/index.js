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
import { findDOMNode } from 'react-dom';
import { node, object, func } from 'prop-types';
import { themeable } from '@instructure/ui-themeable';
import { Button } from '@instructure/ui-buttons';
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
const styles = {
  componentId: 'IWkON',
  template: function (theme) {
    return `



.ShowOnFocusButton-styles__root {
  font-size: ${theme.fontSize || 'inherit'};
  font-family: ${theme.fontFamily || 'inherit'};
  font-weight: ${theme.fontWeight || 'inherit'};

  color: ${theme.color || 'inherit'};
  background: ${theme.background || 'inherit'};
}
`;
  },
  'root': 'ShowOnFocusButton-styles__root'
};
import theme from './theme';

class ShowOnFocusButton extends Component {
  constructor(props) {
    super(props);

    this.handleFocus = e => {
      this.setState({
        visible: true
      }, () => {
        findDOMNode(this.btnRef).focus();
      });
    };

    this.handleBlur = e => {
      this.setState({
        visible: false
      });
    };

    this.state = {
      visible: false
    };
  }

  renderButton() {
    const _this$props = this.props,
          buttonProps = _this$props.buttonProps,
          children = _this$props.children;
    return /*#__PURE__*/React.createElement(Button, Object.assign({
      variant: "link",
      buttonRef: btn => {
        this.btnRef = btn;
        this.props.buttonRef(btn);
      },
      onFocus: this.handleFocus,
      onBlur: this.handleBlur
    }, buttonProps), children);
  }

  renderInvisibleButton() {
    const srProps = this.props.srProps;
    return /*#__PURE__*/React.createElement(ScreenReaderContent, srProps, this.renderButton());
  }

  render() {
    if (this.state.visible) {
      return this.renderButton();
    } else {
      return this.renderInvisibleButton();
    }
  }

}

ShowOnFocusButton.propTypes = {
  buttonProps: object,
  srProps: object,
  children: node.isRequired,
  buttonRef: func
};
ShowOnFocusButton.defaultProps = {
  buttonRef: () => {}
};
export default themeable(theme, styles)(ShowOnFocusButton);