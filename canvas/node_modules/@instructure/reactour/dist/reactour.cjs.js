'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('focus-outline-manager');
var React = require('react');
var React__default = _interopDefault(React);
var cn = _interopDefault(require('classnames'));
var scrollSmooth = _interopDefault(require('scroll-smooth'));
var Scrollparent = _interopDefault(require('scrollparent'));
var debounce = _interopDefault(require('lodash.debounce'));
var useMutationObserver = _interopDefault(require('@rooks/use-mutation-observer'));
var FocusLock = _interopDefault(require('react-focus-lock'));
var core = require('@emotion/core');
var reactDom = require('react-dom');
var styled = _interopDefault(require('@emotion/styled'));
var PropTypes = _interopDefault(require('prop-types'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      .focus-outline-hidden :focus {\n        outline: none;\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyle = function GlobalStyle() {
  return /*#__PURE__*/React__default.createElement(core.Global, {
    styles: core.css(_templateObject())
  });
};

function Portal(_ref) {
  var children = _ref.children;
  var ref = React.useRef(null);

  if (ref.current === null) {
    ref.current = document.createElement('div');
    ref.current.setAttribute('id', '___reactour');
  }

  React.useEffect(function () {
    document.body.appendChild(ref.current);
    return function () {
      document.body.removeChild(ref.current);
    };
  }, [ref]);
  return reactDom.createPortal(children, ref.current);
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 0;\n  cursor: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var SvgButton = styled.button(_templateObject$1(), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
});

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  ", ";\n  ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  line-height: 1;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Label = styled.span(_templateObject$2());

function Arrow(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      inverted = _ref.inverted,
      label = _ref.label,
      disabled = _ref.disabled;
  return /*#__PURE__*/React__default.createElement(SvgButton, {
    className: className,
    onClick: onClick,
    "data-tour-elem": "".concat(inverted ? 'right' : 'left', "-arrow"),
    disabled: disabled
  }, label ? /*#__PURE__*/React__default.createElement(Label, null, label) : /*#__PURE__*/React__default.createElement("svg", {
    viewBox: "0 0 18.4 14.4"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: inverted ? 'M10.8 1L17 7.2l-6.2 6.2' : 'M7.6 1L1.4 7.2l6.2 6.2',
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeMiterlimit: "10"
  })));
}

Arrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  inverted: PropTypes.bool,
  label: PropTypes.node,
  disabled: PropTypes.bool
};
var Arrow$1 = styled(Arrow)(_templateObject2(), function (props) {
  return props.disabled ? '#646464' : '#caccce';
}, function (props) {
  return props.inverted ? 'margin-left: 24px;' : 'margin-right: 24px;';
}, function (props) {
  return !props.label && "\n    width: 16px;\n    height: 12px;\n    flex: 0 0 16px;\n  ";
}, function (props) {
  return props.disabled ? '#000' : '#fff';
});

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 22px;\n  right: 22px;\n  width: 9px;\n  height: 9px;\n  color: #5e5e5e;\n  &:hover {\n    color: #000;\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

function Close(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      ariaLabel = _ref.ariaLabel;
  return /*#__PURE__*/React__default.createElement(SvgButton, {
    className: className,
    onClick: onClick,
    "aria-label": ariaLabel
  }, /*#__PURE__*/React__default.createElement("svg", {
    viewBox: "0 0 9.1 9.1",
    "aria-hidden": true,
    role: "presentation"
  }, /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"
  })));
}

Close.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string
};
var StyledClose = styled(Close)(_templateObject$3());

