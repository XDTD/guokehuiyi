/*
 * Copyright (C) 2017 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that they will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react';
import { func, shape } from 'prop-types';

function getDisplayName(WrappedComponent) {
  return `Notifier(${WrappedComponent.displayName})`;
}

export function notifier(WrappedComponent) {
  var _class, _temp;

  return _temp = _class = class Notifier extends React.Component {
    constructor(..._args) {
      super(..._args);

      this.preTriggerUpdates = (...args) => {
        if (this.context.dynamicUiManager) {
          this.context.dynamicUiManager.preTriggerUpdates(...args);
        }
      };

      this.triggerUpdates = (...args) => {
        if (this.context.dynamicUiManager) {
          this.context.dynamicUiManager.triggerUpdates(...args);
        }
      };
    }

    render() {
      return /*#__PURE__*/React.createElement(WrappedComponent, Object.assign({}, this.props, {
        triggerDynamicUiUpdates: this.triggerUpdates,
        preTriggerDynamicUiUpdates: this.preTriggerUpdates
      }));
    }

  }, _class.displayName = getDisplayName(WrappedComponent), _class.contextTypes = {
    dynamicUiManager: shape({
      triggerUpdates: func,
      preTriggerUpdates: func
    })
  }, _temp;
}