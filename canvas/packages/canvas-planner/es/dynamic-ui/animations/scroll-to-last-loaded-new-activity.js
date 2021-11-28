/*
 * Copyright (C) 2018 - present Instructure, Inc.
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
import _ from 'lodash';
import Animation from '../animation';
import { daysToItems } from '../../utilities/daysUtils';
import { isNewActivityItem } from '../../utilities/statusUtils';
export class ScrollToLastLoadedNewActivity extends Animation {
  fixedElement() {
    return this.app().fixedElementForItemScrolling();
  }

  uiDidUpdate() {
    const gotDaysAction = this.acceptedAction('GOT_DAYS_SUCCESS');
    const newDays = gotDaysAction.payload.internalDays;
    const newItems = daysToItems(newDays);
    const newActivityItems = newItems.filter(item => isNewActivityItem(item));
    const newActivityItemIds = newActivityItems.map(item => item.uniqueId);
    if (newActivityItemIds.length === 0) return;

    let _this$registry$getLas = this.registry().getLastComponent('day', newActivityItemIds),
        newActivityDayComponentIds = _this$registry$getLas.componentIds; // only want groups in the day that have new activity items


    newActivityDayComponentIds = _.intersection(newActivityDayComponentIds, newActivityItemIds);

    const _this$registry$getLas2 = this.registry().getLastComponent('new-activity-indicator', newActivityDayComponentIds),
          newActivityIndicator = _this$registry$getLas2.component;

    this.maintainViewportPositionOfFixedElement();
    this.animator().focusElement(newActivityIndicator.getFocusable());
    this.animator().scrollTo(newActivityIndicator.getScrollable(), this.manager().totalOffset());
  }

}