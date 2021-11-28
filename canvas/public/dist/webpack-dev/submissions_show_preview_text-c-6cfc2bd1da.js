(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["submissions_show_preview_text"],{

/***/ "gZN+":
/*!************************************************************!*\
  !*** ./ui/features/submissions_show_preview_text/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {\n  // this is so iOS devices can scroll submissions in speedgrader\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('body,html').css({\n    height: '100%',\n    overflow: 'auto',\n    '-webkit-overflow-scrolling': 'touch'\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.data_view').change(function () {\n    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val() === 'paper') {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#submission_preview').removeClass('plain_text').addClass('paper');\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#submission_preview').removeClass('paper').addClass('plain_text');\n    }\n  }).change();\n});\n\n//# sourceURL=webpack:///./ui/features/submissions_show_preview_text/index.js?");

/***/ })

}]);