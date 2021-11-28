"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoadingIndicator;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _uiSpinner = require("@instructure/ui-spinner");

var _uiView = require("@instructure/ui-view");

/*
 * Copyright (C) 2019 - present Instructure, Inc.
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
function LoadingIndicator({
  translatedTitle,
  size
}) {
  return /*#__PURE__*/_react.default.createElement(_uiView.View, {
    as: "div",
    height: "100%",
    width: "100%",
    textAlign: "center"
  }, /*#__PURE__*/_react.default.createElement(_uiSpinner.Spinner, {
    renderTitle: () => translatedTitle,
    size: size,
    margin: "0 0 0 medium"
  }));
}

LoadingIndicator.propTypes = {
  translatedTitle: _propTypes.string.isRequired,
  size: (0, _propTypes.oneOf)(['x-small', 'small', 'medium', 'large'])
};
LoadingIndicator.defaultProps = {
  size: 'large'
};