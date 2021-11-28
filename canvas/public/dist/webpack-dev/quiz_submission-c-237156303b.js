(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["quiz_submission"],{

/***/ "fMoB":
/*!**********************************************!*\
  !*** ./ui/features/quiz_submission/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18n_quizzes_quiz_submission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n!quizzes.quiz_submission */ \"lsZk\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _canvas_quizzes_jquery_behaviors_quiz_selectmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/quizzes/jquery/behaviors/quiz_selectmenu */ \"w4it\");\n//\n// Copyright (C) 2014 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(() => {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#questions.assessment_results .question').hover(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('hover');\n  }, function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).removeClass('hover');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.quiz_response_text img').each(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).css({\n      borderColor: '#f44',\n      borderStyle: 'solid',\n      borderWidth: '2px',\n      padding: 2\n    }).attr('title', i18n_quizzes_quiz_submission__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('titles.this_is_an_image', 'This is an image, not text, and could have changed since the student submitted'));\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.quiz_response_text iframe').each(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).css({\n      borderColor: '#f44',\n      borderStyle: 'solid',\n      borderWidth: '2px',\n      padding: 2\n    }).attr('title', i18n_quizzes_quiz_submission__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('titles.this_is_an_external_frame', 'This is an external frame, not text, and could have changed since the student submitted'));\n  });\n  const $list = jquery__WEBPACK_IMPORTED_MODULE_1___default()('nothing');\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.quiz_response_text').find('object,embed').each(function () {\n    return $list.add(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).parents('object,embed:first'));\n  });\n  return $list.each(function () {\n    const $holder = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<span/>').css('display', 'inline-block');\n    $holder.before(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this));\n    $holder.append(jquery__WEBPACK_IMPORTED_MODULE_1___default()(this));\n    return $holder.css({\n      borderColor: '#f44',\n      borderStyle: 'solid',\n      borderWidth: '2px',\n      padding: 2\n    }).attr('title', i18n_quizzes_quiz_submission__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('titles.this_is_an_external_element', 'This is an external element, not text, and could have changed since the student submitted'));\n  });\n});\n\n//# sourceURL=webpack:///./ui/features/quiz_submission/index.js?");

/***/ }),

/***/ "lsZk":
/*!****************************************************************************************!*\
  !*** ./frontend_build/i18n.js?quizzes.quiz_submission!./ui/shims/dummyI18nResource.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('quizzes.quiz_submission'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?quizzes.quiz_submission");

/***/ }),

/***/ "w4it":
/*!***************************************************************!*\
  !*** ./ui/shared/quizzes/jquery/behaviors/quiz_selectmenu.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n//\n// Copyright (C) 2012 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n // disable mousewheel in IE select menus to prevent accidental answer change\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()('.question select').bind('mousewheel', event => event.preventDefault());\n\n//# sourceURL=webpack:///./ui/shared/quizzes/jquery/behaviors/quiz_selectmenu.js?");

/***/ })

}]);