"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
const translationShape = (0, _propTypes.shape)({
  CLEAR_FILE_TEXT: _propTypes.string,
  CLOSE_TEXT: _propTypes.string,
  COMPUTER_PANEL_TITLE: _propTypes.string,
  DRAG_DROP_CLICK_TO_BROWSE: _propTypes.string,
  DRAG_FILE_TEXT: _propTypes.string,
  INVALID_FILE_TEXT: _propTypes.string,
  LOADING_MEDIA: _propTypes.string,
  RECORD_PANEL_TITLE: _propTypes.string,
  SUBMIT_TEXT: _propTypes.string,
  UPLOADING_ERROR: _propTypes.string,
  UPLOAD_MEDIA_LABEL: _propTypes.string
});
var _default = translationShape;
exports.default = _default;