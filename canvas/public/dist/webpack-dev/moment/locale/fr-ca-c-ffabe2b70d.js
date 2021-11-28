(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["moment/locale/fr-ca"],{

/***/ "2fjn":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/fr-ca.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//! moment.js locale configuration\n//! locale : French (Canada) [fr-ca]\n//! author : Jonathan Abourbih : https://github.com/jonbca\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(/*! ../moment */ \"wd/R\")) :\n   undefined\n}(this, (function (moment) { 'use strict';\n\n    //! moment.js locale configuration\n\n    var frCa = moment.defineLocale('fr-ca', {\n        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split(\n            '_'\n        ),\n        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split(\n            '_'\n        ),\n        monthsParseExact: true,\n        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),\n        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),\n        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),\n        weekdaysParseExact: true,\n        longDateFormat: {\n            LT: 'HH:mm',\n            LTS: 'HH:mm:ss',\n            L: 'YYYY-MM-DD',\n            LL: 'D MMMM YYYY',\n            LLL: 'D MMMM YYYY HH:mm',\n            LLLL: 'dddd D MMMM YYYY HH:mm',\n        },\n        calendar: {\n            sameDay: '[Aujourd’hui à] LT',\n            nextDay: '[Demain à] LT',\n            nextWeek: 'dddd [à] LT',\n            lastDay: '[Hier à] LT',\n            lastWeek: 'dddd [dernier à] LT',\n            sameElse: 'L',\n        },\n        relativeTime: {\n            future: 'dans %s',\n            past: 'il y a %s',\n            s: 'quelques secondes',\n            ss: '%d secondes',\n            m: 'une minute',\n            mm: '%d minutes',\n            h: 'une heure',\n            hh: '%d heures',\n            d: 'un jour',\n            dd: '%d jours',\n            M: 'un mois',\n            MM: '%d mois',\n            y: 'un an',\n            yy: '%d ans',\n        },\n        dayOfMonthOrdinalParse: /\\d{1,2}(er|e)/,\n        ordinal: function (number, period) {\n            switch (period) {\n                // Words with masculine grammatical gender: mois, trimestre, jour\n                default:\n                case 'M':\n                case 'Q':\n                case 'D':\n                case 'DDD':\n                case 'd':\n                    return number + (number === 1 ? 'er' : 'e');\n\n                // Words with feminine grammatical gender: semaine\n                case 'w':\n                case 'W':\n                    return number + (number === 1 ? 're' : 'e');\n            }\n        },\n    });\n\n    return frCa;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/moment/locale/fr-ca.js?");

/***/ }),

/***/ "ma3U":
/*!***********************************************!*\
  !*** ./ui/ext/custom_moment_locales/fr_ca.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n__webpack_require__(/*! moment/locale/fr-ca */ \"2fjn\");\n\nconst moment = __webpack_require__(/*! moment */ \"wd/R\");\n\nconst data = moment.localeData('fr-ca');\ndata._monthsShort = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'];\n\n//# sourceURL=webpack:///./ui/ext/custom_moment_locales/fr_ca.js?");

/***/ })

}]);