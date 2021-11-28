(window["canvasWebpackJsonp"] = window["canvasWebpackJsonp"] || []).push([[126],{

/***/ "+/1D":
/*!*************************************************!*\
  !*** ./ui/shared/confetti/images/HorseShoe.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cf6697b803818c9ee716b25d48f88f82.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/HorseShoe.svg?");

/***/ }),

/***/ "+3QO":
/*!***************************************************!*\
  !*** ./node_modules/confetti-js/dist/index.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ConfettiGenerator(params) {\n  //////////////\n  // Defaults\n  var appstate = {\n    target: 'confetti-holder', // Id of the canvas\n    max: 80, // Max itens to render\n    size: 1, // prop size\n    animate: true, // Should animate?\n    respawn: true, // Should confettis be respawned when getting out of screen?\n    props: ['circle', 'square', 'triangle', 'line'], // Types of confetti\n    colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]], // Colors to render confetti\n    clock: 25, // Speed of confetti fall\n    interval: null, // Draw interval holder\n    rotate: false, // Whenever to rotate a prop\n    start_from_edge: false, // Should confettis spawn at the top/bottom of the screen?\n    width: window.innerWidth, // canvas width (as int, in px)\n    height: window.innerHeight // canvas height (as int, in px)\n  };\n\n  //////////////\n  // Setting parameters if received\n  if(params) {\n    if(params.target)\n      appstate.target = params.target;\n    if(params.max)\n      appstate.max = params.max;\n    if(params.size)\n      appstate.size = params.size;\n    if(params.animate !== undefined && params.animate !== null)\n      appstate.animate = params.animate;\n    if(params.respawn !== undefined && params.respawn !== null)\n      appstate.respawn = params.respawn;\n    if(params.props)\n      appstate.props = params.props;\n    if(params.colors)\n      appstate.colors = params.colors;\n    if(params.clock)\n      appstate.clock = params.clock;\n    if(params.start_from_edge !== undefined && params.start_from_edge !== null)\n      appstate.start_from_edge = params.start_from_edge;\n    if(params.width)\n      appstate.width = params.width;\n    if(params.height)\n      appstate.height = params.height;\n    if(params.rotate !== undefined && params.rotate !== null)\n      appstate.rotate = params.rotate;\n  }\n\n  //////////////\n  // Properties\n  var cv = document.getElementById(appstate.target);\n  var ctx = cv.getContext(\"2d\");\n  var particles = [];\n\n  //////////////\n  // Random helper (to minimize typing)\n  function rand(limit, floor) {\n    if(!limit) limit = 1;\n    var rand = Math.random() * limit;\n    return !floor ? rand : Math.floor(rand);\n  }\n\n  var totalWeight = appstate.props.reduce(function(weight, prop) {\n    return weight + (prop.weight || 1);\n  }, 0);\n  function selectProp() {\n    var rand = Math.random() * totalWeight;\n    for (var i = 0; i < appstate.props.length; ++i) {\n      var weight = appstate.props[i].weight || 1;\n      if (rand < weight) return i;\n      rand -= weight;\n    }\n  }\n\n  //////////////\n  // Confetti particle generator\n  function particleFactory() {\n    var prop = appstate.props[selectProp()];\n    var p = {\n      prop: prop.type ? prop.type : prop, //prop type\n      x: rand(appstate.width), //x-coordinate\n      y: appstate.start_from_edge ? (appstate.clock >= 0 ? -10 : parseFloat(appstate.height) + 10) : rand(appstate.height), //y-coordinate\n      src: prop.src,\n      radius: rand(4) + 1, //radius\n      size: prop.size,\n      rotate: appstate.rotate,\n      line: Math.floor(rand(65) - 30), // line angle\n      angles: [rand(10, true) + 2, rand(10, true) + 2, rand(10, true) + 2, rand(10, true) + 2], // triangle drawing angles\n      color: appstate.colors[rand(appstate.colors.length, true)], // color\n      rotation: rand(360, true) * Math.PI/180,\n      speed: rand(appstate.clock / 7) + (appstate.clock / 30)\n    };\n\n    return p;\n  }\n\n  //////////////\n  // Confetti drawing on canvas\n  function particleDraw(p) {\n    if (!p) {\n      return;\n    }\n\n    var op = (p.radius <= 3) ? 0.4 : 0.8;\n\n    ctx.fillStyle = ctx.strokeStyle = \"rgba(\" + p.color + \", \"+ op +\")\";\n    ctx.beginPath();\n\n    switch(p.prop) {\n      case 'circle':{\n        ctx.moveTo(p.x, p.y);\n        ctx.arc(p.x, p.y, p.radius * appstate.size, 0, Math.PI * 2, true);\n        ctx.fill();\n        break;\n      }\n      case 'triangle': {\n        ctx.moveTo(p.x, p.y);\n        ctx.lineTo(p.x + (p.angles[0] * appstate.size), p.y + (p.angles[1] * appstate.size));\n        ctx.lineTo(p.x + (p.angles[2] * appstate.size), p.y + (p.angles[3] * appstate.size));\n        ctx.closePath();\n        ctx.fill();\n        break;\n      }\n      case 'line':{\n        ctx.moveTo(p.x, p.y);\n        ctx.lineTo(p.x + (p.line * appstate.size), p.y + (p.radius * 5));\n        ctx.lineWidth = 2 * appstate.size;\n        ctx.stroke();\n        break;\n      }\n      case 'square': {\n        ctx.save();\n        ctx.translate(p.x+15, p.y+5);\n        ctx.rotate(p.rotation);\n        ctx.fillRect(-15 * appstate.size,-5 * appstate.size,15 * appstate.size,5 * appstate.size);\n        ctx.restore();\n        break;\n      }\n      case 'svg': {\n        ctx.save();\n        var image = new window.Image();\n        image.src = p.src;\n        var size = p.size || 15;\n        ctx.translate(p.x + size / 2, p.y + size / 2);\n        if(p.rotate)\n          ctx.rotate(p.rotation);\n        ctx.drawImage(image, -(size/2) * appstate.size, -(size/2) * appstate.size, size * appstate.size, size * appstate.size);\n        ctx.restore();\n        break;\n      }\n    }\n  }\n\n  //////////////\n  // Public itens\n  //////////////\n\n  //////////////\n  // Clean actual state\n  var _clear = function() {\n    appstate.animate = false;\n    clearInterval(appstate.interval);\n\n    requestAnimationFrame(function() {\n    \tctx.clearRect(0, 0, cv.width, cv.height);\n      var w = cv.width;\n      cv.width = 1;\n      cv.width = w;\n    });\n  };\n\n  //////////////\n  // Render confetti on canvas\n  var _render = function() {\n      cv.width = appstate.width;\n      cv.height = appstate.height;\n      particles = [];\n\n      for(var i = 0; i < appstate.max; i ++)\n        particles.push(particleFactory());\n\n      function draw(){\n        ctx.clearRect(0, 0, appstate.width, appstate.height);\n\n        for(var i in particles)\n          particleDraw(particles[i]);\n\n        update();\n\n        if(appstate.animate) requestAnimationFrame(draw);\n      }\n\n      function update() {\n\n        for (var i = 0; i < appstate.max; i++) {\n          var p = particles[i];\n\n          if (p) {\n            if(appstate.animate)\n              p.y += p.speed;\n\n            if (p.rotate)\n              p.rotation += p.speed / 35;\n\n            if ((p.speed >= 0 && p.y > appstate.height) || (p.speed < 0 && p.y < 0)) {\n              if(appstate.respawn) {\n                particles[i] = p;\n                particles[i].x = rand(appstate.width, true);\n                particles[i].y = p.speed >= 0 ? -10 : parseFloat(appstate.height);\n              } else {\n                particles[i] = undefined;\n              }\n            }\n          }\n        }\n\n        if (particles.every(function(p) { return p === undefined; })) {\n          _clear();\n        }\n      }\n\n      return requestAnimationFrame(draw);\n  };\n\n  return {\n    render: _render,\n    clear: _clear\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfettiGenerator);\n\n\n//# sourceURL=webpack:///./node_modules/confetti-js/dist/index.es.js?");

/***/ }),

