(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[3692],{

/***/ "Adza":
/*!***********************************************************************************!*\
  !*** ./frontend_build/i18n.js?csp_violation_tray!./ui/shims/dummyI18nResource.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('csp_violation_tray'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?csp_violation_tray");

/***/ }),

/***/ "B/H8":
/*!************************************************************************!*\
  !*** ./ui/features/account_settings/react/components/ViolationTray.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ViolationTray; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"ODXe\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ \"VTBJ\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var i18n_csp_violation_tray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18n!csp_violation_tray */ \"Adza\");\n/* harmony import */ var _instructure_ui_heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @instructure/ui-heading */ \"nwNI\");\n/* harmony import */ var _instructure_ui_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @instructure/ui-spinner */ \"cPO5\");\n/* harmony import */ var _instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @instructure/ui-alerts */ \"spba\");\n/* harmony import */ var _instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @instructure/ui-buttons */ \"K6WN\");\n/* harmony import */ var _instructure_ui_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @instructure/ui-view */ \"OkHH\");\n/* harmony import */ var _canvas_use_fetch_api_hook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @canvas/use-fetch-api-hook */ \"yoUd\");\n/* harmony import */ var _ViolationTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ViolationTable */ \"yH+J\");\n\n\n\n/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\n\n\n\nconst violationsReducer = (state, action) => {\n  switch (action.type) {\n    case 'FETCH_INIT':\n      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state), {}, {\n        isLoading: action.payload\n      });\n\n    case 'FETCH_SUCCESS':\n      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state), {}, {\n        isLoading: false,\n        violations: action.payload,\n        isError: false\n      });\n\n    case 'FETCH_ERROR':\n      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state), {}, {\n        isLoading: false,\n        error: action.payload,\n        isError: true\n      });\n\n    default:\n      throw new Error('Reducer was called with an invalid action');\n  }\n};\n\nfunction ViolationTray({\n  handleClose,\n  accountId,\n  addDomain,\n  whitelistedDomains\n}) {\n  const _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useReducer\"])(violationsReducer, {\n    isLoading: true,\n    isError: false,\n    violations: [],\n    error: null\n  }),\n        _useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useReducer, 2),\n        state = _useReducer2[0],\n        dispatch = _useReducer2[1];\n\n  Object(_canvas_use_fetch_api_hook__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n    path: `/api/v1/accounts/${accountId}/csp_log`,\n    success: Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(response => {\n      dispatch({\n        type: 'FETCH_SUCCESS',\n        payload: response\n      });\n    }, []),\n    error: Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(error => dispatch({\n      type: 'FETCH_ERROR',\n      payload: error\n    }), []),\n    loading: Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(loading => dispatch({\n      type: 'FETCH_INIT',\n      payload: loading\n    }), [])\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_7__[\"CloseButton\"], {\n    placement: \"start\",\n    offset: \"none\",\n    onClick: handleClose\n  }, i18n_csp_violation_tray__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t('Close')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_8__[\"View\"], {\n    as: \"div\",\n    padding: \"large x-small\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_instructure_ui_heading__WEBPACK_IMPORTED_MODULE_4__[\"Heading\"], {\n    level: \"h3\",\n    as: \"h2\"\n  }, i18n_csp_violation_tray__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t('Violation Log')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_instructure_ui_view__WEBPACK_IMPORTED_MODULE_8__[\"View\"], {\n    as: \"div\",\n    padding: \"large x-small\"\n  }, state.isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_instructure_ui_spinner__WEBPACK_IMPORTED_MODULE_5__[\"Spinner\"], {\n    renderTitle: () => i18n_csp_violation_tray__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t('Loading')\n  }), state.isError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_6__[\"Alert\"], {\n    variant: \"error\",\n    margin: \"small\"\n  }, i18n_csp_violation_tray__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t('Something went wrong loading the violations. Try reloading the page.')), !state.isLoading && !state.isError && state.violations.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_6__[\"Alert\"], {\n    variant: \"info\",\n    margin: \"small\"\n  }, i18n_csp_violation_tray__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t('No violations have been reported.')), !state.isLoading && !state.isError && state.violations.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ViolationTable__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    violations: state.violations,\n    whitelistedDomains: whitelistedDomains,\n    addDomain: addDomain,\n    accountId: accountId\n  }))));\n}\n\n//# sourceURL=webpack:///./ui/features/account_settings/react/components/ViolationTray.js?");

/***/ }),

/***/ "Htli":
/*!************************************************************************************!*\
  !*** ./frontend_build/i18n.js?csp_violation_table!./ui/shims/dummyI18nResource.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('csp_violation_table'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?csp_violation_table");

/***/ }),

