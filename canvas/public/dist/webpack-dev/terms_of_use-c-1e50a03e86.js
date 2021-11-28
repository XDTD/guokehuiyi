(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["terms_of_use"],{

/***/ "bDHa":
/*!*****************************************************************************!*\
  !*** ./frontend_build/i18n.js?terms_of_use!./ui/shims/dummyI18nResource.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('terms_of_use'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?terms_of_use");

/***/ }),

/***/ "ovKl":
/*!*******************************************!*\
  !*** ./ui/features/terms_of_use/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @instructure/ready */ \"3lLS\");\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_instructure_ready__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var i18n_terms_of_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18n!terms_of_use */ \"bDHa\");\n/* harmony import */ var _canvas_forms_jquery_jquery_instructure_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/forms/jquery/jquery.instructure_forms */ \"Dhso\");\n/*\n * Copyright (C) 2015 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n_instructure_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('form.reaccept_terms').submit(function () {\n    const checked = !!jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=\"user[terms_of_use]\"]').is(':checked');\n\n    if (!checked) {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).formErrors({\n        'user[terms_of_use]': i18n_terms_of_use__WEBPACK_IMPORTED_MODULE_2__[\"default\"].t('You must agree to the terms')\n      });\n    }\n\n    return checked;\n  });\n});\n\n//# sourceURL=webpack:///./ui/features/terms_of_use/index.js?");

/***/ })

}]);