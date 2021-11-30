(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["moment/locale/ne"],{

/***/ "OjkT":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ne.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//! moment.js locale configuration\n//! locale : Nepalese [ne]\n//! author : suvash : https://github.com/suvash\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(/*! ../moment */ \"wd/R\")) :\n   undefined\n}(this, (function (moment) { 'use strict';\n\n    //! moment.js locale configuration\n\n    var symbolMap = {\n            1: '१',\n            2: '२',\n            3: '३',\n            4: '४',\n            5: '५',\n            6: '६',\n            7: '७',\n            8: '८',\n            9: '९',\n            0: '०',\n        },\n        numberMap = {\n            '१': '1',\n            '२': '2',\n            '३': '3',\n            '४': '4',\n            '५': '5',\n            '६': '6',\n            '७': '7',\n            '८': '8',\n            '९': '9',\n            '०': '0',\n        };\n\n    var ne = moment.defineLocale('ne', {\n        months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split(\n            '_'\n        ),\n        monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split(\n            '_'\n        ),\n        monthsParseExact: true,\n        weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split(\n            '_'\n        ),\n        weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),\n        weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),\n        weekdaysParseExact: true,\n        longDateFormat: {\n            LT: 'Aको h:mm बजे',\n            LTS: 'Aको h:mm:ss बजे',\n            L: 'DD/MM/YYYY',\n            LL: 'D MMMM YYYY',\n            LLL: 'D MMMM YYYY, Aको h:mm बजे',\n            LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे',\n        },\n        preparse: function (string) {\n            return string.replace(/[१२३४५६७८९०]/g, function (match) {\n                return numberMap[match];\n            });\n        },\n        postformat: function (string) {\n            return string.replace(/\\d/g, function (match) {\n                return symbolMap[match];\n            });\n        },\n        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,\n        meridiemHour: function (hour, meridiem) {\n            if (hour === 12) {\n                hour = 0;\n            }\n            if (meridiem === 'राति') {\n                return hour < 4 ? hour : hour + 12;\n            } else if (meridiem === 'बिहान') {\n                return hour;\n            } else if (meridiem === 'दिउँसो') {\n                return hour >= 10 ? hour : hour + 12;\n            } else if (meridiem === 'साँझ') {\n                return hour + 12;\n            }\n        },\n        meridiem: function (hour, minute, isLower) {\n            if (hour < 3) {\n                return 'राति';\n            } else if (hour < 12) {\n                return 'बिहान';\n            } else if (hour < 16) {\n                return 'दिउँसो';\n            } else if (hour < 20) {\n                return 'साँझ';\n            } else {\n                return 'राति';\n            }\n        },\n        calendar: {\n            sameDay: '[आज] LT',\n            nextDay: '[भोलि] LT',\n            nextWeek: '[आउँदो] dddd[,] LT',\n            lastDay: '[हिजो] LT',\n            lastWeek: '[गएको] dddd[,] LT',\n            sameElse: 'L',\n        },\n        relativeTime: {\n            future: '%sमा',\n            past: '%s अगाडि',\n            s: 'केही क्षण',\n            ss: '%d सेकेण्ड',\n            m: 'एक मिनेट',\n            mm: '%d मिनेट',\n            h: 'एक घण्टा',\n            hh: '%d घण्टा',\n            d: 'एक दिन',\n            dd: '%d दिन',\n            M: 'एक महिना',\n            MM: '%d महिना',\n            y: 'एक बर्ष',\n            yy: '%d बर्ष',\n        },\n        week: {\n            dow: 0, // Sunday is the first day of the week.\n            doy: 6, // The week that contains Jan 6th is the first week of the year.\n        },\n    });\n\n    return ne;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/moment/locale/ne.js?");

/***/ })

}]);