(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[67],{

/***/ "GID+":
/*!*************************************************************!*\
  !*** ./node_modules/@instructure/ui-pagination/es/index.js ***!
  \*************************************************************/
/*! exports provided: Pagination, PaginationButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Pagination_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination/index.js */ \"kei7\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Pagination\", function() { return _Pagination_index_js__WEBPACK_IMPORTED_MODULE_0__[\"Pagination\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PaginationButton\", function() { return _Pagination_index_js__WEBPACK_IMPORTED_MODULE_0__[\"PaginationButton\"]; });\n\n/*\n * The MIT License (MIT)\n *\n * Copyright (c) 2015 - present Instructure, Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\n\n\n//# sourceURL=webpack:///./node_modules/@instructure/ui-pagination/es/index.js?");

/***/ }),

/***/ "TAnk":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@instructure/ui-pagination/es/Pagination/PaginationButton/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default, PaginationButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PaginationButton\", function() { return PaginationButton; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"1OyB\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"vuIU\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"Ji7U\");\n/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ \"LK+K\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @instructure/ui-buttons */ \"K6WN\");\n/* harmony import */ var _instructure_ui_react_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @instructure/ui-react-utils */ \"e2P+\");\n/* harmony import */ var _instructure_ui_testable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @instructure/ui-testable */ \"Zuoh\");\n\n\n\n\n\nvar _dec, _class, _class2, _temp;\n\n/*\n * The MIT License (MIT)\n *\n * Copyright (c) 2015 - present Instructure, Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\n\n\n\n\n\n/**\n---\nparent: Pagination\nid: Pagination.Page\n---\n**/\n\nvar PaginationButton = (_dec = Object(_instructure_ui_testable__WEBPACK_IMPORTED_MODULE_8__[\"testable\"])(), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PaginationButton, _Component);\n\n  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(PaginationButton);\n\n  function PaginationButton() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, PaginationButton);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PaginationButton, [{\n    key: \"render\",\n    value: function render() {\n      var exclude = this.props.current ? ['onClick', 'href'] : [];\n      var props = Object(_instructure_ui_react_utils__WEBPACK_IMPORTED_MODULE_7__[\"omitProps\"])(this.props, PaginationButton.propTypes, exclude);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_6__[\"BaseButton\"], Object.assign({\n        color: \"primary\",\n        withBackground: this.props.current ? true : false,\n        withBorder: this.props.current ? true : false\n      }, props, {\n        \"aria-current\": this.props.current ? 'page' : null\n      }), this.props.children);\n    }\n  }]);\n\n  PaginationButton.displayName = \"PaginationButton\";\n  return PaginationButton;\n}(react__WEBPACK_IMPORTED_MODULE_4__[\"Component\"]), _class2.propTypes = {\n  /**\n   * Content to render as page selection\n   */\n  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node.isRequired,\n\n  /**\n   * Whether the page is currently displayed\n   */\n  current: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool\n}, _class2.defaultProps = {\n  current: false\n}, _temp)) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PaginationButton);\n\n\n//# sourceURL=webpack:///./node_modules/@instructure/ui-pagination/es/Pagination/PaginationButton/index.js?");

/***/ }),

/***/ "b3aM":
/*!************************************************************************!*\
  !*** ./node_modules/@instructure/ui-pagination/es/Pagination/theme.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generator; });\n/*\n * The MIT License (MIT)\n *\n * Copyright (c) 2015 - present Instructure, Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\nfunction generator() {\n  return {};\n}\n\n//# sourceURL=webpack:///./node_modules/@instructure/ui-pagination/es/Pagination/theme.js?");

/***/ }),

/***/ "kei7":
/*!************************************************************************!*\
  !*** ./node_modules/@instructure/ui-pagination/es/Pagination/index.js ***!
  \************************************************************************/
