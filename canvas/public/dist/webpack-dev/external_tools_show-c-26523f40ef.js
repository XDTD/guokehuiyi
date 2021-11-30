(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["external_tools_show"],{

/***/ "1u6Z":
/*!***************************************************************!*\
  !*** ./ui/features/external_tools_show/jquery/tool_inline.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var html_escape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-escape */ \"gI0r\");\n/* harmony import */ var _canvas_google_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/google-analytics */ \"M+ds\");\n/* harmony import */ var _canvas_module_sequence_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/module-sequence-footer */ \"fY8A\");\n/* harmony import */ var _canvas_util_jquery_markAsDone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @canvas/util/jquery/markAsDone */ \"UWEG\");\n/* harmony import */ var _canvas_lti_jquery_tool_launch_resizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @canvas/lti/jquery/tool_launch_resizer */ \"oG6o\");\n/* harmony import */ var _canvas_lti_jquery_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @canvas/lti/jquery/messages */ \"jFoo\");\n/*\n * Copyright (C) 2011 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\nconst $toolForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tool_form');\n\nconst launchToolManually = function () {\n  const $button = $toolForm.find('button');\n  $toolForm.show(); // Firefox remembers disabled state after page reloads\n\n  $button.attr('disabled', false);\n  setTimeout(() => {\n    // LTI links have a time component in the signature and will\n    // expire after a few minutes.\n    $button.attr('disabled', true).text($button.data('expired_message'));\n  }, 60 * 2.5 * 1000);\n  $toolForm.submit(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.load_tab,.tab_loaded').toggle();\n  });\n};\n\nconst launchToolInNewTab = function () {\n  $toolForm.attr('target', '_blank');\n  launchToolManually();\n};\n\nswitch ($toolForm.data('tool-launch-type')) {\n  case 'window':\n    $toolForm.show();\n    launchToolInNewTab();\n    break;\n\n  case 'self':\n    $toolForm.removeAttr('target');\n\n    try {\n      $toolForm.submit();\n    } catch (e) {}\n\n    break;\n\n  default:\n    // Firefox throws an error when submitting insecure content\n    try {\n      $toolForm.submit();\n    } catch (e) {}\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tool_content').bind('load', () => {\n      if (document.location.protocol !== 'https:' || jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tool_form')[0].action.indexOf('https:') > -1) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#insecure_content_msg').hide();\n        $toolForm.hide();\n      }\n    });\n    setTimeout(() => {\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#insecure_content_msg').is(':visible')) {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#load_failure').show();\n        launchToolInNewTab();\n      }\n    }, 3 * 1000);\n    break;\n} // Google analytics tracking code\n\n\nconst toolName = $toolForm.data('tool-id') || 'unknown';\nconst toolPath = $toolForm.data('tool-path');\nconst messageType = $toolForm.data('message-type') || 'tool_launch';\nObject(_canvas_google_analytics__WEBPACK_IMPORTED_MODULE_2__[\"trackEvent\"])(messageType, toolName, toolPath); // Iframe resize handler\n\nlet $tool_content_wrapper;\nlet min_tool_height, canvas_chrome_height;\njquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n  const $window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);\n  $tool_content_wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tool_content_wrapper');\n  const toolResizer = new _canvas_lti_jquery_tool_launch_resizer__WEBPACK_IMPORTED_MODULE_5__[\"default\"](min_tool_height);\n  const $tool_content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('iframe#tool_content');\n  const $external_content_info_alerts = $tool_content_wrapper.find('.before_external_content_info_alert, .after_external_content_info_alert');\n  $external_content_info_alerts.on('focus', function (e) {\n    $tool_content_wrapper.find('iframe').css('border', '2px solid #008EE2');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('screenreader-only-tool');\n  });\n  $external_content_info_alerts.on('blur', function (e) {\n    $tool_content_wrapper.find('iframe').css('border', 'none');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('screenreader-only-tool');\n  });\n\n  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('ic-full-screen-lti-tool')) {\n    canvas_chrome_height = $tool_content_wrapper.offset().top + jquery__WEBPACK_IMPORTED_MODULE_0___default()('#footer').outerHeight(true);\n  } // Only calculate height on resize if body does not have\n  // .ic-full-screen-lti-tool class\n\n\n  if ($tool_content_wrapper.length && !jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('ic-full-screen-lti-tool')) {\n    $window.resize(() => {\n      if (!$tool_content_wrapper.data('height_overridden')) {\n        toolResizer.resize_tool_content_wrapper($window.height() - canvas_chrome_height - jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sequence_footer').outerHeight(true));\n      }\n    }).triggerHandler('resize');\n  }\n\n  if (ENV.LTI != null && ENV.LTI.SEQUENCE != null) {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#module_sequence_footer').moduleSequenceFooter({\n      assetType: 'Lti',\n      assetID: ENV.LTI.SEQUENCE.ASSET_ID,\n      courseID: ENV.LTI.SEQUENCE.COURSE_ID\n    });\n  }\n\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#content').on('click', '#mark-as-done-checkbox', function () {\n    _canvas_util_jquery_markAsDone__WEBPACK_IMPORTED_MODULE_4__[\"default\"].toggle(this);\n  });\n});\nObject(_canvas_lti_jquery_messages__WEBPACK_IMPORTED_MODULE_6__[\"monitorLtiMessages\"])();\n\n//# sourceURL=webpack:///./ui/features/external_tools_show/jquery/tool_inline.js?");

/***/ }),

