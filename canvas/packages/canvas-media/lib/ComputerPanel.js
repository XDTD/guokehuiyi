"use strict";

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComputerPanel;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireWildcard3(require("react"));

var _propTypes = require("prop-types");

var _formatMessage = _interopRequireDefault(require("format-message"));

var _uiBillboard = require("@instructure/ui-billboard");

var _uiButtons = require("@instructure/ui-buttons");

var _uiCheckbox = require("@instructure/ui-checkbox");

var _uiFileDrop = require("@instructure/ui-file-drop");

var _uiFlex = require("@instructure/ui-flex");

var _uiView = require("@instructure/ui-view");

var _uiIcons = require("@instructure/ui-icons");

var _uiA11yContent = require("@instructure/ui-a11y-content");

var _uiText = require("@instructure/ui-text");

var _uiUtils = require("@instructure/ui-utils");

var _uiMediaPlayer = require("@instructure/ui-media-player");

var _uiTextInput = require("@instructure/ui-text-input");

var _LoadingIndicator = _interopRequireDefault(require("./shared/LoadingIndicator"));

var _RocketSVG = _interopRequireDefault(require("./RocketSVG"));

var _translationShape = _interopRequireDefault(require("./translationShape"));

var _useComputerPanelFocus = _interopRequireDefault(require("./useComputerPanelFocus"));

var _utils = require("./shared/utils");

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
const ClosedCaptionPanel = /*#__PURE__*/_react.default.lazy(() => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('./ClosedCaptionCreator'))));

