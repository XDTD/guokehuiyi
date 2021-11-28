(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([["change_password"],{

/***/ "+p23":
/*!***************************************!*\
  !*** ./packages/obj-flatten/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return flatten; });\n//\n// Copyright (C) 2012 - present Instructure, Inc.\n//\n// This file is part of Canvas.\n//\n// Canvas is free software: you can redistribute it and/or modify it under\n// the terms of the GNU Affero General Public License as published by the Free\n// Software Foundation, version 3 of the License.\n//\n// Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n// A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n// details.\n//\n// You should have received a copy of the GNU Affero General Public License along\n// with this program. If not, see <http://www.gnu.org/licenses/>.\n\n// turns {foo: {bar: 1}} into {'foo[bar]': 1}\nfunction flatten(obj, options = {}, result = {}, prefix) {\n  for (let key in obj) {\n    const value = obj[key]\n    key = prefix ? `${prefix}[${key}]` : key\n    let flattenable = typeof value === 'object'\n    if (value.length != null && options.arrays === false) {\n      flattenable = false\n    }\n    if (flattenable) {\n      flatten(value, options, result, key)\n    } else {\n      result[key] = value\n    }\n  }\n  return result\n}\n\n\n//# sourceURL=webpack:///./packages/obj-flatten/index.js?");

/***/ }),

/***/ "4c1s":
/*!**************************************************************************************!*\
  !*** ./frontend_build/i18n.js?observer_pairing_code!./ui/shims/dummyI18nResource.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('observer_pairing_code'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?observer_pairing_code");

/***/ }),

/***/ "9iGF":
/*!**********************************************!*\
  !*** ./ui/features/change_password/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _canvas_normalize_registration_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/normalize-registration-errors */ \"GGFl\");\n/* harmony import */ var _canvas_forms_jquery_jquery_instructure_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/forms/jquery/jquery.instructure_forms */ \"Dhso\");\n/*\n * Copyright (C) 2013 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\nconst $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#change_password_form');\n$form.formSubmit({\n  disableWhileLoading: 'spin_on_success',\n\n  errorFormatter(errors) {\n    const pseudonymId = $form.find('#pseudonym_id_select').val();\n    return Object(_canvas_normalize_registration_errors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(errors, ENV.PASSWORD_POLICIES[pseudonymId] != null ? ENV.PASSWORD_POLICIES[pseudonymId] : ENV.PASSWORD_POLICY);\n  },\n\n  success() {\n    location.href = '/login/canvas?password_changed=1';\n  },\n\n  error(errors) {\n    if (errors.nonce) location.href = '/login/canvas';\n  }\n\n});\n\n//# sourceURL=webpack:///./ui/features/change_password/index.js?");

/***/ }),

/***/ "BXhQ":
/*!*********************************************************************************************!*\
  !*** ./ui/shared/normalize-registration-errors/backbone/models/ObserverPairingCodeModel.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ObserverPairingCode; });\n/* harmony import */ var i18n_observer_pairing_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n!observer_pairing_code */ \"4c1s\");\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/backbone */ \"mX+G\");\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_canvas_backbone__WEBPACK_IMPORTED_MODULE_1__);\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\nclass ObserverPairingCode extends _canvas_backbone__WEBPACK_IMPORTED_MODULE_1___default.a.Model {} // no way of defining this in the class itself was making it work\n// with how coffeescript classes were expecting things to work\n\nObserverPairingCode.prototype.errorMap = {\n  code: {\n    invalid: i18n_observer_pairing_code__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t('errors.invalid', 'Invalid pairing code')\n  }\n};\n\n//# sourceURL=webpack:///./ui/shared/normalize-registration-errors/backbone/models/ObserverPairingCodeModel.js?");

/***/ }),

