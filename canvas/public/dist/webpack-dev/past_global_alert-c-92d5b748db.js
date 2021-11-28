(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["past_global_alert"],{

/***/ "74SO":
/*!************************************************!*\
  !*** ./ui/features/past_global_alert/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _react_PastGlobalAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./react/PastGlobalAlert */ \"rgE4\");\n/*\n * Copyright (C) 2020 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {\n  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_PastGlobalAlert__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div/>').appendTo('#announcementWrapper')[0]);\n});\n\n//# sourceURL=webpack:///./ui/features/past_global_alert/index.js?");

/***/ }),

/***/ "QK/n":
/*!******************************************************************************************!*\
  !*** ./frontend_build/i18n.js?past_global_announcements!./ui/shims/dummyI18nResource.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('past_global_announcements'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?past_global_announcements");

/***/ }),

/***/ "rgE4":
/*!****************************************************************!*\
  !*** ./ui/features/past_global_alert/react/PastGlobalAlert.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PastGlobalAlert; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @instructure/ui-alerts */ \"spba\");\n/* harmony import */ var _instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @instructure/ui-buttons */ \"K6WN\");\n/* harmony import */ var i18n_past_global_announcements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18n!past_global_announcements */ \"QK/n\");\n/*\n * Copyright (C) 2020 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\nclass PastGlobalAlert extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n    this.state = {\n      shouldRender: false\n    };\n\n    this.handleAlertRender = () => {\n      this.setState({\n        shouldRender: true\n      });\n    };\n  }\n\n  componentDidMount() {\n    document.addEventListener('globalAlertShouldRender', this.handleAlertRender);\n  }\n\n  componentWillUnmount() {\n    document.removeEventListener('globalAlertShouldRender', this.handleAlertRender);\n  }\n\n  render() {\n    if (this.state.shouldRender) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_1__[\"Alert\"], {\n        renderCloseButtonLabel: i18n_past_global_announcements__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t('Close')\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        \"data-testid\": \"globalAnnouncementsAlert\"\n      }, i18n_past_global_announcements__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t(`You can view dismissed announcements by going to Account and selecting Global\n            Announcements from the menu.`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        \"data-testid\": \"globalAnnouncementsButton\",\n        href: \"/account_notifications\",\n        variant: \"primary\",\n        margin: \"small 0 0 0\"\n      }, i18n_past_global_announcements__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t('View')));\n    }\n\n    return null;\n  }\n\n}\n\n//# sourceURL=webpack:///./ui/features/past_global_alert/react/PastGlobalAlert.js?");

/***/ })

}]);