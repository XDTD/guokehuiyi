(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["context_undelete_item"],{

/***/ "IK9F":
/*!****************************************************!*\
  !*** ./ui/features/context_undelete_item/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var i18n_context_undelete_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n!context.undelete_index */ \"mW5G\");\n/* harmony import */ var _canvas_jquery_jquery_ajaxJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/jquery/jquery.ajaxJSON */ \"dhbk\");\n/* harmony import */ var _canvas_jquery_jquery_instructure_misc_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/jquery/jquery.instructure_misc_plugins */ \"aq8L\");\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => jquery__WEBPACK_IMPORTED_MODULE_0___default()('.restore_link').click(function (event) {\n  event.preventDefault();\n  const $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n  const $item = $link.parents('.item');\n  const item_name = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim($item.find('.name').text());\n  const result = confirm(i18n_context_undelete_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('are_you_sure', 'Are you sure you want to restore %{item_name}?', {\n    item_name\n  }));\n\n  if (result) {\n    $link.text(i18n_context_undelete_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('restoring', 'restoring...'));\n    $item.dim();\n    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajaxJSON($link.attr('href'), 'POST', {}, () => $item.slideUp(() => $item.remove()), () => $link.text(i18n_context_undelete_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('restore_failed', 'restore failed')));\n  }\n}));\n\n//# sourceURL=webpack:///./ui/features/context_undelete_item/index.js?");

/***/ }),

/***/ "mW5G":
/*!***************************************************************************************!*\
  !*** ./frontend_build/i18n.js?context.undelete_index!./ui/shims/dummyI18nResource.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('context.undelete_index'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?context.undelete_index");

/***/ })

}]);