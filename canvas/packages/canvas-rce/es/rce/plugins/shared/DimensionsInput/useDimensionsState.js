import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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
import { useState } from 'react';
import { scaleForHeight, scaleForWidth } from "../DimensionUtils.js";

function normalizedNumber(number) {
  if (number == null) {
    return null;
  }

  return Number.isFinite(number) ? Math.round(number) : NaN;
}

function parseAsInteger(inputString) {
  if (inputString.trim() === '') {
    return null;
  }

  const number = Number.parseFloat(inputString, 10);
  return Number.isFinite(number) ? Math.round(number) : NaN;
}

function inputValueFor(initialNumber) {
  return Number.isFinite(initialNumber) ? `${initialNumber}` : '';
}

export default function useDimensionsState(initialDimensions, constraints) {
  const appliedHeight = initialDimensions.appliedHeight,
        appliedWidth = initialDimensions.appliedWidth,
        naturalHeight = initialDimensions.naturalHeight,
        naturalWidth = initialDimensions.naturalWidth;
  const minHeight = constraints.minHeight,
        minWidth = constraints.minWidth;
  const initialNumericValues = {
    height: appliedHeight || naturalHeight,
    width: appliedWidth || naturalWidth
  };

  const _useState = useState({
    inputHeight: inputValueFor(initialNumericValues.height),
    inputWidth: inputValueFor(initialNumericValues.width),
    numericHeight: initialNumericValues.height,
    numericWidth: initialNumericValues.width
  }),
        _useState2 = _slicedToArray(_useState, 2),
        dimensions = _useState2[0],
        setDimensions = _useState2[1];

  const currentNumericValues = {
    height: dimensions.numericHeight,
    width: dimensions.numericWidth
  };
  const dimensionMinimums = {
    height: minHeight,
    width: minWidth
  };
  const dimensionScaleFns = {
    height: scaleForHeight,
    width: scaleForWidth
  };

  function updateDimensions(attributes) {
    setDimensions(_objectSpread(_objectSpread({}, attributes), {}, {
      numericHeight: normalizedNumber(attributes.numericHeight),
      numericWidth: normalizedNumber(attributes.numericWidth)
    }));
  }

  function setNumericDimension(dimensionName, number) {
    const scaleFn = dimensionScaleFns[dimensionName];

    const _scaleFn = scaleFn(naturalWidth, naturalHeight, number, constraints),
          height = _scaleFn.height,
          width = _scaleFn.width;

    updateDimensions({
      numericHeight: height,
      numericWidth: width,
      inputHeight: inputValueFor(height),
      inputWidth: inputValueFor(width)
    });
  }

  function setDimensionValue(dimensionName, value) {
    const scaleFn = dimensionScaleFns[dimensionName];
    const number = parseAsInteger(value);

    const _scaleFn2 = scaleFn(naturalWidth, naturalHeight, number),
          height = _scaleFn2.height,
          width = _scaleFn2.width;

    updateDimensions({
      numericHeight: height,
      numericWidth: width,
      inputHeight: dimensionName === 'height' ? value : inputValueFor(height),
      inputWidth: dimensionName === 'width' ? value : inputValueFor(width)
    });
  }

  function offsetDimension(dimensionName, offset) {
    const minValue = dimensionMinimums[dimensionName];
    const initialNumber = initialNumericValues[dimensionName];
    const numericValue = currentNumericValues[dimensionName];

    if (numericValue != null && !Number.isFinite(numericValue)) {
      return;
    }

    const newNumber = numericValue == null ? initialNumber + offset : Math.max(minValue, Math.floor(numericValue + offset));
    setNumericDimension(dimensionName, newNumber);
  }

  const widthState = {
    inputValue: dimensions.inputWidth,

    addOffset(offset) {
      offsetDimension('width', offset);
    },

    setInputValue(value) {
      setDimensionValue('width', value);
    }

  };
  const heightState = {
    inputValue: dimensions.inputHeight,

    addOffset(offset) {
      offsetDimension('height', offset);
    },

    setInputValue(value) {
      setDimensionValue('height', value);
    }

  };
  const isNumeric = [dimensions.numericHeight, dimensions.numericWidth].every(Number.isFinite);
  const isAtLeastMinimums = dimensions.numericHeight >= minHeight && dimensions.numericWidth >= minWidth;
  return {
    height: dimensions.numericHeight,
    heightState,
    isAtLeastMinimums,
    isNumeric,
    isValid: isAtLeastMinimums && isNumeric,
    width: dimensions.numericWidth,
    widthState
  };
}