/*! exports provided: default, Pagination, PaginationButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pagination\", function() { return Pagination; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"1OyB\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"vuIU\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"Ji7U\");\n/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ \"LK+K\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _instructure_ui_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @instructure/ui-view */ \"OkHH\");\n/* harmony import */ var _instructure_ui_themeable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @instructure/ui-themeable */ \"J2CL\");\n/* harmony import */ var _instructure_ui_testable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @instructure/ui-testable */ \"Zuoh\");\n/* harmony import */ var _instructure_ui_react_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @instructure/ui-react-utils */ \"e2P+\");\n/* harmony import */ var _instructure_uid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @instructure/uid */ \"oxAU\");\n/* harmony import */ var _instructure_ui_prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @instructure/ui-prop-types */ \"IzEL\");\n/* harmony import */ var _instructure_ui_a11y_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @instructure/ui-a11y-utils */ \"Jmxi\");\n/* harmony import */ var _instructure_ui_dom_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @instructure/ui-dom-utils */ \"mUC5\");\n/* harmony import */ var _PaginationButton_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PaginationButton/index.js */ \"TAnk\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PaginationButton\", function() { return _PaginationButton_index_js__WEBPACK_IMPORTED_MODULE_14__[\"PaginationButton\"]; });\n\n/* harmony import */ var _PaginationArrowButton_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PaginationArrowButton/index.js */ \"yeDC\");\n/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme.js */ \"b3aM\");\n\n\n\n\n\nvar _dec, _dec2, _class, _class2, _temp;\n\n/*\n * The MIT License (MIT)\n *\n * Copyright (c) 2015 - present Instructure, Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar styles = {\n  componentId: 'dRtXI',\n  template: function template(theme) {\n    return \"\\n\\n.dRtXI_bGBk,[dir=ltr] .dRtXI_bGBk,[dir=rtl] .dRtXI_bGBk{text-align:center}\\n\\n.dRtXI_dcvv{align-items:center;display:inline-flex}\";\n  },\n  'root': 'dRtXI_bGBk',\n  'pages': 'dRtXI_dcvv'\n};\n/** This is an [].findIndex optimized to work on really big, but sparse, arrays */\n\nvar fastFindIndex = function fastFindIndex(arr, fn) {\n  return Number(Object.keys(arr).find(function (k) {\n    return fn(arr[Number(k)]);\n  }));\n};\n\nfunction propsHaveCompactView(props) {\n  return props.variant === 'compact' && props.children.length > 5;\n}\n\nfunction shouldShowPrevButton(props, currentPageIndex) {\n  return propsHaveCompactView(props) && currentPageIndex > 0;\n}\n\nfunction shouldShowNextButton(props, currentPageIndex) {\n  return propsHaveCompactView(props) && currentPageIndex < props.children.length - 1;\n}\n/**\n---\ncategory: components\n---\n**/\n\n\nvar _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"span\", {\n  key: \"first\",\n  \"aria-hidden\": \"true\"\n}, \"\\u2026\");\n\nvar _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"span\", {\n  key: \"last\",\n  \"aria-hidden\": \"true\"\n}, \"\\u2026\");\n\nvar Pagination = (_dec = Object(_instructure_ui_testable__WEBPACK_IMPORTED_MODULE_8__[\"testable\"])(), _dec2 = Object(_instructure_ui_themeable__WEBPACK_IMPORTED_MODULE_7__[\"themeable\"])(_theme_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"], styles), _dec(_class = _dec2(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Pagination, _Component);\n\n  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Pagination);\n\n  function Pagination() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Pagination);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _this.handleElementRef = function (el) {\n      if (el) {\n        _this._root = el;\n\n        if (typeof _this.props.elementRef === 'function') {\n          _this.props.elementRef(el);\n        }\n      }\n    };\n\n    _this._labelId = Object(_instructure_uid__WEBPACK_IMPORTED_MODULE_10__[\"uid\"])('Pagination');\n    _this._prevButton = null;\n    _this._nextButton = null;\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Pagination, [{\n    key: \"getSnapshotBeforeUpdate\",\n    value: function getSnapshotBeforeUpdate() {\n      var activeElement = Object(_instructure_ui_dom_utils__WEBPACK_IMPORTED_MODULE_13__[\"getActiveElement\"])();\n      return {\n        prevButtonFocused: this._prevButton === activeElement,\n        nextButtonFocused: this._nextButton === activeElement\n      };\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState, snapshot) {\n      if (!this.props.shouldHandleFocus || !propsHaveCompactView(prevProps) && !propsHaveCompactView(this.props)) {\n        return;\n      }\n\n      var _ref = snapshot || {},\n          prevButtonFocused = _ref.prevButtonFocused,\n          nextButtonFocused = _ref.nextButtonFocused;\n\n      if (prevButtonFocused || nextButtonFocused) {\n        var focusable = Object(_instructure_ui_dom_utils__WEBPACK_IMPORTED_MODULE_13__[\"findTabbable\"])(this._root);\n        var focusIndex = prevButtonFocused ? 0 : focusable.length - 1;\n        focusable[focusIndex].focus();\n      }\n    }\n  }, {\n    key: \"transferDisabledPropToChildren\",\n    value: function transferDisabledPropToChildren(children) {\n      var _this2 = this;\n\n      return this.props.disabled ? react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.map(children, function (page) {\n        return react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(page, {\n          disabled: _this2.props.disabled\n        });\n      }) : children;\n    }\n  }, {\n    key: \"renderLabel\",\n    value: function renderLabel() {\n      var display = this.props.variant === 'compact' ? 'block' : 'inline-block';\n      var visibleLabel = Object(_instructure_ui_a11y_utils__WEBPACK_IMPORTED_MODULE_12__[\"hasVisibleChildren\"])(this.props.label);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_6__[\"View\"], {\n        as: \"span\",\n        padding: visibleLabel ? 'small' : '0',\n        display: visibleLabel ? display : 'auto',\n        id: this._labelId\n      }, this.props.label);\n    }\n  }, {\n    key: \"renderPages\",\n    value: function renderPages(currentPageIndex) {\n      var allPages = this.props.children;\n      var visiblePages = allPages;\n\n      if (this.compactView) {\n        var firstIndex = 0;\n        var lastIndex = allPages.length - 1;\n        var sliceStart = Math.min(lastIndex - 3, Math.max(currentPageIndex - 1, firstIndex));\n        var sliceEnd = Math.min(currentPageIndex + 4, lastIndex);\n        visiblePages = allPages.slice(sliceStart, sliceEnd);\n        var firstPage = allPages[firstIndex];\n        var lastPage = allPages[lastIndex];\n        if (sliceStart - firstIndex > 1) visiblePages.unshift(_ref2);\n        if (sliceStart - firstIndex > 0) visiblePages.unshift(firstPage);\n        if (lastIndex - sliceEnd + 1 > 1) visiblePages.push(_ref3);\n        if (lastIndex - sliceEnd + 1 > 0) visiblePages.push(lastPage);\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_6__[\"View\"], {\n        display: \"inline-block\"\n      }, this.transferDisabledPropToChildren(visiblePages));\n    }\n  }, {\n    key: \"renderArrowButton\",\n    value: function renderArrowButton(label, direction, currentPageIndex) {\n      var _this3 = this;\n\n      // eslint-disable-next-line react/prop-types\n      var _this$props$children$ = this.props.children[currentPageIndex + direction].props,\n          onClick = _this$props$children$.onClick,\n          disabled = _this$props$children$.disabled;\n\n      var handleButtonRef = function handleButtonRef(el) {\n        if (direction < 0) {\n          _this3._prevButton = el;\n        } else {\n          _this3._nextButton = el;\n        }\n      };\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_PaginationArrowButton_index_js__WEBPACK_IMPORTED_MODULE_15__[\"PaginationArrowButton\"], {\n        direction: direction === -1 ? 'prev' : 'next',\n        label: label,\n        onClick: onClick,\n        disabled: disabled,\n        buttonRef: handleButtonRef\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (!this.props.children) return null;\n      var currentPageIndex = fastFindIndex(this.props.children, function (p) {\n        return p && p.props && p.props.current;\n      });\n      var passthroughProps = _instructure_ui_view__WEBPACK_IMPORTED_MODULE_6__[\"View\"].omitViewProps(Object(_instructure_ui_react_utils__WEBPACK_IMPORTED_MODULE_9__[\"omitProps\"])(this.props, Pagination.propTypes), Pagination);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_6__[\"View\"], Object.assign({}, passthroughProps, {\n        role: \"navigation\",\n        as: this.props.as,\n        elementRef: this.handleElementRef,\n        margin: this.props.margin,\n        className: styles.root,\n        \"aria-labelledby\": this.props.label && this._labelId\n      }), this.props.label && this.renderLabel(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_6__[\"View\"], {\n        display: \"inline-block\",\n        className: styles.pages\n      }, shouldShowPrevButton(this.props, currentPageIndex) && this.renderArrowButton(this.props.labelPrev, -1, currentPageIndex), this.renderPages(currentPageIndex), shouldShowNextButton(this.props, currentPageIndex) && this.renderArrowButton(this.props.labelNext, 1, currentPageIndex)));\n    }\n  }, {\n    key: \"compactView\",\n    get: function get() {\n      return propsHaveCompactView(this.props);\n    }\n  }]);\n\n  Pagination.displayName = \"Pagination\";\n  return Pagination;\n}(react__WEBPACK_IMPORTED_MODULE_4__[\"Component\"]), _class2.propTypes = {\n  /**\n   * children of type Pagination.Page\n   */\n  children: _instructure_ui_prop_types__WEBPACK_IMPORTED_MODULE_11__[\"Children\"].oneOf([_PaginationButton_index_js__WEBPACK_IMPORTED_MODULE_14__[\"PaginationButton\"]]),\n\n  /**\n   * Disables interaction with all pages\n   */\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,\n\n  /**\n   * Visible label for component\n   */\n  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,\n\n  /**\n   * Accessible label for next button\n   */\n  labelNext: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,\n\n  /**\n   * Accessible label for previous button\n   */\n  labelPrev: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,\n\n  /**\n   * The compact variant truncates the page navigation to show only the first,\n   * last, and pages immediately surrounding the current page. Fewer than 5 pages,\n   * no next/previous arrow buttons will be shown, and all pages will be listed\n   */\n  variant: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['full', 'compact']),\n\n  /**\n   * Valid values are `0`, `none`, `auto`, `xxx-small`, `xx-small`, `x-small`,\n   * `small`, `medium`, `large`, `x-large`, `xx-large`. Apply these values via\n   * familiar CSS-like shorthand. For example: `margin=\"small auto large\"`.\n   */\n  margin: _instructure_ui_themeable__WEBPACK_IMPORTED_MODULE_7__[\"ThemeablePropTypes\"].spacing,\n\n  /**\n   * the element type to render as\n   */\n  as: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType,\n\n  /**\n   * provides a reference to the underlying html root element\n   */\n  elementRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,\n\n  /**\n   * For accessibility, Pagination sets focus on the first or last Pagination.Pages,\n   * respectively, when the Previous or Next arrow buttons are removed from the DOM.\n   * Set this property to `false` to prevent this behavior.\n   */\n  shouldHandleFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool\n}, _class2.defaultProps = {\n  children: null,\n  label: void 0,\n  labelNext: void 0,\n  labelPrev: void 0,\n  margin: void 0,\n  disabled: false,\n  variant: 'full',\n  as: 'div',\n  elementRef: function elementRef(el) {},\n  shouldHandleFocus: true\n}, _class2.Page = _PaginationButton_index_js__WEBPACK_IMPORTED_MODULE_14__[\"PaginationButton\"], _class2.Navigation = _PaginationArrowButton_index_js__WEBPACK_IMPORTED_MODULE_15__[\"PaginationArrowButton\"], _temp)) || _class) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\n\n\n//# sourceURL=webpack:///./node_modules/@instructure/ui-pagination/es/Pagination/index.js?");

/***/ }),