function getNodeRect(node) {
  var _ref = (node === null || node === void 0 ? void 0 : node.getBoundingClientRect()) || {},
      _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? 0 : _ref$right,
      _ref$bottom = _ref.bottom,
      bottom = _ref$bottom === void 0 ? 0 : _ref$bottom,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 0 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 0 : _ref$height;

  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height
  };
}
function inView(_ref2) {
  var top = _ref2.top,
      right = _ref2.right,
      bottom = _ref2.bottom,
      left = _ref2.left,
      w = _ref2.w,
      h = _ref2.h,
      _ref2$threshold = _ref2.threshold,
      threshold = _ref2$threshold === void 0 ? 0 : _ref2$threshold;
  return top >= 0 + threshold && left >= 0 + threshold && bottom <= h - threshold && right <= w - threshold;
}
function isBody(node) {
  return node === document.querySelector('body') || node === document.querySelector('html');
}
var isHoriz = function isHoriz(pos) {
  return /(left|right)/.test(pos);
};
var isOutsideX = function isOutsideX(val, windowWidth) {
  return val > windowWidth;
};
var isOutsideY = function isOutsideY(val, windowHeight) {
  return val > windowHeight;
};
var safe = function safe(sum) {
  return sum < 0 ? 0 : sum;
};
function bestPositionOf(positions) {
  return Object.keys(positions).map(function (p) {
    return {
      position: p,
      value: positions[p]
    };
  }).sort(function (a, b) {
    return b.value - a.value;
  }).map(function (p) {
    return p.position;
  });
}
function getWindow() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return {
    w: w,
    h: h
  };
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  --reactour-accent: ", ";\n  ", "\n  background-color: #2D3B45;\n  color: white;\n  position: fixed;\n  transition: transform 0.3s;\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n\n  transform: ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Guide = styled.div(_templateObject$4(), function (props) {
  return props.accentColor;
}, function (props) {
  return props.defaultStyles ? "\n  max-width: 331px;\n  min-width: 150px;\n  padding-right: 40px;\n  border-radius: ".concat(props.rounded, "px;\n  background-color: #2D3B45;\n  padding: 24px 30px;\n  box-shadow: 0 0.5em 3em rgba(0, 0, 0, 0.3);\n  color: inherit;\n  ") : '';
}, function (props) {
  var targetTop = props.targetTop,
      targetRight = props.targetRight,
      targetBottom = props.targetBottom,
      targetLeft = props.targetLeft,
      windowWidth = props.windowWidth,
      windowHeight = props.windowHeight,
      helperWidth = props.helperWidth,
      helperHeight = props.helperHeight,
      helperPosition = props.helperPosition,
      padding = props.padding;
  var available = {
    left: targetLeft,
    right: windowWidth - targetRight,
    top: targetTop,
    bottom: windowHeight - targetBottom
  };

  var couldPositionAt = function couldPositionAt(position) {
    return available[position] > (isHoriz(position) ? helperWidth + padding * 2 : helperHeight + padding * 2);
  };

  var autoPosition = function autoPosition(coords) {
    var positionsOrder = bestPositionOf(available);

    for (var j = 0; j < positionsOrder.length; j++) {
      if (couldPositionAt(positionsOrder[j])) {
        return coords[positionsOrder[j]];
      }
    }

    return coords.center;
  };

  var pos = function pos(helperPosition) {
    if (Array.isArray(helperPosition)) {
      var isOutX = isOutsideX(helperPosition[0], windowWidth);
      var isOutY = isOutsideY(helperPosition[1], windowHeight);

      var warn = function warn(axis, num) {
        console.warn("".concat(axis, ":").concat(num, " is outside window, falling back to center"));
      };

      if (isOutX) warn('x', helperPosition[0]);
      if (isOutY) warn('y', helperPosition[1]);
      return [isOutX ? windowWidth / 2 - helperWidth / 2 : helperPosition[0], isOutY ? windowHeight / 2 - helperHeight / 2 : helperPosition[1]];
    }

    var hX = isOutsideX(targetLeft + helperWidth, windowWidth) ? isOutsideX(targetRight + padding, windowWidth) ? targetRight - helperWidth : targetRight - helperWidth + padding : targetLeft - padding;
    var x = hX > padding ? hX : padding;
    var hY = isOutsideY(targetTop + helperHeight, windowHeight) ? isOutsideY(targetBottom + padding, windowHeight) ? targetBottom - helperHeight : targetBottom - helperHeight + padding : targetTop - padding;
    var y = hY > padding ? hY : padding;
    var coords = {
      top: [x, targetTop - helperHeight - padding * 2],
      right: [targetRight + padding * 2, y],
      bottom: [x, targetBottom + padding * 2],
      left: [targetLeft - helperWidth - padding * 2, y],
      center: [windowWidth / 2 - helperWidth / 2, windowHeight / 2 - helperHeight / 2]
    };

    if (helperPosition === 'center' || couldPositionAt(helperPosition)) {
      return coords[helperPosition];
    }

    return autoPosition(coords);
  };

  var p = pos(helperPosition);
  return "translate(".concat(Math.round(p[0]), "px, ").concat(Math.round(p[1]), "px)");
});

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  font-family: monospace;\n  background: #008ee2;\n  background: ", ";\n  height: 1.875em;\n  line-height: 2;\n  padding-left: 0.8125em;\n  padding-right: 0.8125em;\n  font-size: 1em;\n  border-radius: 1.625em;\n  color: white;\n  text-align: center;\n  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3);\n  top: -0.8125em;\n  left: -0.8125em;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Badge = styled.span(_templateObject$5(), function (props) {
  return props.accentColor;
});

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 24px;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Controls = styled.div(_templateObject$6());

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  counter-reset: dot;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Navigation = styled.nav(_templateObject$7());

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  counter-increment: dot;\n  width: 18px;\n  height: 18px;\n  border: ", ";\n\n  border-radius: 100%;\n  padding: 0;\n  display: block;\n  margin: 12px;\n  transition: opacity 0.3s, transform 0.3s;\n  cursor: ", ";\n\n  color: ", ";\n  background: ", ";\n\n  color: ", ";\n  background: ", ";\n\n  &:before {\n    content: counter(dot);\n    position: absolute;\n    bottom: calc(100% + 0.25em);\n    left: 50%;\n    opacity: 0;\n    transform: translate(-50%, 1em);\n    transition: 0.3s;\n    display: ", ";\n  }\n\n  &:hover {\n    background-color: currentColor;\n\n    &:before {\n      opacity: 0.5;\n      transform: translate(-50%, -2px);\n    }\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var Dot = styled.button(_templateObject$8(), function (props) {
  return props.current === props.index ? '0' : '1px solid #caccce';
}, function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.current === props.index ? 'var(--reactour-accent)' : '#caccce';
}, function (props) {
  return props.current === props.index ? 'var(--reactour-accent)' : 'none';
}, function (props) {
  return props.current === props.index ? props.accentColor : '#caccce';
}, function (props) {
  return props.current === props.index ? props.accentColor : 'none';
}, function (props) {
  return props.showNumber ? 'block' : 'none';
});

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.7;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  pointer-events: none;\n  color: #000;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var SvgMaskWrapper = styled.div(_templateObject$9());
function SvgMask(_ref) {
  var windowWidth = _ref.windowWidth,
      windowHeight = _ref.windowHeight,
      targetWidth = _ref.targetWidth,
      targetHeight = _ref.targetHeight,
      targetTop = _ref.targetTop,
      targetLeft = _ref.targetLeft,
      padding = _ref.padding,
      rounded = _ref.rounded,
      disableInteraction = _ref.disableInteraction,
      disableInteractionClassName = _ref.disableInteractionClassName,
      className = _ref.className,
      onClick = _ref.onClick;
  var width = safe(targetWidth + padding * 2);
  var height = safe(targetHeight + padding * 2);
  var top = safe(targetTop - padding);
  var left = safe(targetLeft - padding);
  return /*#__PURE__*/React__default.createElement(SvgMaskWrapper, {
    onClick: onClick
  }, /*#__PURE__*/React__default.createElement("svg", {
    width: windowWidth,
    height: windowHeight,
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("mask", {
    id: "mask-main"
  }, /*#__PURE__*/React__default.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "white"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: left,
    y: top,
    width: width,
    height: height,
    fill: "black"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: left - 1,
    y: top - 1,
    width: rounded,
    height: rounded,
    fill: "white"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: left + rounded,
    cy: top + rounded,
    r: rounded,
    fill: "black"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: left + width - rounded + 1,
    y: top - 1,
    width: rounded,
    height: rounded,
    fill: "white"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: left + width - rounded,
    cy: top + rounded,
    r: rounded,
    fill: "black"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: left - 1,
    y: top + height - rounded + 1,
    width: rounded,
    height: rounded,
    fill: "white"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: left + rounded,
    cy: top + height - rounded,
    r: rounded,
    fill: "black"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: left + width - rounded + 1,
    y: top + height - rounded + 1,
    width: rounded,
    height: rounded,
    fill: "white"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: left + width - rounded,
    cy: top + height - rounded,
    r: rounded,
    fill: "black "
  })), /*#__PURE__*/React__default.createElement("clipPath", {
    id: "clip-path"
  }, /*#__PURE__*/React__default.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: top
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: 0,
    y: top,
    width: left,
    height: height
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: targetLeft + targetWidth + padding,
    y: top,
    width: safe(windowWidth - targetWidth - left),
    height: height
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: 0,
    y: targetTop + targetHeight + padding,
    width: windowWidth,
    height: safe(windowHeight - targetHeight - top)
  }))), /*#__PURE__*/React__default.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "currentColor",
    mask: "url(#mask-main)"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: 0,
    y: 0,
    width: windowWidth,
    height: windowHeight,
    fill: "currentColor",
    clipPath: "url(#clip-path)",
    pointerEvents: "auto"
  }), /*#__PURE__*/React__default.createElement("rect", {
    x: left,
    y: top,
    width: width,
    height: height,
    pointerEvents: "auto",
    fill: "transparent",
    display: disableInteraction ? 'block' : 'none',
    className: disableInteractionClassName
  })));
}
SvgMask.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
  targetWidth: PropTypes.number.isRequired,
  targetHeight: PropTypes.number.isRequired,
  targetTop: PropTypes.number.isRequired,
  targetLeft: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
  rounded: PropTypes.number.isRequired,
  disableInteraction: PropTypes.bool.isRequired,
  disableInteractionClassName: PropTypes.string.isRequired
};

