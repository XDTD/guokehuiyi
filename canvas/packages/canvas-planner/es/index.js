import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";

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
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment-timezone';
import { Spinner } from '@instructure/ui-spinner';
import i18n from './i18n';
import configureStore from './store/configureStore';
import { initialOptions, getPlannerItems, getWeeklyPlannerItems, preloadSurroundingWeeks, scrollIntoPast, loadFutureItems, loadThisWeekItems, startLoadingAllOpportunities, toggleMissingItems, reloadWithObservee } from './actions';
import { registerScrollEvents } from './utilities/scrollUtils';
import { initialize as initializeAlerts } from './utilities/alertUtils';
import { initializeContent } from './utilities/contentUtils';
import { initializeDateTimeFormatters } from './utilities/dateUtils';
import { DynamicUiManager, DynamicUiProvider, specialFallbackFocusId } from './dynamic-ui';
import responsiviser from './components/responsiviser';
const PlannerPreview = /*#__PURE__*/React.lazy(() => import('./components/PlannerPreview'));
const ToDoSidebar = /*#__PURE__*/React.lazy(() => import('./components/ToDoSidebar'));
const PlannerApp = /*#__PURE__*/React.lazy(() => import('./components/PlannerApp'));
const PlannerHeader = /*#__PURE__*/React.lazy(() => import('./components/PlannerHeader'));
const WeeklyPlannerHeader = /*#__PURE__*/React.lazy(() => import('./components/WeeklyPlannerHeader'));
export * from './components';
export { loadThisWeekItems, startLoadingAllOpportunities, toggleMissingItems };
export { responsiviser };
export function createPlannerPreview(timeZone, singleCourse) {
  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: loading()
  }, /*#__PURE__*/React.createElement(PlannerPreview, {
    timeZone: timeZone,
    singleCourse: singleCourse
  }));
}
let externalPlannerActive;

const plannerActive = () => externalPlannerActive ? externalPlannerActive() : false;

const dynamicUiManager = new DynamicUiManager({
  plannerActive
});
export const store = configureStore(dynamicUiManager);

function handleScrollIntoPastAttempt() {
  if (!plannerActive()) return;

  if (!store.getState().loading.loadingPast && !store.getState().loading.loadingFuture && !store.getState().loading.allPastItemsLoaded) {
    store.dispatch(scrollIntoPast());
  }
}

function handleScrollIntoFutureAttempt() {
  if (!plannerActive()) return;

  if (!store.getState().loading.loadingPast && !store.getState().loading.loadingFuture && !store.getState().loading.allFutureItemsLoaded) {
    store.dispatch(loadFutureItems());
  }
}

function externalFocusableWrapper(externalFallbackFocusable) {
  return {
    getFocusable() {
      return externalFallbackFocusable;
    },

    getScrollable() {
      return externalFallbackFocusable;
    }

  };
}

const defaultOptions = {
  getActiveApp: () => '',
  stickyZIndex: 3
};
const defaultEnv = {};
const plannerHeaderId = 'dashboard_header_container';
const plannerNewActivityButtonId = 'new_activity_button';
const weeklyPlannerHeaderId = 'weekly_planner_header';

function mergeDefaultOptions(options) {
  const newOpts = _objectSpread(_objectSpread({}, defaultOptions), options);

  newOpts.env = _objectSpread(_objectSpread({}, defaultEnv), options.env); // special handling for these env vars because sometimes they come in
  // explicitly set to false instead of just not being defined in options.env

  if (!newOpts.env.STUDENT_PLANNER_COURSES) newOpts.env.STUDENT_PLANNER_COURSES = [];
  if (!newOpts.env.STUDENT_PLANNER_GROUPS) newOpts.env.STUDENT_PLANNER_GROUPS = [];
  return newOpts;
}

function getCourseColor({
  assetString,
  color
}, {
  K5_USER,
  K5_SUBJECT_COURSE,
  PREFERENCES: {
    custom_colors = {}
  }
}) {
  if (K5_USER || K5_SUBJECT_COURSE) {
    return color || '#394B58';
  } else {
    return custom_colors[assetString];
  }
}

