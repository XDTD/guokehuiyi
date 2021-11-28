(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["external_tool_redirect"],{

/***/ "bOv0":
/*!******************************************************************************!*\
  !*** ./ui/features/external_tool_redirect/jquery/RedirectReturnContainer.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RedirectReturnContainer; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\nclass RedirectReturnContainer {\n  constructor() {\n    this._contentReady = (event, data) => {\n      if (data && data.return_type === 'file') {\n        return this.createMigration(data.url);\n      } else {\n        return this.redirectToSuccessUrl();\n      }\n    };\n\n    this._contentCancel = (event, data) => {\n      location.href = this.cancelUrl;\n    };\n\n    this.redirectToSuccessUrl = () => {\n      location.href = this.successUrl;\n    };\n\n    this.createMigration = file_url => {\n      const data = {\n        migration_type: 'canvas_cartridge_importer',\n        settings: {\n          file_url\n        }\n      };\n      const migrationUrl = `/api/v1/courses/${ENV.course_id}/content_migrations`;\n      return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajaxJSON(migrationUrl, 'POST', data, this.redirectToSuccessUrl, this.handleError);\n    };\n  }\n\n  attachLtiEvents() {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('externalContentReady', this._contentReady);\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('externalContentCancel', this._contentCancel);\n  }\n\n  handleError(data) {\n    return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.flashError(data.message);\n  }\n\n}\nRedirectReturnContainer.prototype.successUrl = ENV.redirect_return_success_url;\nRedirectReturnContainer.prototype.cancelUrl = ENV.redirect_return_cancel_url;\n\n//# sourceURL=webpack:///./ui/features/external_tool_redirect/jquery/RedirectReturnContainer.js?");

/***/ }),

/***/ "pcYH":
/*!*****************************************************!*\
  !*** ./ui/features/external_tool_redirect/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _jquery_RedirectReturnContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery/RedirectReturnContainer */ \"bOv0\");\n/*\n * Copyright (C) 2014 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {\n  window.external_tool_redirect = {\n    ready() {}\n\n  };\n  const container = new _jquery_RedirectReturnContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  container.attachLtiEvents();\n});\n\n//# sourceURL=webpack:///./ui/features/external_tool_redirect/index.js?");

/***/ })

}]);