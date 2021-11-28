"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _formatMessage = _interopRequireDefault(require("format-message"));

var _uiButtons = require("@instructure/ui-buttons");

var _uiFlex = require("@instructure/ui-flex");

var _uiIcons = require("@instructure/ui-icons");

var _uiA11yContent = require("@instructure/ui-a11y-content");

var _uiText = require("@instructure/ui-text");

var _uiView = require("@instructure/ui-view");

var _CanvasSelect = _interopRequireDefault(require("../shared/CanvasSelect"));

/*
 * Copyright (C) 2019 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
let ClosedCaptionCreatorRow = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ClosedCaptionCreatorRow, _Component);

  var _super = (0, _createSuper2.default)(ClosedCaptionCreatorRow);

  function ClosedCaptionCreatorRow(...args) {
    var _this;

    (0, _classCallCheck2.default)(this, ClosedCaptionCreatorRow);
    _this = _super.call(this, ...args);
    _this._langSelectRef = /*#__PURE__*/_react.default.createRef();
    _this._deleteCCBtnRef = /*#__PURE__*/_react.default.createRef();

    _this.handleLanguageChange = (event, selectedLang) => {
      _this.props.onLanguageSelected(_this.props.languages.find(l => l.id === selectedLang));
    };

    _this.handleDeleteRow = _e => {
      _this.props.onDeleteRow(_this.props.selectedLanguage.id);
    };

    return _this;
  }

  (0, _createClass2.default)(ClosedCaptionCreatorRow, [{
    key: "isReadonly",
    get: function () {
      return this.props.selectedFile && this.props.selectedLanguage;
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this._langSelectRef.current) {
        this._langSelectRef.current.focus();
      } else if (this._deleteCCBtnRef.current) {
        this._deleteCCBtnRef.current.focus();
      }
    }
  }, {
    key: "renderChoosing",
    value: function renderChoosing() {
      return /*#__PURE__*/_react.default.createElement(_uiFlex.Flex, {
        as: "div",
        wrap: "wrap",
        justifyItems: "start",
        alignItems: "end",
        "data-testid": "CC-CreatorRow-choosing"
      }, this.renderSelectLanguage(), this.renderChooseFile());
    }
  }, {
    key: "renderSelectLanguage",
    value: function renderSelectLanguage() {
      var _this$props$selectedL;

      const CLOSED_CAPTIONS_SELECT_LANGUAGE = this.props.uploadMediaTranslations.UploadMediaStrings.CLOSED_CAPTIONS_SELECT_LANGUAGE;
      return /*#__PURE__*/_react.default.createElement(_uiFlex.Flex.Item, {
        margin: "0 small small 0"
      }, /*#__PURE__*/_react.default.createElement(_CanvasSelect.default, {
        ref: this._langSelectRef,
        value: (_this$props$selectedL = this.props.selectedLanguage) === null || _this$props$selectedL === void 0 ? void 0 : _this$props$selectedL.id,
        label: /*#__PURE__*/_react.default.createElement(_uiA11yContent.ScreenReaderContent, null, CLOSED_CAPTIONS_SELECT_LANGUAGE),
        liveRegion: this.props.liveRegion,
        onChange: this.handleLanguageChange,
        placeholder: CLOSED_CAPTIONS_SELECT_LANGUAGE,
        translatedStrings: this.props.uploadMediaTranslations.SelectStrings
      }, this.props.languages.map(o => {
        return /*#__PURE__*/_react.default.createElement(_CanvasSelect.default.Option, {
          key: o.id,
          id: o.id,
          value: o.id
        }, o.label);
      })));
    }
  }, {
    key: "renderChooseFile",
    value: function renderChooseFile() {
      const _this$props$uploadMed = this.props.uploadMediaTranslations.UploadMediaStrings,
            NO_FILE_CHOSEN = _this$props$uploadMed.NO_FILE_CHOSEN,
            SUPPORTED_FILE_TYPES = _this$props$uploadMed.SUPPORTED_FILE_TYPES,
            CLOSED_CAPTIONS_CHOOSE_FILE = _this$props$uploadMed.CLOSED_CAPTIONS_CHOOSE_FILE;
      return /*#__PURE__*/_react.default.createElement(_uiFlex.Flex.Item, {
        margin: "0 small small 0"
      }, /*#__PURE__*/_react.default.createElement("input", {
        id: "attachmentFile",
        accept: ".vtt, .srt",
        ref: element => {
          this.fileInput = element;
        },
        onChange: e => {
          this.props.onFileSelected(e.target.files[0]);
        },
        style: {
          display: 'none'
        },
        type: "file"
      }), /*#__PURE__*/_react.default.createElement(_uiView.View, {
        as: "div"
      }, /*#__PURE__*/_react.default.createElement(_uiText.Text, {
        as: "div"
      }, SUPPORTED_FILE_TYPES), /*#__PURE__*/_react.default.createElement(_uiButtons.Button, {
        margin: "xx-small 0 0 0",
        id: "attachmentFileButton",
        onClick: () => {
          this.fileInput.click();
        },
        ref: element => {
          this.attachmentFileButton = element;
        }
      }, this.props.selectedFile ? this.props.selectedFile.name : CLOSED_CAPTIONS_CHOOSE_FILE), !this.props.selectedFile && /*#__PURE__*/_react.default.createElement(_uiView.View, {
        display: "inline-block",
        margin: "0 0 0 small"
      }, /*#__PURE__*/_react.default.createElement(_uiText.Text, {
        color: "secondary"
      }, NO_FILE_CHOSEN))));
    }
  }, {
    key: "renderChosen",
    value: function renderChosen() {
      const REMOVE_FILE = this.props.uploadMediaTranslations.UploadMediaStrings.REMOVE_FILE;
      return /*#__PURE__*/_react.default.createElement(_uiFlex.Flex, {
        as: "div",
        wrap: "wrap",
        justifyItems: "start",
        alignItems: "end",
        "data-testid": "CC-CreatorRow-chosen"
      }, /*#__PURE__*/_react.default.createElement(_uiFlex.Flex.Item, {
        margin: "0 0 small 0"
      }, /*#__PURE__*/_react.default.createElement(_uiView.View, {
        as: "div",
        borderWidth: "small",
        padding: "0 0 0 small",
        borderRadius: "medium",
        width: "100%"
      }, /*#__PURE__*/_react.default.createElement(_uiFlex.Flex, {
        justifyItems: "space-between"
      }, /*#__PURE__*/_react.default.createElement(_uiFlex.Flex.Item, null, /*#__PURE__*/_react.default.createElement(_uiText.Text, {
        weight: "bold"
      }, this.props.selectedLanguage.label)), /*#__PURE__*/_react.default.createElement(_uiFlex.Flex.Item, {
        margin: "0 0 0 x-small"
      }, /*#__PURE__*/_react.default.createElement(_uiButtons.IconButton, {
        ref: this._deleteCCBtnRef,
        withBackground: false,
        withBorder: false,
        onClick: this.handleDeleteRow,
        screenReaderLabel: (0, _formatMessage.default)(REMOVE_FILE, {
          lang: this.props.selectedLanguage.label
        })
      }, /*#__PURE__*/_react.default.createElement(_uiIcons.IconTrashLine, null)))))));
    }
  }, {
    key: "render",
    value: function render() {
      return this.isReadonly ? this.renderChosen() : this.renderChoosing();
    }
  }]);
  ClosedCaptionCreatorRow.displayName = "ClosedCaptionCreatorRow";
  return ClosedCaptionCreatorRow;
}(_react.Component);

exports.default = ClosedCaptionCreatorRow;
ClosedCaptionCreatorRow.propTypes = {
  languages: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    id: _propTypes.string,
    label: _propTypes.string
  })),
  liveRegion: _propTypes.func,
  uploadMediaTranslations: (0, _propTypes.shape)({
    UploadMediaStrings: (0, _propTypes.objectOf)(_propTypes.string),
    SelectStrings: (0, _propTypes.objectOf)(_propTypes.string)
  }),
  onDeleteRow: _propTypes.func,
  onFileSelected: _propTypes.func,
  onLanguageSelected: _propTypes.func,
  selectedFile: (0, _propTypes.shape)({
    name: _propTypes.string.isRequired
  }),
  // there's more, but his is all I care about
  selectedLanguage: (0, _propTypes.shape)({
    id: _propTypes.string.isRequired,
    label: _propTypes.string.isRequired
  })
};