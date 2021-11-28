(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3769],{

/***/ "BrAc":
/*!**********************************!*\
  !*** ./ui/shared/axios/index.js ***!
  \**********************************/
/*! exports provided: AxiosPromise, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"vDqi\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AxiosPromise\", function() { return axios__WEBPACK_IMPORTED_MODULE_0__[\"AxiosPromise\"]; });\n\n/*\n * Copyright (C) 2015 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n // Add CSRF stuffs to make Canvas happy when we are making requests with axios\n\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.xsrfCookieName = '_csrf_token';\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.xsrfHeaderName = 'X-CSRF-Token'; // Handle stringified IDs for JSON responses\n\nconst originalDefaults = axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common.Accept;\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common.Accept = 'application/json+canvas-string-ids, ' + originalDefaults; // Rails checks this header to decide if a request is an xhr request\n\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';\n/* harmony default export */ __webpack_exports__[\"default\"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n//# sourceURL=webpack:///./ui/shared/axios/index.js?");

/***/ })

}]);