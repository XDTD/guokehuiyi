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
import { useEffect, useState } from 'react';
export default function useComputerPanelFocus(theFile, panelRef, clearButtonRef) {
  const _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        weHaveHadAFile = _useState2[0],
        setWeHaveHadAFile = _useState2[1];

  useEffect(() => {
    if (weHaveHadAFile) {
      if (clearButtonRef.current) {
        clearButtonRef.current.focus();
      } else if (panelRef.current) {
        panelRef.current.querySelector('input').focus(); // because FileDrop does not have a ref prop or a focus func
      }
    }

    setWeHaveHadAFile(weHaveHadAFile || theFile);
  }, [weHaveHadAFile, theFile]); // eslint-disable-line react-hooks/exhaustive-deps
}