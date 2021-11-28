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
import { arrayOf, bool, func, instanceOf, shape, string } from 'prop-types';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Button, CloseButton } from '@instructure/ui-buttons';
import { Heading } from '@instructure/ui-heading';
import { Modal } from '@instructure/ui-modal';
import { Tabs } from '@instructure/ui-tabs';
import { px } from '@instructure/ui-utils';
import { ProgressBar } from '@instructure/ui-progress';
import { Text } from '@instructure/ui-text';
import { ACCEPTED_FILE_TYPES } from './acceptedMediaFileTypes';
import LoadingIndicator from './shared/LoadingIndicator';
import saveMediaRecording, { saveClosedCaptions } from './saveMediaRecording';
import translationShape from './translationShape';
import { RCS_MAX_BODY_SIZE, RCS_REQUEST_SIZE_BUFFER } from '@instructure/canvas-rce/src/rce/plugins/shared/Upload/constants';
const ComputerPanel = /*#__PURE__*/React.lazy(() => import('./ComputerPanel'));
const MediaRecorder = /*#__PURE__*/React.lazy(() => import('./MediaRecorder'));
export const PANELS = {
  COMPUTER: 0,
  RECORD: 1
};
export default class UploadMedia extends React.Component {
  constructor(props) {
    super(props);

    this.isReady = () => {
      if (this.props.disableSubmitWhileUploading && this.state.uploading) {
        return false;
      }

      switch (this.state.selectedPanel) {
        case PANELS.COMPUTER:
          return !!this.state.computerFile;

        case PANELS.RECORD:
          return !!this.state.recordedFile;

        default:
          return false;
      }
    };

    this.handleSubmit = () => {
      switch (this.state.selectedPanel) {
        case PANELS.COMPUTER:
          this.uploadFile(this.state.computerFile);
          break;

        case PANELS.RECORD:
          this.uploadFile(this.state.recordedFile);
          break;

        default:
          throw new Error('Selected Panel is invalid');
        // Should never get here
      }
    };

    this.submitEnabled = () => {
      var _this$state$computerF;

      switch (this.state.selectedPanel) {
        case PANELS.COMPUTER:
          return this.isReady() && !!((_this$state$computerF = this.state.computerFile) !== null && _this$state$computerF !== void 0 && _this$state$computerF.title);

        default:
          return this.isReady();
      }
    };

    this.onSaveMediaProgress = progress => {
      this.setState({
        progress
      });
    };

    this.saveMediaCallback = async (err, data) => {
      if (err) {
        this.props.onUploadComplete && this.props.onUploadComplete(err, data);
      } else {
        try {
          if (this.state.selectedPanel === PANELS.COMPUTER && this.state.subtitles.length > 0) {
            await saveClosedCaptions(data.mediaObject.media_object.media_id, this.state.subtitles, this.props.rcsConfig, RCS_MAX_BODY_SIZE - RCS_REQUEST_SIZE_BUFFER);
          }

          this.props.onUploadComplete && this.props.onUploadComplete(null, data);
        } catch (ex) {
          this.props.onUploadComplete && this.props.onUploadComplete(ex, null);
        }
      }

      this.props.onDismiss && this.props.onDismiss();
    };

    this.renderModalBody = () => {
      const _this$props$uploadMed = this.props.uploadMediaTranslations.UploadMediaStrings,
            COMPUTER_PANEL_TITLE = _this$props$uploadMed.COMPUTER_PANEL_TITLE,
            DRAG_FILE_TEXT = _this$props$uploadMed.DRAG_FILE_TEXT,
            LOADING_MEDIA = _this$props$uploadMed.LOADING_MEDIA,
            RECORD_PANEL_TITLE = _this$props$uploadMed.RECORD_PANEL_TITLE,
            MEDIA_RECORD_NOT_AVAILABLE = _this$props$uploadMed.MEDIA_RECORD_NOT_AVAILABLE;
      return /*#__PURE__*/React.createElement(Tabs, {
        maxWidth: "large",
        onRequestTabChange: (_, {
          index
        }) => {
          this.setState({
            selectedPanel: index
          });
        }
      }, this.props.tabs.upload && /*#__PURE__*/React.createElement(Tabs.Panel, {
        key: "computer",
        isSelected: this.state.selectedPanel === PANELS.COMPUTER,
        renderTitle: () => COMPUTER_PANEL_TITLE
      }, /*#__PURE__*/React.createElement(Suspense, {
        fallback: LoadingIndicator(LOADING_MEDIA)
      }, /*#__PURE__*/React.createElement(ComputerPanel, {
        theFile: this.state.computerFile,
        setFile: file => this.setState({
          computerFile: file
        }),
        hasUploadedFile: this.state.hasUploadedFile,
        setHasUploadedFile: uploadFileState => this.setState({
          hasUploadedFile: uploadFileState
        }),
        label: DRAG_FILE_TEXT,
        uploadMediaTranslations: this.props.uploadMediaTranslations,
        accept: ACCEPTED_FILE_TYPES,
        languages: this.props.languages,
        liveRegion: this.props.liveRegion,
        updateSubtitles: subtitles => {
          this.setState({
            subtitles
          });
        },
        bounds: this.state.modalBodySize
      }))), this.props.tabs.record && /*#__PURE__*/React.createElement(Tabs.Panel, {
        key: "record",
        isSelected: this.state.selectedPanel === PANELS.RECORD,
        renderTitle: () => RECORD_PANEL_TITLE
      }, /*#__PURE__*/React.createElement(Suspense, {
        fallback: LoadingIndicator(LOADING_MEDIA)
      }, /*#__PURE__*/React.createElement(MediaRecorder, {
        MediaCaptureStrings: this.props.uploadMediaTranslations.MediaCaptureStrings,
        errorMessage: MEDIA_RECORD_NOT_AVAILABLE,
        onSave: file => this.setState({
          recordedFile: file
        }, this.handleSubmit)
      }))));
    };

    this.onModalClose = () => {
      this.setState({
        hasUploadedFile: false,
        selectedPanel: 0,
        computerFile: null
      });
      this.props.onDismiss();
    };

    this.renderModalFooter = () => {
      if (this.state.selectedPanel === PANELS.RECORD) {
        return null;
      }

      const _this$props$uploadMed2 = this.props.uploadMediaTranslations.UploadMediaStrings,
            CLOSE_TEXT = _this$props$uploadMed2.CLOSE_TEXT,
            SUBMIT_TEXT = _this$props$uploadMed2.SUBMIT_TEXT,
            PROGRESS_LABEL = _this$props$uploadMed2.PROGRESS_LABEL;
      return /*#__PURE__*/React.createElement(Modal.Footer, null, this.state.uploading && /*#__PURE__*/React.createElement(ProgressBar, {
        screenReaderLabel: PROGRESS_LABEL,
        valueNow: this.state.progress,
        valueMax: 100,
        renderValue: ({
          valueNow
        }) => {
          return /*#__PURE__*/React.createElement(Text, null, valueNow, "%");
        }
      }), "\xA0", /*#__PURE__*/React.createElement(Button, {
        onClick: this.onModalClose
      }, " ", CLOSE_TEXT, " "), "\xA0", /*#__PURE__*/React.createElement(Button, {
        onClick: e => {
          e.preventDefault();
          this.handleSubmit();
        },
        color: "primary",
        type: "submit",
        interaction: this.submitEnabled() ? 'enabled' : 'disabled'
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

    this.state = {
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
    this.modalBodyRef = /*#__PURE__*/React.createRef();
  }

  uploadFile(file) {
    this.setState({
      uploading: true
    }, () => {
      this.props.onStartUpload && this.props.onStartUpload(file);
      saveMediaRecording(file, this.props.rcsConfig, this.saveMediaCallback, this.onSaveMediaProgress);
    });
  }

  componentDidMount() {
    this.setBodySize(this.state);
  }

  componentDidUpdate(_prevProps, prevState) {
    this.setBodySize(prevState);
  }

  setBodySize(state) {
    if (this.modalBodyRef.current) {
      // eslint-disable-next-line react/no-find-dom-node
      const thebody = ReactDOM.findDOMNode(this.modalBodyRef.current);
      const modalBodySize = thebody.getBoundingClientRect();
      modalBodySize.height -= px('3rem'); // leave room for the tabs

      if (modalBodySize.width !== state.modalBodySize.width || modalBodySize.height !== state.modalBodySize.height) {
        if (modalBodySize.width > 0 && modalBodySize.height > 0) {
          this.setState({
            modalBodySize
          });
        }
      }
    }
  }

  render() {
    const _this$props$uploadMed3 = this.props.uploadMediaTranslations.UploadMediaStrings,
          CLOSE_TEXT = _this$props$uploadMed3.CLOSE_TEXT,
          UPLOAD_MEDIA_LABEL = _this$props$uploadMed3.UPLOAD_MEDIA_LABEL;
    return /*#__PURE__*/React.createElement(Modal, {
      label: UPLOAD_MEDIA_LABEL,
      size: "large",
      onDismiss: this.onModalClose,
      open: this.props.open,
      shouldCloseOnDocumentClick: false,
      liveRegion: this.props.liveRegion
    }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(CloseButton, {
      onClick: this.onModalClose,
      offset: "medium",
      placement: "end",
      screenReaderLabel: CLOSE_TEXT
    }), /*#__PURE__*/React.createElement(Heading, null, UPLOAD_MEDIA_LABEL)), /*#__PURE__*/React.createElement(Modal.Body, {
      ref: this.modalBodyRef
    }, this.renderModalBody()), this.renderModalFooter());
  }

}
UploadMedia.propTypes = {
  disableSubmitWhileUploading: bool,
  languages: arrayOf(shape({
    id: string,
    label: string
  })),
  liveRegion: func,
  rcsConfig: shape({
    contextId: string,
    contextType: string,
    origin: string,
    headers: shape({
      Authorization: string
    })
  }),
  onStartUpload: func,
  onUploadComplete: func,
  onDismiss: func,
  open: bool,
  tabs: shape({
    record: bool,
    upload: bool
  }),
  uploadMediaTranslations: translationShape,
  // for testing
  computerFile: instanceOf(File)
};
UploadMedia.defaultProps = {
  disableSubmitWhileUploading: false
};