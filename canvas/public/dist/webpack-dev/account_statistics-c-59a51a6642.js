(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["account_statistics"],{

/***/ "BElu":
/*!************************************************************************************!*\
  !*** ./frontend_build/i18n.js?accounts.statistics!./ui/shims/dummyI18nResource.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('accounts.statistics'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?accounts.statistics");

/***/ }),

/***/ "Pt7m":
/*!*************************************************!*\
  !*** ./ui/features/account_statistics/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jquery_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery/index */ \"wNLy\");\n/*\n * Copyright (C) 2011 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n//# sourceURL=webpack:///./ui/features/account_statistics/index.js?");

/***/ }),

/***/ "wNLy":
/*!********************************************************!*\
  !*** ./ui/features/account_statistics/jquery/index.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18n_accounts_statistics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n!accounts.statistics */ \"BElu\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _canvas_jquery_jquery_ajaxJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/jquery/jquery.ajaxJSON */ \"dhbk\");\n/* harmony import */ var jqueryui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqueryui/dialog */ \"ESjL\");\n/* harmony import */ var _canvas_jquery_jquery_instructure_misc_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @canvas/jquery/jquery.instructure_misc_helpers */ \"8JEM\");\n/*\n * Copyright (C) 2011 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n // replaceTags\n\nfunction populateDialog(data_points, axis, $link) {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#over_time_dialog').dialog({\n    width: 630,\n    height: 330,\n    title: i18n_accounts_statistics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('%{data_point} Over Time', {\n      data_point: axis\n    }),\n    close: () => {\n      $link.focus();\n    }\n  }); // google dependencies declared in views/acccounts/statistics since google.load uses document.write :(\n\n  /* global google */\n\n  const data = new google.visualization.DataTable();\n  data.addColumn('date', i18n_accounts_statistics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('Date'));\n  data.addColumn('number', axis || i18n_accounts_statistics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('Value'));\n  data.addColumn('string', 'title1');\n  data.addColumn('string', 'text1');\n  const rows = [];\n  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.each(data_points, function () {\n    const date = new Date();\n    date.setTime(this[0]);\n    rows.push( // this ends up being [(a date), (the number of pageViews on that date), \"an annotation tile, (if any)\", \"\"]\n    [date, this[1], void 0, void 0]);\n  });\n  data.addRows(rows);\n  const chart = new google.visualization.AnnotatedTimeLine(document.getElementById('over_time'));\n  chart.draw(data, {\n    displayAnnotations: false\n  });\n}\n\njquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(() => {\n  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.over_time_link').live('click', function (event) {\n    event.preventDefault();\n    const $link = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);\n    const name = $link.attr('data-name');\n    const url = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.replaceTags(jquery__WEBPACK_IMPORTED_MODULE_1___default()('.over_time_url').attr('href'), 'attribute', $link.attr('data-key'));\n    $link.text(i18n_accounts_statistics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('loading...'));\n    jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajaxJSON(url, 'GET', {}, data => {\n      $link.text(i18n_accounts_statistics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('over time'));\n      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#over_time_dialog .csv_url').attr('href', `${url}.csv`);\n      populateDialog(data, name, $link);\n    }, () => {\n      $link.text(i18n_accounts_statistics__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('error'));\n    });\n  });\n});\n\n//# sourceURL=webpack:///./ui/features/account_statistics/jquery/index.js?");

/***/ })

}]);