/***/ "GGFl":
/*!**************************************************************!*\
  !*** ./ui/shared/normalize-registration-errors/index.coffee ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_users_backbone_models_User_coffee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/users/backbone/models/User.coffee */ \"torl\");\n/* harmony import */ var _canvas_pseudonyms_backbone_models_Pseudonym_coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/pseudonyms/backbone/models/Pseudonym.coffee */ \"YQRR\");\n/* harmony import */ var _backbone_models_ObserverPairingCodeModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backbone/models/ObserverPairingCodeModel */ \"BXhQ\");\n/* harmony import */ var obj_flatten__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! obj-flatten */ \"+p23\");\nvar registrationErrors;\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registrationErrors = function(errors, passwordPolicy) {\n  if (passwordPolicy == null) {\n    passwordPolicy = ENV.PASSWORD_POLICY;\n  }\n  return Object(obj_flatten__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    user: _canvas_users_backbone_models_User_coffee__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.normalizeErrors(errors.user),\n    pseudonym: _canvas_pseudonyms_backbone_models_Pseudonym_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prototype.normalizeErrors(errors.pseudonym, passwordPolicy),\n    observee: _canvas_pseudonyms_backbone_models_Pseudonym_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prototype.normalizeErrors(errors.observee, passwordPolicy),\n    pairing_code: _backbone_models_ObserverPairingCodeModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].prototype.normalizeErrors(errors.pairing_code)\n  }, {\n    arrays: false\n  });\n});\n\n\n//# sourceURL=webpack:///./ui/shared/normalize-registration-errors/index.coffee?");

/***/ }),

/***/ "YQRR":
/*!***************************************************************!*\
  !*** ./ui/shared/pseudonyms/backbone/models/Pseudonym.coffee ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n!pseudonym */ \"lqhA\");\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @canvas/backbone */ \"mX+G\");\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_canvas_backbone__WEBPACK_IMPORTED_MODULE_1__);\nvar Pseudonym,\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pseudonym = (function(superClass) {\n  extend(Pseudonym, superClass);\n\n  function Pseudonym() {\n    return Pseudonym.__super__.constructor.apply(this, arguments);\n  }\n\n  Pseudonym.prototype.errorMap = function(policy) {\n    if (policy == null) {\n      policy = {};\n    }\n    return {\n      unique_id: {\n        too_short: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.required\", \"Required\"),\n        too_long: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.too_long\", \"Can't exceed %{max} characters\", {\n          max: 100\n        }),\n        invalid: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.invalid\", \"May only contain letters, numbers, or the following: %{characters}\", {\n          characters: \". + - _ @ =\"\n        }),\n        taken: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.taken\", \"Already in use\"),\n        bad_credentials: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.bad_credentials\", \"Invalid username or password\"),\n        not_email: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.not_email\", \"Not a valid email address\")\n      },\n      sis_user_id: {\n        too_long: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.too_long\", \"Can't exceed %{max} characters\", {\n          max: 255\n        }),\n        taken: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.sis_taken\", \"The SIS ID is already in use\")\n      },\n      password: {\n        too_short: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.too_short\", \"Must be at least %{min} characters\", {\n          min: policy.min_length\n        }),\n        sequence: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.sequence\", \"Can't incude a run of more than %{max} characters (e.g. abcdef)\", {\n          max: policy.max_sequence\n        }),\n        common: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.common\", \"Can't use common passwords (e.g. \\\"password\\\")\"),\n        repeated: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.repeated\", \"Can't have the same character more than %{max} times in a row\", {\n          max: policy.max_repeats\n        }),\n        confirmation: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.mismatch\", \"Doesn't match\"),\n        too_long: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.too_long\", \"Can't exceed %{max} characters\", {\n          max: 255\n        })\n      },\n      password_confirmation: {\n        confirmation: i18n_pseudonym__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.mismatch\", \"Doesn't match\")\n      }\n    };\n  };\n\n  Pseudonym.prototype.normalizeErrors = function(errors, policy) {\n    var e, i, j, len, len1, ref, ref1, ref2, too_short, type;\n    if (errors) {\n      ref = ['unique_id', 'password'];\n      for (i = 0, len = ref.length; i < len; i++) {\n        type = ref[i];\n        if (!(((ref1 = errors[type]) != null ? ref1.length : void 0) > 1)) {\n          continue;\n        }\n        too_short = null;\n        ref2 = errors[type];\n        for (j = 0, len1 = ref2.length; j < len1; j++) {\n          e = ref2[j];\n          if (e.type === 'too_short') {\n            too_short = e;\n          }\n        }\n        if (too_short) {\n          errors[type] = [too_short];\n        }\n      }\n    }\n    return Pseudonym.__super__.normalizeErrors.call(this, errors, policy);\n  };\n\n  return Pseudonym;\n\n})(_canvas_backbone__WEBPACK_IMPORTED_MODULE_1___default.a.Model));\n\n\n//# sourceURL=webpack:///./ui/shared/pseudonyms/backbone/models/Pseudonym.coffee?");

