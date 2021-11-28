(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3771],{

/***/ "OANa":
/*!**************************************************************!*\
  !*** ./ui/shared/lti/jquery/subjects/lti.fetchWindowSize.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchWindowSize; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Copyright (C) 2021 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\nfunction fetchWindowSize({\n  responseMessages\n}) {\n  responseMessages.sendResponse({\n    height: window.innerHeight,\n    width: window.innerWidth,\n    offset: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tool_content_wrapper').offset(),\n    footer: jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fixed_bottom').height() || 0,\n    scrollY: window.scrollY\n  });\n  return true;\n}\n\n//# sourceURL=webpack:///./ui/shared/lti/jquery/subjects/lti.fetchWindowSize.js?");

/***/ })

}]);