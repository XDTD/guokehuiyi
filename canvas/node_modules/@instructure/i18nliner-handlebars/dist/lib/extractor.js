"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _t_call = _interopRequireDefault(require("./t_call"));

var _visitor = _interopRequireDefault(require("./visitor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Extractor(ast, options) {
  options = options || {};
  this.ast = ast;
  this.helperKey = options.helperKey || 't';
}

Extractor.prototype = Object.create(_visitor["default"]);

Extractor.prototype.forEach = function (handler) {
  this.handler = handler;
  this.process(this.ast);
};

Extractor.prototype.processSexpr = function (sexpr) {
  _visitor["default"].processSexpr.call(this, sexpr);

  if (sexpr.id.string === this.helperKey) {
    this.processTranslateCall(sexpr);
  }
};

Extractor.prototype.buildTranslateCall = function (sexpr) {
  return new _t_call["default"](sexpr);
};

Extractor.prototype.processTranslateCall = function (sexpr) {
  var call = this.buildTranslateCall(sexpr),
      translations = call.translations(),
      translation,
      i,
      len;

  for (i = 0, len = translations.length; i < len; i++) {
    translation = translations[i];
    this.handler(translation[0], translation[1], call);
  }
};

var _default = Extractor;
exports["default"] = _default;