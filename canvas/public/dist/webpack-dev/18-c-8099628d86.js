(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[18],{

/***/ "M8//":
/*!*********************************************************************!*\
  !*** ./node_modules/@instructure/ui-text-area/es/TextArea/index.js ***!
  \*********************************************************************/
/*! exports provided: default, TextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextArea\", function() { return TextArea; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"rePB\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"1OyB\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"vuIU\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"Ji7U\");\n/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ \"LK+K\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ \"TSYQ\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _instructure_ui_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @instructure/ui-prop-types */ \"IzEL\");\n/* harmony import */ var _instructure_ui_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @instructure/ui-form-field */ \"sTNg\");\n/* harmony import */ var _instructure_ui_dom_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @instructure/ui-dom-utils */ \"mUC5\");\n/* harmony import */ var _instructure_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @instructure/debounce */ \"eHUd\");\n/* harmony import */ var _instructure_uid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @instructure/uid */ \"oxAU\");\n/* harmony import */ var _instructure_ui_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @instructure/ui-utils */ \"Nd46\");\n/* harmony import */ var _instructure_ui_themeable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @instructure/ui-themeable */ \"J2CL\");\n/* harmony import */ var _instructure_ui_testable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @instructure/ui-testable */ \"Zuoh\");\n/* harmony import */ var _instructure_ui_react_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @instructure/ui-react-utils */ \"e2P+\");\n/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme.js */ \"fg1D\");\n\n\n\n\n\n\nvar _dec, _dec2, _class, _class2, _temp;\n\n/*\n * The MIT License (MIT)\n *\n * Copyright (c) 2015 - present Instructure, Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\n\n\n\n\n\n\n\n\n\n\n\n\nvar styles = {\n  componentId: 'chpSa',\n  template: function template(theme) {\n    return \"\\n\\n.chpSa_byIz{position:relative}\\n\\n.chpSa_cPAP{border:\".concat(theme.focusOutlineWidth || 'inherit', \" \").concat(theme.focusOutlineStyle || 'inherit', \" \").concat(theme.focusOutlineColor || 'inherit', \";border-radius:calc(\").concat(theme.borderRadius || 'inherit', \"*1.5);bottom:-0.25rem;box-sizing:border-box;display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\\n\\n.chpSa_blLZ{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:\").concat(theme.background || 'inherit', \";border:medium none currentColor;border-bottom-color:\").concat(theme.borderBottomColor || 'inherit', \";border-collapse:separate;border-image:none;border-left-color:\").concat(theme.borderLeftColor || 'inherit', \";border-radius:0;border-radius:\").concat(theme.borderRadius || 'inherit', \";border-right-color:\").concat(theme.borderRightColor || 'inherit', \";border-spacing:0;border-style:\").concat(theme.borderStyle || 'inherit', \";border-top-color:\").concat(theme.borderTopColor || 'inherit', \";border-width:\").concat(theme.borderWidth || 'inherit', \";bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:\").concat(theme.color || 'inherit', \";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:\").concat(theme.fontFamily || 'inherit', \";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:\").concat(theme.fontWeight || 'inherit', \";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:\").concat(theme.padding || 'inherit', \";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;white-space:pre-wrap;widows:2;width:auto;width:100%;word-spacing:normal;word-wrap:break-word;z-index:auto}\\n\\n[dir=ltr] .chpSa_blLZ{text-align:left}\\n\\n[dir=rtl] .chpSa_blLZ{text-align:right}\\n\\n.chpSa_blLZ:focus~.chpSa_cPAP{opacity:1;transform:scale(1)}\\n\\n.chpSa_blLZ[aria-invalid],.chpSa_blLZ[aria-invalid]:focus,.chpSa_blLZ[aria-invalid]:focus~.chpSa_cPAP{border-color:\").concat(theme.errorBorderColor || 'inherit', \"}\\n\\n.chpSa_blLZ:-ms-input-placeholder{color:\").concat(theme.placeholderColor || 'inherit', \"}\\n\\n.chpSa_blLZ::placeholder{color:\").concat(theme.placeholderColor || 'inherit', \"}\\n\\n.chpSa_blLZ.chpSa_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\\n\\n.chpSa_doqw{font-size:\").concat(theme.smallFontSize || 'inherit', \"}\\n\\n.chpSa_ycrn{font-size:\").concat(theme.mediumFontSize || 'inherit', \"}\\n\\n.chpSa_cMDj{font-size:\").concat(theme.largeFontSize || 'inherit', \"}\");\n  },\n  'layout': 'chpSa_byIz',\n  'outline': 'chpSa_cPAP',\n  'textarea': 'chpSa_blLZ',\n  'disabled': 'chpSa_ywdX',\n  'small': 'chpSa_doqw',\n  'medium': 'chpSa_ycrn',\n  'large': 'chpSa_cMDj'\n};\n\n/**\n---\ncategory: components\n---\n**/\n\nvar TextArea = (_dec = Object(_instructure_ui_testable__WEBPACK_IMPORTED_MODULE_15__[\"testable\"])(), _dec2 = Object(_instructure_ui_themeable__WEBPACK_IMPORTED_MODULE_14__[\"themeable\"])(_theme_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"], styles), _dec(_class = _dec2(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(TextArea, _Component);\n\n  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(TextArea);\n\n  function TextArea() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, TextArea);\n\n    _this = _super.call(this);\n\n    _this._textareaResize = function (evt) {\n      var textareaHeight = _this._textarea.style.height;\n\n      if (textareaHeight != _this._height) {\n        _this._manuallyResized = true;\n        _this._textarea.style.overflowY = 'auto'; // update container minHeight to ensure focus ring always wraps input\n\n        _this._container.style.minHeight = textareaHeight;\n      }\n    };\n\n    _this.grow = function (evt) {\n      if (!_this._textarea || _this._manuallyResized) {\n        return;\n      }\n\n      var offset = _this._textarea.offsetHeight - _this._textarea.clientHeight;\n      var height = ''; // Notes:\n      // 1. height has be reset to `auto` every time this method runs, or scrollHeight will not reset\n      // 2. `this._textarea.scrollHeight` will not reset if assigned to a variable; it needs to be written out each time\n\n      _this._textarea.style.height = 'auto';\n      _this._textarea.style.overflowY = 'hidden'; // hide scrollbars for autoGrow textareas\n\n      height = _this._textarea.scrollHeight + offset + 'px';\n      var maxHeight = Object(_instructure_ui_utils__WEBPACK_IMPORTED_MODULE_13__[\"px\"])(_this.props.maxHeight, _this._container);\n\n      if (_this.props.maxHeight && _this._textarea.scrollHeight > maxHeight) {\n        _this._textarea.style.overflowY = 'auto'; // add scroll if scrollHeight exceeds maxHeight in pixels\n      } else if (_this.props.height) {\n        if (_this._textarea.value === '') {\n          height = _this.props.height;\n        } else if (Object(_instructure_ui_utils__WEBPACK_IMPORTED_MODULE_13__[\"px\"])(_this.props.height, _this._container) > _this._textarea.scrollHeight) {\n          _this._textarea.style.overflowY = 'auto'; // add scroll if scrollHeight exceeds height in pixels\n\n          height = _this.props.height;\n        }\n      } // preserve container height to prevent scroll jumping on long textareas,\n      // but make sure container doesn't exceed maxHeight prop\n\n\n      var heightExceedsMax = Object(_instructure_ui_utils__WEBPACK_IMPORTED_MODULE_13__[\"px\"])(height) > maxHeight;\n\n      if (!heightExceedsMax) {\n        _this._container.style.minHeight = height;\n      }\n\n      _this._height = height;\n      _this._textarea.style.height = height;\n      _this._textarea.scrollTop = _this._textarea.scrollHeight;\n    };\n\n    _this.handleChange = function (event) {\n      var _this$props = _this.props,\n          onChange = _this$props.onChange,\n          value = _this$props.value,\n          disabled = _this$props.disabled,\n          readOnly = _this$props.readOnly;\n\n      if (disabled || readOnly) {\n        event.preventDefault();\n        return;\n      }\n\n      if (typeof value === 'undefined') {\n        // if uncontrolled\n        _this.autoGrow();\n      }\n\n      if (typeof onChange === 'function') {\n        onChange(event);\n      }\n    };\n\n    _this.handleContainerRef = function (node) {\n      _this._container = node;\n    };\n\n    _this._defaultId = Object(_instructure_uid__WEBPACK_IMPORTED_MODULE_12__[\"uid\"])('TextArea');\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TextArea, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.autoGrow();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      this.autoGrow();\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      if (this._listener) {\n        this._listener.remove();\n      }\n\n      if (this._textareaResizeListener) {\n        this._textareaResizeListener.remove();\n      }\n\n      if (this._request) {\n        this._request.cancel();\n      }\n\n      if (this._debounced) {\n        this._debounced.cancel();\n      }\n    }\n  }, {\n    key: \"autoGrow\",\n    value: function autoGrow() {\n      if (this.props.autoGrow) {\n        if (!this._debounced) {\n          this._debounced = Object(_instructure_debounce__WEBPACK_IMPORTED_MODULE_11__[\"debounce\"])(this.grow, 200, {\n            leading: false,\n            trailing: true\n          });\n        }\n\n        if (!this._listener) {\n          this._listener = Object(_instructure_ui_dom_utils__WEBPACK_IMPORTED_MODULE_10__[\"addEventListener\"])(window, 'resize', this._debounced);\n        }\n\n        if (this._textarea && !this._textareaResizeListener) {\n          this._textareaResizeListener = Object(_instructure_ui_dom_utils__WEBPACK_IMPORTED_MODULE_10__[\"addResizeListener\"])(this._textarea, this._textareaResize, ['height']);\n        }\n\n        this._request = Object(_instructure_ui_dom_utils__WEBPACK_IMPORTED_MODULE_10__[\"requestAnimationFrame\"])(this.grow);\n      }\n    }\n  }, {\n    key: \"focus\",\n    value: function focus() {\n      this._textarea.focus();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _classes,\n          _this2 = this;\n\n      var _this$props2 = this.props,\n          autoGrow = _this$props2.autoGrow,\n          placeholder = _this$props2.placeholder,\n          value = _this$props2.value,\n          defaultValue = _this$props2.defaultValue,\n          disabled = _this$props2.disabled,\n          readOnly = _this$props2.readOnly,\n          required = _this$props2.required,\n          width = _this$props2.width,\n          height = _this$props2.height,\n          maxHeight = _this$props2.maxHeight,\n          textareaRef = _this$props2.textareaRef,\n          resize = _this$props2.resize,\n          size = _this$props2.size;\n      var props = Object(_instructure_ui_react_utils__WEBPACK_IMPORTED_MODULE_16__[\"omitProps\"])(this.props, TextArea.propTypes);\n      var classes = (_classes = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classes, styles.textarea, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classes, styles[size], true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classes, styles.disabled, disabled), _classes);\n      var style = {\n        width: width,\n        resize: resize,\n        height: !autoGrow ? height : null,\n        maxHeight: maxHeight\n      };\n      var textarea = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"textarea\", Object.assign({}, props, {\n        value: value,\n        defaultValue: defaultValue,\n        placeholder: placeholder,\n        ref: function ref(textarea) {\n          _this2._textarea = textarea;\n\n          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n            args[_key - 1] = arguments[_key];\n          }\n\n          textareaRef.apply(_this2, [textarea].concat(args));\n        },\n        style: style,\n        id: this.id,\n        required: required,\n        \"aria-required\": required,\n        \"aria-invalid\": this.invalid ? 'true' : null,\n        disabled: disabled || readOnly,\n        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(classes),\n        onChange: this.handleChange\n      }));\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_instructure_ui_form_field__WEBPACK_IMPORTED_MODULE_9__[\"FormField\"], Object.assign({}, Object(_instructure_ui_react_utils__WEBPACK_IMPORTED_MODULE_16__[\"pickProps\"])(this.props, _instructure_ui_form_field__WEBPACK_IMPORTED_MODULE_9__[\"FormField\"].propTypes), {\n        vAlign: \"top\",\n        id: this.id,\n        ref: function ref(el) {\n          _this2._node = el;\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"div\", {\n        className: styles.layout,\n        style: {\n          width: width,\n          maxHeight: maxHeight\n        },\n        ref: this.handleContainerRef\n      }, textarea, !disabled && !readOnly ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(\"span\", {\n        className: styles.outline,\n        \"aria-hidden\": \"true\"\n      }) : null));\n    }\n  }, {\n    key: \"minHeight\",\n    get: function get() {\n      return this._textarea.style.minHeight;\n    }\n  }, {\n    key: \"invalid\",\n    get: function get() {\n      return this.props.messages && this.props.messages.findIndex(function (message) {\n        return message.type === 'error';\n      }) >= 0;\n    }\n  }, {\n    key: \"id\",\n    get: function get() {\n      return this.props.id || this._defaultId;\n    }\n  }, {\n    key: \"focused\",\n    get: function get() {\n      return Object(_instructure_ui_dom_utils__WEBPACK_IMPORTED_MODULE_10__[\"isActiveElement\"])(this._textarea);\n    }\n  }, {\n    key: \"value\",\n    get: function get() {\n      return this._textarea.value;\n    }\n  }]);\n\n  TextArea.displayName = \"TextArea\";\n  return TextArea;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]), _class2.propTypes = {\n  label: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node.isRequired,\n  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n\n  /**\n   * sets the font-size for the textarea\n   */\n  size: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['small', 'medium', 'large']),\n  layout: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['stacked', 'inline']),\n\n  /**\n   * the textarea will expand vertically to fit the height of the content,\n   * unless its content exceeds `maxHeight`\n   */\n  autoGrow: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n\n  /**\n   * is the textarea resizable (in supported browsers)\n   */\n  resize: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['none', 'both', 'horizontal', 'vertical']),\n\n  /**\n   * a fixed width for the textarea\n   */\n  width: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n\n  /**\n   * a initial height for the textarea (if autoGrow is true it will grow vertically)\n   */\n  height: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n\n  /**\n   * when autoGrow is true, the textarea will never grow beyond this value\n   */\n  maxHeight: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string]),\n\n  /**\n   * object with shape: `{\n   * text: PropTypes.string,\n   * type: PropTypes.oneOf(['error', 'hint', 'success', 'screenreader-only'])\n   *   }`\n   */\n  messages: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(_instructure_ui_form_field__WEBPACK_IMPORTED_MODULE_9__[\"FormPropTypes\"].message),\n  inline: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n\n  /**\n   * Html placeholder text to display when the input has no value. This should be hint text, not a label\n   * replacement.\n   */\n  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n\n  /**\n   * Whether or not to disable the textarea\n   */\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n\n  /**\n   * Works just like disabled but keeps the same styles as if it were active\n   */\n  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n  required: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n\n  /**\n   * a function that provides a reference to the actual textarea element\n   */\n  textareaRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,\n\n  /**\n   * value to set on initial render\n   */\n  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n\n  /**\n   * the selected value (must be accompanied by an `onChange` prop)\n   */\n  value: Object(_instructure_ui_prop_types__WEBPACK_IMPORTED_MODULE_8__[\"controllable\"])(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string),\n\n  /**\n   * when used with the `value` prop, the component will not control its own state\n   */\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func\n}, _class2.defaultProps = {\n  size: 'medium',\n  autoGrow: true,\n  resize: 'none',\n  inline: false,\n  messages: [],\n  disabled: false,\n  readOnly: false,\n  textareaRef: function textareaRef(textarea) {},\n  layout: 'stacked',\n  id: void 0,\n  value: void 0,\n  defaultValue: void 0,\n  onChange: void 0,\n  required: false,\n  placeholder: void 0,\n  width: void 0,\n  height: void 0,\n  maxHeight: void 0\n}, _temp)) || _class) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextArea);\n\n\n//# sourceURL=webpack:///./node_modules/@instructure/ui-text-area/es/TextArea/index.js?");

/***/ }),

/***/ "SLJK":
/*!************************************************************!*\
  !*** ./node_modules/@instructure/ui-text-area/es/index.js ***!
  \************************************************************/
/*! exports provided: TextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TextArea_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextArea/index.js */ \"M8//\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextArea\", function() { return _TextArea_index_js__WEBPACK_IMPORTED_MODULE_0__[\"TextArea\"]; });\n\n/*\n * The MIT License (MIT)\n *\n * Copyright (c) 2015 - present Instructure, Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\n\n\n//# sourceURL=webpack:///./node_modules/@instructure/ui-text-area/es/index.js?");

