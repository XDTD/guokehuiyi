(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["rubrics_show"],{

/***/ "58vB":
/*!****************************************************************!*\
  !*** ./ui/shared/rubrics/jquery/rubric_delete_confirmation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18n_rubric_delete_confirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n!rubric_delete_confirmation */ \"b556\");\n/*\n * Copyright (C) 2017 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\nconst confirmationMessage = () => {\n  if (ENV.context_asset_string.includes('course')) {\n    return i18n_rubric_delete_confirmation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('Are you sure you want to delete this rubric? This action will remove this rubric association from all assignments in the current course, and delete any existing associated assessments.');\n  } else {\n    return i18n_rubric_delete_confirmation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('Are you sure you want to delete this rubric? Any course currently associated with this rubric will still have access to it, but no new courses will be able to use it.');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (confirmationMessage);\n\n//# sourceURL=webpack:///./ui/shared/rubrics/jquery/rubric_delete_confirmation.js?");

/***/ }),

/***/ "b556":
/*!*******************************************************************************************!*\
  !*** ./frontend_build/i18n.js?rubric_delete_confirmation!./ui/shims/dummyI18nResource.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('rubric_delete_confirmation'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?rubric_delete_confirmation");

/***/ }),

/***/ "vjwZ":
/*!*******************************************!*\
  !*** ./ui/features/rubrics_show/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _canvas_rubrics_jquery_rubric_delete_confirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/rubrics/jquery/rubric_delete_confirmation */ \"58vB\");\n/* harmony import */ var _canvas_jquery_jquery_instructure_misc_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/jquery/jquery.instructure_misc_plugins */ \"aq8L\");\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#right-side .edit_rubric_link').click(event => {\n    event.preventDefault();\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.rubric:visible:first .edit_rubric_link').click();\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#right-side .delete_rubric_link').click(event => {\n    event.preventDefault();\n\n    const callback = () => location.href = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.rubrics_url').attr('href');\n\n    callback.confirmationMessage = Object(_canvas_rubrics_jquery_rubric_delete_confirmation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.rubric:visible:first .delete_rubric_link').triggerHandler('click', callback);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).fragmentChange((event, hash) => {\n    if (hash === '#edit') {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#right-side .edit_rubric_link').click();\n    }\n  });\n});\n\n//# sourceURL=webpack:///./ui/features/rubrics_show/index.js?");

/***/ })

}]);