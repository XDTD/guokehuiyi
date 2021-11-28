(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["group_submission_reminder"],{

/***/ "XZ3G":
/*!********************************************************!*\
  !*** ./ui/features/group_submission_reminder/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GroupSubmissionAlert; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var i18n_GroupSubmissionAlert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n!GroupSubmissionAlert */ \"wolK\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @instructure/ui-alerts */ \"spba\");\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @instructure/ready */ \"3lLS\");\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_instructure_ready__WEBPACK_IMPORTED_MODULE_6__);\n/*\n * Copyright (C) 2015 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\nfunction GroupSubmissionAlert({\n  groupType\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_5__[\"Alert\"], {\n    variant: \"warning\",\n    margin: \"medium 0\"\n  }, i18n_GroupSubmissionAlert__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('Keep in mind, this submission will count for everyone in your %{groupType} group.', {\n    groupType\n  }));\n}\nGroupSubmissionAlert.propTypes = {\n  groupType: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"].isRequired\n};\n_instructure_ready__WEBPACK_IMPORTED_MODULE_6___default()(() => {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.group_submission_alert').each((idx, alertContainer) => {\n    react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(GroupSubmissionAlert, {\n      groupType: alertContainer.getAttribute('data-group-type')\n    }), alertContainer);\n  });\n});\n\n//# sourceURL=webpack:///./ui/features/group_submission_reminder/index.js?");

/***/ }),

/***/ "wolK":
/*!*************************************************************************************!*\
  !*** ./frontend_build/i18n.js?GroupSubmissionAlert!./ui/shims/dummyI18nResource.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('GroupSubmissionAlert'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?GroupSubmissionAlert");

/***/ })

}]);