/***/ "ZDrK":
/*!*****************************************************************!*\
  !*** ./ui/shared/datetime/react/components/FriendlyDatetime.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ \"VTBJ\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"Ff2n\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _canvas_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @canvas/timezone */ \"3H9/\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ \"Y/W1\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _jquery_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../jquery/index */ \"7svE\");\n/* harmony import */ var _instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @instructure/ui-a11y-content */ \"9+/z\");\n\n\nconst _excluded = [\"showTime\"];\n\n/*\n * Copyright (C) 2015 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\n\nclass FriendlyDatetime extends react__WEBPACK_IMPORTED_MODULE_2__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n    this.render = underscore__WEBPACK_IMPORTED_MODULE_5___default.a.memoize(() => {\n      // Separate props not used by the `time` element\n      const _this$props = this.props,\n            showTime = _this$props.showTime,\n            timeElementProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this$props, _excluded);\n\n      let datetime = this.props.dateTime;\n\n      if (!datetime) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"time\", null);\n      }\n\n      if (!underscore__WEBPACK_IMPORTED_MODULE_5___default.a.isDate(datetime)) {\n        datetime = _canvas_timezone__WEBPACK_IMPORTED_MODULE_4__[\"default\"].parse(datetime);\n      }\n\n      const fudged = jquery__WEBPACK_IMPORTED_MODULE_6___default.a.fudgeDateForProfileTimezone(datetime);\n      let friendly;\n\n      if (this.props.format) {\n        friendly = _canvas_timezone__WEBPACK_IMPORTED_MODULE_4__[\"default\"].format(datetime, this.props.format);\n      } else if (showTime) {\n        friendly = jquery__WEBPACK_IMPORTED_MODULE_6___default.a.datetimeString(datetime);\n      } else {\n        friendly = jquery__WEBPACK_IMPORTED_MODULE_6___default.a.friendlyDatetime(fudged);\n      }\n\n      const timeProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, timeElementProps), {}, {\n        title: jquery__WEBPACK_IMPORTED_MODULE_6___default.a.datetimeString(datetime),\n        dateTime: datetime.toISOString()\n      });\n\n      let fixedPrefix = this.props.prefix;\n\n      if (fixedPrefix && !fixedPrefix.endsWith(' ')) {\n        fixedPrefix += ' ';\n      }\n\n      let fixedPrefixMobile = this.props.prefixMobile;\n\n      if (fixedPrefixMobile && !fixedPrefixMobile.endsWith(' ')) {\n        fixedPrefixMobile += ' ';\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n        \"data-testid\": \"friendly-date-time\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_8__[\"ScreenReaderContent\"], null, fixedPrefix + friendly), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"time\", Object.assign({}, timeProps, {\n        ref: c => {\n          this.time = c;\n        },\n        \"aria-hidden\": \"true\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n        className: \"visible-desktop\"\n      }, fixedPrefix + friendly), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n        className: \"hidden-desktop\"\n      }, (fixedPrefixMobile || '') + fudged.toLocaleDateString())));\n    }, () => this.props.dateTime);\n  }\n\n}\n\nFriendlyDatetime.propTypes = {\n  dateTime: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(Date)]).isRequired,\n  format: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n  prefix: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n  prefixMobile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n  showTime: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool\n};\nFriendlyDatetime.defaultProps = {\n  format: null,\n  prefix: '',\n  prefixMobile: null,\n  showTime: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FriendlyDatetime);\n\n//# sourceURL=webpack:///./ui/shared/datetime/react/components/FriendlyDatetime.js?");

/***/ }),

