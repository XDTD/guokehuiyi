"use strict";

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PANELS = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard3(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _uiButtons = require("@instructure/ui-buttons");

var _uiHeading = require("@instructure/ui-heading");

var _uiModal = require("@instructure/ui-modal");

var _uiTabs = require("@instructure/ui-tabs");

var _uiUtils = require("@instructure/ui-utils");

var _uiProgress = require("@instructure/ui-progress");

var _uiText = require("@instructure/ui-text");

var _acceptedMediaFileTypes = require("./acceptedMediaFileTypes");

var _LoadingIndicator = _interopRequireDefault(require("./shared/LoadingIndicator"));

var _saveMediaRecording = _interopRequireWildcard3(require("./saveMediaRecording"));

var _translationShape = _interopRequireDefault(require("./translationShape"));

var _constants = require("@instructure/canvas-rce/src/rce/plugins/shared/Upload/constants");

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
const ComputerPanel = /*#__PURE__*/_react.default.lazy(() => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('./ComputerPanel'))));

const MediaRecorder = /*#__PURE__*/_react.default.lazy(() => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('./MediaRecorder'))));

const PANELS = {
  COMPUTER: 0,
  RECORD: 1
};
exports.PANELS = PANELS;

let UploadMedia = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(UploadMedia, _React$Component);

  var _super = (0, _createSuper2.default)(UploadMedia);

  function UploadMedia(props) {
    var _this;

    (0, _classCallCheck2.default)(this, UploadMedia);
    _this = _super.call(this, props);

    _this.isReady = () => {
      if (_this.props.disableSubmitWhileUploading && _this.state.uploading) {
        return false;
      }

      switch (_this.state.selectedPanel) {
        case PANELS.COMPUTER:
          return !!_this.state.computerFile;

        case PANELS.RECORD:
          return !!_this.state.recordedFile;

        default:
          return false;
      }
    };

    _this.handleSubmit = () => {
      switch (_this.state.selectedPanel) {
        case PANELS.COMPUTER:
          _this.uploadFile(_this.state.computerFile);

          break;

        case PANELS.RECORD:
          _this.uploadFile(_this.state.recordedFile);

          break;

        default:
          throw new Error('Selected Panel is invalid');
        // Should never get here
      }
    };

    _this.submitEnabled = () => {
      var _this$state$computerF;

      switch (_this.state.selectedPanel) {
        case PANELS.COMPUTER:
          return _this.isReady() && !!((_this$state$computerF = _this.state.computerFile) !== null && _this$state$computerF !== void 0 && _this$state$computerF.title);

        default:
          return _this.isReady();
      }
    };

    _this.onSaveMediaProgress = progress => {
      _this.setState({
        progress
      });
    };

    _this.saveMediaCallback = async (err, data) => {
      if (err) {
        _this.props.onUploadComplete && _this.props.onUploadComplete(err, data);
      } else {
        try {
          if (_this.state.selectedPanel === PANELS.COMPUTER && _this.state.subtitles.length > 0) {
            await (0, _saveMediaRecording.saveClosedCaptions)(data.mediaObject.media_object.media_id, _this.state.subtitles, _this.props.rcsConfig, _constants.RCS_MAX_BODY_SIZE - _constants.RCS_REQUEST_SIZE_BUFFER);
          }

          _this.props.onUploadComplete && _this.props.onUploadComplete(null, data);
        } catch (ex) {
          _this.props.onUploadComplete && _this.props.onUploadComplete(ex, null);
        }
      }

      _this.props.onDismiss && _this.props.onDismiss();
    };

    _this.renderModalBody = () => {
      const _this$props$uploadMed = _this.props.uploadMediaTranslations.UploadMediaStrings,
            COMPUTER_PANEL_TITLE = _this$props$uploadMed.COMPUTER_PANEL_TITLE,
            DRAG_FILE_TEXT = _this$props$uploadMed.DRAG_FILE_TEXT,
            LOADING_MEDIA = _this$props$uploadMed.LOADING_MEDIA,
            RECORD_PANEL_TITLE = _this$props$uploadMed.RECORD_PANEL_TITLE,
            MEDIA_RECORD_NOT_AVAILABLE = _this$props$uploadMed.MEDIA_RECORD_NOT_AVAILABLE;
      return /*#__PURE__*/_react.default.createElement(_uiTabs.Tabs, {
        maxWidth: "large",
        onRequestTabChange: (_, {
          index
        }) => {
          _this.setState({
            selectedPanel: index
          });
        }
      }, _this.props.tabs.upload && /*#__PURE__*/_react.default.createElement(_uiTabs.Tabs.Panel, {
        key: "computer",
        isSelected: _this.state.selectedPanel === PANELS.COMPUTER,
        renderTitle: () => COMPUTER_PANEL_TITLE
      }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
        fallback: (0, _LoadingIndicator.default)(LOADING_MEDIA)
      }, /*#__PURE__*/_react.default.createElement(ComputerPanel, {
        theFile: _this.state.computerFile,
        setFile: file => _this.setState({
          computerFile: file
        }),
        hasUploadedFile: _this.state.hasUploadedFile,
        setHasUploadedFile: uploadFileState => _this.setState({
          hasUploadedFile: uploadFileState
        }),
        label: DRAG_FILE_TEXT,
        uploadMediaTranslations: _this.props.uploadMediaTranslations,
        accept: _acceptedMediaFileTypes.ACCEPTED_FILE_TYPES,
        languages: _this.props.languages,
        liveRegion: _this.props.liveRegion,
        updateSubtitles: subtitles => {
          _this.setState({
            subtitles
          });
        },
        bounds: _this.state.modalBodySize
      }))), _this.props.tabs.record && /*#__PURE__*/_react.default.createElement(_uiTabs.Tabs.Panel, {
        key: "record",
        isSelected: _this.state.selectedPanel === PANELS.RECORD,
        renderTitle: () => RECORD_PANEL_TITLE
      }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
        fallback: (0, _LoadingIndicator.default)(LOADING_MEDIA)
      }, /*#__PURE__*/_react.default.createElement(MediaRecorder, {
        MediaCaptureStrings: _this.props.uploadMediaTranslations.MediaCaptureStrings,
        errorMessage: MEDIA_RECORD_NOT_AVAILABLE,
        onSave: file => _this.setState({
          recordedFile: file
        }, _this.handleSubmit)
      }))));
    };

    _this.onModalClose = () => {
      _this.setState({
        hasUploadedFile: false,
        selectedPanel: 0,
        computerFile: null
      });

      _this.props.onDismiss();
    };

    _this.renderModalFooter = () => {
      if (_this.state.selectedPanel === PANELS.RECORD) {
        return null;
      }

      const _this$props$uploadMed2 = _this.props.uploadMediaTranslations.UploadMediaStrings,
            CLOSE_TEXT = _this$props$uploadMed2.CLOSE_TEXT,
            SUBMIT_TEXT = _this$props$uploadMed2.SUBMIT_TEXT,
            PROGRESS_LABEL = _this$props$uploadMed2.PROGRESS_LABEL;
      return /*#__PURE__*/_react.default.createElement(_uiModal.Modal.Footer, null, _this.state.uploading && /*#__PURE__*/_react.default.createElement(_uiProgress.ProgressBar, {
        screenReaderLabel: PROGRESS_LABEL,
        valueNow: _this.state.progress,
        valueMax: 100,
        renderValue: ({
          valueNow
        }) => {
          return /*#__PURE__*/_react.default.createElement(_uiText.Text, null, valueNow, "%");
        }
      }), "\xA0", /*#__PURE__*/_react.default.createElement(_uiButtons.Button, {
        onClick: _this.onModalClose
      }, " ", CLOSE_TEXT, " "), "\xA0", /*#__PURE__*/_react.default.createElement(_uiButtons.Button, {
        onClick: e => {
          e.preventDefault();

          _this.handleSubmit();
        },
        color: "primary",
        type: "submit",
        interaction: _this.submitEnabled() ? 'enabled' : 'disabled'
      }, SUBMIT_TEXT));
    };

    let defaultSelectedPanel = -1;

    if (props.tabs.upload) {
      defaultSelectedPanel = 0;
    } else if (props.tabs.record) {
      defaultSelectedPanel = 1;
    }

    if (props.computerFile) {
      props.computerFile.title = props.computerFile.name;
    }

    _this.state = {
      hasUploadedFile: !!props.computerFile,
      uploading: false,
      progress: 0,
      selectedPanel: defaultSelectedPanel,
      computerFile: props.computerFile || null,
      subtitles: [],
      recordedFile: null,
      modalBodySize: {
        width: NaN,
        height: NaN
      }
    };
    _this.modalBodyRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  (0, _createClass2.default)(UploadMedia, [{
    key: "uploadFile",
    value: function uploadFile(file) {
      this.setState({
        uploading: true
      }, () => {
        this.props.onStartUpload && this.props.onStartUpload(file);
        (0, _saveMediaRecording.default)(file, this.props.rcsConfig, this.saveMediaCallback, this.onSaveMediaProgress);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setBodySize(this.state);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, prevState) {
      this.setBodySize(prevState);
    }
  }, {
    key: "setBodySize",
    value: function setBodySize(state) {
      if (this.modalBodyRef.current) {
        // eslint-disable-next-line react/no-find-dom-node
        const thebody = _reactDom.default.findDOMNode(this.modalBodyRef.current);

        const modalBodySize = thebody.getBoundingClientRect();
        modalBodySize.height -= (0, _uiUtils.px)('3rem'); // leave room for the tabs

        if (modalBodySize.width !== state.modalBodySize.width || modalBodySize.height !== state.modalBodySize.height) {
          if (modalBodySize.width > 0 && modalBodySize.height > 0) {
            this.setState({
              modalBodySize
            });
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      const _this$props$uploadMed3 = this.props.uploadMediaTranslations.UploadMediaStrings,
            CLOSE_TEXT = _this$props$uploadMed3.CLOSE_TEXT,
            UPLOAD_MEDIA_LABEL = _this$props$uploadMed3.UPLOAD_MEDIA_LABEL;
      return /*#__PURE__*/_react.default.createElement(_uiModal.Modal, {
        label: UPLOAD_MEDIA_LABEL,
        size: "large",
        onDismiss: this.onModalClose,
        open: this.props.open,
        shouldCloseOnDocumentClick: false,
        liveRegion: this.props.liveRegion
      }, /*#__PURE__*/_react.default.createElement(_uiModal.Modal.Header, null, /*#__PURE__*/_react.default.createElement(_uiButtons.CloseButton, {
        onClick: this.onModalClose,
        offset: "medium",
        placement: "end",
        screenReaderLabel: CLOSE_TEXT
      }), /*#__PURE__*/_react.default.createElement(_uiHeading.Heading, null, UPLOAD_MEDIA_LABEL)), /*#__PURE__*/_react.default.createElement(_uiModal.Modal.Body, {
        ref: this.modalBodyRef
      }, this.renderModalBody()), this.renderModalFooter());
    }
  }]);
  UploadMedia.displayName = "UploadMedia";
  return UploadMedia;
}(_react.default.Component);

exports.default = UploadMedia;
UploadMedia.propTypes = {
  disableSubmitWhileUploading: _propTypes.bool,
  languages: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    id: _propTypes.string,
    label: _propTypes.string
  })),
  liveRegion: _propTypes.func,
  rcsConfig: (0, _propTypes.shape)({
    contextId: _propTypes.string,
    contextType: _propTypes.string,
    origin: _propTypes.string,
    headers: (0, _propTypes.shape)({
      Authorization: _propTypes.string
    })
  }),
  onStartUpload: _propTypes.func,
  onUploadComplete: _propTypes.func,
  onDismiss: _propTypes.func,
  open: _propTypes.bool,
  tabs: (0, _propTypes.shape)({
    record: _propTypes.bool,
    upload: _propTypes.bool
  }),
  uploadMediaTranslations: _translationShape.default,
  // for testing
  computerFile: (0, _propTypes.instanceOf)(File)
};
UploadMedia.defaultProps = {
  disableSubmitWhileUploading: false
};