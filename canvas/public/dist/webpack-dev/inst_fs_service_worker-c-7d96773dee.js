(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["inst_fs_service_worker"],{

/***/ "RGX7":
/*!**********************************************!*\
  !*** ./packages/parse-browser-info/index.js ***!
  \**********************************************/
/*! exports provided: getBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBrowser\", function() { return getBrowser; });\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\nfunction getBrowser() {\n  const ua = navigator.userAgent\n  let tem\n  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\\/))\\/?\\s*(\\d+)/i) || []\n  if (/trident/i.test(M[1])) {\n    tem = /\\brv[ :]+(\\d+)/g.exec(ua) || []\n    return {name: 'IE', version: tem[1] || ''}\n  }\n  if (M[1] === 'Chrome') {\n    tem = ua.match(/\\bOPR|Edge\\/(\\d+)/)\n    if (tem != null) {\n      return {name: 'Opera', version: tem[1]}\n    }\n  }\n  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?']\n  if ((tem = ua.match(/version\\/(\\d+)/i)) != null) {\n    M.splice(1, 1, tem[1])\n  }\n  return {\n    name: M[0],\n    version: M[1]\n  }\n}\n\n\n//# sourceURL=webpack:///./packages/parse-browser-info/index.js?");

/***/ }),

/***/ "u+KF":
/*!*****************************************************!*\
  !*** ./ui/features/inst_fs_service_worker/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parse_browser_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parse-browser-info */ \"RGX7\");\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @instructure/ready */ \"3lLS\");\n/* harmony import */ var _instructure_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_instructure_ready__WEBPACK_IMPORTED_MODULE_1__);\n/*\n * Copyright (C) 2020 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n_instructure_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {\n  // See service worker definition for comments on purpose and why we only\n  // install it for recent (13+) Safari.\n  const _getBrowser = Object(parse_browser_info__WEBPACK_IMPORTED_MODULE_0__[\"getBrowser\"])(),\n        name = _getBrowser.name,\n        version = _getBrowser.version;\n\n  if (name === 'Safari' && parseFloat(version) >= 13 && 'serviceWorker' in navigator) {\n    navigator.serviceWorker.register('/inst-fs-sw.js').then(() => {\n      console.log('Registration succeeded. Refresh page to proxy Inst-FS requests through ServiceWorker.');\n    }).catch(function (err) {\n      console.log('Inst-FS ServiceWorker registration failed. :(', err);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./ui/features/inst_fs_service_worker/index.js?");

/***/ })

}]);