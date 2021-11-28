(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3726],{

/***/ "FC2N":
/*!***************************************************************!*\
  !*** ./ui/shared/lti/jquery/subjects/lti.resourceImported.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../messages */ \"jFoo\");\n/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\nconst handler = () => {\n  if (!_messages__WEBPACK_IMPORTED_MODULE_0__[\"ltiState\"].tray) {\n    _messages__WEBPACK_IMPORTED_MODULE_0__[\"ltiState\"].tray = {};\n  }\n\n  _messages__WEBPACK_IMPORTED_MODULE_0__[\"ltiState\"].tray.refreshOnClose = true;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);\n\n//# sourceURL=webpack:///./ui/shared/lti/jquery/subjects/lti.resourceImported.js?");

/***/ }),

/***/ "LFe7":
/*!******************************************************************************!*\
  !*** ./ui/shared/lti/jquery/subjects/__tests__/lti.resourceImported.test.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lti_resourceImported__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lti.resourceImported */ \"FC2N\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../messages */ \"jFoo\");\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\nconst resourceImportedMessage = {\n  messageType: 'lti.resourceImported',\n  data: 'http://localhost/test'\n};\ndescribe('lti.resourceImported', () => {\n  afterAll(() => {\n    delete _messages__WEBPACK_IMPORTED_MODULE_1__[\"ltiState\"].tray;\n  });\n  it('adds refreshOnClose state to window', () => {\n    Object(_lti_resourceImported__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(resourceImportedMessage);\n    expect(_messages__WEBPACK_IMPORTED_MODULE_1__[\"ltiState\"].tray).toEqual({\n      refreshOnClose: true\n    });\n  });\n});\n\n//# sourceURL=webpack:///./ui/shared/lti/jquery/subjects/__tests__/lti.resourceImported.test.js?");

/***/ })

}]);