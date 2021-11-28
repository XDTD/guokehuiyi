(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3766],{

/***/ "UCrf":
/*!*************************************************!*\
  !*** ./ui/boot/initializers/showBadgeCounts.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n//\n// Copyright (C) 2012 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(() => Object.keys(ENV.badge_counts).forEach(type => {\n  const unread = ENV.badge_counts[type];\n\n  if (unread > 0) {\n    if (type === 'submissions') type = 'grades';\n    const $badge = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<b/>').text(unread).addClass('nav-badge');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(`#section-tabs .${type}`).append($badge);\n  }\n}));\n\n//# sourceURL=webpack:///./ui/boot/initializers/showBadgeCounts.js?");

/***/ })

}]);