function initializeCourseAndGroupColors(options) {
  if (!options.env.PREFERENCES) return;
  options.env.STUDENT_PLANNER_COURSES = options.env.STUDENT_PLANNER_COURSES.map(dc => _objectSpread(_objectSpread({}, dc), {}, {
    color: getCourseColor(dc, options.env)
  }));
  options.env.STUDENT_PLANNER_GROUPS = options.env.STUDENT_PLANNER_GROUPS.map(dg => _objectSpread(_objectSpread({}, dg), {}, {
    color: options.env.PREFERENCES.custom_colors[dg.assetString] || '#666666'
  }));
} // You have to call this first, before you call loadPlannerDashboard or renderToDoSidebar
// options: {
// env: {                       <required: ENV from Canvas>
//   MOMENT_LOCALE,             <required>
//   TIMEZONE,                  <required>
//   current_user: {            <required>
//     id,
//     display_name,
//     avatar_image_url,
//   }
//   PREFERENCES: {             <optional>
//     custom_colors,
//   },
//   STUDENT_PLANNER_COURSES,   <default: []>
//   STUDENT_PLANNER_GROUPS,    <default: []>
// }
// flashError,                  <required>
// flashMessage,                <required>
// srFlashMessage,              <required>
// convertApiUserContent,       <required - conversion to make user content from api work properly>
// dateTimeFormatters: {        <optional - canvas methods for date and time formatting>
//   dateString,                <optional>
//   timeString,                <optional>
//   datetimeString,            <optional>
// },
// externalFallbackFocusable,   <optional - element where focus goes when it should go before planner>
// getActiveApp,                <optional - method to get the current dashboard>
// changeDashboardView,         <optional - method to change the current dashboard>
// forCourse,                   <optional - course id if this is a sidebar for a specific course page>


let initializedOptions = null;
export function initializePlanner(options) {
  return new Promise(resolve => {
    if (initializedOptions) throw new Error('initializePlanner may not be called more than once');
    options = mergeDefaultOptions(options);

    if (!(options.env.MOMENT_LOCALE && options.env.TIMEZONE)) {
      throw new Error('env.MOMENT_LOCALE and env.TIMEZONE are required options for initializePlanner');
    }

    const _options = options,
          flashError = _options.flashError,
          flashMessage = _options.flashMessage,
          srFlashMessage = _options.srFlashMessage;

    if (!(flashError && flashMessage && srFlashMessage)) {
      throw new Error('flash message callbacks are required options for initializePlanner');
    }

    if (!options.convertApiUserContent) {
      throw new Error('convertApiUserContent is a required option for initializePlanner');
    }

    externalPlannerActive = () => options.getActiveApp() === 'planner';

    i18n.init(options.env.LOCALE);
    moment.locale(options.env.MOMENT_LOCALE);
    moment.tz.setDefault(options.env.TIMEZONE);
    initializeAlerts({
      visualSuccessCallback: flashMessage,
      visualErrorCallback: flashError,
      srAlertCallback: srFlashMessage
    });
    initializeContent(options);
    initializeDateTimeFormatters(options.dateTimeFormatters);
    options.plannerNewActivityButtonId = plannerNewActivityButtonId;

    if (options.env.K5_USER || options.env.K5_SUBJECT_COURSE) {
      dynamicUiManager.setOffsetElementIds(weeklyPlannerHeaderId, null);
    } else {
      dynamicUiManager.setOffsetElementIds(plannerHeaderId, plannerNewActivityButtonId);
    }

    if (options.externalFallbackFocusable) {
      dynamicUiManager.registerAnimatable('item', externalFocusableWrapper(options.externalFallbackFocusable), -1, [specialFallbackFocusId('item')]);
    }

    initializeCourseAndGroupColors(options);
    initializedOptions = options;
    store.dispatch(initialOptions(options));
    resolve(initializedOptions);
  });
}
export function resetPlanner() {
  initializedOptions = null;
}

function loading() {
  return /*#__PURE__*/React.createElement(Spinner, {
    renderTitle: "Loading...",
    size: "small"
  });
}