/***/ "yeDC":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@instructure/ui-pagination/es/Pagination/PaginationArrowButton/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default, PaginationArrowButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PaginationArrowButton\", function() { return PaginationArrowButton; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"Ff2n\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"1OyB\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"vuIU\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"Ji7U\");\n/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ \"LK+K\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @instructure/ui-buttons */ \"K6WN\");\n/* harmony import */ var _instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @instructure/ui-a11y-content */ \"9+/z\");\n/* harmony import */ var _instructure_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @instructure/ui-tooltip */ \"HU+D\");\n/* harmony import */ var _instructure_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @instructure/ui-icons */ \"oMAr\");\n/* harmony import */ var _instructure_ui_testable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @instructure/ui-testable */ \"Zuoh\");\n\n\n\n\n\n\nvar _dec, _class, _class2, _temp;\n\n/*\n * The MIT License (MIT)\n *\n * Copyright (c) 2015 - present Instructure, Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in all\n * copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n * SOFTWARE.\n */\n\n\n\n\n\n\n\n/**\n---\nparent: Pagination\nid: Pagination.Navigation\n---\n**/\n\nvar PaginationArrowButton = (_dec = Object(_instructure_ui_testable__WEBPACK_IMPORTED_MODULE_11__[\"testable\"])(), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(PaginationArrowButton, _Component);\n\n  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(PaginationArrowButton);\n\n  function PaginationArrowButton() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, PaginationArrowButton);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PaginationArrowButton, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          label = _this$props.label,\n          direction = _this$props.direction,\n          buttonRef = _this$props.buttonRef,\n          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this$props, [\"label\", \"direction\", \"buttonRef\"]);\n\n      var Icon = direction === 'prev' ? _instructure_ui_icons__WEBPACK_IMPORTED_MODULE_10__[\"IconArrowOpenStartSolid\"] : _instructure_ui_icons__WEBPACK_IMPORTED_MODULE_10__[\"IconArrowOpenEndSolid\"];\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_instructure_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__[\"Tooltip\"], {\n        on: ['hover', 'focus'],\n        renderTip: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_8__[\"PresentationContent\"], null, label)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], Object.assign({}, props, {\n        size: \"small\",\n        withBackground: false,\n        withBorder: false,\n        screenReaderLabel: label,\n        rel: props.href || props.to ? direction : null,\n        elementRef: buttonRef\n      }), Icon));\n    }\n  }]);\n\n  PaginationArrowButton.displayName = \"PaginationArrowButton\";\n  return PaginationArrowButton;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]), _class2.propTypes = {\n  direction: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['next', 'prev']),\n  label: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node]).isRequired,\n  buttonRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func\n}, _class2.defaultProps = {\n  direction: void 0,\n  buttonRef: function buttonRef(el) {}\n}, _temp)) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PaginationArrowButton);\n\n\n//# sourceURL=webpack:///./node_modules/@instructure/ui-pagination/es/Pagination/PaginationArrowButton/index.js?");

/***/ })

}]);