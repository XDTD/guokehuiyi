"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _errors = _interopRequireDefault(require("i18nliner/dist/lib/errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_errors["default"].register('TBlockNestingError');

_errors["default"].register('UnwrappableContentError');

_errors["default"].register('MultipleSubExpressionsError');

var _default = _errors["default"];
exports["default"] = _default;