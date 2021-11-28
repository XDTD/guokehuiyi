/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { pickProps } from '@instructure/ui-react-utils'
import { Popover } from '@instructure/ui-popover'
import { IconAudioSolid, IconAudioOffSolid } from '@instructure/ui-icons'
import { ScreenReaderContent } from '@instructure/ui-a11y-content'

import VolumeSlider from '../VolumeSlider'
import PlayerButton from '../../../PlayerButton'
import { translate } from '../../../../constants/translated/translations'

/**
---
private: true
---
**/
class Volume extends Component {
  static propTypes = {
    muted: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired,
    showPopover: PropTypes.bool.isRequired,
    videoId: PropTypes.string.isRequired,
    step: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    togglePopover: PropTypes.func.isRequired,
    mountNode: PropTypes.func.isRequired,
    handleShowControls: PropTypes.func.isRequired,
    forwardRef: PropTypes.func,
    children: PropTypes.node
  }

  static defaultProps = {
    forwardRef: (ref) => {}
  }

  config (muted) {
    if (!muted) {
      return {
        label: translate('VOLUME_UNMUTED'),
        Icon: IconAudioSolid
      }
    }

    return {
      label: translate('VOLUME_MUTED'),
      Icon: IconAudioOffSolid
    }
  }

  render() {
    const {
      muted, volume, showPopover, togglePopover, videoId,
      step, onChange, onKeyDown, mountNode,
      handleShowControls
    } = this.props
    const { label, Icon } = this.config(muted || volume === 0)
    const value = muted ? 0 : volume
    const srLabel = <ScreenReaderContent>{label}</ScreenReaderContent>

    return (
      <Popover
        placement="top"
        on="click"
        isShowingContent={showPopover}
        onShowContent={togglePopover}
        onHideContent={togglePopover}
        mountNode={mountNode()}
        color="primary-inverse"
        renderTrigger={
          <PlayerButton
            {...pickProps(this.props, PlayerButton.propTypes)}
            tooltipLabel={label}
            tooltipMountNode={mountNode}
            videoId={videoId}
          >
            {srLabel}
            <Icon size="x-small" />
          </PlayerButton>
        }
      >
        <VolumeSlider
          value={value}
          step={step}
          onChange={onChange}
          onKeyDown={onKeyDown}
          label={srLabel}
          handleShowControls={handleShowControls}
        />
      </Popover>
    )
  }
}

export default Volume
