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
import { Component } from 'react'
import PropTypes from 'prop-types'

import { sourcesType } from './PropTypes'
import * as MediaStates from '../../constants/mediaStates'
import * as ScreenStates from '../../constants/screenStates'

const MediaContext = {
  state: PropTypes.shape({
    mediaState: PropTypes.oneOf(Object.values(MediaStates)),
    screenState: PropTypes.oneOf(Object.values(ScreenStates)),
    muted: PropTypes.bool,
    volume: PropTypes.number,
    playbackSpeed: PropTypes.number,
    selectedSrc: PropTypes.string,
    sources: sourcesType,
    showControls: PropTypes.bool,
    videoId: PropTypes.string
  }),
  fullScreenContainerRef: PropTypes.func,
  actions: PropTypes.shape({
    play: PropTypes.func,
    pause: PropTypes.func,
    seek: PropTypes.func,
    setVolume: PropTypes.func,
    setPlaybackSpeed: PropTypes.func,
    setSource: PropTypes.func,
    toggleTrack: PropTypes.func,
    showControls: PropTypes.func,
    togglePlay: PropTypes.func,
    toggleFullScreen: PropTypes.func,
    toggleMute: PropTypes.func,
    activateControl: PropTypes.func,
    deactivateControl: PropTypes.func,
    setControlHovered: PropTypes.func
  }),
  constants: PropTypes.shape({
    SEEK_INTERVAL_SECONDS: PropTypes.number,
    JUMP_INTERVAL_SECONDS: PropTypes.number,
    SEEK_VOLUME_INTERVAL: PropTypes.number,
    JUMP_VOLUME_INTERVAL: PropTypes.number,
  }),
  setActions: PropTypes.func,
  playbackSpeedOptions: PropTypes.array,
  setPlaybackSpeedOptions: PropTypes.func,
}

class Provider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.shape(MediaContext).isRequired
  }

  static childContextTypes = MediaContext

  getChildContext() {
    return this.props.value
  }

  render() {
    return this.props.children
  }
}

class Consumer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  }

  static contextTypes = MediaContext

  render() {
    return this.props.children(this.context)
  }
}

export default { Provider, Consumer }
