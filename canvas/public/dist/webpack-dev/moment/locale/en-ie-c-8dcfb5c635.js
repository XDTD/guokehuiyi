(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["moment/locale/en-ie"],{

/***/ "4dOw":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/en-ie.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//! moment.js locale configuration\n//! locale : English (Ireland) [en-ie]\n//! author : Chris Cartlidge : https://github.com/chriscartlidge\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(/*! ../moment */ \"wd/R\")) :\n   undefined\n}(this, (function (moment) { 'use strict';\n\n    //! moment.js locale configuration\n\n    var enIe = moment.defineLocale('en-ie', {\n        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(\n            '_'\n        ),\n        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),\n        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(\n            '_'\n        ),\n        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),\n        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),\n        longDateFormat: {\n            LT: 'HH:mm',\n            LTS: 'HH:mm:ss',\n            L: 'DD/MM/YYYY',\n            LL: 'D MMMM YYYY',\n            LLL: 'D MMMM YYYY HH:mm',\n            LLLL: 'dddd D MMMM YYYY HH:mm',\n        },\n        calendar: {\n            sameDay: '[Today at] LT',\n            nextDay: '[Tomorrow at] LT',\n            nextWeek: 'dddd [at] LT',\n            lastDay: '[Yesterday at] LT',\n            lastWeek: '[Last] dddd [at] LT',\n            sameElse: 'L',\n        },\n        relativeTime: {\n            future: 'in %s',\n            past: '%s ago',\n            s: 'a few seconds',\n            ss: '%d seconds',\n            m: 'a minute',\n            mm: '%d minutes',\n            h: 'an hour',\n            hh: '%d hours',\n            d: 'a day',\n            dd: '%d days',\n            M: 'a month',\n            MM: '%d months',\n            y: 'a year',\n            yy: '%d years',\n        },\n        dayOfMonthOrdinalParse: /\\d{1,2}(st|nd|rd|th)/,\n        ordinal: function (number) {\n            var b = number % 10,\n                output =\n                    ~~((number % 100) / 10) === 1\n                        ? 'th'\n                        : b === 1\n                        ? 'st'\n                        : b === 2\n                        ? 'nd'\n                        : b === 3\n                        ? 'rd'\n                        : 'th';\n            return number + output;\n        },\n        week: {\n            dow: 1, // Monday is the first day of the week.\n            doy: 4, // The week that contains Jan 4th is the first week of the year.\n        },\n    });\n\n    return enIe;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/moment/locale/en-ie.js?");

/***/ })

}]);