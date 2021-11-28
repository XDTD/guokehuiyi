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
import React, { Component } from 'react';
import { arrayOf, func, objectOf, shape, string } from 'prop-types';
import formatMessage from 'format-message';
import { Button, IconButton } from '@instructure/ui-buttons';
import { Flex } from '@instructure/ui-flex';
import { IconTrashLine } from '@instructure/ui-icons';
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
import { Text } from '@instructure/ui-text';
import { View } from '@instructure/ui-view';
import CanvasSelect from '../shared/CanvasSelect';
export default class ClosedCaptionCreatorRow extends Component {
  constructor(...args) {
    super(...args);
    this._langSelectRef = /*#__PURE__*/React.createRef();
    this._deleteCCBtnRef = /*#__PURE__*/React.createRef();

    this.handleLanguageChange = (event, selectedLang) => {
      this.props.onLanguageSelected(this.props.languages.find(l => l.id === selectedLang));
    };

    this.handleDeleteRow = _e => {
      this.props.onDeleteRow(this.props.selectedLanguage.id);
    };
  }

  get isReadonly() {
    return this.props.selectedFile && this.props.selectedLanguage;
  }

  focus() {
    if (this._langSelectRef.current) {
      this._langSelectRef.current.focus();
    } else if (this._deleteCCBtnRef.current) {
      this._deleteCCBtnRef.current.focus();
    }
  }

  renderChoosing() {
    return /*#__PURE__*/React.createElement(Flex, {
      as: "div",
      wrap: "wrap",
      justifyItems: "start",
      alignItems: "end",
      "data-testid": "CC-CreatorRow-choosing"
    }, this.renderSelectLanguage(), this.renderChooseFile());
  }

  renderSelectLanguage() {
    var _this$props$selectedL;

    const CLOSED_CAPTIONS_SELECT_LANGUAGE = this.props.uploadMediaTranslations.UploadMediaStrings.CLOSED_CAPTIONS_SELECT_LANGUAGE;
    return /*#__PURE__*/React.createElement(Flex.Item, {
      margin: "0 small small 0"
    }, /*#__PURE__*/React.createElement(CanvasSelect, {
      ref: this._langSelectRef,
      value: (_this$props$selectedL = this.props.selectedLanguage) === null || _this$props$selectedL === void 0 ? void 0 : _this$props$selectedL.id,
      label: /*#__PURE__*/React.createElement(ScreenReaderContent, null, CLOSED_CAPTIONS_SELECT_LANGUAGE),
      liveRegion: this.props.liveRegion,
      onChange: this.handleLanguageChange,
      placeholder: CLOSED_CAPTIONS_SELECT_LANGUAGE,
      translatedStrings: this.props.uploadMediaTranslations.SelectStrings
    }, this.props.languages.map(o => {
      return /*#__PURE__*/React.createElement(CanvasSelect.Option, {
        key: o.id,
        id: o.id,
        value: o.id
      }, o.label);
    })));
  }

  renderChooseFile() {
    const _this$props$uploadMed = this.props.uploadMediaTranslations.UploadMediaStrings,
          NO_FILE_CHOSEN = _this$props$uploadMed.NO_FILE_CHOSEN,
          SUPPORTED_FILE_TYPES = _this$props$uploadMed.SUPPORTED_FILE_TYPES,
          CLOSED_CAPTIONS_CHOOSE_FILE = _this$props$uploadMed.CLOSED_CAPTIONS_CHOOSE_FILE;
    return /*#__PURE__*/React.createElement(Flex.Item, {
      margin: "0 small small 0"
    }, /*#__PURE__*/React.createElement("input", {
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
    }), /*#__PURE__*/React.createElement(View, {
      as: "div"
    }, /*#__PURE__*/React.createElement(Text, {
      as: "div"
    }, SUPPORTED_FILE_TYPES), /*#__PURE__*/React.createElement(Button, {
      margin: "xx-small 0 0 0",
      id: "attachmentFileButton",
      onClick: () => {
        this.fileInput.click();
      },
      ref: element => {
        this.attachmentFileButton = element;
      }
    }, this.props.selectedFile ? this.props.selectedFile.name : CLOSED_CAPTIONS_CHOOSE_FILE), !this.props.selectedFile && /*#__PURE__*/React.createElement(View, {
      display: "inline-block",
      margin: "0 0 0 small"
    }, /*#__PURE__*/React.createElement(Text, {
      color: "secondary"
    }, NO_FILE_CHOSEN))));
  }

  renderChosen() {
    const REMOVE_FILE = this.props.uploadMediaTranslations.UploadMediaStrings.REMOVE_FILE;
    return /*#__PURE__*/React.createElement(Flex, {
      as: "div",
      wrap: "wrap",
      justifyItems: "start",
      alignItems: "end",
      "data-testid": "CC-CreatorRow-chosen"
    }, /*#__PURE__*/React.createElement(Flex.Item, {
      margin: "0 0 small 0"
    }, /*#__PURE__*/React.createElement(View, {
      as: "div",
      borderWidth: "small",
      padding: "0 0 0 small",
      borderRadius: "medium",
      width: "100%"
    }, /*#__PURE__*/React.createElement(Flex, {
      justifyItems: "space-between"
    }, /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(Text, {
      weight: "bold"
    }, this.props.selectedLanguage.label)), /*#__PURE__*/React.createElement(Flex.Item, {
      margin: "0 0 0 x-small"
    }, /*#__PURE__*/React.createElement(IconButton, {
      ref: this._deleteCCBtnRef,
      withBackground: false,
      withBorder: false,
      onClick: this.handleDeleteRow,
      screenReaderLabel: formatMessage(REMOVE_FILE, {
        lang: this.props.selectedLanguage.label
      })
    }, /*#__PURE__*/React.createElement(IconTrashLine, null)))))));
  }

  render() {
    return this.isReadonly ? this.renderChosen() : this.renderChoosing();
  }

}
ClosedCaptionCreatorRow.propTypes = {
  languages: arrayOf(shape({
    id: string,
    label: string
  })),
  liveRegion: func,
  uploadMediaTranslations: shape({
    UploadMediaStrings: objectOf(string),
    SelectStrings: objectOf(string)
  }),
  onDeleteRow: func,
  onFileSelected: func,
  onLanguageSelected: func,
  selectedFile: shape({
    name: string.isRequired
  }),
  // there's more, but his is all I care about
  selectedLanguage: shape({
    id: string.isRequired,
    label: string.isRequired
  })
};