/***/ "G4i8":
/*!**************************************************************************!*\
  !*** ./ui/shared/lti/jquery/subjects lazy ^\.\/.*\.js$ namespace object ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./__tests__/lti.resourceImported.test.js\": [\n\t\t\"LFe7\",\n\t\t3726\n\t],\n\t\"./__tests__/lti.screenReaderAlert.test.js\": [\n\t\t\"0Guc\",\n\t\t3727\n\t],\n\t\"./__tests__/requestFullWindowLaunch.test.js\": [\n\t\t\"o6ta\",\n\t\t3728\n\t],\n\t\"./lti.enableScrollEvents.js\": [\n\t\t\"HVU3\",\n\t\t3770\n\t],\n\t\"./lti.fetchWindowSize.js\": [\n\t\t\"OANa\",\n\t\t3771\n\t],\n\t\"./lti.frameResize.js\": [\n\t\t\"bSyB\",\n\t\t3709\n\t],\n\t\"./lti.removeUnloadMessage.js\": [\n\t\t\"tjuu\",\n\t\t3729\n\t],\n\t\"./lti.resourceImported.js\": [\n\t\t\"FC2N\",\n\t\t3772\n\t],\n\t\"./lti.screenReaderAlert.js\": [\n\t\t\"YYEg\",\n\t\t3773\n\t],\n\t\"./lti.scrollToTop.js\": [\n\t\t\"W/R1\",\n\t\t3774\n\t],\n\t\"./lti.setUnloadMessage.js\": [\n\t\t\"6fDN\",\n\t\t3730\n\t],\n\t\"./lti.showModuleNavigation.js\": [\n\t\t\"NSTA\",\n\t\t3775\n\t],\n\t\"./requestFullWindowLaunch.js\": [\n\t\t\"8IHO\",\n\t\t3776\n\t],\n\t\"./toggleCourseNavigationMenu.js\": [\n\t\t\"ECMy\",\n\t\t3699\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"G4i8\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./ui/shared/lti/jquery/subjects_lazy_^\\.\\/.*\\.js$_namespace_object?");

/***/ }),

/***/ "THl1":
/*!**************************************************!*\
  !*** ./ui/features/external_tools_show/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jquery_tool_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery/tool_inline */ \"1u6Z\");\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\n//# sourceURL=webpack:///./ui/features/external_tools_show/index.js?");

