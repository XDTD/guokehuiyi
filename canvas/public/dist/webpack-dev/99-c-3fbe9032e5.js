(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[99],{

/***/ "1r48":
/*!************************************************************!*\
  !*** ./ui/shared/due-dates/react/DueDateCalendarPicker.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _canvas_datetime_accessibleDateFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @canvas/datetime/accessibleDateFormat */ \"hKby\");\n/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ \"2PqM\");\n/* harmony import */ var _canvas_timezone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @canvas/timezone */ \"3H9/\");\n/* harmony import */ var _canvas_use_date_time_format_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @canvas/use-date-time-format-hook */ \"XxXR\");\n/* harmony import */ var _canvas_forms_jquery_jquery_instructure_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @canvas/forms/jquery/jquery.instructure_forms */ \"Dhso\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"TSYQ\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\n/*\n * Copyright (C) 2015 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\n\n\n\nfunction DueDateCalendarPicker(props) {\n  const dateInput = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  const uniqueId = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(Object(shortid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n  const oldDate = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(props.dateValue);\n  const formatDate = Object(_canvas_use_date_time_format_hook__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('date.formats.full');\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const field = jquery__WEBPACK_IMPORTED_MODULE_0___default()(dateInput.current);\n    field.data('inputdate', props.dateValue).datetime_field({\n      contextLabel: props.contextLabel\n    }).change(e => {\n      const trimmedInput = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim(e.target.value);\n      let newDate = field.data('unfudged-date');\n      newDate = trimmedInput === '' ? null : newDate;\n      newDate = changeToFancyMidnightIfNeeded(newDate);\n      newDate = setToEndOfMinuteIfNeeded(newDate);\n      field.data('inputdate', props.dateValue).val(formatDate(props.dateValue));\n      props.handleUpdate(newDate);\n    }); // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (props.dateValue === oldDate.current) return;\n    oldDate.current = props.dateValue;\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(dateInput.current).data('inputdate', props.dateValue).val(formatDate(props.dateValue));\n  }, [formatDate, props.dateValue]);\n\n  function changeToFancyMidnightIfNeeded(date) {\n    if (props.isFancyMidnight && _canvas_timezone__WEBPACK_IMPORTED_MODULE_5__[\"default\"].isMidnight(date)) {\n      return _canvas_timezone__WEBPACK_IMPORTED_MODULE_5__[\"default\"].changeToTheSecondBeforeMidnight(date);\n    }\n\n    return date;\n  }\n\n  function setToEndOfMinuteIfNeeded(date) {\n    if (props.defaultToEndOfMinute && _canvas_timezone__WEBPACK_IMPORTED_MODULE_5__[\"default\"].format(date, '%S') === '00') {\n      return _canvas_timezone__WEBPACK_IMPORTED_MODULE_5__[\"default\"].setToEndOfMinute(date);\n    }\n\n    return date;\n  }\n\n  const wrapperClassName = () => props.dateType === 'due_at' ? 'DueDateInput__Container' : 'DueDateRow__LockUnlockInput';\n\n  if (props.disabled || props.readonly) {\n    const className = classnames__WEBPACK_IMPORTED_MODULE_8___default()('ic-Form-control', {\n      readonly: props.readonly\n    });\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: className\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n      className: `${props.labelClasses} ic-Label`,\n      htmlFor: props.dateType\n    }, props.labelText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"ic-Input-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n      id: props.dateType,\n      name: props.name,\n      readOnly: true,\n      type: \"text\",\n      className: `ic-Input ${props.inputClasses}`,\n      defaultValue: formatDate(props.dateValue)\n    }), props.readonly ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"ic-Input-group__add-on\",\n      role: \"presentation\",\n      \"aria-hidden\": \"true\",\n      tabIndex: \"-1\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n      className: \"Button Button--icon-action disabled\",\n      \"aria-disabled\": \"true\",\n      type: \"button\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"i\", {\n      className: \"icon-calendar-month\",\n      role: \"presentation\"\n    })))));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    id: props.labelledBy,\n    className: `${props.labelClasses} Date__label`,\n    htmlFor: uniqueId.current\n  }, props.labelText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: wrapperClassName()\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    id: uniqueId.current,\n    name: props.name,\n    type: \"text\",\n    ref: dateInput,\n    title: Object(_canvas_datetime_accessibleDateFormat__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n    \"data-tooltip\": \"\",\n    className: props.inputClasses,\n    \"aria-labelledby\": props.labelledBy,\n    \"data-row-key\": props.rowKey,\n    \"data-date-type\": props.dateType,\n    defaultValue: formatDate(props.dateValue)\n  })));\n}\n\nDueDateCalendarPicker.propTypes = {\n  dateType: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"].isRequired,\n  handleUpdate: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"func\"].isRequired,\n  rowKey: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"].isRequired,\n  labelledBy: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"].isRequired,\n  inputClasses: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"].isRequired,\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"bool\"].isRequired,\n  isFancyMidnight: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"bool\"].isRequired,\n  defaultToEndOfMinute: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"bool\"],\n  dateValue: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__[\"oneOfType\"])([Object(prop_types__WEBPACK_IMPORTED_MODULE_2__[\"instanceOf\"])(Date), prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"]]),\n  contextLabel: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"],\n  labelText: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"],\n  labelClasses: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"],\n  name: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"],\n  readonly: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"bool\"]\n};\nDueDateCalendarPicker.defaultProps = {\n  readonly: false,\n  defaultToEndOfMinute: false,\n  labelClasses: ''\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DueDateCalendarPicker);\n\n//# sourceURL=webpack:///./ui/shared/due-dates/react/DueDateCalendarPicker.js?");

/***/ }),