export function createPlannerApp() {
  if (!store.getState().weeklyDashboard) {
    // disable load on scroll for weekly dashboard
    registerScrollEvents({
      scrollIntoPast: handleScrollIntoPastAttempt,
      scrollIntoFuture: handleScrollIntoFutureAttempt,
      scrollPositionChange: pos => dynamicUiManager.handleScrollPositionChange(pos)
    });
    store.dispatch(getPlannerItems(moment.tz(initializedOptions.env.timeZone).startOf('day')));
  } else {
    store.dispatch(getWeeklyPlannerItems(moment.tz(initializedOptions.env.timeZone).startOf('day')));
  }

  return /*#__PURE__*/React.createElement(DynamicUiProvider, {
    manager: dynamicUiManager
  }, /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(Suspense, {
    fallback: loading()
  }, /*#__PURE__*/React.createElement(PlannerApp, {
    appRef: app => dynamicUiManager.setApp(app),
    changeDashboardView: initializedOptions.changeDashboardView,
    plannerActive: plannerActive,
    currentUser: store.getState().currentUser,
    focusFallback: () => dynamicUiManager.focusFallback('item'),
    k5Mode: initializedOptions.env.K5_USER || initializedOptions.env.K5_SUBJECT_COURSE,
    isWeekly: initializedOptions.env.K5_USER || initializedOptions.env.K5_SUBJECT_COURSE
  }))));
}

function renderApp(element) {
  ReactDOM.render(createPlannerApp(), element);
} // This method allows you to render the header items into a separate DOM node


function renderHeader(element, auxElement) {
  const ariaHideElement = document.getElementById('application'); // Using this pattern because default params don't merge objects

  ReactDOM.render( /*#__PURE__*/React.createElement(DynamicUiProvider, {
    manager: dynamicUiManager
  }, /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(Suspense, {
    fallback: loading()
  }, /*#__PURE__*/React.createElement(PlannerHeader, {
    stickyZIndex: initializedOptions.stickyZIndex,
    stickyButtonId: initializedOptions.plannerNewActivityButtonId,
    timeZone: initializedOptions.env.TIMEZONE,
    locale: initializedOptions.env.MOMENT_LOCALE,
    ariaHideElement: ariaHideElement,
    auxElement: auxElement
  })))), element);
} // This method allows you to render the To Do Sidebar into a separate DOM node


export function renderToDoSidebar(element) {
  if (!initializedOptions) throw new Error('initializePlanner must be called before renderToDoSidebar');
  const env = initializedOptions.env;
  ReactDOM.render( /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(Suspense, {
    fallback: loading()
  }, /*#__PURE__*/React.createElement(ToDoSidebar, {
    courses: env.STUDENT_PLANNER_COURSES,
    timeZone: env.TIMEZONE,
    locale: env.MOMENT_LOCALE,
    changeDashboardView: initializedOptions.changeDashboardView,
    forCourse: initializedOptions.forCourse
  }))), element);
}
export function renderWeeklyPlannerHeader(props) {
  return /*#__PURE__*/React.createElement(DynamicUiProvider, {
    manager: dynamicUiManager
  }, /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(Suspense, {
    fallback: loading()
  }, /*#__PURE__*/React.createElement(WeeklyPlannerHeader, props))));
}
export function loadPlannerDashboard() {
  if (!initializedOptions) throw new Error('initializePlanner must be called before loadPlannerDashboard');
  const element = document.getElementById('dashboard-planner');
  const headerElement = document.getElementById('dashboard-planner-header');
  const headerAuxElement = document.getElementById('dashboard-planner-header-aux');

  if (element) {
    renderApp(element);
  }

  if (headerElement) {
    renderHeader(headerElement, headerAuxElement);
  }
} // Allows you to defer preloading surrounding weeks' items until the user is more
// likely to use them (in weekly-planner mode)

export function preloadInitialItems() {
  if (!initializedOptions) throw new Error('initializePlanner must be called before preloadInitialItems');

  if (store.getState().weeklyDashboard) {
    store.dispatch(preloadSurroundingWeeks());
  }
} // Call with student id and student's context codes to load planner scoped to
// one of an observer's students

export function reloadPlannerForObserver(observeeId, contextCodes) {
  if (!initializedOptions) throw new Error('initializePlanner must be called before reloadPlannerForObserver');
  if (!store.getState().weeklyDashboard) throw new Error('reloadPlannerForObserver is only supported in weekly dashboard mode');
  store.dispatch(reloadWithObservee(observeeId, contextCodes));
}