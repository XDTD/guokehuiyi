"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pre_processor = _interopRequireDefault(require("./pre_processor"));

var _hbs_processor = _interopRequireDefault(require("./hbs_processor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var registerPlugin = function registerPlugin(i18nliner) {
  i18nliner.processors.HbsProcessor = _hbs_processor["default"];
};

registerPlugin.PreProcessor = _pre_processor["default"];
var _default = registerPlugin;
exports["default"] = _default;