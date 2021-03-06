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
import React, { useEffect, useState } from 'react';
import { View } from '@instructure/ui-view';
import { Flex } from '@instructure/ui-flex';
import { TextInput } from '@instructure/ui-text-input';
import { Popover } from '@instructure/ui-popover';
import { IconArrowOpenDownLine, IconArrowOpenUpLine } from '@instructure/ui-icons';
import { BaseButton, CloseButton, IconButton } from '@instructure/ui-buttons';
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
import formatMessage from "../../../format-message.js";
const COLORS = ['#BD3C14', '#FF2717', '#E71F63', '#8F3E97', '#65499D', '#4554A4', '#1770AB', '#0B9BE3', '#06A3B7', '#009688', '#009606', '#8D9900', '#D97900', '#FD5D10', '#F06291', '#111111', '#556572', '#8B969E', '#FFFFFF', null];
export const ColorInput = ({
  color,
  label,
  name,
  onChange,
  popoverMountNode,
  width = '11rem'
}) => {
  const _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        isOpen = _useState2[0],
        setIsOpen = _useState2[1];

  const _useState3 = useState(color),
        _useState4 = _slicedToArray(_useState3, 2),
        inputValue = _useState4[0],
        setInputValue = _useState4[1];

  useEffect(() => {
    setInputValue(color);
  }, [color]); // fire onChange in case value is valid

  const handleColorChange = hex => {
    if (isValidHex(hex)) {
      onChange(hex);
    }

    if (!hex || !hex.length) {
      onChange(null);
    }

    setInputValue(hex);
  }; // reset the input value on blur if invalid


  return /*#__PURE__*/React.createElement(View, {
    as: "div"
  }, /*#__PURE__*/React.createElement(TextInput, {
    display: "inline-block",
    name: name,
    onBlur: () => {
      if (!inputValue || inputValue.length > 0 && !isValidHex(inputValue)) {
        setInputValue(color);
      }
    },
    onChange: (e, value) => handleColorChange(value),
    placeholder: formatMessage('None'),
    renderBeforeInput: /*#__PURE__*/React.createElement(ColorPreview, {
      color: color,
      disabled: true,
      margin: "0"
    }),
    renderAfterInput: function () {
      return /*#__PURE__*/React.createElement(Popover, {
        on: "click",
        isShowingContent: isOpen,
        onShowContent: () => setIsOpen(true),
        onHideContent: () => setIsOpen(false),
        shouldContainFocus: true,
        shouldReturnFocus: true,
        mountNode: popoverMountNode,
        renderTrigger: /*#__PURE__*/React.createElement(IconButton, {
          screenReaderLabel: formatMessage('View predefined colors'),
          size: "small",
          withBackground: false,
          withBorder: false
        }, isOpen ? /*#__PURE__*/React.createElement(IconArrowOpenUpLine, null) : /*#__PURE__*/React.createElement(IconArrowOpenDownLine, null))
      }, /*#__PURE__*/React.createElement(CloseButton, {
        placement: "end",
        onClick: () => setIsOpen(false)
      }, formatMessage('Close')), /*#__PURE__*/React.createElement(Flex, {
        alignItems: "center",
        as: "div",
        justifyItems: "center",
        padding: "x-large x-small small",
        width: "175px",
        wrapItems: true
      }, COLORS.map(hex => /*#__PURE__*/React.createElement(ColorPreview, {
        key: `${name}-${hex}`,
        color: hex,
        disabled: !isOpen,
        onSelect: () => handleColorChange(hex)
      }))));
    }(),
    renderLabel: label,
    shouldNotWrap: true,
    value: inputValue || '',
    width: width
  }));
};

function ColorPreview({
  color,
  disabled,
  margin = 'xxx-small',
  onSelect
}) {
  return /*#__PURE__*/React.createElement(BaseButton, {
    interaction: disabled ? 'readonly' : void 0,
    isCondensed: true,
    margin: margin,
    onClick: onSelect,
    size: "small",
    tabIndex: onSelect ? 0 : -1,
    withBackground: false,
    withBorder: false
  }, !disabled && /*#__PURE__*/React.createElement(ScreenReaderContent, null, color ? formatMessage('Color {color}', {
    color
  }) : formatMessage('None')), /*#__PURE__*/React.createElement("span", {
    "data-testid": `colorPreview-${color}`,
    style: {
      background: color || `
            linear-gradient(
              135deg,
              rgba(255,255,255,1) 43%, rgba(255,0,0,1) 43%,
              rgba(255,0,0,1) 57%, rgba(255,255,255,1) 57%
            )
          `,
      border: '1px solid #73818C',
      borderRadius: '3px',
      display: 'block',
      height: `25px`,
      width: `25px`
    }
  }));
}

function isValidHex(color) {
  if (!color) return false;

  switch (color.length) {
    case 4:
      return /^#[0-9A-F]{3}$/i.test(color);

    case 7:
      return /^#[0-9A-F]{6}$/i.test(color);

    default:
      return false;
  }
}