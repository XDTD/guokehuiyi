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
import React from 'react';
import { bool, func, string } from 'prop-types';
import { collectionsShape } from "./propTypes.js";
import AccordionSection from "./AccordionSection.js";
import LinkSet from "./LinkSet.js";
export default function CollectionPanel(props) {
  const accordionProps = {
    collection: props.collection,
    onToggle: props.onChangeAccordion,
    expanded: props.selectedAccordionIndex === props.collection,
    label: props.label
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-testid": "instructure_links-CollectionPanel"
  }, /*#__PURE__*/React.createElement(AccordionSection, accordionProps, /*#__PURE__*/React.createElement(LinkSet, {
    fetchInitialPage: function () {
      if (props.fetchInitialPage) {
        props.fetchInitialPage(props.collection, props.searchString);
      }
    },
    fetchNextPage: function () {
      if (props.fetchNextPage) {
        props.fetchNextPage(props.collection, props.searchString);
      }
    },
    type: props.collection,
    collection: props.collections[props.collection],
    onLinkClick: props.onLinkClick,
    suppressRenderEmpty: props.suppressRenderEmpty,
    contextType: props.contextType,
    searchString: props.searchString
  })));
}
CollectionPanel.propTypes = {
  contextId: string.isRequired,
  contextType: string.isRequired,
  searchString: string,
  collections: collectionsShape.isRequired,
  collection: string.isRequired,
  label: string.isRequired,
  renderNewPageLink: bool,
  suppressRenderEmpty: bool,
  fetchInitialPage: func,
  fetchNextPage: func,
  onLinkClick: func,
  newPageLinkExpanded: bool,
  toggleNewPageForm: func,
  onChangeAccordion: func.isRequired,
  selectedAccordionIndex: string
};
CollectionPanel.defaultProps = {
  renderNewPageLink: false,
  suppressRenderEmpty: false
};