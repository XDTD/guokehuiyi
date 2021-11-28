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
import createServiceMiddleware, { CALL_SERVICE } from '../index'

/* eslint-disable no-console */
// clear the console before rebundling:
if (typeof console.clear === 'function') {
  console.clear()
}
/* eslint-enable no-console */

process.once('unhandledRejection', (error) => {
  console.error('Unhandled rejection: ' + error.stack)
  process.exit(1)
})

describe('createServiceMiddleware', () => {
  const serviceAction = {
    type: CALL_SERVICE,
    payload: {
      service: 'myService',
      method: 'doSomething',
      args: [1, 2]
    }
  }

  let service, middleware, store, next
  beforeEach(() => {
    service = {
      doSomething: jest.fn(() => 'didSomething')
    }
    middleware = createServiceMiddleware({ myService: service })
    store = {}
    next = jest.fn(() => 'didNext')
  })

  const dispatch = (action) => middleware(store)(next)(action)

  it('calls service method for service action', () => {
    const result = dispatch(serviceAction)
    expect(result).toBe('didSomething')
    expect(next).toHaveBeenCalled()
  })

  it('sends store with args', () => {
    dispatch(serviceAction)
    expect(service.doSomething.mock.calls.length).toEqual(1)
    expect(service.doSomething).toHaveBeenCalledWith(1, 2, store)
  })

  it('sends store when args null', () => {
    const nullArgsAction = {
      type: CALL_SERVICE,
      payload: {
        service: 'myService',
        method: 'doSomething'
      }
    }
    const result = dispatch(nullArgsAction)
    expect(result).toBe('didSomething')
    expect(service.doSomething.mock.calls.length).toEqual(1)
    expect(service.doSomething).toHaveBeenCalledWith(store)
  })

  it('raises error for unrecognized service', () => {
    const unrecognizedServiceAction = {
      type: CALL_SERVICE,
      payload: {
        service: 'yourService',
        method: 'doSomething',
        args: [1, 2]
      }
    }
    expect(() => dispatch(unrecognizedServiceAction)).toThrow('service yourService undefined')
    expect(next).not.toHaveBeenCalled()
    expect(service.doSomething).not.toHaveBeenCalled()
  })

  it('raises error for unrecognized service method', () => {
    const unrecognizedServiceMethodAction = {
      type: CALL_SERVICE,
      payload: {
        service: 'myService',
        method: 'doSomethingElse',
        args: [1, 2]
      }
    }

    expect(() => dispatch(unrecognizedServiceMethodAction)).toThrow('service method doSomethingElse undefined')
    expect(next).not.toHaveBeenCalled()
    expect(service.doSomething).not.toHaveBeenCalled()
  })

  it('calls next for non-service action', () => {
    const nonServiceAction = {
      type: 'other',
      payload: [1, 2]
    }
    const result = dispatch(nonServiceAction)

    expect(result).toBe('didNext')
    expect(next).toHaveBeenCalledWith(nonServiceAction)
    expect(service.doSomething).not.toHaveBeenCalled()
  })

  it('calls next for thunk action', () => {
    const thunkAction = () => (Promise.resolve())
    const result = dispatch(thunkAction)

    expect(result).toBe('didNext')
    expect(next).toHaveBeenCalledWith(thunkAction)
    expect(service.doSomething).not.toHaveBeenCalled()
  })
})
