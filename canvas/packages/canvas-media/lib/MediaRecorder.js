"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MediaRecorder;

var _react = _interopRequireDefault(require("react"));

var _uiAlerts = require("@instructure/ui-alerts");

var _mediaCapture = require("@instructure/media-capture");

var _propTypes = require("prop-types");

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
function MediaRecorder(props) {
  return /*#__PURE__*/_react.default.createElement("div", null, (0, _mediaCapture.canUseMediaCapture)() ? /*#__PURE__*/_react.default.createElement(_mediaCapture.MediaCapture, {
    translations: props.MediaCaptureStrings,
    onCompleted: props.onSave
  }) : /*#__PURE__*/_react.default.createElement(_uiAlerts.Alert, {
    variant: "info",
    margin: "small"
  }, props.errorMessage));
}

MediaRecorder.propTypes = {
  onSave: _propTypes.func.isRequired,
  errorMessage: _propTypes.string.isRequired,
  MediaCaptureStrings: _propTypes.object
};