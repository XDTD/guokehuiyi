(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3729],{

/***/ "1ffV":
/*!**************************************!*\
  !*** ./ui/shared/lti/jquery/util.js ***!
  \**************************************/
/*! exports provided: setUnloadMessage, removeUnloadMessage, findDomForWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUnloadMessage\", function() { return setUnloadMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeUnloadMessage\", function() { return removeUnloadMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findDomForWindow\", function() { return findDomForWindow; });\n/*\n * Copyright (C) 2021 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\nlet beforeUnloadHandler;\n\nfunction setUnloadMessage(msg) {\n  removeUnloadMessage();\n\n  beforeUnloadHandler = function (e) {\n    return e.returnValue = msg || '';\n  };\n\n  window.addEventListener('beforeunload', beforeUnloadHandler);\n}\n\nfunction removeUnloadMessage() {\n  if (beforeUnloadHandler) {\n    window.removeEventListener('beforeunload', beforeUnloadHandler);\n    beforeUnloadHandler = null;\n  }\n}\n\nfunction findDomForWindow(sourceWindow) {\n  const iframes = document.getElementsByTagName('IFRAME');\n\n  for (let i = 0; i < iframes.length; i += 1) {\n    if (iframes[i].contentWindow === sourceWindow) {\n      return iframes[i];\n    }\n  }\n\n  return null;\n}\n\n\n\n//# sourceURL=webpack:///./ui/shared/lti/jquery/util.js?");

/***/ }),

/***/ "tjuu":
/*!******************************************************************!*\
  !*** ./ui/shared/lti/jquery/subjects/lti.removeUnloadMessage.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return remove; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"1ffV\");\n/*\n * Copyright (C) 2021 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\nfunction remove() {\n  Object(_util__WEBPACK_IMPORTED_MODULE_0__[\"removeUnloadMessage\"])();\n}\n\n//# sourceURL=webpack:///./ui/shared/lti/jquery/subjects/lti.removeUnloadMessage.js?");

/***/ })

}]);