/***/ }),

/***/ "UWEG":
/*!*********************************************!*\
  !*** ./ui/shared/util/jquery/markAsDone.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _canvas_jquery_jquery_ajaxJSON__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/jquery/jquery.ajaxJSON */ \"dhbk\");\n//\n// Copyright (C) 2015 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  toggle(button) {\n    const data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(button).data.bind(jquery__WEBPACK_IMPORTED_MODULE_0___default()(button));\n    return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajaxJSON(data('url'), data('isChecked') ? 'DELETE' : 'PUT', {}, () => {\n      data('isChecked', !data('isChecked'));\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(button).toggleClass('btn-success');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('i', button).toggleClass('icon-empty icon-complete');\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.mark-done-labels span', button).toggleClass('visible');\n    });\n  }\n\n});\n\n//# sourceURL=webpack:///./ui/shared/util/jquery/markAsDone.js?");

/***/ }),

/***/ "fhP7":
/*!************************************************************!*\
  !*** ./ui/shared/rce/plugins/canvas_mentions/constants.js ***!
  \************************************************************/
/*! exports provided: TRIGGER_CHAR, MARKER_ID, MARKER_SELECTOR, MENTION_MENU_ID, MENTION_MENU_SELECTOR, TRUSTED_MESSAGE_ORIGIN, NAVIGATION_MESSAGE, INPUT_CHANGE_MESSAGE, SELECTION_MESSAGE, KEY_CODES, KEY_NAMES, ARIA_ID_TEMPLATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TRIGGER_CHAR\", function() { return TRIGGER_CHAR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MARKER_ID\", function() { return MARKER_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MARKER_SELECTOR\", function() { return MARKER_SELECTOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MENTION_MENU_ID\", function() { return MENTION_MENU_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MENTION_MENU_SELECTOR\", function() { return MENTION_MENU_SELECTOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TRUSTED_MESSAGE_ORIGIN\", function() { return TRUSTED_MESSAGE_ORIGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NAVIGATION_MESSAGE\", function() { return NAVIGATION_MESSAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INPUT_CHANGE_MESSAGE\", function() { return INPUT_CHANGE_MESSAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SELECTION_MESSAGE\", function() { return SELECTION_MESSAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY_CODES\", function() { return KEY_CODES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY_NAMES\", function() { return KEY_NAMES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ARIA_ID_TEMPLATES\", function() { return ARIA_ID_TEMPLATES; });\n/*\n * Copyright (C) 2021 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\nconst TRIGGER_CHAR = '@';\nconst MARKER_ID = 'mentions-marker';\nconst MARKER_SELECTOR = `span#${MARKER_ID}`;\nconst MENTION_MENU_ID = 'mention-menu';\nconst MENTION_MENU_SELECTOR = 'span#mention-menu';\nconst TRUSTED_MESSAGE_ORIGIN = ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN;\nconst NAVIGATION_MESSAGE = 'mentions.NavigationEvent';\nconst INPUT_CHANGE_MESSAGE = 'mentions.InputChangeEvent';\nconst SELECTION_MESSAGE = 'mentions.SelectionEvent';\nconst KEY_CODES = {\n  backspace: 8,\n  enter: 13,\n  up: 38,\n  down: 40,\n  escape: 27,\n  tab: 9\n};\nconst KEY_NAMES = {\n  [KEY_CODES.up]: 'UpArrow',\n  [KEY_CODES.down]: 'DownArrow',\n  [KEY_CODES.enter]: 'Enter'\n};\nconst ARIA_ID_TEMPLATES = {\n  ariaControlTemplate: instanceId => {\n    return `${instanceId}-mention-popup`;\n  },\n  activeDescendant: (instanceId, itemId) => {\n    return `${instanceId}-mention-popup-item-${itemId}`;\n  }\n};\n\n//# sourceURL=webpack:///./ui/shared/rce/plugins/canvas_mentions/constants.js?");

/***/ }),

