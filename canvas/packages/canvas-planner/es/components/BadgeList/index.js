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
import React, { Children, Component } from 'react';
import { themeable } from '@instructure/ui-themeable';
import { Children as ChildrenPropType } from '@instructure/ui-prop-types';
import { Pill } from '@instructure/ui-pill';
const styles = {
  componentId: 'WWGvl',
  template: function (theme) {
    return `

.BadgeList-styles__root {
  line-height: ${theme.lineHeight || 'inherit'};
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: inherit;
}

[dir="ltr"] .BadgeList-styles__root {
  text-align: inherit;
}

[dir="rtl"] .BadgeList-styles__root {
  text-align: inherit;
}

.BadgeList-styles__item {
  display: inline-block;
  vertical-align: middle;
  margin: ${theme.itemMargin || 'inherit'};
}
`;
  },
  'root': 'BadgeList-styles__root',
  'item': 'BadgeList-styles__item'
};
import theme from './theme';

class BadgeList extends Component {
  renderChildren() {
    return Children.map(this.props.children, child => {
      return /*#__PURE__*/React.createElement("li", {
        key: child.key,
        className: styles.item
      }, child);
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("ul", {
      className: styles.root
    }, this.renderChildren());
  }

}

BadgeList.propTypes = {
  children: ChildrenPropType.oneOf([Pill])
};
export default themeable(theme, styles)(BadgeList);