/***/ "2PqM":
/*!***********************************!*\
  !*** ./packages/shortid/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return shortId; });\n/*\n * Copyright (C) 2017 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\nfunction shortId() {\n  const prefix = String.fromCharCode(97 + Math.floor(Math.random() * 26))\n  const id = Math.random()\n    .toString(36)\n    .substring(2, 10)\n  return prefix + id\n}\n\n\n//# sourceURL=webpack:///./packages/shortid/index.js?");

/***/ }),

/***/ "QjQa":
/*!***************************************************************************!*\
  !*** ./frontend_build/i18n.js?dateformat!./ui/shims/dummyI18nResource.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('dateformat'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?dateformat");

/***/ }),

/***/ "XxXR":
/*!******************************************************!*\
  !*** ./ui/shared/use-date-time-format-hook/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useDateTimeFormat; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ \"VTBJ\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/*\n * Copyright (C) 2021 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\nconst DEFAULT_FORMAT = 'time.formats.default';\nconst optionsList = {\n  'time.formats.default': {\n    // ddd, D MMM YYYY HH:mm:ss Z\n    weekday: 'short',\n    month: 'short',\n    day: 'numeric',\n    year: 'numeric',\n    hour: 'numeric',\n    minute: 'numeric',\n    second: 'numeric',\n    timeZoneName: 'short'\n  },\n  'date.formats.full': {\n    // MMM D, YYYY h:mma\n    name: 'date.formats.full',\n    month: 'short',\n    day: 'numeric',\n    year: 'numeric',\n    hour: 'numeric',\n    minute: 'numeric'\n  },\n  'date.formats.date_at_time': {\n    // MMM D [at] h:mma\n    name: 'date.formats.date_at_time',\n    dateStyle: 'long',\n    timeStyle: 'short'\n  },\n  'date.formats.long_with_weekday': {\n    // dddd, MMMM D\n    weekday: 'long',\n    month: 'long',\n    day: 'numeric'\n  },\n  'date.formats.medium_with_weekday': {\n    // ddd MMM D, YYYY\n    weekday: 'short',\n    month: 'short',\n    day: 'numeric',\n    year: 'numeric'\n  },\n  'date.formats.short_with_weekday': {\n    // ddd, MMM D\n    weekday: 'short',\n    month: 'short',\n    day: 'numeric'\n  },\n  'date.formats.short': {\n    // MMM D\n    month: 'short',\n    day: 'numeric'\n  }\n};\nObject.keys(optionsList).forEach(x => Object.freeze(optionsList[x]));\nObject.freeze(optionsList);\nfunction useDateTimeFormat(formatName, timeZone, locale) {\n  var _ENV, _ENV2;\n\n  locale = locale || ((_ENV = ENV) === null || _ENV === void 0 ? void 0 : _ENV.LOCALE) || navigator.language;\n  timeZone = timeZone || ((_ENV2 = ENV) === null || _ENV2 === void 0 ? void 0 : _ENV2.TIMEZONE) || Intl.DateTimeFormat().resolvedOptions().timeZone;\n  const formatter = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(() => {\n    const options = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, optionsList[formatName] || optionsList[DEFAULT_FORMAT]);\n\n    return new Intl.DateTimeFormat(locale, Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, options), {}, {\n      timeZone\n    }));\n  }, [formatName, locale, timeZone]);\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(date => {\n    try {\n      if (date === null) return '';\n      return formatter.format(date instanceof Date ? date : new Date(date));\n    } catch (e) {\n      if (e instanceof RangeError) return '';\n      throw e;\n    }\n  }, [formatter]);\n}\n\n//# sourceURL=webpack:///./ui/shared/use-date-time-format-hook/index.js?");

/***/ }),

/***/ "hKby":
/*!****************************************************!*\
  !*** ./ui/shared/datetime/accessibleDateFormat.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18n_dateformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n!dateformat */ \"QjQa\");\n/*\n * Copyright (C) 2015 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n/**\n * For use with date input fields.  Set the title to this value and\n * data-tooltip=\"\"\n */\n\n\nconst accessibleDateFormat = () => {\n  return i18n_dateformat__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('YYYY-MM-DD hh:mm');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (accessibleDateFormat);\n\n//# sourceURL=webpack:///./ui/shared/datetime/accessibleDateFormat.js?");

/***/ })

}]);