"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _lodash = require("lodash");

var _formatMessage = _interopRequireDefault(require("format-message"));

var _uiSelect = require("@instructure/ui-select");

var _uiAlerts = require("@instructure/ui-alerts");

var _uiReactUtils = require("@instructure/ui-react-utils");

const _excluded = ["id", "label", "value", "onChange", "children", "noOptionsLabel", "liveRegion"],
      _excluded2 = ["id", "children"],
      _excluded3 = ["id", "label"];
const noOptionsOptionId = '_noOptionsOption'; // CanvasSelectOption and CanvasSelectGroup are components our client can create thru CanvasSelect
// to pass us our options. They are never rendered themselves, but get transformed into INSTUI's
// Select.Option and Select.Group on rendering CanvasSelect. See renderChildren below.

function CanvasSelectOption() {
  return /*#__PURE__*/_react.default.createElement("div", null);
}

CanvasSelectOption.propTypes = {
  id: _propTypes.string.isRequired,
  // eslint-disable-line react/no-unused-prop-types
  value: _propTypes.string.isRequired // eslint-disable-line react/no-unused-prop-types

};

function CanvasSelectGroup() {
  return /*#__PURE__*/_react.default.createElement("div", null);
}

CanvasSelectGroup.propTypes = {
  label: _propTypes.string.isRequired // eslint-disable-line react/no-unused-prop-types

};