/***/ "10eL":
/*!*******************************************************************************!*\
  !*** ./frontend_build/i18n.js?ajaxflashalert!./ui/shims/dummyI18nResource.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('ajaxflashalert'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?ajaxflashalert");

/***/ }),

/***/ "5DjV":
/*!********************************************!*\
  !*** ./ui/shared/confetti/images/Moon.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fd610a276ec8f1276dc1a6363f79e47d.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Moon.svg?");

/***/ }),

/***/ "6PP4":
/*!*********************************************!*\
  !*** ./ui/shared/confetti/images/Panda.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5ba951c11e1c94c06f6336cbdcc82c8b.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Panda.svg?");

/***/ }),

/***/ "6jBc":
/*!*********************************************!*\
  !*** ./ui/shared/confetti/images/Ninja.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5a1df149ed3ba137b0748a7d5c0165ef.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Ninja.svg?");

/***/ }),

/***/ "74md":
/*!********************************************!*\
  !*** ./ui/shared/confetti/images/Star.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cafb6a6790be5cd5a6c8e14a0c8eb229.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Star.svg?");

/***/ }),

/***/ "8+nF":
/*!**********************************************!*\
  !*** ./ui/shared/confetti/images/Rocket.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d7c260585415c3675df8f11ed1eb192e.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Rocket.svg?");

/***/ }),