/***/ "hI1R":
/*!*****************************************************************************!*\
  !*** ./frontend_build/i18n.js?user_content!./ui/shims/dummyI18nResource.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('user_content'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?user_content");

/***/ }),

/***/ "iO0t":
/*!***************************************************!*\
  !*** ./ui/shared/lti/jquery/response_messages.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ \"VTBJ\");\n\n\n/*\n * Copyright (C) 2021 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\nconst GENERIC_ERROR_CODE = 'error';\nconst UNSUPPORTED_SUBJECT_ERROR_CODE = 'unsupported_subject';\nconst WRONG_ORIGIN_ERROR_CODE = 'wrong_origin';\nconst BAD_REQUEST_ERROR_CODE = 'bad_request';\n\nconst buildResponseMessages = ({\n  targetWindow,\n  origin,\n  subject,\n  message_id\n}) => {\n  const sendResponse = (contents = {}) => {\n    const message = {\n      subject: `${subject}.response`\n    };\n\n    if (message_id) {\n      message.message_id = message_id;\n    }\n\n    if (targetWindow) {\n      targetWindow.postMessage(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, message), contents), origin);\n    } else {\n      // eslint-disable-next-line no-console\n      console.error('Error sending response postMessage: target window does not exist');\n    }\n  };\n\n  const sendSuccess = () => {\n    sendResponse({});\n  };\n\n  const sendError = (code, message) => {\n    const error = {\n      code\n    };\n\n    if (message) {\n      error.message = message;\n    }\n\n    sendResponse({\n      error\n    });\n  };\n\n  const sendGenericError = message => {\n    sendError(GENERIC_ERROR_CODE, message);\n  };\n\n  const sendBadRequestError = message => {\n    sendError(BAD_REQUEST_ERROR_CODE, message);\n  };\n\n  const sendWrongOriginError = () => {\n    sendError(WRONG_ORIGIN_ERROR_CODE);\n  };\n\n  const sendUnsupportedSubjectError = () => {\n    sendError(UNSUPPORTED_SUBJECT_ERROR_CODE);\n  };\n\n  return {\n    sendResponse,\n    sendSuccess,\n    sendError,\n    sendGenericError,\n    sendBadRequestError,\n    sendWrongOriginError,\n    sendUnsupportedSubjectError\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (buildResponseMessages);\n\n//# sourceURL=webpack:///./ui/shared/lti/jquery/response_messages.js?");

/***/ }),

/***/ "jFoo":
/*!******************************************!*\
  !*** ./ui/shared/lti/jquery/messages.js ***!
  \******************************************/
