(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["manage_avatars"],{

/***/ "3W5E":
/*!****************************************************!*\
  !*** ./ui/features/manage_avatars/jquery/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18n_manage_avatars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n!manage_avatars */ \"rQ6z\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _canvas_jquery_jquery_ajaxJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/jquery/jquery.ajaxJSON */ \"dhbk\");\n/* harmony import */ var _canvas_jquery_jquery_instructure_misc_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/jquery/jquery.instructure_misc_plugins */ \"aq8L\");\n/*\n * Copyright (C) 2011 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n/* showIf */\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.update_avatar_link').live('click', function (event) {\n    event.preventDefault();\n    const $link = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);\n\n    if ($link.attr('data-state') == 'none') {\n      var result = confirm(i18n_manage_avatars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('prompts.delete_avatar', \"Are you sure you want to delete this user's profile pic?\"));\n\n      if (!result) {\n        return;\n      }\n    } else if ($link.attr('data-state') == 'locked') {\n      var result = confirm(i18n_manage_avatars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('prompts.lock_avatar', 'Locking this picture will approve it and prevent the user from updating it.  Continue?'));\n\n      if (!result) {\n        return;\n      }\n    }\n\n    const $td = $link.parents('td');\n    const url = $td.find('.user_avatar_url').attr('href');\n    $td.find('.progress').text(i18n_manage_avatars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('messages.updating', 'Updating...')).css('visibility', 'visible');\n    jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajaxJSON(url, 'PUT', {\n      'avatar[state]': $link.attr('data-state')\n    }, data => {\n      $td.find('.lock_avatar_link').showIf(data.avatar_state != 'locked').end().find('.unlock_avatar_link').showIf(data.avatar_state == 'locked').end().find('.reject_avatar_link').showIf(data.avatar_state != 'none').end().find('.approve_avatar_link').hide();\n\n      if (data.avatar_state == 'none') {\n        $td.parents('tr').find('.avatar img').attr('src', '/images/dotted_pic.png');\n      }\n\n      $td.parents('tr').attr('class', data.avatar_state);\n      $td.find('.progress').css('visibility', 'hidden');\n    }, data => {\n      $td.find('.progress').text(i18n_manage_avatars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('errors.update_failed', 'Update failed, please try again')).css('visibility', 'visible');\n    });\n  });\n});\n\n//# sourceURL=webpack:///./ui/features/manage_avatars/jquery/index.js?");

/***/ }),

/***/ "eK4T":
/*!*********************************************!*\
  !*** ./ui/features/manage_avatars/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jquery_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery/index */ \"3W5E\");\n/*\n * Copyright (C) 2011 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n//# sourceURL=webpack:///./ui/features/manage_avatars/index.js?");

/***/ }),

/***/ "rQ6z":
/*!*******************************************************************************!*\
  !*** ./frontend_build/i18n.js?manage_avatars!./ui/shims/dummyI18nResource.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('manage_avatars'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?manage_avatars");

/***/ })

}]);