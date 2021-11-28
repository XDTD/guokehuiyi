"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

/*
 * Copyright (C) 2020 - present Instructure, Inc.
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
let FileSizeError = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(FileSizeError, _Error);

  var _super = (0, _createSuper2.default)(FileSizeError);

  function FileSizeError({
    maxBytes,
    actualBytes
  }, ...args) {
    var _this;

    (0, _classCallCheck2.default)(this, FileSizeError);
    _this = _super.call(this, "Max file size exceeded", args);
    _this.name = FileSizeError.type;
    _this.maxBytes = maxBytes;
    _this.actualBytes = actualBytes;
    return _this;
  }

  (0, _createClass2.default)(FileSizeError, null, [{
    key: "type",
    get: function () {
      return 'FileSizeError';
    }
  }]);
  return FileSizeError;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));

var _default = FileSizeError;
exports.default = _default;