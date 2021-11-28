(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["rubrics_index"],{

/***/ "4C5l":
/*!********************************************************************************!*\
  !*** ./frontend_build/i18n.js?lib.text_helper!./ui/shims/dummyI18nResource.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('lib.text_helper'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?lib.text_helper");

/***/ }),

/***/ "58vB":
/*!****************************************************************!*\
  !*** ./ui/shared/rubrics/jquery/rubric_delete_confirmation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18n_rubric_delete_confirmation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n!rubric_delete_confirmation */ \"b556\");\n/*\n * Copyright (C) 2017 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\nconst confirmationMessage = () => {\n  if (ENV.context_asset_string.includes('course')) {\n    return i18n_rubric_delete_confirmation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('Are you sure you want to delete this rubric? This action will remove this rubric association from all assignments in the current course, and delete any existing associated assessments.');\n  } else {\n    return i18n_rubric_delete_confirmation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('Are you sure you want to delete this rubric? Any course currently associated with this rubric will still have access to it, but no new courses will be able to use it.');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (confirmationMessage);\n\n//# sourceURL=webpack:///./ui/shared/rubrics/jquery/rubric_delete_confirmation.js?");

/***/ }),

/***/ "JOjB":
/*!******************************************!*\
  !*** ./ui/shared/util/TextHelper.coffee ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var i18n_lib_text_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n!lib.text_helper */ \"4C5l\");\n/* harmony import */ var html_escape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-escape */ \"gI0r\");\nvar AUTO_LINKIFY_PLACEHOLDER, AUTO_LINKIFY_REGEX, th;\n\n\n\n\n\n\n\nAUTO_LINKIFY_PLACEHOLDER = \"LINK-PLACEHOLDER\";\n\nAUTO_LINKIFY_REGEX = /\\b((?:https?:\\/\\/|www\\d{0,3}[.]|[a-z0-9.\\-]+[.][a-z]{2,4}\\/)(?:[^\\s()<>]+|\\([^\\s()<>]*\\))+(?:\\([^\\s()<>]*\\)|[^\\s`!()\\[\\]{};:'\".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (th = {\n  quoteClump: function(lines) {\n    return \"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>\" + (Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(i18n_lib_text_helper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t(\"quoted_text_toggle\", \"show quoted text\"))) + \"</a> <div class='quoted_text' style='display: none;'> \" + (jquery__WEBPACK_IMPORTED_MODULE_0___default.a.raw(lines.join(\"\\n\"))) + \" </div> </div>\";\n  },\n  formatMessage: function(message) {\n    var j, len, line, links, placeholderBlocks, processedLines, quoteBlock, ref;\n    links = [];\n    placeholderBlocks = [];\n    message = message.replace(AUTO_LINKIFY_REGEX, function(match, i) {\n      var link;\n      placeholderBlocks.push(match === AUTO_LINKIFY_PLACEHOLDER ? AUTO_LINKIFY_PLACEHOLDER : (link = match, !(link.slice(0, 7) === 'http://' || link.slice(0, 8) === 'https://') ? link = \"http://\" + link : void 0, links.push(link), \"<a href='\" + (Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(link)) + \"'>\" + (Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(match)) + \"</a>\"));\n      return AUTO_LINKIFY_PLACEHOLDER;\n    });\n    message = Object(html_escape__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(message);\n    message = message.replace(new RegExp(AUTO_LINKIFY_PLACEHOLDER, 'g'), function(match, i) {\n      return placeholderBlocks.shift();\n    });\n    message = message.replace(/\\n/g, '<br />\\n');\n    processedLines = [];\n    quoteBlock = [];\n    ref = message.split(\"\\n\");\n    for (j = 0, len = ref.length; j < len; j++) {\n      line = ref[j];\n      if (line.match(/^(&gt;|>)/)) {\n        quoteBlock.push(line);\n      } else {\n        if (quoteBlock.length) {\n          processedLines.push(th.quoteClump(quoteBlock));\n        }\n        quoteBlock = [];\n        processedLines.push(line);\n      }\n    }\n    if (quoteBlock.length) {\n      processedLines.push(th.quoteClump(quoteBlock));\n    }\n    return message = processedLines.join(\"\\n\");\n  },\n  delimit: function(number) {\n    var abs, integer, mod, result, sign;\n    if (isNaN(number)) {\n      return String(number);\n    }\n    sign = number < 0 ? '-' : '';\n    abs = Math.abs(number);\n    if (abs === 2e308) {\n      return String(number);\n    }\n    integer = Math.floor(abs);\n    result = abs === integer ? '' : String(abs).replace(/^\\d+\\./, '.');\n    while (integer >= 1000) {\n      mod = String(integer).replace(/\\d+(\\d\\d\\d)$/, ',$1');\n      integer = Math.floor(integer / 1000);\n      result = mod + result;\n    }\n    return sign + String(integer) + result;\n  },\n  truncateText: function(string, options) {\n    var ellipsis, max, pos, ref, truncateAt, wordSeparator;\n    if (options == null) {\n      options = {};\n    }\n    max = (ref = options.max) != null ? ref : 30;\n    ellipsis = i18n_lib_text_helper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('ellipsis', '...');\n    wordSeparator = i18n_lib_text_helper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('word_separator', ' ');\n    string = (string != null ? string : \"\").replace(/\\s+/g, wordSeparator).trim();\n    if (!string || string.length <= max) {\n      return string;\n    }\n    truncateAt = 0;\n    while (true) {\n      pos = string.indexOf(wordSeparator, truncateAt + 1);\n      if (pos < 0 || pos > max - ellipsis.length) {\n        break;\n      }\n      truncateAt = pos;\n    }\n    truncateAt || (truncateAt = max - ellipsis.length);\n    return string.substring(0, truncateAt) + ellipsis;\n  },\n  plainText: function(message) {\n    return message.replace(/(<([^>]+)>)/ig, '');\n  }\n});\n\n\n//# sourceURL=webpack:///./ui/shared/util/TextHelper.coffee?");

/***/ }),

/***/ "b556":
/*!*******************************************************************************************!*\
  !*** ./frontend_build/i18n.js?rubric_delete_confirmation!./ui/shims/dummyI18nResource.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('rubric_delete_confirmation'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?rubric_delete_confirmation");

/***/ }),

/***/ "oZQ9":
/*!********************************************!*\
  !*** ./ui/features/rubrics_index/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _canvas_rubrics_jquery_rubric_delete_confirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/rubrics/jquery/rubric_delete_confirmation */ \"58vB\");\n/* harmony import */ var _canvas_outcomes_find_outcome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/outcomes/find_outcome */ \"ESCk\");\n/* harmony import */ var _canvas_jquery_jquery_instructure_misc_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/jquery/jquery.instructure_misc_plugins */ \"aq8L\");\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => jquery__WEBPACK_IMPORTED_MODULE_0___default()('#rubrics ul .delete_rubric_link').click(function (event) {\n  event.preventDefault();\n  const $rubric = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('li');\n  return $rubric.confirmDelete({\n    url: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'),\n    message: Object(_canvas_rubrics_jquery_rubric_delete_confirmation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n\n    success() {\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).slideUp(function () {\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).remove();\n      });\n    }\n\n  });\n}));\n\n//# sourceURL=webpack:///./ui/features/rubrics_index/index.js?");

/***/ })

}]);