/***/ "AqF9":
/*!********************************************!*\
  !*** ./ui/shared/confetti/images/Gift.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"46568d8df9dc242547938dcbde1df0a4.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Gift.svg?");

/***/ }),

/***/ "DQGf":
/*!*****************************************************!*\
  !*** ./ui/shared/confetti/images/PandaUnicycle.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f0a93d0fe2e466f71130bf2fec27f7e2.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/PandaUnicycle.svg?");

/***/ }),

/***/ "EtU4":
/*!********************************************!*\
  !*** ./ui/shared/confetti/images/Fire.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3b7f416a36ea3b3e1db4e0525b73aadf.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Fire.svg?");

/***/ }),

/***/ "N4F6":
/*!*******************************************!*\
  !*** ./ui/shared/confetti/react/index.js ***!
  \*******************************************/
/*! exports provided: Confetti, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderConfettiApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Confetti */ \"oaBM\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Confetti\", function() { return _Confetti__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/*\n * Copyright (C) 2020 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\nfunction renderConfettiApp(env, elt) {\n  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Confetti__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), elt);\n}\n\n//# sourceURL=webpack:///./ui/shared/confetti/react/index.js?");

/***/ }),

/***/ "PNlX":
/*!************************************************************!*\
  !*** ./ui/shared/confetti/react/generateConfettiObject.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generateConfettiObject; });\n/* harmony import */ var _assetFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assetFactory */ \"XcDt\");\n/*\n * Copyright (C) 2020 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\nfunction generateConfettiObject(key) {\n  return {\n    key,\n    type: 'svg',\n    src: Object(_assetFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key),\n    weight: 0.05,\n    size: 40\n  };\n}\n\n//# sourceURL=webpack:///./ui/shared/confetti/react/generateConfettiObject.js?");

/***/ }),

/***/ "R9X6":
/*!****************************************************!*\
  !*** ./ui/shared/confetti/react/confettiFlavor.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getRandomConfettiFlavor; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"LvDl\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _generateConfettiObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateConfettiObject */ \"PNlX\");\n/*\n * Copyright (C) 2020 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\nconst confettiFlavors = ['balloon', 'bifrost_trophy', 'butterfly', 'einstein_rosen_trophy', 'fire', 'flowers', 'four_leaf_clover', 'gift', 'gnome', 'helix_rocket', 'horse_shoe', 'hot_air_balloon', 'magic_mystery_thumbs_up', 'medal', 'moon', 'ninja', 'panama_rocket', 'panda', 'panda_unicycle', 'pinwheel', 'pizza_slice', 'rocket', 'star', 'thumbs_up', 'trophy'];\n/**\n * Returns a random element to be added to the confetti. New assets\n * should be added to the celebrations directory, then added to the list of\n * potential flavors.\n */\n\nfunction getRandomConfettiFlavor() {\n  try {\n    return Object(_generateConfettiObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"sample\"])(confettiFlavors));\n  } catch (e) {\n    // eslint-disable-next-line no-console\n    console.error(e.stack);\n    return null;\n  }\n}\n\n//# sourceURL=webpack:///./ui/shared/confetti/react/confettiFlavor.js?");

