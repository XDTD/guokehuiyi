(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["external_content_cancel"],{

/***/ "+OA3":
/*!****************************************************************************************!*\
  !*** ./frontend_build/i18n.js?external_content.cancel!./ui/shims/dummyI18nResource.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('external_content.cancel'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?external_content.cancel");

/***/ }),

/***/ "Mg5u":
/*!******************************************************!*\
  !*** ./ui/features/external_content_cancel/index.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var i18n_external_content_cancel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n!external_content.cancel */ \"+OA3\");\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\nlet parentWindow;\nwindow.parentWindow = window.parent;\nwindow.callback = ENV.service;\n\nwhile (parentWindow && !parentWindow[callback]) {\n  parentWindow = parentWindow.parent;\n}\n\nparentWindow.$(parentWindow).trigger('externalContentCancel');\n\nif (parentWindow[callback] && parentWindow[callback].cancel) {\n  parentWindow[callback].cancel();\n  setTimeout(() => jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dialog_message').text(i18n_external_content_cancel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('popup_success', 'Canceled. This popup should close on its own...')), 1000);\n} else {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dialog_message').text(i18n_external_content_cancel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('popup_failure', \"Cannot find the parent window, you'll need to close this popup manually.\"));\n}\n\n//# sourceURL=webpack:///./ui/features/external_content_cancel/index.js?");

/***/ })

}]);