/*! exports provided: ltiState, SUBJECT_ALLOW_LIST, SUBJECT_IGNORE_LIST, ltiMessageHandler, monitorLtiMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ltiState\", function() { return ltiState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUBJECT_ALLOW_LIST\", function() { return SUBJECT_ALLOW_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUBJECT_IGNORE_LIST\", function() { return SUBJECT_IGNORE_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ltiMessageHandler\", function() { return ltiMessageHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"monitorLtiMessages\", function() { return monitorLtiMessages; });\n/* harmony import */ var _rce_plugins_canvas_mentions_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rce/plugins/canvas_mentions/constants */ \"fhP7\");\n/* harmony import */ var _response_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response_messages */ \"iO0t\");\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n/* eslint no-console: 0 */\n\n // page-global storage for data relevant to LTI postMessage events\n\nconst ltiState = {};\nconst SUBJECT_ALLOW_LIST = ['lti.enableScrollEvents', 'lti.fetchWindowSize', 'lti.frameResize', 'lti.removeUnloadMessage', 'lti.resourceImported', 'lti.screenReaderAlert', 'lti.scrollToTop', 'lti.setUnloadMessage', 'lti.showModuleNavigation', 'requestFullWindowLaunch', 'toggleCourseNavigationMenu']; // These are handled elsewhere so ignore them\n\nconst SUBJECT_IGNORE_LIST = ['A2ExternalContentReady', 'LtiDeepLinkingResponse', _rce_plugins_canvas_mentions_constants__WEBPACK_IMPORTED_MODULE_0__[\"NAVIGATION_MESSAGE\"], _rce_plugins_canvas_mentions_constants__WEBPACK_IMPORTED_MODULE_0__[\"INPUT_CHANGE_MESSAGE\"], _rce_plugins_canvas_mentions_constants__WEBPACK_IMPORTED_MODULE_0__[\"SELECTION_MESSAGE\"]];\n\nasync function ltiMessageHandler(e, platformStorageFeatureFlag = false) {\n  if (e.data.source && e.data.source.includes('react-devtools')) {\n    return false;\n  }\n\n  let message;\n\n  try {\n    message = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;\n  } catch (err) {\n    // unparseable message may not be meant for our handlers\n    return false;\n  } // look at messageType for backwards compatibility\n\n\n  const subject = message.subject || message.messageType;\n  const responseMessages = Object(_response_messages__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    targetWindow: e.source,\n    origin: e.origin,\n    subject,\n    message_id: message.message_id\n  });\n\n  if (SUBJECT_IGNORE_LIST.includes(subject)) {\n    // These messages are handled elsewhere\n    return false;\n  } else if (!SUBJECT_ALLOW_LIST.includes(subject)) {\n    // Enforce subject allowlist -- unknown type\n    if (platformStorageFeatureFlag) {\n      responseMessages.sendUnsupportedSubjectError();\n    }\n\n    return false;\n  }\n\n  try {\n    const handlerModule = await __webpack_require__(\"G4i8\")(`./${subject}.js`);\n    const hasSentResponse = handlerModule.default({\n      message,\n      event: e,\n      responseMessages\n    });\n\n    if (!hasSentResponse && platformStorageFeatureFlag) {\n      responseMessages.sendSuccess();\n    }\n\n    return true;\n  } catch (error) {\n    console.error(`Error loading or executing message handler for \"${subject}\": ${error}`);\n\n    if (platformStorageFeatureFlag) {\n      responseMessages.sendGenericError(error.message);\n    }\n\n    return false;\n  }\n}\n\nfunction monitorLtiMessages() {\n  var _ENV, _ENV$FEATURES;\n\n  const platformStorageFeatureFlag = (_ENV = ENV) === null || _ENV === void 0 ? void 0 : (_ENV$FEATURES = _ENV.FEATURES) === null || _ENV$FEATURES === void 0 ? void 0 : _ENV$FEATURES.lti_platform_storage;\n  window.addEventListener('message', e => {\n    if (e.data !== '') ltiMessageHandler(e, platformStorageFeatureFlag);\n  });\n}\n\n\n\n//# sourceURL=webpack:///./ui/shared/lti/jquery/messages.js?");

/***/ }),

