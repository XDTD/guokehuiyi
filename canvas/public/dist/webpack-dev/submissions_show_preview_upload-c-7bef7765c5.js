(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["submissions_show_preview_upload"],{

/***/ "/oRJ":
/*!****************************************!*\
  !*** ./packages/sanitize-url/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sanitizeUrl; });\n/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n/**\n * Replaces bad urls with harmless urls in cases where bad urls might cause harm\n * @param {string} url\n */\nfunction sanitizeUrl(url) {\n  const defaultUrl = 'about:blank'\n  try {\n    const parsedUrl = new URL(url, window.location.origin)\n    // eslint-disable-next-line no-script-url\n    if (parsedUrl.protocol === 'javascript:') {\n      return defaultUrl\n    }\n    return url\n  } catch (e) {\n    // URL() throws TypeError if url is not a valid URL\n    return defaultUrl\n  }\n}\n\n\n//# sourceURL=webpack:///./packages/sanitize-url/index.js?");

/***/ }),

/***/ "TJwX":
/*!**************************************************************!*\
  !*** ./ui/features/submissions_show_preview_upload/index.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var i18n_submissions_show_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n!submissions.show_preview */ \"iBg8\");\n/* harmony import */ var swfobject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swfobject */ \"ufgb\");\n/* harmony import */ var swfobject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swfobject__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jqueryui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqueryui/dialog */ \"ESjL\");\n/* harmony import */ var _canvas_doc_previews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @canvas/doc-previews */ \"CsJK\");\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(() => {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('a.flash').click(function () {\n    swfobject__WEBPACK_IMPORTED_MODULE_2___default.a.embedSWF(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href'), 'main', '100%', '100%', '9.0.0', false, null, {\n      wmode: 'opaque'\n    }, null);\n    return false;\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.modal_preview_link').live('click', function () {\n    // overflow:hidden is because of some weird thing where the google doc preview gets double scrollbars\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div style=\"padding:0; overflow:hidden;\">').dialog({\n      title: i18n_submissions_show_preview__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('preview_title', 'Preview of %{title}', {\n        title: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('dialog-title')\n      }),\n      width: jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).width() * 0.95,\n      height: jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() * 0.75\n    }).loadDocPreview(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({\n      height: '100%'\n    }, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data()));\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.submission_annotation.unread_indicator').hide();\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.file-upload-submission-attachment .modal_preview_link').attr('title', i18n_submissions_show_preview__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('Preview your submission and view teacher feedback, if available'));\n    return false;\n  });\n});\n\n//# sourceURL=webpack:///./ui/features/submissions_show_preview_upload/index.js?");

/***/ }),

/***/ "iBg8":
/*!*****************************************************************************************!*\
  !*** ./frontend_build/i18n.js?submissions.show_preview!./ui/shims/dummyI18nResource.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('submissions.show_preview'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?submissions.show_preview");

/***/ })

}]);