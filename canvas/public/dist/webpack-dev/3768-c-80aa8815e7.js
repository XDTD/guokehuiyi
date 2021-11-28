(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3768],{

/***/ "ZXL8":
/*!************************************************************!*\
  !*** ./ui/features/dashboard/jquery/util/newCourseForm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newCourseForm; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _canvas_jquery_jquery_disableWhileLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/jquery/jquery.disableWhileLoading */ \"sXof\");\n//\n// Copyright (C) 2012 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\nfunction newCourseForm() {\n  const changeEvents = 'change keyup input';\n\n  function showCourseCodeIfNeeded() {\n    if ($nameInput.val().trim().length > 20) {\n      $nameInput.unbind(changeEvents, showCourseCodeIfNeeded);\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#course_code_wrapper').slideDown('fast');\n    }\n  }\n\n  const $nameInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#new_course_form [name=\"course[name]\"]');\n  $nameInput.bind(changeEvents, showCourseCodeIfNeeded);\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#new_course_form').submit(function () {\n    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).disableWhileLoading(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Deferred());\n  });\n}\n\n//# sourceURL=webpack:///./ui/features/dashboard/jquery/util/newCourseForm.js?");

/***/ })

}]);