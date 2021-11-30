(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[73],{

/***/ "9/Y3":
/*!***********************************************************************************!*\
  !*** ./frontend_build/i18n.js?edit_rubricRatings!./ui/shims/dummyI18nResource.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('edit_rubricRatings'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?edit_rubricRatings");

/***/ }),

/***/ "EeaK":
/*!********************************************!*\
  !*** ./ui/shared/rubrics/react/Ratings.js ***!
  \********************************************/
/*! exports provided: Rating, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Rating\", function() { return Rating; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ \"VTBJ\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"LvDl\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"ouhR\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"TSYQ\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _instructure_ui_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @instructure/ui-text */ \"iE3e\");\n/* harmony import */ var _instructure_ui_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @instructure/ui-flex */ \"N46v\");\n/* harmony import */ var i18n_edit_rubricRatings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! i18n!edit_rubricRatings */ \"9/Y3\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types */ \"fHU0\");\n\n\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\n\n\n\n\n\nconst pointString = (points, endOfRangePoints) => {\n  if (endOfRangePoints !== null) {\n    return i18n_edit_rubricRatings__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t('%{points} to >%{endOfRangePoints} pts', {\n      points: i18n_edit_rubricRatings__WEBPACK_IMPORTED_MODULE_8__[\"default\"].toNumber(points, {\n        precision: 2,\n        strip_insignificant_zeros: true\n      }),\n      endOfRangePoints: i18n_edit_rubricRatings__WEBPACK_IMPORTED_MODULE_8__[\"default\"].toNumber(endOfRangePoints, {\n        precision: 2,\n        strip_insignificant_zeros: true\n      })\n    });\n  } else {\n    return i18n_edit_rubricRatings__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t('%{points} pts', {\n      points: i18n_edit_rubricRatings__WEBPACK_IMPORTED_MODULE_8__[\"default\"].toNumber(points, {\n        precision: 2,\n        strip_insignificant_zeros: true\n      })\n    });\n  }\n};\n\nconst Rating = props => {\n  const assessing = props.assessing,\n        classes = props.classes,\n        description = props.description,\n        endOfRangePoints = props.endOfRangePoints,\n        footer = props.footer,\n        long_description = props.long_description,\n        points = props.points,\n        onClick = props.onClick,\n        shaderClass = props.shaderClass,\n        tierColor = props.tierColor,\n        hidePoints = props.hidePoints,\n        isSummary = props.isSummary,\n        selected = props.selected;\n  const shaderStyle = {\n    backgroundColor: tierColor\n  };\n  const triangleStyle = {\n    borderBottomColor: tierColor\n  };\n  const shaderClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('shader', shaderClass);\n\n  const ratingPoints = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"rating-points\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n    size: \"small\",\n    weight: \"bold\"\n  }, pointString(points, endOfRangePoints)));\n\n  return (\n    /*#__PURE__*/\n    // eslint is unhappy here because it's not smart enough to understand that\n    // when this is interact-able (via tabIndex), it will always have a role\n    // eslint-disable-next-line jsx-a11y/no-static-element-interactions\n    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n      className: classes,\n      onClick: assessing ? onClick : null,\n      onKeyPress: e => e.key === 'Enter' ? onClick() : null,\n      role: assessing ? 'button' : null // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex\n      ,\n      tabIndex: assessing ? 0 : null\n    }, hidePoints ? null : ratingPoints(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n      className: \"rating-description\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n      size: \"small\",\n      lineHeight: \"condensed\",\n      weight: \"bold\"\n    }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n      size: \"small\",\n      lineHeight: \"condensed\"\n    }, long_description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n      className: \"rating-footer\"\n    }, footer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n      className: shaderClasses,\n      style: shaderStyle,\n      \"aria-label\": isSummary || !selected ? null : i18n_edit_rubricRatings__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t('This rating is selected')\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n      className: \"triangle\",\n      style: triangleStyle\n    })))\n  );\n};\n\nconst getCustomColor = (points, pointsPossible, customRatings) => {\n  const sortedRatings = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.sortBy(customRatings, 'points').reverse();\n\n  const scaledPoints = pointsPossible > 0 ? points * (sortedRatings[0].points / pointsPossible) : points;\n\n  const selectedRating = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.find(sortedRatings, rating => scaledPoints >= rating.points);\n\n  if (selectedRating) {\n    return `#${selectedRating.color}`;\n  } else {\n    return `#${lodash__WEBPACK_IMPORTED_MODULE_1___default.a.last(sortedRatings).color}`;\n  }\n};\n\nRating.propTypes = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _types__WEBPACK_IMPORTED_MODULE_9__[\"tierShape\"]), {}, {\n  assessing: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,\n  footer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,\n  selected: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,\n  hidePoints: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,\n  isSummary: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,\n  shaderClass: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string\n});\nRating.defaultProps = {\n  footer: null,\n  selected: false,\n  endOfRangePoints: null,\n  // eslint-disable-line react/default-props-match-prop-types\n  hidePoints: false,\n  shaderClass: null\n};\n\nconst Ratings = props => {\n  const assessing = props.assessing,\n        selectedRatingId = props.selectedRatingId,\n        customRatings = props.customRatings,\n        defaultMasteryThreshold = props.defaultMasteryThreshold,\n        footer = props.footer,\n        tiers = props.tiers,\n        points = props.points,\n        pointsPossible = props.pointsPossible,\n        hidePoints = props.hidePoints,\n        onPointChange = props.onPointChange,\n        isSummary = props.isSummary,\n        useRange = props.useRange;\n  const pairs = tiers.map((tier, index) => {\n    const next = tiers[index + 1];\n    return {\n      current: tier.points,\n      next: next ? next.points : null\n    };\n  });\n\n  const currentIndex = () => {\n    if (selectedRatingId) {\n      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(tiers, tier => tier.id === selectedRatingId && (useRange || tier.points === points));\n    } else {\n      return pairs.findIndex(({\n        current,\n        next\n      }) => {\n        const currentMatch = points === current;\n        const withinRange = points > next && points <= current;\n        const zeroAndInLastRange = points === 0 && next === null;\n        return currentMatch || useRange && (withinRange || zeroAndInLastRange);\n      });\n    }\n  };\n\n  const getRangePoints = (currentPoints, nextTier) => {\n    if (nextTier) {\n      return currentPoints === nextTier.points ? null : nextTier.points;\n    } else if (currentPoints !== 0) {\n      return 0;\n    }\n\n    return null;\n  };\n\n  const getTierColor = selected => {\n    if (!selected) {\n      return 'transparent';\n    }\n\n    if (customRatings && customRatings.length > 0) {\n      return getCustomColor(points, pointsPossible, customRatings);\n    } else {\n      return null;\n    }\n  };\n\n  const getShaderClass = selected => {\n    if (!selected) {\n      return null;\n    }\n\n    if (customRatings && customRatings.length > 0) {\n      return null;\n    }\n\n    if (points >= defaultMasteryThreshold * 1.5) {\n      return 'exceedsMasteryShader';\n    } else if (points >= defaultMasteryThreshold) {\n      return 'meetsMasteryShader';\n    } else if (points >= defaultMasteryThreshold / 2) {\n      return 'nearMasteryShader';\n    } else {\n      return 'wellBelowMasteryShader';\n    }\n  };\n\n  const handleClick = (tier, selected) => {\n    onPointChange(tier, selected);\n    jquery__WEBPACK_IMPORTED_MODULE_2___default.a.screenReaderFlashMessage(selected ? i18n_edit_rubricRatings__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t('Rating selected') : i18n_edit_rubricRatings__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t('Rating unselected'));\n  };\n\n  const selectedIndex = points !== void 0 ? currentIndex() : null;\n  const visible = tiers.map((tier, index) => ({\n    tier,\n    index,\n    selected: selectedIndex === index\n  })).filter(({\n    selected\n  }) => isSummary ? selected : true);\n  const ratings = visible.map(({\n    tier,\n    index\n  }) => {\n    const selected = selectedIndex === index;\n    const classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()({\n      'rating-tier': true,\n      selected,\n      assessing\n    });\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_instructure_ui_flex__WEBPACK_IMPORTED_MODULE_7__[\"Flex\"].Item, {\n      key: `tier-${index}`,\n      width: `${100 / visible.length}%`,\n      align: \"start\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Rating, Object.assign({\n      key: index,\n      assessing: assessing,\n      classes: classes,\n      endOfRangePoints: useRange ? getRangePoints(tier.points, tiers[index + 1]) : null,\n      footer: isSummary ? footer : null,\n      onClick: () => handleClick(tier, selected),\n      shaderClass: getShaderClass(selected),\n      tierColor: getTierColor(selected),\n      hidePoints: isSummary || hidePoints,\n      isSummary: isSummary,\n      selected: selected\n    }, tier)));\n  }).filter(v => v !== null);\n\n  const defaultRating = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Rating, {\n    key: 0,\n    assessing: assessing,\n    classes: \"rating-tier\",\n    description: i18n_edit_rubricRatings__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t('No details'),\n    footer: footer,\n    isSummary: isSummary,\n    points: 0,\n    hidePoints: isSummary || hidePoints\n  });\n\n  const fullFooter = () => isSummary || lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isNil(footer) ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    className: \"rating-all-footer\"\n  }, footer);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_instructure_ui_flex__WEBPACK_IMPORTED_MODULE_7__[\"Flex\"], null, ratings.length > 0 || !isSummary ? ratings : defaultRating()), fullFooter());\n};\n\nRatings.propTypes = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _types__WEBPACK_IMPORTED_MODULE_9__[\"ratingShape\"]), {}, {\n  assessing: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,\n  footer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,\n  onPointChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,\n  isSummary: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,\n  hidePoints: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool\n});\nRatings.defaultProps = {\n  footer: null,\n  hidePoints: false,\n  onPointChange: () => {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ratings);\n\n//# sourceURL=webpack:///./ui/shared/rubrics/react/Ratings.js?");