function ComputerPanel({
  accept,
  hasUploadedFile,
  label,
  languages,
  liveRegion,
  setFile,
  setHasUploadedFile,
  theFile,
  uploadMediaTranslations,
  updateSubtitles,
  bounds
}) {
  const _uploadMediaTranslati = uploadMediaTranslations.UploadMediaStrings,
        ADD_CLOSED_CAPTIONS_OR_SUBTITLES = _uploadMediaTranslati.ADD_CLOSED_CAPTIONS_OR_SUBTITLES,
        LOADING_MEDIA = _uploadMediaTranslati.LOADING_MEDIA;

  const _useState = (0, _react.useState)([]),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        messages = _useState2[0],
        setMessages = _useState2[1];

  const _useState3 = (0, _react.useState)(false),
        _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
        mediaTracksCheckbox = _useState4[0],
        setMediaTracksCheckbox = _useState4[1];

  const _useState5 = (0, _react.useState)(null),
        _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
        previewURL = _useState6[0],
        setPreviewURL = _useState6[1];

  const height = 0.8 * ((bounds === null || bounds === void 0 ? void 0 : bounds.height) - 38 - (0, _uiUtils.px)('1.5rem')); // the trashcan is 38px tall and the 1.5rem margin-bottom

  const width = 0.8 * (bounds === null || bounds === void 0 ? void 0 : bounds.width);
  const previewPanelRef = (0, _react.useRef)(null);
  const clearButtonRef = (0, _react.useRef)(null);
  const panelRef = (0, _react.useRef)(null);
  (0, _useComputerPanelFocus.default)(theFile, panelRef, clearButtonRef);
  (0, _react.useEffect)(() => {
    return () => {
      var _URL, _URL$revokeObjectURL;

      return (_URL = URL) === null || _URL === void 0 ? void 0 : (_URL$revokeObjectURL = _URL.revokeObjectURL) === null || _URL$revokeObjectURL === void 0 ? void 0 : _URL$revokeObjectURL.call(_URL, previewURL);
    };
  }, [previewURL]);
  (0, _react.useEffect)(() => {
    if (previewPanelRef.current && mediaTracksCheckbox) {
      previewPanelRef.current.scrollIntoView(false);
    }
  }, [mediaTracksCheckbox]);
  const handlePlayerSize = (0, _react.useCallback)(_event => {
    const player = previewPanelRef.current.querySelector('video');
    let boundingBox = {
      width,
      height
    };

    if (document.fullscreenElement || document.webkitFullscreenElement) {
      boundingBox = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }

    const sz = (0, _utils.sizeMediaPlayer)(player, theFile.type, boundingBox);
    player.style.width = sz.width;
    player.style.height = sz.height;
    player.style.margin = '0 auto'; // from this sub-package, I don't have a URL to use as the
    // audio player's poster image. We can give it a background image though

    player.classList.add((0, _utils.isAudio)(theFile.type) ? 'audio-player' : 'video-player');
  }, [theFile, width, height]);
  const handleLoadedMetadata = (0, _react.useCallback)(_event => {
    handlePlayerSize();
  }, [handlePlayerSize]);
  (0, _react.useEffect)(() => {
    window.addEventListener('resize', handlePlayerSize);
    return () => {
      window.removeEventListener('resize', handlePlayerSize);
    };
  }, [handlePlayerSize]);

  if (hasUploadedFile) {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'relative'
      },
      ref: previewPanelRef
    }, /*#__PURE__*/_react.default.createElement(_uiFlex.Flex, {
      direction: "row-reverse",
      margin: "none none medium"
    }, /*#__PURE__*/_react.default.createElement(_uiFlex.Flex.Item, null, /*#__PURE__*/_react.default.createElement(_uiButtons.Button, {
      elementRef: el => {
        clearButtonRef.current = el;
      },
      onClick: () => {
        setFile(null);
        setHasUploadedFile(false);
        setPreviewURL(null);
      },
      renderIcon: _uiIcons.IconTrashLine
    }, /*#__PURE__*/_react.default.createElement(_uiA11yContent.ScreenReaderContent, null, uploadMediaTranslations.UploadMediaStrings.CLEAR_FILE_TEXT)))), /*#__PURE__*/_react.default.createElement(_uiView.View, {
      as: "div",
      textAlign: "center",
      margin: "0 auto"
    }, !((0, _utils.isPreviewable)(theFile.type) && previewURL) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_uiIcons.IconVideoLine, {
      size: "medium",
      "data-testid": "preview-video-icon"
    }), /*#__PURE__*/_react.default.createElement(_uiText.Text, {
      as: "p",
      weight: "normal"
    }, (0, _formatMessage.default)('No preview is available for this file.'))) : /*#__PURE__*/_react.default.createElement(_uiMediaPlayer.MediaPlayer, {
      sources: [{
        label: theFile.name,
        src: previewURL,
        type: theFile.type
      }],
      hideFullScreen: !(document.fullscreenEnabled || document.webkitFullscreenEnabled),
      onLoadedMetadata: handleLoadedMetadata
    })), /*#__PURE__*/_react.default.createElement(_uiView.View, {
      display: "block",
      padding: "medium 0 0"
    }, /*#__PURE__*/_react.default.createElement(_uiTextInput.TextInput, {
      renderLabel: (0, _formatMessage.default)('File name'),
      placeholder: (0, _formatMessage.default)('File name'),
      value: theFile.title,
      onChange: (e, val) => {
        theFile.title = val;
        setFile(theFile);
      }
    })), (0, _utils.isVideo)(theFile.type) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_uiView.View, {
      display: "block",
      padding: "medium medium medium 0"
    }, /*#__PURE__*/_react.default.createElement(_uiCheckbox.Checkbox, {
      onChange: event => setMediaTracksCheckbox(event.target.checked),
      checked: mediaTracksCheckbox,
      label: ADD_CLOSED_CAPTIONS_OR_SUBTITLES,
      value: "mediaTracks"
    })), mediaTracksCheckbox && /*#__PURE__*/_react.default.createElement(_react.Suspense, {
      fallback: (0, _LoadingIndicator.default)(LOADING_MEDIA)
    }, /*#__PURE__*/_react.default.createElement(ClosedCaptionPanel, {
      languages: languages,
      liveRegion: liveRegion,
      uploadMediaTranslations: uploadMediaTranslations,
      updateSubtitles: updateSubtitles
    }))));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: panelRef
  }, /*#__PURE__*/_react.default.createElement(_uiFileDrop.FileDrop, {
    accept: accept,
    onDropAccepted: ([file]) => {
      if (messages.length) {
        setMessages([]);
      }

      file.title = file.name;
      setFile(file);
      setHasUploadedFile(true);
      setPreviewURL(URL.createObjectURL(file));
    },
    onDropRejected: () => {
      setMessages(msgs => msgs.concat({
        text: uploadMediaTranslations.UploadMediaStrings.INVALID_FILE_TEXT,
        type: 'error'
      }));
    },
    messages: messages,
    renderLabel: /*#__PURE__*/_react.default.createElement(_uiBillboard.Billboard, {
      heading: label,
      hero: /*#__PURE__*/_react.default.createElement(_RocketSVG.default, {
        width: "3em",
        height: "3em"
      }),
      message: uploadMediaTranslations.UploadMediaStrings.DRAG_DROP_CLICK_TO_BROWSE
    })
  }));
}

ComputerPanel.propTypes = {
  accept: (0, _propTypes.oneOfType)([_propTypes.string, (0, _propTypes.arrayOf)(_propTypes.string)]),
  hasUploadedFile: _propTypes.bool,
  label: _propTypes.string.isRequired,
  languages: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    id: _propTypes.string,
    label: _propTypes.string
  })),
  liveRegion: _propTypes.func,
  setFile: _propTypes.func.isRequired,
  setHasUploadedFile: _propTypes.func.isRequired,
  theFile: (0, _propTypes.instanceOf)(File),
  uploadMediaTranslations: _translationShape.default,
  updateSubtitles: _propTypes.func.isRequired,
  bounds: (0, _propTypes.shape)({
    width: _propTypes.number.isRequired,
    height: _propTypes.number.isRequired
  })
};