(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["locale"],{

/***/ "j1pP":
/*!*************************************!*\
  !*** ./ui/features/locale/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @instructure/ready */ \"3lLS\");\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_instructure_ready__WEBPACK_IMPORTED_MODULE_1__);\n/*\n * Copyright (C) 2013 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n_instructure_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {\n  const $select = jquery__WEBPACK_IMPORTED_MODULE_0___default()('select.locale');\n  const $warningLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()('i.locale-warning');\n  $warningLink.hide();\n\n  function checkWarningIcon() {\n    if (Array.from(ENV.crowdsourced_locales).includes($select.val())) {\n      $warningLink.show();\n    } else {\n      $warningLink.hide();\n    }\n  }\n\n  $select.change(() => checkWarningIcon());\n  return checkWarningIcon();\n});\n\n//# sourceURL=webpack:///./ui/features/locale/index.js?");

/***/ })

}]);