import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/*
 * Copyright (C) 2021 - present Instructure, Inc.
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
import React, { useReducer } from 'react';
import formatMessage from "../../../../../../format-message.js";
import reducer, { initialState, modes } from "../../../reducers/imageSection.js";
import { Flex } from '@instructure/ui-flex';
import { Text } from '@instructure/ui-text';
import { Group } from "../Group.js";
import ModeSelect from "./ModeSelect.js";
import Course from "./Course.js";
export const ImageSection = ({
  editor
}) => {
  const _useReducer = useReducer(reducer, initialState),
        _useReducer2 = _slicedToArray(_useReducer, 2),
        state = _useReducer2[0],
        dispatch = _useReducer2[1];

  const allowedModes = {
    [modes.courseImages.type]: Course
  };
  return /*#__PURE__*/React.createElement(Group, {
    as: "section",
    defaultExpanded: true,
    summary: formatMessage('Image')
  }, /*#__PURE__*/React.createElement(Flex, {
    direction: "column",
    margin: "small"
  }, /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(Text, {
    weight: "bold"
  }, formatMessage('Current Image'))), /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Flex.Item, {
    shouldGrow: true
  }, "Preview Placeholder"), /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(ModeSelect, {
    dispatch: dispatch
  })))), /*#__PURE__*/React.createElement(Flex.Item, null, !!allowedModes[state.mode] && /*#__PURE__*/React.createElement(allowedModes[state.mode]))));
};