/***/ "msTH":
/*!*************************************************!*\
  !*** ./ui/shared/util/jquery/apiUserContent.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ \"Y/W1\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var html_escape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-escape */ \"gI0r\");\n/* harmony import */ var i18n_user_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18n!user_content */ \"hI1R\");\n//\n// Copyright (C) 2015 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\n\n\nconst apiUserContent = {\n  /*\n  xsslint safeString.identifier mathml\n  */\n  translateMathmlForScreenreaders($equationImage) {\n    var _ENV, _ENV$FEATURES;\n\n    if (!((_ENV = ENV) !== null && _ENV !== void 0 && (_ENV$FEATURES = _ENV.FEATURES) !== null && _ENV$FEATURES !== void 0 && _ENV$FEATURES.new_math_equation_handling)) {\n      // note, it is safe to treat the x-canvaslms-safe-mathml as html because it\n      // only ever gets put there by us (in Api::Html::Content::apply_mathml).\n      // Any user content that gets sent to the server will have the\n      // x-canvaslms-safe-mathml attribute stripped out.\n      const mathml = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div/>').html($equationImage.attr('x-canvaslms-safe-mathml')).html();\n      const mathmlSpan = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span class=\"hidden-readable\"></span>');\n      mathmlSpan.html(mathml);\n      return mathmlSpan;\n    }\n  },\n\n  toMediaCommentLink(node) {\n    const $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<a\n        id='media_comment_${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(node).data('media_comment_id'))}'\n        data-media_comment_type='${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(node).data('media_comment_type'))}'\n        class='instructure_inline_media_comment ${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(node.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(jquery__WEBPACK_IMPORTED_MODULE_0___default()(node).attr('data-alt'))}'\n      />`);\n    $link.html(jquery__WEBPACK_IMPORTED_MODULE_0___default()(node).html());\n    return $link;\n  },\n\n  /*\n  xsslint safeString.identifier mathmlSpan\n  */\n  // use this method to process any user content fields returned in api responses\n  // this is important to handle object/embed tags safely, and to properly display audio/video tags\n  convert(html, options = {}) {\n    const $dummy = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div />').html(html); // finds any <video/audio class=\"instructure_inline_media_comment\"> and turns them into media comment thumbnails\n\n    $dummy.find('video.instructure_inline_media_comment,audio.instructure_inline_media_comment').replaceWith(function () {\n      return apiUserContent.toMediaCommentLink(this);\n    }); // remove any embed tags inside an object tag, to avoid repeated translations\n\n    $dummy.find('object.instructure_user_content:not(#kaltura_player) embed').remove(); // if we aren't actually displaying this content but are instead putting\n    // it into a RTE, we want to preserve the object/embed tags\n\n    if (!options.forEditing) {\n      // find all object/embed tags and convert them into an iframe that posts\n      // to safefiles to display the content (to avoid javascript attacks)\n      //\n      // see the corresponding code in lib/user_content.rb for non-api user\n      // content handling\n      $dummy.find('object.instructure_user_content,embed.instructure_user_content').replaceWith(function () {\n        const $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);\n\n        if (!$this.data('uc_snippet') || !$this.data('uc_sig')) {\n          return this;\n        }\n\n        const uuid = underscore__WEBPACK_IMPORTED_MODULE_1___default.a.uniqueId('uc_');\n\n        let action = '/object_snippet';\n\n        if (ENV.files_domain) {\n          action = `//${ENV.files_domain}${action}`;\n        }\n\n        const $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<form\n            action='${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(action)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(uuid)}'\n            id='form-${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(uuid)}'\n          />`);\n        $form.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"<input type='hidden'/>\").attr({\n          name: 'object_data',\n          value: $this.data('uc_snippet')\n        }));\n        $form.append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"<input type='hidden'/>\").attr({\n          name: 's',\n          value: $this.data('uc_sig')\n        }));\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').append($form);\n        setTimeout(() => $form.submit(), 0);\n        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<iframe\n            class='user_content_iframe'\n            name='${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(uuid)}'\n            style='width: ${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($this.data('uc_width'))}; height: ${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($this.data('uc_height'))};'\n            frameborder='0'\n            title='${Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(i18n_user_content__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t('User Content'))}'\n          />`);\n      });\n      $dummy.find('img.equation_image').each((index, equationImage) => {\n        const $equationImage = jquery__WEBPACK_IMPORTED_MODULE_0___default()(equationImage);\n        const mathmlSpan = apiUserContent.translateMathmlForScreenreaders($equationImage);\n        $equationImage.removeAttr('x-canvaslms-safe-mathml');\n        $equationImage.after(mathmlSpan);\n      });\n    }\n\n    return $dummy.html();\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiUserContent);\n\n//# sourceURL=webpack:///./ui/shared/util/jquery/apiUserContent.js?");

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