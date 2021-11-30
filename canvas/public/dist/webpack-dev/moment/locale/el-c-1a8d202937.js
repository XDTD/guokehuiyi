(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["moment/locale/el"],{

/***/ "jUeY":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/el.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//! moment.js locale configuration\n//! locale : Greek [el]\n//! author : Aggelos Karalias : https://github.com/mehiel\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(/*! ../moment */ \"wd/R\")) :\n   undefined\n}(this, (function (moment) { 'use strict';\n\n    //! moment.js locale configuration\n\n    function isFunction(input) {\n        return (\n            (typeof Function !== 'undefined' && input instanceof Function) ||\n            Object.prototype.toString.call(input) === '[object Function]'\n        );\n    }\n\n    var el = moment.defineLocale('el', {\n        monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split(\n            '_'\n        ),\n        monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split(\n            '_'\n        ),\n        months: function (momentToFormat, format) {\n            if (!momentToFormat) {\n                return this._monthsNominativeEl;\n            } else if (\n                typeof format === 'string' &&\n                /D/.test(format.substring(0, format.indexOf('MMMM')))\n            ) {\n                // if there is a day number before 'MMMM'\n                return this._monthsGenitiveEl[momentToFormat.month()];\n            } else {\n                return this._monthsNominativeEl[momentToFormat.month()];\n            }\n        },\n        monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),\n        weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split(\n            '_'\n        ),\n        weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),\n        weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),\n        meridiem: function (hours, minutes, isLower) {\n            if (hours > 11) {\n                return isLower ? 'μμ' : 'ΜΜ';\n            } else {\n                return isLower ? 'πμ' : 'ΠΜ';\n            }\n        },\n        isPM: function (input) {\n            return (input + '').toLowerCase()[0] === 'μ';\n        },\n        meridiemParse: /[ΠΜ]\\.?Μ?\\.?/i,\n        longDateFormat: {\n            LT: 'h:mm A',\n            LTS: 'h:mm:ss A',\n            L: 'DD/MM/YYYY',\n            LL: 'D MMMM YYYY',\n            LLL: 'D MMMM YYYY h:mm A',\n            LLLL: 'dddd, D MMMM YYYY h:mm A',\n        },\n        calendarEl: {\n            sameDay: '[Σήμερα {}] LT',\n            nextDay: '[Αύριο {}] LT',\n            nextWeek: 'dddd [{}] LT',\n            lastDay: '[Χθες {}] LT',\n            lastWeek: function () {\n                switch (this.day()) {\n                    case 6:\n                        return '[το προηγούμενο] dddd [{}] LT';\n                    default:\n                        return '[την προηγούμενη] dddd [{}] LT';\n                }\n            },\n            sameElse: 'L',\n        },\n        calendar: function (key, mom) {\n            var output = this._calendarEl[key],\n                hours = mom && mom.hours();\n            if (isFunction(output)) {\n                output = output.apply(mom);\n            }\n            return output.replace('{}', hours % 12 === 1 ? 'στη' : 'στις');\n        },\n        relativeTime: {\n            future: 'σε %s',\n            past: '%s πριν',\n            s: 'λίγα δευτερόλεπτα',\n            ss: '%d δευτερόλεπτα',\n            m: 'ένα λεπτό',\n            mm: '%d λεπτά',\n            h: 'μία ώρα',\n            hh: '%d ώρες',\n            d: 'μία μέρα',\n            dd: '%d μέρες',\n            M: 'ένας μήνας',\n            MM: '%d μήνες',\n            y: 'ένας χρόνος',\n            yy: '%d χρόνια',\n        },\n        dayOfMonthOrdinalParse: /\\d{1,2}η/,\n        ordinal: '%dη',\n        week: {\n            dow: 1, // Monday is the first day of the week.\n            doy: 4, // The week that contains Jan 4st is the first week of the year.\n        },\n    });\n\n    return el;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/moment/locale/el.js?");

/***/ })

}]);