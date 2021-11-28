(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["file_show"],{

/***/ "/oRJ":
/*!****************************************!*\
  !*** ./packages/sanitize-url/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sanitizeUrl; });\n/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n/**\n * Replaces bad urls with harmless urls in cases where bad urls might cause harm\n * @param {string} url\n */\nfunction sanitizeUrl(url) {\n  const defaultUrl = 'about:blank'\n  try {\n    const parsedUrl = new URL(url, window.location.origin)\n    // eslint-disable-next-line no-script-url\n    if (parsedUrl.protocol === 'javascript:') {\n      return defaultUrl\n    }\n    return url\n  } catch (e) {\n    // URL() throws TypeError if url is not a valid URL\n    return defaultUrl\n  }\n}\n\n\n//# sourceURL=webpack:///./packages/sanitize-url/index.js?");

/***/ }),

/***/ "16Fr":
/*!****************************************!*\
  !*** ./ui/features/file_show/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _canvas_doc_previews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/doc-previews */ \"CsJK\");\n/* harmony import */ var _canvas_jquery_jquery_instructure_misc_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/jquery/jquery.instructure_misc_plugins */ \"aq8L\");\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @instructure/ready */ \"3lLS\");\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_instructure_ready__WEBPACK_IMPORTED_MODULE_3__);\n/*\n * Copyright (C) 2012 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\nconst previewDefaults = {\n  height: '100%',\n  scribdParams: {\n    auto_size: true\n  }\n};\n_instructure_ready__WEBPACK_IMPORTED_MODULE_3___default()(() => {\n  const previewDiv = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#doc_preview');\n  previewDiv.fillWindowWithMe();\n  previewDiv.loadDocPreview(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.merge(previewDefaults, previewDiv.data()));\n});\n\n//# sourceURL=webpack:///./ui/features/file_show/index.js?");

/***/ })

}]);