var propTypes = {
  accessibilityOptions: PropTypes.shape({
    ariaLabelledBy: PropTypes.string,
    closeButtonAriaLabel: PropTypes.string,
    showNavigationScreenReaders: PropTypes.bool
  }),
  badgeContent: PropTypes.func,
  highlightedMaskClassName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  className: PropTypes.string,
  closeWithMask: PropTypes.bool,
  inViewThreshold: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  lastStepNextButton: PropTypes.node,
  maskClassName: PropTypes.string,
  maskSpace: PropTypes.number,
  nextButton: PropTypes.node,
  onAfterOpen: PropTypes.func,
  onBeforeClose: PropTypes.func,
  onRequestClose: PropTypes.func,
  prevButton: PropTypes.node,
  scrollDuration: PropTypes.number,
  scrollOffset: PropTypes.number,
  showButtons: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  showNavigation: PropTypes.bool,
  showNavigationNumber: PropTypes.bool,
  showNumber: PropTypes.bool,
  startAt: PropTypes.number,
  goToStep: PropTypes.number,
  getCurrentStep: PropTypes.func,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  steps: PropTypes.arrayOf(PropTypes.shape({
    selector: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]).isRequired,
    position: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'center'])]),
    action: PropTypes.func,
    actionBefore: PropTypes.func,
    style: PropTypes.object,
    stepInteraction: PropTypes.bool,
    navDotAriaLabel: PropTypes.string
  })),
  update: PropTypes.string,
  updateDelay: PropTypes.number,
  disableInteraction: PropTypes.bool,
  disableDotsNavigation: PropTypes.bool,
  disableKeyboardNavigation: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOf(['esc', 'right', 'left'])), PropTypes.bool]),
  rounded: PropTypes.number,
  accentColor: PropTypes.string
};
var defaultProps = {
  accessibilityOptions: {
    closeButtonAriaLabel: 'Close',
    showNavigationScreenReaders: true
  },
  showNavigation: true,
  showNavigationNumber: true,
  showButtons: true,
  showCloseButton: true,
  showNumber: true,
  startAt: 0,
  scrollDuration: 1,
  maskSpace: 10,
  updateDelay: 1,
  disableInteraction: false,
  rounded: 0,
  accentColor: '#fff',
  closeWithMask: true
};