/***/ }),

/***/ "ReVn":
/*!*************************************************************************!*\
  !*** ./frontend_build/i18n.js?confetti!./ui/shims/dummyI18nResource.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @canvas/i18n/i18nObj */ \"HGxv\");\n/* harmony import */ var translations_core_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! translations/_core_en */ \"0sPK\");\n\n    \n    \n    \n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (_canvas_i18n_i18nObj__WEBPACK_IMPORTED_MODULE_0__[\"default\"].scoped('confetti'));\n  \n\n//# sourceURL=webpack:///./ui/shims/dummyI18nResource.js?./frontend_build/i18n.js?confetti");

/***/ }),

/***/ "SUI8":
/*!*********************************************!*\
  !*** ./ui/shared/confetti/images/Gnome.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ca84af47828f7f92d590632457092028.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Gnome.svg?");

/***/ }),

/***/ "TAiQ":
/*!***********************************************************!*\
  !*** ./ui/shared/confetti/images/EinsteinRosenTrophy.svg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"07ae7e68d04810235f41644b9d8e9559.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/EinsteinRosenTrophy.svg?");

/***/ }),

/***/ "UdWW":
/*!***********************************************!*\
  !*** ./ui/shared/confetti/images/Balloon.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b2f6ee80349d3109638688b6c8320362.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Balloon.svg?");

/***/ }),

/***/ "XcDt":
/*!**************************************************!*\
  !*** ./ui/shared/confetti/react/assetFactory.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return assetFactory; });\n/*\n * Copyright (C) 2020 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\nfunction assetFactory(key) {\n  switch (key) {\n    case 'balloon':\n      return __webpack_require__(/*! ../images/Balloon.svg */ \"UdWW\");\n\n    case 'bifrost_trophy':\n      return __webpack_require__(/*! ../images/BifrostTrophy.svg */ \"a4+4\");\n\n    case 'butterfly':\n      return __webpack_require__(/*! ../images/Butterfly.svg */ \"nFKT\");\n\n    case 'einstein_rosen_trophy':\n      return __webpack_require__(/*! ../images/EinsteinRosenTrophy.svg */ \"TAiQ\");\n\n    case 'fire':\n      return __webpack_require__(/*! ../images/Fire.svg */ \"EtU4\");\n\n    case 'flowers':\n      return __webpack_require__(/*! ../images/Flowers.svg */ \"emQa\");\n\n    case 'four_leaf_clover':\n      return __webpack_require__(/*! ../images/FourLeafClover.svg */ \"tmwZ\");\n\n    case 'gift':\n      return __webpack_require__(/*! ../images/Gift.svg */ \"AqF9\");\n\n    case 'gnome':\n      return __webpack_require__(/*! ../images/Gnome.svg */ \"SUI8\");\n\n    case 'helix_rocket':\n      return __webpack_require__(/*! ../images/HelixRocket.svg */ \"n0KH\");\n\n    case 'horse_shoe':\n      return __webpack_require__(/*! ../images/HorseShoe.svg */ \"+/1D\");\n\n    case 'hot_air_balloon':\n      return __webpack_require__(/*! ../images/HotAirBalloon.svg */ \"o8b0\");\n\n    case 'magic_mystery_thumbs_up':\n      return __webpack_require__(/*! ../images/MagicMysteryThumbsUp.svg */ \"y8Ae\");\n\n    case 'medal':\n      return __webpack_require__(/*! ../images/Medal.svg */ \"ta4P\");\n\n    case 'moon':\n      return __webpack_require__(/*! ../images/Moon.svg */ \"5DjV\");\n\n    case 'ninja':\n      return __webpack_require__(/*! ../images/Ninja.svg */ \"6jBc\");\n\n    case 'panama_rocket':\n      return __webpack_require__(/*! ../images/PanamaRocket.svg */ \"ep3v\");\n\n    case 'panda':\n      return __webpack_require__(/*! ../images/Panda.svg */ \"6PP4\");\n\n    case 'panda_unicycle':\n      return __webpack_require__(/*! ../images/PandaUnicycle.svg */ \"DQGf\");\n\n    case 'pinwheel':\n      return __webpack_require__(/*! ../images/Pinwheel.svg */ \"uTth\");\n\n    case 'pizza_slice':\n      return __webpack_require__(/*! ../images/PizzaSlice.svg */ \"beG4\");\n\n    case 'rocket':\n      return __webpack_require__(/*! ../images/Rocket.svg */ \"8+nF\");\n\n    case 'star':\n      return __webpack_require__(/*! ../images/Star.svg */ \"74md\");\n\n    case 'thumbs_up':\n      return __webpack_require__(/*! ../images/ThumbsUp.svg */ \"YdiR\");\n\n    case 'trophy':\n      return __webpack_require__(/*! ../images/Trophy.svg */ \"zJo5\");\n\n    default:\n      throw new Error(`Unknown asset key: ${key}`);\n  }\n}\n\n//# sourceURL=webpack:///./ui/shared/confetti/react/assetFactory.js?");

