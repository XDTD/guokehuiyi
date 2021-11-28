import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

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
import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { arrayOf, bool, func, instanceOf, number, oneOfType, shape, string } from 'prop-types';
import formatMessage from 'format-message';
import { Billboard } from '@instructure/ui-billboard';
import { Button } from '@instructure/ui-buttons';
import { Checkbox } from '@instructure/ui-checkbox';
import { FileDrop } from '@instructure/ui-file-drop';
import { Flex } from '@instructure/ui-flex';
import { View } from '@instructure/ui-view';
import { IconTrashLine, IconVideoLine } from '@instructure/ui-icons';
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
import { Text } from '@instructure/ui-text';
import { px } from '@instructure/ui-utils';
import { MediaPlayer } from '@instructure/ui-media-player';
import { TextInput } from '@instructure/ui-text-input';
import LoadingIndicator from './shared/LoadingIndicator';
import RocketSVG from './RocketSVG';
import translationShape from './translationShape';
import useComputerPanelFocus from './useComputerPanelFocus';
import { isAudio, isVideo, isPreviewable, sizeMediaPlayer } from './shared/utils';
const ClosedCaptionPanel = /*#__PURE__*/React.lazy(() => import('./ClosedCaptionCreator'));
export default function ComputerPanel({
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

  const _useState = useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        messages = _useState2[0],
        setMessages = _useState2[1];

  const _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        mediaTracksCheckbox = _useState4[0],
        setMediaTracksCheckbox = _useState4[1];

  const _useState5 = useState(null),
        _useState6 = _slicedToArray(_useState5, 2),
        previewURL = _useState6[0],
        setPreviewURL = _useState6[1];

  const height = 0.8 * ((bounds === null || bounds === void 0 ? void 0 : bounds.height) - 38 - px('1.5rem')); // the trashcan is 38px tall and the 1.5rem margin-bottom

  const width = 0.8 * (bounds === null || bounds === void 0 ? void 0 : bounds.width);
  const previewPanelRef = useRef(null);
  const clearButtonRef = useRef(null);
  const panelRef = useRef(null);
  useComputerPanelFocus(theFile, panelRef, clearButtonRef);
  useEffect(() => {
    return () => {
      var _URL, _URL$revokeObjectURL;

      return (_URL = URL) === null || _URL === void 0 ? void 0 : (_URL$revokeObjectURL = _URL.revokeObjectURL) === null || _URL$revokeObjectURL === void 0 ? void 0 : _URL$revokeObjectURL.call(_URL, previewURL);
    };
  }, [previewURL]);
  useEffect(() => {
    if (previewPanelRef.current && mediaTracksCheckbox) {
      previewPanelRef.current.scrollIntoView(false);
    }
  }, [mediaTracksCheckbox]);
  const handlePlayerSize = useCallback(_event => {
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

    const sz = sizeMediaPlayer(player, theFile.type, boundingBox);
    player.style.width = sz.width;
    player.style.height = sz.height;
    player.style.margin = '0 auto'; // from this sub-package, I don't have a URL to use as the
    // audio player's poster image. We can give it a background image though

    player.classList.add(isAudio(theFile.type) ? 'audio-player' : 'video-player');
  }, [theFile, width, height]);
  const handleLoadedMetadata = useCallback(_event => {
    handlePlayerSize();
  }, [handlePlayerSize]);
  useEffect(() => {
    window.addEventListener('resize', handlePlayerSize);
    return () => {
      window.removeEventListener('resize', handlePlayerSize);
    };
  }, [handlePlayerSize]);

  if (hasUploadedFile) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      },
      ref: previewPanelRef
    }, /*#__PURE__*/React.createElement(Flex, {
      direction: "row-reverse",
      margin: "none none medium"
    }, /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(Button, {
      elementRef: el => {
        clearButtonRef.current = el;
      },
      onClick: () => {
        setFile(null);
        setHasUploadedFile(false);
        setPreviewURL(null);
      },
      renderIcon: IconTrashLine
    }, /*#__PURE__*/React.createElement(ScreenReaderContent, null, uploadMediaTranslations.UploadMediaStrings.CLEAR_FILE_TEXT)))), /*#__PURE__*/React.createElement(View, {
      as: "div",
      textAlign: "center",
      margin: "0 auto"
    }, !(isPreviewable(theFile.type) && previewURL) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconVideoLine, {
      size: "medium",
      "data-testid": "preview-video-icon"
    }), /*#__PURE__*/React.createElement(Text, {
      as: "p",
      weight: "normal"
    }, formatMessage('No preview is available for this file.'))) : /*#__PURE__*/React.createElement(MediaPlayer, {
      sources: [{
        label: theFile.name,
        src: previewURL,
        type: theFile.type
      }],
      hideFullScreen: !(document.fullscreenEnabled || document.webkitFullscreenEnabled),
      onLoadedMetadata: handleLoadedMetadata
    })), /*#__PURE__*/React.createElement(View, {
      display: "block",
      padding: "medium 0 0"
    }, /*#__PURE__*/React.createElement(TextInput, {
      renderLabel: formatMessage('File name'),
      placeholder: formatMessage('File name'),
      value: theFile.title,
      onChange: (e, val) => {
        theFile.title = val;
        setFile(theFile);
      }
    })), isVideo(theFile.type) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
      display: "block",
      padding: "medium medium medium 0"
    }, /*#__PURE__*/React.createElement(Checkbox, {
      onChange: event => setMediaTracksCheckbox(event.target.checked),
      checked: mediaTracksCheckbox,
      label: ADD_CLOSED_CAPTIONS_OR_SUBTITLES,
      value: "mediaTracks"
    })), mediaTracksCheckbox && /*#__PURE__*/React.createElement(Suspense, {
      fallback: LoadingIndicator(LOADING_MEDIA)
    }, /*#__PURE__*/React.createElement(ClosedCaptionPanel, {
      languages: languages,
      liveRegion: liveRegion,
      uploadMediaTranslations: uploadMediaTranslations,
      updateSubtitles: updateSubtitles
    }))));
  }

  return /*#__PURE__*/React.createElement("div", {
    ref: panelRef
  }, /*#__PURE__*/React.createElement(FileDrop, {
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
    renderLabel: /*#__PURE__*/React.createElement(Billboard, {
      heading: label,
      hero: /*#__PURE__*/React.createElement(RocketSVG, {
        width: "3em",
        height: "3em"
      }),
      message: uploadMediaTranslations.UploadMediaStrings.DRAG_DROP_CLICK_TO_BROWSE
    })
  }));
}
ComputerPanel.propTypes = {
  accept: oneOfType([string, arrayOf(string)]),
  hasUploadedFile: bool,
  label: string.isRequired,
  languages: arrayOf(shape({
    id: string,
    label: string
  })),
  liveRegion: func,
  setFile: func.isRequired,
  setHasUploadedFile: func.isRequired,
  theFile: instanceOf(File),
  uploadMediaTranslations: translationShape,
  updateSubtitles: func.isRequired,
  bounds: shape({
    width: number.isRequired,
    height: number.isRequired
  })
};