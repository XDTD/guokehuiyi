(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["user_grades"],{

/***/ "LO41":
/*!******************************************!*\
  !*** ./ui/features/user_grades/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jquery_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery/index */ \"gXnK\");\n/*\n * Copyright (C) 2015 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n//# sourceURL=webpack:///./ui/features/user_grades/index.js?");

/***/ }),

/***/ "gXnK":
/*!*************************************************!*\
  !*** ./ui/features/user_grades/jquery/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var i18n_user_grades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n!user_grades */ \"hl4F\");\n/* harmony import */ var _canvas_jquery_jquery_ajaxJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/jquery/jquery.ajaxJSON */ \"dhbk\");\n/*\n * Copyright (C) 2015 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.grading_periods_selector').each(function () {\n    const $selector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          selectedOption = $selector.find('option:selected').val();\n    $selector.val(selectedOption);\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.grading_periods_selector').on('change', function (e) {\n    const selector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          gradingPeriodId = selector.val(),\n          enrollmentId = selector.attr('data-enrollment-id');\n    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajaxJSON(ENV.grades_for_student_url, 'GET', {\n      grading_period_id: gradingPeriodId,\n      enrollment_id: enrollmentId\n    }, totals => {\n      let $percentDisplay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('tr').children('.percent'),\n          gradeToShow;\n\n      if (totals.hide_final_grades) {\n        gradeToShow = '--';\n      } else if (totals.grade || totals.grade === 0) {\n        gradeToShow = totals.grade + '%';\n      } else {\n        gradeToShow = i18n_user_grades__WEBPACK_IMPORTED_MODULE_1__[\"default\"].t('no grade');\n      }\n\n      $percentDisplay.text(gradeToShow);\n    });\n  });\n});\n\n//# sourceURL=webpack:///./ui/features/user_grades/jquery/index.js?");

/***/ }),

/***/ "hl4F":
/*!****************************************************************************!*\
  !*** ./frontend_build/i18n.js?user_grades!./ui/shims/dummyI18nResource.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('user_grades'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?user_grades");

/***/ })

}]);