var CN = {
  mask: {
    base: 'reactour__mask',
    isOpen: 'reactour__mask--is-open',
    disableInteraction: 'reactour__mask--disable-interaction'
  },
  helper: {
    base: 'reactour__helper',
    isOpen: 'reactour__helper--is-open'
  },
  dot: {
    base: 'reactour__dot',
    active: 'reactour__dot--is-active'
  }
};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

var noop = function noop() {};

var Tour = function Tour(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      startAt = _ref.startAt,
      steps = _ref.steps,
      scrollDuration = _ref.scrollDuration,
      inViewThreshold = _ref.inViewThreshold,
      scrollOffset = _ref.scrollOffset,
      disableInteraction = _ref.disableInteraction,
      disableKeyboardNavigation = _ref.disableKeyboardNavigation,
      className = _ref.className,
      closeWithMask = _ref.closeWithMask,
      _ref$onRequestClose = _ref.onRequestClose,
      onRequestClose = _ref$onRequestClose === void 0 ? noop : _ref$onRequestClose,
      onAfterOpen = _ref.onAfterOpen,
      onBeforeClose = _ref.onBeforeClose,
      CustomHelper = _ref.CustomHelper,
      showNumber = _ref.showNumber,
      accentColor = _ref.accentColor,
      highlightedMaskClassName = _ref.highlightedMaskClassName,
      maskClassName = _ref.maskClassName,
      showButtons = _ref.showButtons,
      showNavigation = _ref.showNavigation,
      prevButton = _ref.prevButton,
      showNavigationNumber = _ref.showNavigationNumber,
      disableDotsNavigation = _ref.disableDotsNavigation,
      lastStepNextButton = _ref.lastStepNextButton,
      nextButton = _ref.nextButton,
      rounded = _ref.rounded,
      maskSpace = _ref.maskSpace,
      showCloseButton = _ref.showCloseButton,
      accessibilityOptions = _ref.accessibilityOptions,
      badgeContent = _ref.badgeContent;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      started = _useState4[0],
      setStarted = _useState4[1];

  var _useReducer = React.useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var helper = React.useRef(null);
  var observer = React.useRef(null);

  var a11yOptions = _objectSpread2(_objectSpread2({}, defaultProps.accessibilityOptions), accessibilityOptions);

  useMutationObserver(observer, function (mutationList, observer) {
    if (isOpen) {
      showStep();
      mutationList.forEach(function (mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          setTimeout(function () {
            return makeCalculations(getNodeRect(mutation.addedNodes[0]));
          }, 500);
        } else if (mutation.type === 'childList' && mutation.removedNodes.length > 0) ;
      });
    } else {
      observer.disconnect();
    }
  });
  React.useEffect(function () {
    var debouncedShowStep = debounce(showStep, 100);
    window.addEventListener('resize', debouncedShowStep, false);

    if (isOpen) {
      window.addEventListener('keydown', keyHandler, false);

      if (!started) {
        setStarted(true);
        makeCalculations({
          width: maskSpace * -1,
          height: maskSpace * -1,
          top: rounded * -1,
          left: rounded * -1
        }, 'center');
        setCurrent(startAt);
        showStep(startAt);
      } else {
        showStep();
      }

      if (helper.current) {
        helper.current.focus();

        if (onAfterOpen && typeof onAfterOpen === 'function') {
          onAfterOpen(helper.current);
        }
      }
    }

    return function () {
      window.removeEventListener('keydown', keyHandler);
      window.removeEventListener('resize', debouncedShowStep);
    }; // eslint-disable-next-line
  }, [current, isOpen]);

  function keyHandler(e) {
    e.stopPropagation();

    if (disableKeyboardNavigation === true) {
      return;
    }

    var isEscDisabled, isRightDisabled, isLeftDisabled;

    if (disableKeyboardNavigation) {
      isEscDisabled = disableKeyboardNavigation.includes('esc');
      isRightDisabled = disableKeyboardNavigation.includes('right');
      isLeftDisabled = disableKeyboardNavigation.includes('left');
    }

    if (e.keyCode === 27 && !isEscDisabled) {
      // esc
      e.preventDefault();
      close();
    }

    if (e.keyCode === 39 && !isRightDisabled) {
      // right
      e.preventDefault();
      nextStep();
    }

    if (e.keyCode === 37 && !isLeftDisabled) {
      // left
      e.preventDefault();
      prevStep();
    }
  }

  function close(e) {
    if (onBeforeClose && typeof onBeforeClose === 'function') {
      onBeforeClose(helper.current);
    }

    onRequestClose(e);
  }

  function nextStep() {
    setCurrent(function (prev) {
      return prev < steps.length - 1 ? prev + 1 : prev;
    });
  }

  function prevStep() {
    setCurrent(function (prev) {
      return prev > 0 ? prev - 1 : prev;
    });
  }

  function goTo(step) {
    setCurrent(step);
  }

  function showStep(_x) {
    return _showStep.apply(this, arguments);
  }

  function _showStep() {
    _showStep = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(nextStep) {
      var step, _getWindow2, w, h, node, nodeRect, parentScroll, offset;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              step = steps[nextStep] || steps[current];
              _getWindow2 = getWindow(), w = _getWindow2.w, h = _getWindow2.h;

              if (!(step.actionBefore && typeof step.actionBefore === 'function')) {
                _context.next = 5;
                break;
              }

              _context.next = 5;
              return step.actionBefore();

            case 5:
              node = step.selector ? document.querySelector(step.selector) : null;

              if (step.observe) {
                observer.current = document.querySelector(step.observe);
              }

              if (node) {
                // DOM node exists
                nodeRect = getNodeRect(node); // step is outside view

                if (!inView(_objectSpread2(_objectSpread2({}, nodeRect), {}, {
                  w: w,
                  h: h,
                  threshold: inViewThreshold
                }))) {
                  parentScroll = Scrollparent(node);
                  offset = scrollOffset ? scrollOffset : nodeRect.height > h ? -25 : -(h / 2) + nodeRect.height / 2;
                  scrollSmooth.to(node, {
                    context: isBody(parentScroll) ? window : parentScroll,
                    duration: scrollDuration,
                    offset: offset,
                    callback: function callback(_node) {
                      makeCalculations(getNodeRect(_node), step.position);
                    }
                  });
                } else {
                  makeCalculations(nodeRect, step.position);
                }
              } else {
                dispatch({
                  type: 'NO_DOM_NODE',
                  helperPosition: step.position,
                  w: w,
                  h: h,
                  inDOM: false
                });
              }

              if (!(step.action && typeof step.action === 'function')) {
                _context.next = 11;
                break;
              }

              _context.next = 11;
              return step.action(node);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _showStep.apply(this, arguments);
  }

  function makeCalculations(nodeRect, helperPosition) {
    var _getWindow = getWindow(),
        w = _getWindow.w,
        h = _getWindow.h;

    var _getNodeRect = getNodeRect(helper.current),
        helperWidth = _getNodeRect.width,
        helperHeight = _getNodeRect.height;

    dispatch(_objectSpread2(_objectSpread2({
      type: 'HAS_DOM_NODE'
    }, nodeRect), {}, {
      helperWidth: helperWidth,
      helperHeight: helperHeight,
      helperPosition: helperPosition,
      w: w,
      h: h,
      inDOM: true
    }));
  }

  function maskClickHandler(e) {
    if (closeWithMask && e.target.className.baseVal.split(' ').indexOf(CN.mask.disableInteraction) === -1) {
      close(e);
    }
  }

  var stepContent = steps[current] && (typeof steps[current].content === 'function' ? steps[current].content({
    close: close,
    goTo: goTo,
    inDOM: state.inDOM,
    step: current + 1
  }) : steps[current].content);
  return isOpen ? /*#__PURE__*/React__default.createElement(Portal, null, /*#__PURE__*/React__default.createElement(GlobalStyle, null), /*#__PURE__*/React__default.createElement(SvgMask, {
    onClick: maskClickHandler,
    windowWidth: state.w,
    windowHeight: state.h,
    targetWidth: state.width,
    targetHeight: state.height,
    targetTop: state.top,
    targetLeft: state.left,
    padding: maskSpace,
    rounded: rounded,
    className: maskClassName,
    disableInteraction: steps[current].stepInteraction === false || disableInteraction ? !steps[current].stepInteraction : disableInteraction,
    disableInteractionClassName: cn(CN.mask.disableInteraction, highlightedMaskClassName)
  }), /*#__PURE__*/React__default.createElement(FocusLock, null, /*#__PURE__*/React__default.createElement(Guide, {
    ref: helper,
    windowWidth: state.w,
    windowHeight: state.h,
    targetWidth: state.width,
    targetHeight: state.height,
    targetTop: state.top,
    targetLeft: state.left,
    targetRight: state.right,
    targetBottom: state.bottom,
    helperWidth: state.helperWidth,
    helperHeight: state.helperHeight,
    helperPosition: state.helperPosition,
    padding: maskSpace,
    tabIndex: -1,
    current: current,
    style: steps[current].style ? steps[current].style : {},
    rounded: rounded,
    accentColor: accentColor,
    defaultStyles: !CustomHelper,
    className: cn(CN.helper.base, className, _defineProperty({}, CN.helper.isOpen, isOpen)),
    role: "dialog",
    "aria-labelledby": a11yOptions.ariaLabelledBy
  }, CustomHelper ? /*#__PURE__*/React__default.createElement(CustomHelper, {
    current: current,
    totalSteps: steps.length,
    gotoStep: goTo,
    close: close,
    content: stepContent
  }, children) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, children, stepContent, showNumber && /*#__PURE__*/React__default.createElement(Badge, {
    "data-tour-elem": "badge"
  }, typeof badgeContent === 'function' ? badgeContent(current + 1, steps.length) : current + 1), (showButtons || showNavigation) && /*#__PURE__*/React__default.createElement(Controls, {
    "data-tour-elem": "controls"
  }, showButtons && /*#__PURE__*/React__default.createElement(Arrow$1, {
    onClick: prevStep,
    disabled: current === 0,
    label: prevButton ? prevButton : null
  }), showNavigation && /*#__PURE__*/React__default.createElement(Navigation, {
    "data-tour-elem": "navigation",
    "aria-hidden": !a11yOptions.showNavigationScreenReaders
  }, steps.map(function (s, i) {
    return /*#__PURE__*/React__default.createElement(Dot, {
      key: "".concat(s.selector ? s.selector : 'undef', "_").concat(i),
      onClick: function onClick() {
        return goTo(i);
      },
      current: current,
      index: i,
      disabled: current === i || disableDotsNavigation,
      showNumber: showNavigationNumber,
      "data-tour-elem": "dot",
      className: cn(CN.dot.base, _defineProperty({}, CN.dot.active, current === i)),
      "aria-label": s.navDotAriaLabel
    });
  })), showButtons && /*#__PURE__*/React__default.createElement(Arrow$1, {
    onClick: current === steps.length - 1 ? lastStepNextButton ? close : function () {} : nextStep,
    disabled: !lastStepNextButton && current === steps.length - 1,
    inverted: true,
    label: lastStepNextButton && current === steps.length - 1 ? lastStepNextButton : nextButton ? nextButton : null
  })), showCloseButton && /*#__PURE__*/React__default.createElement(StyledClose, {
    onClick: close,
    ariaLabel: a11yOptions.closeButtonAriaLabel
  }))))) : null;
};

var initialState = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0,
  w: 0,
  h: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'HAS_DOM_NODE':
      var type = action.type,
          newState = _objectWithoutProperties(action, ["type"]);

      return _objectSpread2(_objectSpread2({}, state), newState);

    case 'NO_DOM_NODE':
      return _objectSpread2(_objectSpread2({}, state), {}, {
        top: state.h + 10,
        right: state.w / 2 + 9,
        bottom: state.h / 2 + 9,
        left: action.w / 2 - state.helperWidth ? state.helperWidth / 2 : 0,
        width: 0,
        height: 0,
        w: action.w,
        h: action.h,
        helperPosition: 'center'
      });

    default:
      return state;
  }
}

Tour.propTypes = propTypes;
Tour.defaultProps = defaultProps;
var Tour$1 = React.memo(Tour);

exports.Arrow = Arrow$1;
exports.Badge = Badge;
exports.Close = StyledClose;
exports.Controls = Controls;
exports.Dot = Dot;
exports.Navigation = Navigation;
exports.default = Tour$1;