/***/ }),

/***/ "lqhA":
/*!**************************************************************************!*\
  !*** ./frontend_build/i18n.js?pseudonym!./ui/shims/dummyI18nResource.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('pseudonym'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?pseudonym");

/***/ }),

/***/ "torl":
/*!*****************************************************!*\
  !*** ./ui/shared/users/backbone/models/User.coffee ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18n_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n!user */ \"xXVA\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ \"Y/W1\");\n/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @canvas/backbone */ \"mX+G\");\n/* harmony import */ var _canvas_backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_canvas_backbone__WEBPACK_IMPORTED_MODULE_2__);\nvar User,\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User = (function(superClass) {\n  extend(User, superClass);\n\n  function User() {\n    return User.__super__.constructor.apply(this, arguments);\n  }\n\n  User.prototype.modelType = 'user';\n\n  User.prototype.resourceName = 'users';\n\n  User.prototype.errorMap = {\n    name: {\n      blank: i18n_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.required\", \"Required\"),\n      too_long: i18n_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.too_long\", \"Can't exceed %{max} characters\", {\n        max: 255\n      })\n    },\n    self_enrollment_code: {\n      blank: i18n_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.required\", \"Required\"),\n      invalid: i18n_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.invalid_code\", \"Invalid code\"),\n      already_enrolled: i18n_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.already_enrolled\", \"You are already enrolled in this course\"),\n      concluded: i18n_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"This course has concluded\"),\n      full: i18n_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.course_full\", \"This course is full\")\n    },\n    terms_of_use: {\n      accepted: i18n_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"].t(\"errors.terms\", \"You must agree to the terms\")\n    }\n  };\n\n  User.prototype.enrollments = function(attrs, first) {\n    return underscore__WEBPACK_IMPORTED_MODULE_1___default.a.where(this.get('enrollments'), attrs, first);\n  };\n\n  User.prototype.hasEnrollmentType = function(type) {\n    return !!this.enrollments({\n      type: type\n    }, true);\n  };\n\n  User.prototype.hasEnrollmentRole = function(role) {\n    return !!this.enrollments({\n      role: role\n    }, true);\n  };\n\n  User.prototype.findEnrollmentByRole = function(role) {\n    return this.enrollments({\n      role: role\n    }, true);\n  };\n\n  User.prototype.allEnrollmentsByType = function(type) {\n    return this.enrollments({\n      type: type\n    });\n  };\n\n  User.prototype.allEnrollmentsByRole = function(role) {\n    return this.enrollments({\n      role: role\n    });\n  };\n\n  User.prototype.pending = function(role) {\n    return underscore__WEBPACK_IMPORTED_MODULE_1___default.a.some(this.get('enrollments'), function(e) {\n      var ref;\n      return e.role === role && ((ref = e.enrollment_state) === 'creation_pending' || ref === 'invited');\n    });\n  };\n\n  User.prototype.inactive = function() {\n    return underscore__WEBPACK_IMPORTED_MODULE_1___default.a.every(this.get('enrollments'), function(e) {\n      return e.enrollment_state === 'inactive';\n    });\n  };\n\n  User.prototype.sectionEditableEnrollments = function() {\n    return underscore__WEBPACK_IMPORTED_MODULE_1___default.a.select(this.get('enrollments'), function(e) {\n      return e.type !== 'ObserverEnrollment';\n    });\n  };\n\n  return User;\n\n})(_canvas_backbone__WEBPACK_IMPORTED_MODULE_2___default.a.Model));\n\n\n//# sourceURL=webpack:///./ui/shared/users/backbone/models/User.coffee?");

/***/ }),

/***/ "xXVA":
/*!*********************************************************************!*\
  !*** ./frontend_build/i18n.js?user!./ui/shims/dummyI18nResource.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('user'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?user");

/***/ })

}]);