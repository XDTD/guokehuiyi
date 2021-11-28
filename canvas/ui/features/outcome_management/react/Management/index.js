/*
 * Copyright (C) 2020 - present Instructure, Inc.
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

import React, {useCallback, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Flex} from '@instructure/ui-flex'
import {Spinner} from '@instructure/ui-spinner'
import {Text} from '@instructure/ui-text'
import {View} from '@instructure/ui-view'
import I18n from 'i18n!OutcomeManagement'
import ManageOutcomesView from './ManageOutcomesView'
import ManageOutcomesFooter from './ManageOutcomesFooter'
import TreeBrowser from './TreeBrowser'
import {useManageOutcomes} from '@canvas/outcomes/react/treeBrowser'
import useCanvasContext from '@canvas/outcomes/react/hooks/useCanvasContext'
import useModal from '@canvas/outcomes/react/hooks/useModal'
import useGroupDetail from '@canvas/outcomes/react/hooks/useGroupDetail'
import useResize from '@canvas/outcomes/react/hooks/useResize'
import useSelectedOutcomes from '@canvas/outcomes/react/hooks/useSelectedOutcomes'
import GroupMoveModal from './GroupMoveModal'
import GroupEditModal from './GroupEditModal'
import GroupDescriptionModal from './GroupDescriptionModal'
import GroupRemoveModal from './GroupRemoveModal'
import OutcomeRemoveModal from './OutcomeRemoveModal'
import OutcomeEditModal from './OutcomeEditModal'
import OutcomeMoveModal from './OutcomeMoveModal'
import ManageOutcomesBillboard from './ManageOutcomesBillboard'
import GroupActionDrillDown from '../shared/GroupActionDrillDown'
import useLhsTreeBrowserSelectParentGroup from '@canvas/outcomes/react/hooks/useLhsTreeBrowserSelectParentGroup'

const OutcomeManagementPanel = ({
  importNumber,
  createdOutcomeGroupIds,
  onLhsSelectedGroupIdChanged
}) => {
  const {isCourse, isMobileView, canManage} = useCanvasContext()
  const {setContainerRef, setLeftColumnRef, setDelimiterRef, setRightColumnRef, onKeyDownHandler} =
    useResize()
  const [scrollContainer, setScrollContainer] = useState(null)
  const [rhsGroupIdsToRefetch, setRhsGroupIdsToRefetch] = useState([])
  const {selectedOutcomeIds, selectedOutcomesCount, toggleSelectedOutcomes, clearSelectedOutcomes} =
    useSelectedOutcomes()
  const {
    error,
    isLoading,
    collections,
    queryCollections,
    rootId,
    selectedGroupId,
    selectedParentGroupId,
    removeGroup,
    loadedGroups,
    createGroup,
    searchString,
    debouncedSearchString,
    updateSearch: onSearchChangeHandler,
    clearSearch: onSearchClearHandler,
    clearCache
  } = useManageOutcomes({collection: 'OutcomeManagementPanel', importNumber})

  useEffect(() => {
    return () => {
      clearCache()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setRhsGroupIdsToRefetch(ids => [...new Set([...ids, ...createdOutcomeGroupIds])])
  }, [createdOutcomeGroupIds])

  const {group, loading, loadMore, removeLearningOutcomes, readLearningOutcomes} = useGroupDetail({
    id: selectedGroupId,
    searchString: debouncedSearchString,
    rhsGroupIdsToRefetch
  })

  const selectedOutcomes = readLearningOutcomes(selectedOutcomeIds)
  const [showOutcomesView, setShowOutcomesView] = useState(false)
  const [showGroupOptions, setShowGroupOptions] = useState(false)

  useEffect(() => {
    if (onLhsSelectedGroupIdChanged) {
      onLhsSelectedGroupIdChanged(selectedGroupId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGroupId])

  const [isGroupMoveModalOpen, openGroupMoveModal, closeGroupMoveModal] = useModal()
  const [isGroupRemoveModalOpen, openGroupRemoveModal, closeGroupRemoveModal] = useModal()
  const [isGroupEditModalOpen, openGroupEditModal, closeGroupEditModal] = useModal()
  const [isOutcomeEditModalOpen, openOutcomeEditModal, closeOutcomeEditModal] = useModal()
  const [isOutcomeRemoveModalOpen, openOutcomeRemoveModal, closeOutcomeRemoveModal] = useModal()
  const [isOutcomesRemoveModalOpen, openOutcomesRemoveModal, closeOutcomesRemoveModal] = useModal()
  const [isOutcomeMoveModalOpen, openOutcomeMoveModal, closeOutcomeMoveModal] = useModal()
  const [isOutcomesMoveModalOpen, openOutcomesMoveModal, closeOutcomesMoveModal] = useModal()
  const [isGroupDescriptionModalOpen, openGroupDescriptionModal, closeGroupDescriptionModal] =
    useModal()
  const [selectedOutcome, setSelectedOutcome] = useState(null)
  const selectedOutcomeObj = selectedOutcome ? {[selectedOutcome.linkId]: selectedOutcome} : {}
  const onCloseOutcomeRemoveModal = () => {
    closeOutcomeRemoveModal()
    setSelectedOutcome(null)
  }
  const onCloseOutcomesRemoveModal = () => {
    closeOutcomesRemoveModal()
    clearSelectedOutcomes()
  }
  const onCloseOutcomeMoveModal = () => {
    closeOutcomeMoveModal()
    setSelectedOutcome(null)
  }
  const onCloseOutcomesMoveModal = () => {
    closeOutcomesMoveModal()
    clearSelectedOutcomes()
  }
  const onCloseOutcomeEditModal = () => {
    closeOutcomeEditModal()
    setSelectedOutcome(null)
  }

  const {selectParentGroupInLhs, treeBrowserViewRef} = useLhsTreeBrowserSelectParentGroup({
    selectedParentGroupId,
    selectedGroupId,
    collections,
    queryCollections
  })

  const onSucessGroupRemove = () => {
    selectParentGroupInLhs()
    removeGroup(selectedGroupId)
    clearSelectedOutcomes()
  }

  const groupMenuHandler = useCallback(
    (_arg, action) => {
      if (action === 'move') {
        openGroupMoveModal()
      } else if (action === 'remove') {
        openGroupRemoveModal()
      } else if (action === 'edit') {
        openGroupEditModal()
      } else if (action === 'description') {
        openGroupDescriptionModal()
      }
    },
    [openGroupDescriptionModal, openGroupEditModal, openGroupMoveModal, openGroupRemoveModal]
  )

  const outcomeMenuHandler = useCallback(
    (linkId, action) => {
      const edge = group.outcomes.edges.find(edgeEl => edgeEl._id === linkId)
      const parentGroup = edge.group
      setSelectedOutcome({
        linkId,
        canUnlink: edge.canUnlink,
        parentGroupId: parentGroup._id,
        parentGroupTitle: parentGroup.title,
        ...edge.node
      })
      if (action === 'remove') {
        openOutcomeRemoveModal()
      } else if (action === 'edit') {
        openOutcomeEditModal()
      } else if (action === 'move') {
        openOutcomeMoveModal()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [group]
  )

  // set the initial target group as the lhs group
  let outcomeMoveInitialTargetGroup = collections[selectedGroupId]

  const singleOutcomeSelected =
    selectedOutcome || (selectedOutcomes.length === 1 && selectedOutcomes[0])

  // if only one outcome is selected (kebab or bulk action)
  if (singleOutcomeSelected) {
    // set the initial target group as the outcome parent group
    outcomeMoveInitialTargetGroup = {
      name: singleOutcomeSelected.parentGroupTitle,
      id: singleOutcomeSelected.parentGroupId
    }
  }

  // After move outcomes, mark all loaded outcomes group to be refetch, since:
  // 1 - If moving to the group in the LHS or some child, it'll probably change
  //     its position, so refetch needed
  // 2 - If moving to a group "outside" the LHS group, we need to remove from the list
  //     So refetch is needed
  const onSuccessMoveOutcomes = () => {
    // we would clear the whole RHS cache.
    const AllLhsGroupIds = Object.keys(collections)
    setRhsGroupIdsToRefetch(AllLhsGroupIds)
  }

  const hideOutcomesViewHandler = () => {
    setShowOutcomesView(false)
    setShowGroupOptions(true)
  }

  if (isLoading) {
    return (
      <div style={{textAlign: 'center'}}>
        <Spinner renderTitle={I18n.t('Loading')} size="large" />
      </div>
    )
  }

  if (error && Object.keys(collections).length === 0) {
    return (
      <Text color="danger">
        {isCourse
          ? I18n.t('An error occurred while loading course outcomes: %{error}', {error})
          : I18n.t('An error occurred while loading account outcomes: %{error}', {error})}
      </Text>
    )
  }

  return (
    <div className="management-panel" data-testid="outcomeManagementPanel">
      {isMobileView ? (
        <View
          as="div"
          width="100%"
          display="inline-block"
          position="relative"
          height="70vh"
          overflowY="visible"
          overflowX="auto"
          padding="small x-small 0"
          elementRef={el => {
            setRightColumnRef(el)
            setScrollContainer(el)
          }}
        >
          {showOutcomesView && selectedGroupId ? (
            <ManageOutcomesView
              key={selectedGroupId}
              outcomeGroup={group}
              loading={loading}
              selectedOutcomes={selectedOutcomes}
              searchString={searchString}
              onSelectOutcomesHandler={toggleSelectedOutcomes}
              onOutcomeGroupMenuHandler={groupMenuHandler}
              onOutcomeMenuHandler={outcomeMenuHandler}
              onSearchChangeHandler={onSearchChangeHandler}
              onSearchClearHandler={onSearchClearHandler}
              loadMore={loadMore}
              scrollContainer={scrollContainer}
              isRootGroup={collections[selectedGroupId]?.isRootGroup}
              hideOutcomesView={hideOutcomesViewHandler}
            />
          ) : (
            <>
              <GroupActionDrillDown
                onCollectionClick={queryCollections}
                collections={collections}
                rootId={rootId}
                loadedGroups={loadedGroups}
                isLoadingGroupDetail={loading}
                outcomesCount={group?.outcomesCount}
                selectedGroupId={selectedGroupId}
                showActionLinkForRoot
                showOptions={showGroupOptions}
                setShowOutcomesView={setShowOutcomesView}
              />
              <View as="div" padding="small 0 0">
                <ManageOutcomesBillboard />
              </View>
            </>
          )}
        </View>
      ) : (
        <Flex elementRef={setContainerRef}>
          <Flex.Item
            width="33%"
            display="inline-block"
            position="relative"
            as="div"
            overflowY="auto"
            overflowX="hidden"
            elementRef={setLeftColumnRef}
          >
            <View
              as="div"
              padding="small x-small none x-small"
              minHeight="calc(720px - 10.75rem)"
              height="calc(100vh - 16.35rem)"
            >
              <Text size="large" weight="light" fontStyle="normal">
                {I18n.t('Outcome Groups')}
              </Text>
              <View
                data-testid="outcomes-management-tree-browser"
                elementRef={el => (treeBrowserViewRef.current = el)}
              >
                <TreeBrowser
                  onCollectionToggle={queryCollections}
                  collections={collections}
                  rootId={rootId}
                  showRootCollection
                  defaultExpandedIds={[rootId]}
                  onCreateGroup={createGroup}
                  loadedGroups={loadedGroups}
                />
              </View>
            </View>
          </Flex.Item>
          <Flex.Item
            as="div"
            position="relative"
            width="1%"
            display="inline-block"
            tabIndex="0"
            role="separator"
            aria-hidden="true"
            aria-orientation="vertical"
            onKeyDown={onKeyDownHandler}
            elementRef={setDelimiterRef}
          >
            <div
              style={{
                width: '1vw',
                cursor: 'col-resize',
                minHeight: 'calc(720px - 10.5rem)',
                height: 'calc(100vh - 16.35rem)',
                background:
                  '#EEEEEE url("/images/splitpane_handle-ew.gif") no-repeat scroll 50% 50%'
              }}
            />
          </Flex.Item>
          <Flex.Item
            as="div"
            width="66%"
            display="inline-block"
            position="relative"
            overflowY="visible"
            overflowX="auto"
            elementRef={el => {
              setRightColumnRef(el)
              setScrollContainer(el)
            }}
          >
            <View
              as="div"
              padding="small none none x-small"
              minHeight="calc(720px - 10.75rem)"
              height="calc(100vh - 16.35rem)"
            >
              {selectedGroupId && (
                <ManageOutcomesView
                  key={selectedGroupId}
                  outcomeGroup={group}
                  loading={loading}
                  selectedOutcomes={selectedOutcomes}
                  searchString={searchString}
                  onSelectOutcomesHandler={toggleSelectedOutcomes}
                  onOutcomeGroupMenuHandler={groupMenuHandler}
                  onOutcomeMenuHandler={outcomeMenuHandler}
                  onSearchChangeHandler={onSearchChangeHandler}
                  onSearchClearHandler={onSearchClearHandler}
                  loadMore={loadMore}
                  scrollContainer={scrollContainer}
                  isRootGroup={collections[selectedGroupId]?.isRootGroup}
                />
              )}
            </View>
          </Flex.Item>
        </Flex>
      )}
      {canManage && (
        <ManageOutcomesFooter
          selected={selectedOutcomes}
          selectedCount={selectedOutcomesCount}
          onRemoveHandler={openOutcomesRemoveModal}
          onMoveHandler={openOutcomesMoveModal}
          onClearHandler={clearSelectedOutcomes}
        />
      )}
      {selectedGroupId && (
        <>
          {!loading && group && selectedParentGroupId && (
            <GroupMoveModal
              groupId={selectedGroupId}
              groupTitle={group.title}
              parentGroupId={selectedParentGroupId}
              isOpen={isGroupMoveModalOpen}
              onCloseHandler={closeGroupMoveModal}
              onSuccess={selectParentGroupInLhs}
              parentGroup={collections[selectedParentGroupId]}
            />
          )}
          {selectedOutcome && (
            <>
              <OutcomeRemoveModal
                outcomes={selectedOutcomeObj}
                isOpen={isOutcomeRemoveModalOpen}
                onCloseHandler={onCloseOutcomeRemoveModal}
                onCleanupHandler={onCloseOutcomeRemoveModal}
                onRemoveLearningOutcomesHandler={removeLearningOutcomes}
              />
              <OutcomeEditModal
                outcome={selectedOutcome}
                isOpen={isOutcomeEditModalOpen}
                onCloseHandler={onCloseOutcomeEditModal}
              />
              <OutcomeMoveModal
                outcomes={selectedOutcomeObj}
                isOpen={isOutcomeMoveModalOpen}
                onCloseHandler={onCloseOutcomeMoveModal}
                onCleanupHandler={onCloseOutcomeMoveModal}
                onSuccess={onSuccessMoveOutcomes}
                initialTargetGroup={outcomeMoveInitialTargetGroup}
              />
            </>
          )}
        </>
      )}
      {group && (
        <>
          <GroupRemoveModal
            groupId={selectedGroupId}
            groupTitle={group.title}
            isOpen={isGroupRemoveModalOpen}
            onCloseHandler={closeGroupRemoveModal}
            onCollectionToggle={queryCollections}
            onSuccess={onSucessGroupRemove}
          />
          <GroupEditModal
            outcomeGroup={group}
            isOpen={isGroupEditModalOpen}
            onCloseHandler={closeGroupEditModal}
          />
          <GroupDescriptionModal
            outcomeGroup={group}
            isOpen={isGroupDescriptionModalOpen}
            onCloseHandler={closeGroupDescriptionModal}
          />
        </>
      )}
      {selectedOutcomesCount > 0 && (
        <>
          <OutcomeRemoveModal
            outcomes={selectedOutcomes}
            isOpen={isOutcomesRemoveModalOpen}
            onCloseHandler={closeOutcomesRemoveModal}
            onCleanupHandler={onCloseOutcomesRemoveModal}
            onRemoveLearningOutcomesHandler={removeLearningOutcomes}
          />
          <OutcomeMoveModal
            outcomes={selectedOutcomes}
            isOpen={isOutcomesMoveModalOpen}
            onCloseHandler={closeOutcomesMoveModal}
            onCleanupHandler={onCloseOutcomesMoveModal}
            onSuccess={onSuccessMoveOutcomes}
            initialTargetGroup={outcomeMoveInitialTargetGroup}
          />
        </>
      )}
    </div>
  )
}

OutcomeManagementPanel.defaultProps = {
  createdOutcomeGroupIds: []
}

OutcomeManagementPanel.propTypes = {
  createdOutcomeGroupIds: PropTypes.arrayOf(PropTypes.string),
  onLhsSelectedGroupIdChanged: PropTypes.func,
  importNumber: PropTypes.number
}

export default OutcomeManagementPanel
