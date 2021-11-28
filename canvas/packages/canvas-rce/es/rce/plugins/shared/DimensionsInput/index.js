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
import React from 'react';
import { bool, func, number, shape, string } from 'prop-types';
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
import { FormFieldGroup } from '@instructure/ui-form-field';
import { IconLockLine } from '@instructure/ui-icons';
import { Flex } from '@instructure/ui-flex';
import formatMessage from "../../../../format-message.js";
import DimensionInput from "./DimensionInput.js";
export { default as useDimensionsState } from "./useDimensionsState.js";
export default function DimensionsInput(props) {
  const dimensionsState = props.dimensionsState,
        minHeight = props.minHeight,
        minWidth = props.minWidth;
  let messages = [{
    text: formatMessage('Aspect ratio will be preserved'),
    type: 'hint'
  }];

  if (!dimensionsState.isNumeric) {
    messages = [{
      text: formatMessage('Width and height must be numbers'),
      type: 'error'
    }];
  } else if (!dimensionsState.isAtLeastMinimums) {
    messages = [{
      text: formatMessage('Must be at least {width} x {height}px', {
        width: minWidth,
        height: minHeight
      }),
      type: 'error'
    }];
  }

  return /*#__PURE__*/React.createElement(FormFieldGroup, {
    description: /*#__PURE__*/React.createElement(ScreenReaderContent, null, formatMessage('Dimensions')),
    messages: messages
  }, /*#__PURE__*/React.createElement(Flex, {
    alignItems: "start",
    direction: "row"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    shrink: true
  }, /*#__PURE__*/React.createElement(DimensionInput, {
    dimensionState: dimensionsState.widthState,
    label: formatMessage('Width'),
    minValue: minWidth
  })), /*#__PURE__*/React.createElement(Flex.Item, {
    padding: "x-small small"
  }, /*#__PURE__*/React.createElement(IconLockLine, null)), /*#__PURE__*/React.createElement(Flex.Item, {
    shrink: true
  }, /*#__PURE__*/React.createElement(DimensionInput, {
    dimensionState: dimensionsState.heightState,
    label: formatMessage('Height'),
    minValue: minHeight
  }))));
}
DimensionsInput.propTypes = {
  dimensionsState: shape({
    heightState: shape({
      addOffset: func.isRequired,
      inputValue: string.isRequired,
      setInputValue: func.isRequired
    }).isRequired,
    isNumeric: bool.isRequired,
    widthState: shape({
      addOffset: func.isRequired,
      inputValue: string.isRequired,
      setInputValue: func.isRequired
    }).isRequired
  }),
  minHeight: number.isRequired,
  minWidth: number.isRequired
};