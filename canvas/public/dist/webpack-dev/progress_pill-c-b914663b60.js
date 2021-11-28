(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["progress_pill"],{

/***/ "QTKT":
/*!******************************************************************************!*\
  !*** ./frontend_build/i18n.js?progress_pill!./ui/shims/dummyI18nResource.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('progress_pill'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?progress_pill");

/***/ }),

/***/ "Vzc5":
/*!********************************************!*\
  !*** ./ui/features/progress_pill/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18n_progress_pill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n!progress_pill */ \"QTKT\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _instructure_ui_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @instructure/ui-tooltip */ \"HU+D\");\n/* harmony import */ var _instructure_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @instructure/ui-icons */ \"oMAr\");\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @instructure/ready */ \"3lLS\");\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_instructure_ready__WEBPACK_IMPORTED_MODULE_5__);\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n_instructure_ready__WEBPACK_IMPORTED_MODULE_5___default()(() => {\n  const presenter = document.querySelectorAll('.assignment_presenter_for_submission');\n\n  const progressIcon = presenterObject => {\n    switch (presenterObject.innerText) {\n      case 'pending':\n        return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"IconUploadLine\"], null), i18n_progress_pill__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('Uploading Submission')];\n\n      case 'failed':\n        return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"IconWarningLine\"], null), i18n_progress_pill__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('Submission Failed to Submit')];\n\n      default:\n        return null;\n    }\n  };\n\n  const progressElements = document.querySelectorAll('.react_pill_container');\n\n  for (let i = 0; i < progressElements.length; i++) {\n    const icon = progressIcon(presenter[i]);\n\n    if (icon !== null) {\n      react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_tooltip__WEBPACK_IMPORTED_MODULE_3__[\"Tooltip\"], {\n        tip: icon[1]\n      }, icon[0]), progressElements[i]);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./ui/features/progress_pill/index.js?");

/***/ })

}]);