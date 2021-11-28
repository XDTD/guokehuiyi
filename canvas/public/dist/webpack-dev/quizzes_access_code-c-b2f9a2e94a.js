(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["quizzes_access_code"],{

/***/ "RgeS":
/*!*********************************************************!*\
  !*** ./ui/features/quizzes_access_code/jquery/index.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n//\n// Copyright (C) 2016 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\nconst preventDuplicateSubmissions = () => jquery__WEBPACK_IMPORTED_MODULE_0___default()('.access_code_form').submit(function (e) {\n  e.preventDefault();\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('button').prop('disabled', true);\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('submit.rails');\n});\n\nconst enableAccessCodeSubmitButton = () => jquery__WEBPACK_IMPORTED_MODULE_0___default()('.access_code_form').find('button').prop('disabled', false);\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {\n  enableAccessCodeSubmitButton();\n  preventDuplicateSubmissions();\n});\n\n//# sourceURL=webpack:///./ui/features/quizzes_access_code/jquery/index.js?");

/***/ }),

/***/ "p7vH":
/*!**************************************************!*\
  !*** ./ui/features/quizzes_access_code/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jquery_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery/index */ \"RgeS\");\n/*\n * Copyright (C) 2020 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n//# sourceURL=webpack:///./ui/features/quizzes_access_code/index.js?");

/***/ })

}]);