(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3765],{

/***/ "Z0hU":
/*!****************************************************************!*\
  !*** ./ui/boot/initializers/setupRavenConsoleLoggingPlugin.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setupRavenConsoleLoggingPlugin; });\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n/**\n *\n * @param {RavenClient} client This should be the Raven client\n * @param {Object} options Options for the plugin\n * @param {string} options.loggerName Name for the logger\n */\nfunction setupRavenConsoleLoggingPlugin(client, options) {\n  const CONSOLE_LEVELS = ['debug', 'info', 'warn', 'error'];\n  CONSOLE_LEVELS.forEach(level => {\n    window.console[level] = (...args) => {\n      const msg = args.join(' ');\n\n      if (msg.includes('deprecated')) {\n        const data = {\n          level: level === 'warn' ? 'warning' : level,\n          logger: options.loggerName || 'console',\n          stacktrace: true,\n          extra: {\n            arguments: args\n          }\n        }; // make raven think window.fetch is unavailable so it doesn't use the mocked one\n\n        const fetch = window.fetch;\n        delete window.fetch;\n        client.captureMessage(msg, data);\n        window.fetch = fetch;\n      }\n    };\n  });\n}\n\n//# sourceURL=webpack:///./ui/boot/initializers/setupRavenConsoleLoggingPlugin.js?");

/***/ })

}]);