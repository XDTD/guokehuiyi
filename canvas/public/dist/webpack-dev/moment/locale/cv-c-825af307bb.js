(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["moment/locale/cv"],{

/***/ "A+xa":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/cv.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//! moment.js locale configuration\n//! locale : Chuvash [cv]\n//! author : Anatoly Mironov : https://github.com/mirontoli\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(/*! ../moment */ \"wd/R\")) :\n   undefined\n}(this, (function (moment) { 'use strict';\n\n    //! moment.js locale configuration\n\n    var cv = moment.defineLocale('cv', {\n        months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split(\n            '_'\n        ),\n        monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),\n        weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split(\n            '_'\n        ),\n        weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),\n        weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),\n        longDateFormat: {\n            LT: 'HH:mm',\n            LTS: 'HH:mm:ss',\n            L: 'DD-MM-YYYY',\n            LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',\n            LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',\n            LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',\n        },\n        calendar: {\n            sameDay: '[Паян] LT [сехетре]',\n            nextDay: '[Ыран] LT [сехетре]',\n            lastDay: '[Ӗнер] LT [сехетре]',\n            nextWeek: '[Ҫитес] dddd LT [сехетре]',\n            lastWeek: '[Иртнӗ] dddd LT [сехетре]',\n            sameElse: 'L',\n        },\n        relativeTime: {\n            future: function (output) {\n                var affix = /сехет$/i.exec(output)\n                    ? 'рен'\n                    : /ҫул$/i.exec(output)\n                    ? 'тан'\n                    : 'ран';\n                return output + affix;\n            },\n            past: '%s каялла',\n            s: 'пӗр-ик ҫеккунт',\n            ss: '%d ҫеккунт',\n            m: 'пӗр минут',\n            mm: '%d минут',\n            h: 'пӗр сехет',\n            hh: '%d сехет',\n            d: 'пӗр кун',\n            dd: '%d кун',\n            M: 'пӗр уйӑх',\n            MM: '%d уйӑх',\n            y: 'пӗр ҫул',\n            yy: '%d ҫул',\n        },\n        dayOfMonthOrdinalParse: /\\d{1,2}-мӗш/,\n        ordinal: '%d-мӗш',\n        week: {\n            dow: 1, // Monday is the first day of the week.\n            doy: 7, // The week that contains Jan 7th is the first week of the year.\n        },\n    });\n\n    return cv;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/moment/locale/cv.js?");

/***/ })

}]);