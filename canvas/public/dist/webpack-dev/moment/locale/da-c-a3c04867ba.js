(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["moment/locale/da"],{

/***/ "DxQv":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/da.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//! moment.js locale configuration\n//! locale : Danish [da]\n//! author : Ulrik Nielsen : https://github.com/mrbase\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(/*! ../moment */ \"wd/R\")) :\n   undefined\n}(this, (function (moment) { 'use strict';\n\n    //! moment.js locale configuration\n\n    var da = moment.defineLocale('da', {\n        months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split(\n            '_'\n        ),\n        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),\n        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),\n        weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),\n        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),\n        longDateFormat: {\n            LT: 'HH:mm',\n            LTS: 'HH:mm:ss',\n            L: 'DD.MM.YYYY',\n            LL: 'D. MMMM YYYY',\n            LLL: 'D. MMMM YYYY HH:mm',\n            LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',\n        },\n        calendar: {\n            sameDay: '[i dag kl.] LT',\n            nextDay: '[i morgen kl.] LT',\n            nextWeek: 'på dddd [kl.] LT',\n            lastDay: '[i går kl.] LT',\n            lastWeek: '[i] dddd[s kl.] LT',\n            sameElse: 'L',\n        },\n        relativeTime: {\n            future: 'om %s',\n            past: '%s siden',\n            s: 'få sekunder',\n            ss: '%d sekunder',\n            m: 'et minut',\n            mm: '%d minutter',\n            h: 'en time',\n            hh: '%d timer',\n            d: 'en dag',\n            dd: '%d dage',\n            M: 'en måned',\n            MM: '%d måneder',\n            y: 'et år',\n            yy: '%d år',\n        },\n        dayOfMonthOrdinalParse: /\\d{1,2}\\./,\n        ordinal: '%d.',\n        week: {\n            dow: 1, // Monday is the first day of the week.\n            doy: 4, // The week that contains Jan 4th is the first week of the year.\n        },\n    });\n\n    return da;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/moment/locale/da.js?");

/***/ })

}]);