/***/ }),

/***/ "YdiR":
/*!************************************************!*\
  !*** ./ui/shared/confetti/images/ThumbsUp.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3c69b54740b20693ba19732a06f91a7d.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/ThumbsUp.svg?");

/***/ }),

/***/ "a4+4":
/*!*****************************************************!*\
  !*** ./ui/shared/confetti/images/BifrostTrophy.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"19e13db9eff30ef23756dab03da4fa6b.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/BifrostTrophy.svg?");

/***/ }),

/***/ "beG4":
/*!**************************************************!*\
  !*** ./ui/shared/confetti/images/PizzaSlice.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fb9e67436f6a3284c347a06c2a9880c7.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/PizzaSlice.svg?");

/***/ }),

/***/ "emQa":
/*!***********************************************!*\
  !*** ./ui/shared/confetti/images/Flowers.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9653f6f097baf3ca7ce84feb4bdaa205.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Flowers.svg?");

/***/ }),

/***/ "ep3v":
/*!****************************************************!*\
  !*** ./ui/shared/confetti/images/PanamaRocket.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a0399135543132e50f5da59646f778c4.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/PanamaRocket.svg?");

/***/ }),

/***/ "n0KH":
/*!***************************************************!*\
  !*** ./ui/shared/confetti/images/HelixRocket.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e182963f1bf2e6ddf6a89feed36c73df.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/HelixRocket.svg?");

/***/ }),

/***/ "nFKT":
/*!*************************************************!*\
  !*** ./ui/shared/confetti/images/Butterfly.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"da5f57cff79e2bbe89efde36c3eefb97.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Butterfly.svg?");

/***/ }),

/***/ "o8b0":
/*!*****************************************************!*\
  !*** ./ui/shared/confetti/images/HotAirBalloon.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c02d358d7f21da9c13248c143f6452ab.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/HotAirBalloon.svg?");

/***/ }),

