(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3709],{

/***/ "1ffV":
/*!**************************************!*\
  !*** ./ui/shared/lti/jquery/util.js ***!
  \**************************************/
/*! exports provided: setUnloadMessage, removeUnloadMessage, findDomForWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUnloadMessage\", function() { return setUnloadMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeUnloadMessage\", function() { return removeUnloadMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findDomForWindow\", function() { return findDomForWindow; });\n/*\n * Copyright (C) 2021 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\nlet beforeUnloadHandler;\n\nfunction setUnloadMessage(msg) {\n  removeUnloadMessage();\n\n  beforeUnloadHandler = function (e) {\n    return e.returnValue = msg || '';\n  };\n\n  window.addEventListener('beforeunload', beforeUnloadHandler);\n}\n\nfunction removeUnloadMessage() {\n  if (beforeUnloadHandler) {\n    window.removeEventListener('beforeunload', beforeUnloadHandler);\n    beforeUnloadHandler = null;\n  }\n}\n\nfunction findDomForWindow(sourceWindow) {\n  const iframes = document.getElementsByTagName('IFRAME');\n\n  for (let i = 0; i < iframes.length; i += 1) {\n    if (iframes[i].contentWindow === sourceWindow) {\n      return iframes[i];\n    }\n  }\n\n  return null;\n}\n\n\n\n//# sourceURL=webpack:///./ui/shared/lti/jquery/util.js?");

/***/ }),

/***/ "bSyB":
/*!**********************************************************!*\
  !*** ./ui/shared/lti/jquery/subjects/lti.frameResize.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return frameResize; });\n/* harmony import */ var _tool_launch_resizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tool_launch_resizer */ \"oG6o\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ \"1ffV\");\n/*\n * Copyright (C) 2021 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\nfunction frameResize({\n  message,\n  event\n}) {\n  const toolResizer = new _tool_launch_resizer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  let height = message.height;\n  if (height <= 0) height = 1;\n  const container = toolResizer.tool_content_wrapper(message.token || event.origin).data('height_overridden', true); // If content.length is 0 then jquery didn't the tool wrapper.\n\n  if (container.length > 0) {\n    toolResizer.resize_tool_content_wrapper(height, container);\n  } else {\n    // Attempt to find an embedded iframe that matches the event source.\n    const iframe = Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"findDomForWindow\"])(event.source);\n\n    if (iframe) {\n      if (typeof height === 'number') {\n        height += 'px';\n      }\n\n      iframe.height = height;\n      iframe.style.height = height;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./ui/shared/lti/jquery/subjects/lti.frameResize.js?");

/***/ }),

/***/ "oG6o":
/*!*****************************************************!*\
  !*** ./ui/shared/lti/jquery/tool_launch_resizer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ToolLaunchResizer; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Copyright (C) 2017 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\nclass ToolLaunchResizer {\n  constructor(minToolHeight) {\n    this.minToolHeight = minToolHeight || 450;\n  }\n\n  sanitizedWrapperId(wrapperId) {\n    var _wrapperId$toString;\n\n    return wrapperId === null || wrapperId === void 0 ? void 0 : (_wrapperId$toString = wrapperId.toString()) === null || _wrapperId$toString === void 0 ? void 0 : _wrapperId$toString.replace(/[^a-zA-Z0-9_-]/g, '');\n  }\n\n  tool_content_wrapper(wrapperId) {\n    let container = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`div[data-tool-wrapper-id*='${this.sanitizedWrapperId(wrapperId)}']`);\n\n    if (container.length <= 0 && jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tool_content_wrapper').length === 1) {\n      container = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tool_content_wrapper');\n    }\n\n    return container;\n  }\n\n  resize_tool_content_wrapper(height, container) {\n    let setHeight = height;\n\n    if (typeof setHeight !== 'number') {\n      setHeight = this.minToolHeight;\n    }\n\n    const toolWrapper = container || this.tool_content_wrapper();\n    toolWrapper.height(!height || this.minToolHeight > setHeight ? this.minToolHeight : setHeight);\n  }\n\n}\n\n//# sourceURL=webpack:///./ui/shared/lti/jquery/tool_launch_resizer.js?");

/***/ })

}]);