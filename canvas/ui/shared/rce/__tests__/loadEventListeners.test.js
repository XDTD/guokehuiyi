/*
 * Copyright (C) 2021 - present Instructure, Inc.
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

import EquationEditorView from '@canvas/rce/backbone/views/EquationEditorView'
import loadEventListeners from '@canvas/rce/loadEventListeners'
import 'jquery'
import 'jqueryui/tabs'
import 'browser-sniffer'

describe('loadEventListeners', () => {
  let fakeEditor, dispatchEvent
  beforeAll(() => {
    window.INST.editorButtons = [{id: '__BUTTON_ID__'}]
    fakeEditor = {
      id: 'someId',
      bookmarkMoved: false,
      focus: () => {},
      dom: {createHTML: () => "<a href='#'>stub link html</a>"},
      selection: {
        getBookmark: () => ({}),
        getNode: () => ({}),
        getContent: () => ({}),
        moveToBookmark: _prevSelect => (fakeEditor.bookmarkMoved = true)
      },
      addCommand: () => ({}),
      addButton: () => ({}),
      ui: {
        registry: {
          addButton: () => {},
          addMenuButton: () => {},
          addIcon: () => {},
          addNestedMenuItem: () => {}
        }
      }
    }
    dispatchEvent = name => {
      const event = document.createEvent('CustomEvent')
      const eventData = {
        ed: fakeEditor,
        selectNode: '<div></div>'
      }
      event.initCustomEvent(`tinyRCE/${name}`, true, true, eventData)
      document.dispatchEvent(event)
    }
  })

  afterAll(() => {
    window.alert.restore && window.alert.restore()
    console.log.restore && console.log.restore() // eslint-disable-line no-console
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('initializes equation editor plugin', done => {
    loadEventListeners({
      equationCB: view => {
        expect(view instanceof EquationEditorView).toBeTruthy()
        expect(view.$editor.selector).toEqual('#someId')
        done()
      }
    })
    dispatchEvent('initEquation')
  })

  it('initializes equella plugin', done => {
    window.alert = jest.fn()

    loadEventListeners({
      equellaCB() {
        expect(window.alert).toHaveBeenCalledWith(
          'Equella is not properly configured for this account, please notify your system administrator.'
        )
        done()
      }
    })
    const event = document.createEvent('CustomEvent')
    const eventData = {
      ed: fakeEditor,
      selectNode: '<div></div>'
    }
    event.initCustomEvent('tinyRCE/initEquella', true, true, eventData)
    document.dispatchEvent(event)
  })

  it('initializes external tools plugin', () => {
    fakeEditor.addCommand = jest.fn()
    loadEventListeners()
    const event = document.createEvent('CustomEvent')
    const eventData = {
      ed: fakeEditor,
      url: 'someurl.com'
    }
    event.initCustomEvent('tinyRCE/initExternalTools', true, true, eventData)
    document.dispatchEvent(event)
    expect(fakeEditor.addCommand).toHaveBeenCalledWith(
      'instructureExternalButton__BUTTON_ID__',
      expect.any(Function)
    )
  })
})
