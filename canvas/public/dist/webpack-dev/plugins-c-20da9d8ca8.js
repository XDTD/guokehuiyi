(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["plugins"],{

/***/ "+TRB":
/*!*********************************************!*\
  !*** ./ui/features/plugins/jquery/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18n_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n!plugins */ \"NkJD\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _canvas_jquery_jquery_instructure_misc_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/jquery/jquery.instructure_misc_plugins */ \"aq8L\");\n/*\n * Copyright (C) 2011 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n/* showIf */\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()('form.edit_plugin_setting').live('submit', function () {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('button').attr('disabled', true).filter('.save_button').text(i18n_plugins__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('buttons.saving', 'Saving...'));\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.disabled_checkbox').change(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#settings .plugin_settings').showIf(!jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('checked'));\n  }).change();\n});\n\n//# sourceURL=webpack:///./ui/features/plugins/jquery/index.js?");

/***/ }),

/***/ "HX6A":
/*!**************************************!*\
  !*** ./ui/features/plugins/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jquery_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery/index */ \"+TRB\");\n/*\n * Copyright (C) 2011 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n//# sourceURL=webpack:///./ui/features/plugins/index.js?");

/***/ }),

/***/ "NkJD":
/*!************************************************************************!*\
  !*** ./frontend_build/i18n.js?plugins!./ui/shims/dummyI18nResource.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('plugins'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?plugins");

/***/ })

}]);