/***/ "yH+J":
/*!*************************************************************************!*\
  !*** ./ui/features/account_settings/react/components/ViolationTable.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ViolationTable; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"ODXe\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var i18n_csp_violation_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18n!csp_violation_table */ \"Htli\");\n/* harmony import */ var _instructure_ui_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @instructure/ui-table */ \"+DUA\");\n/* harmony import */ var _instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @instructure/ui-alerts */ \"spba\");\n/* harmony import */ var _instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @instructure/ui-buttons */ \"K6WN\");\n/* harmony import */ var _instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @instructure/ui-a11y-content */ \"9+/z\");\n/* harmony import */ var _instructure_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @instructure/ui-icons */ \"oMAr\");\n/* harmony import */ var _canvas_alerts_react_FlashAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @canvas/alerts/react/FlashAlert */ \"uloQ\");\n/* harmony import */ var _canvas_datetime_react_components_FriendlyDatetime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @canvas/datetime/react/components/FriendlyDatetime */ \"ZDrK\");\n\n\n/*\n * Copyright (C) 2019 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\n\n\nconst HEADERS = [{\n  get name() {\n    return i18n_csp_violation_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"].t('Blocked Domain Name');\n  },\n\n  id: 0,\n  apiName: 'uri'\n}, {\n  get name() {\n    return i18n_csp_violation_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"].t('Requested');\n  },\n\n  id: 1,\n  apiName: 'count'\n}, {\n  get name() {\n    return i18n_csp_violation_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"].t('Last Attempt');\n  },\n\n  id: 2,\n  apiName: 'latest_hit'\n}, {\n  get name() {\n    return i18n_csp_violation_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"].t('Add as Allowed');\n  },\n\n  id: 3,\n  apiName: 'add_to_whitelist' // This isn't really an api thing though\n\n}];\n\nconst getHostname = url => {\n  // run against regex\n  const matches = url.match(/^https?\\:\\/\\/([^\\/?#]+)(?:[\\/?#]|$)/i); // extract hostname (will be null if no match is found)\n\n  return matches && matches[1];\n};\n\nfunction ViolationTable({\n  violations,\n  addDomain,\n  accountId,\n  whitelistedDomains,\n  showAlert = _canvas_alerts_react_FlashAlert__WEBPACK_IMPORTED_MODULE_8__[\"showFlashAlert\"]\n}) {\n  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('count'),\n        _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n        sortBy = _useState2[0],\n        setSortBy = _useState2[1]; // Default to the most requested on top\n\n\n  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n        _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n        ascending = _useState4[0],\n        setAscending = _useState4[1];\n\n  const direction = ascending ? 'ascending' : 'descending'; // Clear out any violations that are on the whitelist (allowed domain list)\n  // This should only happen when a violation from the log gets added\n  // to the allowed list\n\n  const filteredViolations = violations.filter(v => !whitelistedDomains.account.includes(getHostname(v.uri)));\n  const sortedViolations = [...(filteredViolations || [])].sort((a, b) => {\n    if (a[sortBy] < b[sortBy]) {\n      return -1;\n    }\n\n    if (a[sortBy] > b[sortBy]) {\n      return 1;\n    }\n\n    return 0;\n  });\n\n  if (!ascending) {\n    sortedViolations.reverse();\n  }\n\n  const handleSort = (event, {\n    id\n  }) => {\n    if (id === sortBy) {\n      setAscending(!ascending);\n    } else {\n      setSortBy(id);\n      setAscending(true);\n    }\n  };\n\n  if (sortedViolations.length < 1) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_4__[\"Alert\"], {\n      variant: \"info\",\n      margin: \"small\"\n    }, i18n_csp_violation_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"].t('No violations have been reported.'));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_table__WEBPACK_IMPORTED_MODULE_3__[\"Table\"], {\n    caption: i18n_csp_violation_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"].t('CSP Violations')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_table__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Head, {\n    renderSortLabel: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_6__[\"ScreenReaderContent\"], null, i18n_csp_violation_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"].t('Sort by'))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_table__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, null, HEADERS.map(header => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_table__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].ColHeader, {\n      key: header.id,\n      id: header.apiName,\n      onRequestSort: header.apiName === 'add_to_whitelist' ? null : handleSort,\n      sortDirection: header.apiName === sortBy ? direction : 'none'\n    }, header.name);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_table__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Body, null, sortedViolations.map(violation => {\n    const hostname = getHostname(violation.uri);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_table__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Row, {\n      key: violation.uri\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_table__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].RowHeader, null, hostname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_table__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, null, violation.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_table__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_canvas_datetime_react_components_FriendlyDatetime__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      dateTime: violation.latest_hit,\n      showTime: false,\n      format: i18n_csp_violation_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"].t('#date.formats.medium')\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_table__WEBPACK_IMPORTED_MODULE_3__[\"Table\"].Cell, {\n      textAlign: \"center\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n      variant: \"icon\",\n      size: \"small\",\n      icon: _instructure_ui_icons__WEBPACK_IMPORTED_MODULE_7__[\"IconAddSolid\"],\n      onClick: () => {\n        addDomain('account', accountId, hostname, () => {\n          showAlert({\n            message: i18n_csp_violation_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"].t('Success: You added %{hostname} as an allowed domain.', {\n              hostname\n            }),\n            type: 'success'\n          });\n        });\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_6__[\"ScreenReaderContent\"], null, i18n_csp_violation_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"].t('Add %{hostname} as an allowed domain', {\n      hostname\n    })))));\n  })));\n}\n\n//# sourceURL=webpack:///./ui/features/account_settings/react/components/ViolationTable.js?");

/***/ })

}]);