/***/ }),

/***/ "fHU0":
/*!******************************************!*\
  !*** ./ui/shared/rubrics/react/types.js ***!
  \******************************************/
/*! exports provided: pointShape, tierShape, ratingShape, assessmentShape, criterionShape, rubricShape, rubricAssociationShape, rubricAssessmentShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointShape\", function() { return pointShape; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tierShape\", function() { return tierShape; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ratingShape\", function() { return ratingShape; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assessmentShape\", function() { return assessmentShape; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"criterionShape\", function() { return criterionShape; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rubricShape\", function() { return rubricShape; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rubricAssociationShape\", function() { return rubricAssociationShape; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rubricAssessmentShape\", function() { return rubricAssessmentShape; });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * Copyright (C) 2018 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\nconst pointShape = {\n  text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,\n  valid: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.boolean\n};\nconst tierShape = {\n  points: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n  long_description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n  endOfRangePoints: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number\n};\nconst ratingShape = {\n  tiers: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(tierShape)).isRequired,\n  points: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,\n  selectedRatingId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n  defaultMasteryThreshold: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,\n  useRange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired\n};\nconst assessmentShape = {\n  criterion_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,\n  comments: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n  points: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(pointShape).isRequired,\n  focusPoints: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,\n  saveCommentsForLater: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool\n};\nconst criterionShape = {\n  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n  long_description: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n  learning_outcome_id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n  points: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,\n  ratings: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(tierShape)),\n  mastery_points: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number\n};\nconst rubricShape = {\n  criteria: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(criterionShape)),\n  free_form_criterion_comments: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,\n  points_possible: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired\n};\nconst rubricAssociationShape = {\n  hide_score_total: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,\n  summary_data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({\n    saved_comments: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string))\n  })\n};\nconst rubricAssessmentShape = {\n  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape(assessmentShape)).isRequired,\n  score: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number\n};\n\n//# sourceURL=webpack:///./ui/shared/rubrics/react/types.js?");

/***/ })

}]);