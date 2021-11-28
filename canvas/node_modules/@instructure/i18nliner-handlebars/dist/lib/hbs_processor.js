"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _handlebars = _interopRequireDefault(require("handlebars"));

var _abstract_processor = _interopRequireDefault(require("i18nliner/dist/lib/processors/abstract_processor"));

var _pre_processor = _interopRequireDefault(require("./pre_processor"));

var _extractor = _interopRequireDefault(require("./extractor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HbsProcessor = function HbsProcessor(translations, options) {
  _abstract_processor["default"].call(this, translations, options);
};

HbsProcessor.prototype = Object.create(_abstract_processor["default"].prototype);
HbsProcessor.prototype.constructor = HbsProcessor;
HbsProcessor.prototype.defaultPattern = "**/*.hbs";
HbsProcessor.prototype.Extractor = _extractor["default"];

HbsProcessor.prototype.checkContents = function (source, path) {
  var extractor = new this.Extractor(this.preProcess(source), {
    path: path
  });
  extractor.forEach(function (key, value, context) {
    this.translations.set(key, value, context);
    this.translationCount++;
  }.bind(this));
};

HbsProcessor.prototype.sourceFor = function (file) {
  return _fs["default"].readFileSync(file);
};

HbsProcessor.prototype.preProcess = function (source) {
  var ast = _handlebars["default"].parse(source.toString());

  _pre_processor["default"].process(ast);

  return ast;
};

var _default = HbsProcessor;
exports["default"] = _default;