(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3770],{

/***/ "HVU3":
/*!*****************************************************************!*\
  !*** ./ui/shared/lti/jquery/subjects/lti.enableScrollEvents.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return enableScrollEvents; });\n/*\n * Copyright (C) 2021 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\nfunction enableScrollEvents({\n  responseMessages\n}) {\n  let timeout;\n  window.addEventListener('scroll', () => {\n    // requesting animation frames effectively debounces the scroll messages being sent\n    if (timeout) {\n      window.cancelAnimationFrame(timeout);\n    }\n\n    timeout = window.requestAnimationFrame(() => {\n      responseMessages.sendResponse({\n        subject: 'lti.scroll',\n        scrollY: window.scrollY\n      });\n    });\n  }, false);\n  return true;\n}\n\n//# sourceURL=webpack:///./ui/shared/lti/jquery/subjects/lti.enableScrollEvents.js?");

/***/ })

}]);