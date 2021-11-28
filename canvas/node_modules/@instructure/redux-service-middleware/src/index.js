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
export const CALL_SERVICE = 'inst-redux-service-middleware-CALL_SERVICE'

function createServiceMiddleware (origServices) {
  const services = Object.assign(Object.create(null), origServices)

  return (store) => next => action => {
    if (action.type !== CALL_SERVICE) return next(action)

    const { service: serviceKey, method, args } = action.payload
    const service = services[serviceKey]

    if (!service) throw new Error(`service ${serviceKey} undefined`)
    if (!service[method]) throw new Error(`service method ${method} undefined`)

    const realArgs = args ? args.slice() : []
    realArgs.push(store)

    const response = service[method](...realArgs)
    // Pass on this event after the service has done what the service wants w/ current state
    next(action)
    // Then return the service
    return response
  }
}

export default createServiceMiddleware
