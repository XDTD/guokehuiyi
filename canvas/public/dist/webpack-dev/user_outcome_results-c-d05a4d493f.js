(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["user_outcome_results"],{

/***/ "3hQY":
/*!***************************************************!*\
  !*** ./ui/features/user_outcome_results/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var i18n_outcomes_user_outcome_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n!outcomes.user_outcome_results */ \"GfZ5\");\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {\n  const showAllArtifacts = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#show_all_artifacts_link');\n  showAllArtifacts.click(event => {\n    event.preventDefault();\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('tr.artifact_details').toggle();\n\n    if (showAllArtifacts.text() === i18n_outcomes_user_outcome_results__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('Show All Artifacts')) {\n      showAllArtifacts.text(i18n_outcomes_user_outcome_results__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('Hide All Artifacts'));\n    } else {\n      showAllArtifacts.text(i18n_outcomes_user_outcome_results__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('Show All Artifacts'));\n    }\n  });\n});\n\n//# sourceURL=webpack:///./ui/features/user_outcome_results/index.js?");

/***/ }),

/***/ "GfZ5":
/*!**********************************************************************************************!*\
  !*** ./frontend_build/i18n.js?outcomes.user_outcome_results!./ui/shims/dummyI18nResource.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('outcomes.user_outcome_results'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?outcomes.user_outcome_results");

/***/ })

}]);