/***/ "oaBM":
/*!**********************************************!*\
  !*** ./ui/shared/confetti/react/Confetti.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Confetti; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"ODXe\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var confetti_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! confetti-js */ \"+3QO\");\n/* harmony import */ var _confettiFlavor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confettiFlavor */ \"R9X6\");\n/* harmony import */ var _canvas_alerts_react_FlashAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @canvas/alerts/react/FlashAlert */ \"uloQ\");\n/* harmony import */ var i18n_confetti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! i18n!confetti */ \"ReVn\");\n\n\n/*\n * Copyright (C) 2020 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n\n\n\n\nfunction Confetti() {\n  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),\n        _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n        visible = _React$useState2[0],\n        setVisible = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {\n    if (window.ENV.disable_celebrations || !visible) {\n      return;\n    }\n\n    let forcefulCleanup;\n    let clearConfettiOnSpaceOrEscape;\n    let confetti;\n\n    const cleanup = () => {\n      confetti.clear();\n      document.body.removeEventListener('keydown', clearConfettiOnSpaceOrEscape);\n\n      if (forcefulCleanup) {\n        forcefulCleanup = clearTimeout(forcefulCleanup);\n      }\n\n      setVisible(false);\n    };\n\n    confetti = new confetti_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      target: 'confetti-canvas',\n      max: 160,\n      clock: 50,\n      respawn: false,\n      props: ['square', Object(_confettiFlavor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()].filter(p => p !== null)\n    });\n\n    clearConfettiOnSpaceOrEscape = event => {\n      if (event.keyCode === 32 || event.keyCode === 27) {\n        event.preventDefault();\n        cleanup();\n      }\n    };\n\n    document.body.addEventListener('keydown', clearConfettiOnSpaceOrEscape);\n    confetti.render();\n    setTimeout(() => {\n      Object(_canvas_alerts_react_FlashAlert__WEBPACK_IMPORTED_MODULE_4__[\"showFlashAlert\"])({\n        message: i18n_confetti__WEBPACK_IMPORTED_MODULE_5__[\"default\"].t('Great work! From the Canvas developers'),\n        srOnly: true\n      });\n    }, 2500); // Automatically clear animation after 3 seconds, avoiding 5 second window\n    // defined by WCAG Success Criterion 2.2.2: Pause, Stop, Hide.\n\n    forcefulCleanup = setTimeout(cleanup, 3000);\n    return cleanup;\n  }, [visible]);\n  return window.ENV.disable_celebrations || !visible ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"canvas\", {\n    id: \"confetti-canvas\",\n    \"data-testid\": \"confetti-canvas\",\n    style: {\n      position: 'fixed',\n      top: 0,\n      left: 0\n    }\n  });\n}\n\n//# sourceURL=webpack:///./ui/shared/confetti/react/Confetti.js?");

/***/ }),

/***/ "ta4P":
/*!*********************************************!*\
  !*** ./ui/shared/confetti/images/Medal.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"f089ce9a74e629ada25e533cd80e613b.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Medal.svg?");

/***/ }),

/***/ "tmwZ":
/*!******************************************************!*\
  !*** ./ui/shared/confetti/images/FourLeafClover.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"3cbe0ada8d2654a9068fe58ddc825c42.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/FourLeafClover.svg?");

/***/ }),

/***/ "uTth":
/*!************************************************!*\
  !*** ./ui/shared/confetti/images/Pinwheel.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cd083e9003324d7b0fb767a634a2eba1.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Pinwheel.svg?");

/***/ }),

/***/ "uloQ":
/*!**********************************************!*\
  !*** ./ui/shared/alerts/react/FlashAlert.js ***!
  \**********************************************/