let CanvasSelect = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CanvasSelect, _React$Component);

  var _super = (0, _createSuper2.default)(CanvasSelect);

  function CanvasSelect(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CanvasSelect);
    _this = _super.call(this, props);
    _this.backupKey = 0;

    _this.handleBlur = event => {
      _this.setState({
        highlightedOptionId: null,
        announcement: null
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    };

    _this.handleShowOptions = () => {
      _this.setState({
        isShowingOptions: true
      });
    };

    _this.handleHideOptions = _event => {
      _this.setState(state => {
        const text = _this.getOptionLabelById(state.selectedOptionId);

        return {
          isShowingOptions: false,
          highlightedOptionId: null,
          inputValue: text
        };
      });
    };

    _this.handleHighlightOption = (event, {
      id
    }) => {
      if (id === noOptionsOptionId) return;

      const text = _this.getOptionLabelById(id);

      const nowOpen = _this.state.isShowingOptions ? '' : _this.props.translatedStrings.LIST_EXPANDED;
      const inputValue = event.type === 'keydown' ? text : _this.state.inputValue;

      _this.setState({
        highlightedOptionId: id,
        inputValue,
        announcement: `${text} ${nowOpen}`
      });
    };

    _this.handleSelectOption = (event, {
      id
    }) => {
      if (id === noOptionsOptionId) {
        _this.setState({
          isShowingOptions: false,
          announcement: _this.props.translatedStrings.LIST_COLLAPSED
        });
      } else {
        const text = _this.getOptionLabelById(id);

        const prevSelection = _this.state.selectedOptionId;

        _this.setState({
          selectedOptionId: id,
          inputValue: text,
          isShowingOptions: false,
          announcement: (0, _formatMessage.default)(_this.props.translatedStrings.OPTION_SELECTED, {
            option: text
          })
        });

        const option = _this.getOptionByFieldValue('id', id);

        if (prevSelection !== id) {
          _this.props.onChange(event, option.props.value);
        }
      }
    };

    const _option = _this.getOptionByFieldValue('value', props.value);

    _this.state = {
      inputValue: _option ? _option.props.children : '',
      isShowingOptions: false,
      highlightedOptionId: null,
      selectedOptionId: _option ? _option.props.id : null,
      announcement: null
    };
    _this._selectRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  (0, _createClass2.default)(CanvasSelect, [{
    key: "focus",
    value: function focus() {
      var _this$_selectRef$curr;

      (_this$_selectRef$curr = this._selectRef.current) === null || _this$_selectRef$curr === void 0 ? void 0 : _this$_selectRef$curr.focus();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.value !== prevProps.value || !(0, _lodash.isEqual)(this.props.children, prevProps.children)) {
        const option = this.getOptionByFieldValue('value', this.props.value); // eslint-disable-next-line react/no-did-update-set-state

        this.setState({
          inputValue: option ? option.props.children : '',
          selectedOptionId: option ? option.props.id : ''
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      const _this$props = this.props,
            id = _this$props.id,
            label = _this$props.label,
            value = _this$props.value,
            onChange = _this$props.onChange,
            children = _this$props.children,
            noOptionsLabel = _this$props.noOptionsLabel,
            liveRegion = _this$props.liveRegion,
            otherProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_uiSelect.Select, Object.assign({
        ref: this._selectRef,
        id: id,
        renderLabel: () => label,
        assistiveText: this.props.translatedStrings.USE_ARROWS,
        inputValue: this.state.inputValue,
        isShowingOptions: this.state.isShowingOptions,
        onBlur: this.handleBlur,
        onRequestShowOptions: this.handleShowOptions,
        onRequestHideOptions: this.handleHideOptions,
        onRequestHighlightOption: this.handleHighlightOption,
        onRequestSelectOption: this.handleSelectOption
      }, otherProps), this.renderChildren(children)), /*#__PURE__*/_react.default.createElement(_uiAlerts.Alert, {
        liveRegion: liveRegion,
        liveRegionPoliteness: "assertive",
        screenReaderOnly: true
      }, this.state.announcement));
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(children) {
      if (!Array.isArray(children)) {
        // children is 1 child
        if ((0, _uiReactUtils.matchComponentTypes)(children, [CanvasSelectOption])) {
          return this.renderOption(children);
        } else if ((0, _uiReactUtils.matchComponentTypes)(children, [CanvasSelectGroup])) {
          return this.renderGroup(children);
        } else {
          return this.renderNoOptionsOption();
        }
      }

      const opts = children.map(child => {
        if (Array.isArray(child)) {
          return this.renderChildren(child);
        } else if ((0, _uiReactUtils.matchComponentTypes)(child, [CanvasSelectOption])) {
          return this.renderOption(child);
        } else if ((0, _uiReactUtils.matchComponentTypes)(child, [CanvasSelectGroup])) {
          return this.renderGroup(child);
        }

        return null;
      }).filter(child => !!child); // instui Select blows up on undefined options

      if (opts.length === 0) {
        return this.renderNoOptionsOption();
      }

      return opts;
    }
  }, {
    key: "renderOption",
    value: function renderOption(option) {
      const _option$props = option.props,
            id = _option$props.id,
            children = _option$props.children,
            optionProps = (0, _objectWithoutProperties2.default)(_option$props, _excluded2);
      return /*#__PURE__*/_react.default.createElement(_uiSelect.Select.Option, Object.assign({
        id: id,
        key: option.key || id || ++this.backupKey,
        isHighlighted: id === this.state.highlightedOptionId,
        isSelected: id === this.state.selectedOptionId
      }, optionProps), children);
    }
  }, {
    key: "renderGroup",
    value: function renderGroup(group) {
      const _group$props = group.props,
            id = _group$props.id,
            label = _group$props.label,
            otherProps = (0, _objectWithoutProperties2.default)(_group$props, _excluded3);
      const children = (0, _lodash.compact)((0, _lodash.castArray)(group.props.children));
      return /*#__PURE__*/_react.default.createElement(_uiSelect.Select.Group, Object.assign({
        "data-testid": `Group:${label}`,
        renderLabel: () => label,
        key: group.key || id || ++this.backupKey
      }, otherProps), children.map(c => this.renderOption(c)));
    }
  }, {
    key: "renderNoOptionsOption",
    value: function renderNoOptionsOption() {
      return /*#__PURE__*/_react.default.createElement(_uiSelect.Select.Option, {
        id: noOptionsOptionId,
        isHighlighted: false,
        isSelected: false
      }, this.props.noOptionsLabel);
    }
  }, {
    key: "getOptionLabelById",
    value: function getOptionLabelById(oid) {
      const option = this.getOptionByFieldValue('id', oid);
      return option ? option.props.children : '';
    }
  }, {
    key: "getOptionByFieldValue",
    value: function getOptionByFieldValue(field, value, options = (0, _lodash.castArray)(this.props.children)) {
      if (!this.props.children) return null;
      let foundOpt = null;

      for (let i = 0; i < options.length; ++i) {
        const o = options[i];

        if (Array.isArray(o)) {
          foundOpt = this.getOptionByFieldValue(field, value, o);
        } else if ((0, _uiReactUtils.matchComponentTypes)(o, [CanvasSelectOption])) {
          if (o.props[field] === value) {
            foundOpt = o;
          }
        } else if ((0, _uiReactUtils.matchComponentTypes)(o, [CanvasSelectGroup])) {
          const groupOptions = (0, _lodash.castArray)(o.props.children);

          for (let j = 0; j < groupOptions.length; ++j) {
            const o2 = groupOptions[j];

            if (o2.props[field] === value) {
              foundOpt = o2;
              break;
            }
          }
        }

        if (foundOpt) {
          break;
        }
      }

      return foundOpt;
    }
  }]);
  CanvasSelect.displayName = "CanvasSelect";
  return CanvasSelect;
}(_react.default.Component);

exports.default = CanvasSelect;
CanvasSelect.Option = CanvasSelectOption;
CanvasSelect.Group = CanvasSelectGroup;
CanvasSelect.propTypes = {
  id: _propTypes.string,
  label: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.func]).isRequired,
  liveRegion: _propTypes.func,
  value: _propTypes.string,
  onChange: _propTypes.func.isRequired,
  children: _propTypes.node,
  noOptionsLabel: _propTypes.string,
  // unselectable option to display when there are no options
  translatedStrings: (0, _propTypes.shape)({
    USE_ARROWS: _propTypes.string.isRequired,
    LIST_COLLAPSED: _propTypes.string.isRequired,
    LIST_EXPANDED: _propTypes.string.isRequired,
    OPTION_SELECTED: _propTypes.string.isRequired
  }),
  onBlur: _propTypes.func
};
CanvasSelect.defaultProps = {
  noOptionsLabel: '---'
};