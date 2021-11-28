# @instructure/redux-service-middleware

[![npm](https://img.shields.io/npm/v/@instructure/redux-service-middleware.svg)](https://www.npmjs.com/package/@instructure/redux-service-middleware)
[![MIT License](https://img.shields.io/npm/l/@instructure/redux-service-middleware.svg?style=flat-square)](https://github.com/instructure/redux-service-middleware/blob/master/LICENSE)

Simple [redux](https://redux.js.org/) [middleware](https://redux.js.org/advanced/middleware/) for registering service objects.

1. A service is an object or class instance:

```javascript
const myService = {
  doStuff: (arg1, arg2) => result
}
class MyOtherService {
  doOtherStuff (...args) {
    return result
  }
}
```

2. While creating your store, register your services as key/value pairs
   with the service middleware constructor:

```javascript
import { applyMiddleware } from 'redux'
import createServiceMiddleware from '@instructure/redux-service-middleware'

applyMiddleware(
  createServiceMiddleware({
    myKey: myService,
    myOtherKey: new MyOtherService()
  })
)
```

3. In your action creator, dispatch an action with the following shape:

```javascript
import { CALL_SERVICE } from '@instructure/redux-service-middleware'

const actionCreator = () => ({
  type: CALL_SERVICE,
  payload: {
    service: 'myKey',
    method: 'doStuff',
    args: [arg1, arg2]
  }
})
```

Calls to `dispatch` with an action of this form will return a promise
resolving to the result of calling
`myService.methodName(arg1, arg2)`.

## License

This project is is released under the [MIT](LICENSE) license.