/*! exports provided: default, showFlashAlert, destroyContainer, showFlashError, showFlashSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FlashAlert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showFlashAlert\", function() { return showFlashAlert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"destroyContainer\", function() { return destroyContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showFlashError\", function() { return showFlashError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showFlashSuccess\", function() { return showFlashSuccess; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"17x9\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"i8i4\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var i18n_ajaxflashalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18n!ajaxflashalert */ \"10eL\");\n/* harmony import */ var _instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @instructure/ui-alerts */ \"spba\");\n/* harmony import */ var _instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @instructure/ui-buttons */ \"K6WN\");\n/* harmony import */ var _instructure_ui_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @instructure/ui-text */ \"iE3e\");\n/* harmony import */ var _instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @instructure/ui-a11y-content */ \"9+/z\");\n/* harmony import */ var _instructure_ui_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @instructure/ui-motion */ \"Nl9J\");\n/*\n * Copyright (C) 2017 - present Instructure, Inc.\n *\n * This file is part of Canvas.\n *\n * Canvas is free software: you can redistribute it and/or modify it under\n * the terms of the GNU Affero General Public License as published by the Free\n * Software Foundation, version 3 of the License.\n *\n * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY\n * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR\n * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n * details.\n *\n * You should have received a copy of the GNU Affero General Public License along\n * with this program. If not, see <http://www.gnu.org/licenses/>.\n */\n\n/**\n * Flash alerts, especially for ajax error messages\n * Typical usage:\n * import {showFlashError} from './FlashAlert'\n * ...\n * axios.put(url, data).then((response) => {\n *     // do something with response\n *   }).catch(showFlashError(your_error_message))\n *\n * showFlashError() with no argument shows a generic message\n *\n * On error, will display an inst-ui Alert at the top of the page\n * with an error message and \"Details\" button. When the user clicks\n * the button, it shows error details extracted from the axios Error\n *\n * You could also import the lower level showFlashAlert function or\n * the FlashAlert component if you need more control\n *\n * showFlashAlert({ err, message, type }, onCloseCallback)\n *  err: error object\n *  message: user-facing message\n *  type: one of ['info', 'success', 'warning', 'error']\n *        default is 'info' unless an error object is passed in, else is 'error'\n */\n\n\n\n\n\n\n\n\n\nconst messageHolderId = 'flashalert_message_holder'; // specs fail if I reuse jquery's elements\n\nconst screenreaderMessageHolderId = 'flash_screenreader_holder';\nconst timeout = 10000; // An Alert with a message and \"Details\" button which surfaces\n// more info about the error when pressed.\n// Is displayed at the top of the document, and will close itself after a while\n\nclass FlashAlert extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    this.showDetails = () => {\n      this.setState({\n        showDetails: true\n      });\n      clearTimeout(this.timerId);\n      this.timerId = setTimeout(() => this.closeAlert(), this.props.timeout);\n    };\n\n    this.closeAlert = () => {\n      this.setState({\n        isOpen: false\n      }, () => {\n        setTimeout(() => {\n          clearTimeout(this.timerId);\n          this.props.onClose();\n        }, 500);\n      });\n    };\n\n    this.state = {\n      showDetails: false,\n      isOpen: true\n    };\n    this.timerId = 0;\n  }\n\n  getLiveRegion() {\n    // return element where flash screenreader messages go.\n    // create if necessary\n    let liveRegion = document.getElementById(screenreaderMessageHolderId);\n\n    if (!liveRegion) {\n      liveRegion = document.createElement('div');\n      liveRegion.id = screenreaderMessageHolderId;\n      liveRegion.setAttribute('role', 'alert');\n      document.body.appendChild(liveRegion);\n    }\n\n    return liveRegion;\n  }\n\n  findDetailMessage() {\n    const err = this.props.error;\n    let a = err.message;\n    let b;\n\n    if (err.response) {\n      if (err.response.data) {\n        try {\n          if (Array.isArray(err.response.data.errors)) {\n            // probably a canvas api\n            a = err.response.data.errors[0].message;\n            b = err.message;\n          } else if (err.response.data.message) {\n            // probably a canvas api too\n            a = err.response.data.message;\n            b = err.message;\n          }\n        } catch (ignore) {\n          a = err.message;\n        }\n      }\n    }\n\n    return {\n      a,\n      b\n    };\n  }\n\n  renderDetailMessage() {\n    const _this$findDetailMessa = this.findDetailMessage(),\n          a = _this$findDetailMessa.a,\n          b = _this$findDetailMessa.b;\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], {\n      as: \"p\",\n      fontStyle: \"italic\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], null, a), b ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null) : null, b ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_text__WEBPACK_IMPORTED_MODULE_6__[\"Text\"], null, b) : null);\n  }\n\n  render() {\n    let details = null;\n\n    if (this.props.error) {\n      if (this.state.showDetails) {\n        details = this.renderDetailMessage();\n      } else {\n        details = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_7__[\"PresentationContent\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_buttons__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n          variant: \"link\",\n          onClick: this.showDetails\n        }, i18n_ajaxflashalert__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t('Details'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_a11y_content__WEBPACK_IMPORTED_MODULE_7__[\"ScreenReaderContent\"], null, this.renderDetailMessage()));\n      }\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_motion__WEBPACK_IMPORTED_MODULE_8__[\"Transition\"], {\n      transitionOnMount: true,\n      in: this.state.isOpen,\n      type: \"fade\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_instructure_ui_alerts__WEBPACK_IMPORTED_MODULE_4__[\"Alert\"], {\n      variant: this.props.variant,\n      renderCloseButtonLabel: i18n_ajaxflashalert__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t('Close'),\n      onDismiss: this.closeAlert,\n      margin: \"small auto\",\n      timeout: this.props.timeout,\n      liveRegion: this.getLiveRegion,\n      transition: \"fade\",\n      screenReaderOnly: this.props.screenReaderOnly\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      style: {\n        margin: '0 -5px'\n      }\n    }, this.props.message), details)));\n  }\n\n}\nFlashAlert.propTypes = {\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Error),\n  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['info', 'success', 'warning', 'error']),\n  timeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  screenReaderOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\nFlashAlert.defaultProps = {\n  error: null,\n  variant: 'info',\n  timeout,\n  screenReaderOnly: false\n};\nfunction showFlashAlert({\n  message,\n  err,\n  type = err ? 'error' : 'info',\n  srOnly = false\n}) {\n  function closeAlert(atNode) {\n    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.unmountComponentAtNode(atNode);\n    atNode.remove();\n  }\n\n  function getAlertContainer() {\n    let alertContainer = document.getElementById(messageHolderId);\n\n    if (!alertContainer) {\n      alertContainer = document.createElement('div');\n      alertContainer.classList.add('clickthrough-container');\n      alertContainer.id = messageHolderId;\n      alertContainer.setAttribute('style', 'position: fixed; top: 0; left: 0; width: 100%; z-index: 100000;');\n      document.body.appendChild(alertContainer);\n    }\n\n    return alertContainer;\n  }\n\n  function renderAlert(parent) {\n    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlashAlert, {\n      message: message,\n      timeout: Number.isNaN(parseInt(ENV.flashAlertTimeout, 10)) ? timeout : ENV.flashAlertTimeout,\n      error: err,\n      variant: type,\n      onClose: closeAlert.bind(null, parent) // eslint-disable-line react/jsx-no-bind\n      ,\n      screenReaderOnly: srOnly\n    }), parent);\n  }\n\n  const div = document.createElement('div'); // div.setAttribute('class', styles.flashMessage)\n\n  div.setAttribute('style', 'max-width:50em;margin:1rem auto;');\n  div.setAttribute('class', 'flashalert-message');\n  getAlertContainer().appendChild(div);\n  renderAlert(div);\n}\nfunction destroyContainer() {\n  const container = document.getElementById(messageHolderId);\n  const liveRegion = document.getElementById(screenreaderMessageHolderId);\n  if (container) container.remove();\n  if (liveRegion) liveRegion.remove();\n}\nfunction showFlashError(message = i18n_ajaxflashalert__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t('An error occurred making a network request')) {\n  return err => showFlashAlert({\n    message,\n    err,\n    type: 'error'\n  });\n}\nfunction showFlashSuccess(message) {\n  return () => showFlashAlert({\n    message,\n    type: 'success'\n  });\n}\n\n//# sourceURL=webpack:///./ui/shared/alerts/react/FlashAlert.js?");

/***/ }),

/***/ "y8Ae":
/*!************************************************************!*\
  !*** ./ui/shared/confetti/images/MagicMysteryThumbsUp.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"af17f52bd56019052a3ecd2101c9b0ea.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/MagicMysteryThumbsUp.svg?");

/***/ }),

/***/ "zJo5":
/*!**********************************************!*\
  !*** ./ui/shared/confetti/images/Trophy.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ec5edc396112fc95f8639fb2342f3b7f.svg\";\n\n//# sourceURL=webpack:///./ui/shared/confetti/images/Trophy.svg?");

/***/ })

}]);