/***/ }),

/***/ "fg1D":
/*!*********************************************************************!*\
  !*** ./node_modules/@instructure/ui-text-area/es/TextArea/theme.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generator; });\n/*\n * The MIT License (MIT)\n *\n * Copyright (c) 2015 - present Instructure, Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\nfunction generator(_ref) {\n  var colors = _ref.colors,\n      borders = _ref.borders,\n      spacing = _ref.spacing,\n      typography = _ref.typography,\n      forms = _ref.forms;\n  return {\n    fontFamily: typography.fontFamily,\n    fontWeight: typography.fontWeightNormal,\n    color: colors.textDarkest,\n    background: colors.backgroundLightest,\n    borderWidth: borders.widthSmall,\n    borderStyle: borders.style,\n    borderTopColor: colors.borderMedium,\n    borderRightColor: colors.borderMedium,\n    borderBottomColor: colors.borderMedium,\n    borderLeftColor: colors.borderMedium,\n    borderRadius: borders.radiusMedium,\n    padding: spacing.small,\n    focusOutlineColor: colors.borderBrand,\n    focusOutlineWidth: borders.widthMedium,\n    focusOutlineStyle: borders.style,\n    errorBorderColor: colors.borderDanger,\n    errorOutlineColor: colors.borderDanger,\n    placeholderColor: colors.textDark,\n    smallFontSize: typography.fontSizeSmall,\n    smallHeight: forms.inputHeightSmall,\n    mediumFontSize: typography.fontSizeMedium,\n    mediumHeight: forms.inputHeightMedium,\n    largeFontSize: typography.fontSizeLarge,\n    largeHeight: forms.inputHeightLarge\n  };\n}\n\ngenerator.canvas = function (variables) {\n  return {\n    color: variables['ic-brand-font-color-dark'],\n    focusOutlineColor: variables['ic-brand-primary']\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/@instructure/ui-text-area/es/TextArea/theme.js?");

/***/ })

}]);