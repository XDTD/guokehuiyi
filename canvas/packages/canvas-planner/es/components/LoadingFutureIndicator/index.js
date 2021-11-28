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
import { bool, func, string } from 'prop-types';
import { Button } from '@instructure/ui-buttons';
import { View } from '@instructure/ui-view';
import { Text } from '@instructure/ui-text';
import { Spinner } from '@instructure/ui-spinner';
import ErrorAlert from '../ErrorAlert';
import formatMessage from '../../format-message';
export default class LoadingFutureIndicator extends Component {
  constructor(...args) {
    super(...args);

    this.handleLoadMoreButton = () => {
      this.props.onLoadMore({
        loadMoreButtonClicked: true
      });
    };
  }

  renderLoadMore() {
    if (!this.props.loadingFuture && !this.props.allFutureItemsLoaded) {
      return /*#__PURE__*/React.createElement(Button, {
        variant: "link",
        onClick: this.handleLoadMoreButton
      }, formatMessage('Load more'));
    }
  }

  renderError() {
    if (this.props.loadingError) {
      // Show an Alert for the user, while including the underlying root cause error
      // in a hidden div in case we need to know what it was
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: '50%',
          margin: '0 auto'
        }
      }, /*#__PURE__*/React.createElement(ErrorAlert, {
        error: this.props.loadingError
      }, formatMessage('Error loading more items')));
    }
  }

  renderLoading() {
    if (this.props.loadingFuture && !this.props.allFutureItemsLoaded) {
      return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Spinner, {
        size: "small",
        margin: "0 x-small 0 0",
        renderTitle: () => formatMessage('Loading...')
      }), /*#__PURE__*/React.createElement(Text, {
        size: "small",
        color: "secondary"
      }, formatMessage('Loading...')));
    }
  }

  renderEverythingLoaded() {
    if (this.props.allFutureItemsLoaded) {
      return /*#__PURE__*/React.createElement(Text, {
        color: "secondary",
        size: "small"
      }, formatMessage('All items loaded'));
    }
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(View, {
      as: "div",
      padding: "x-large",
      textAlign: "center"
    }, this.renderError(), this.renderLoadMore(), this.renderLoading(), this.renderEverythingLoaded()));
  }

}
LoadingFutureIndicator.propTypes = {
  loadingFuture: bool,
  allFutureItemsLoaded: bool,
  onLoadMore: func,
  loadingError: string
};
LoadingFutureIndicator.defaultProps = {
  loadingFuture: false,
  allFutureItemsLoaded: false,
  onLoadMore: () => {},
  loadingError: void 0
};