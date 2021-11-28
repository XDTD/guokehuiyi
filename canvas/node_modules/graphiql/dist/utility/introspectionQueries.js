"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "introspectionQuery", {
  enumerable: true,
  get: function get() {
    return _graphql.introspectionQuery;
  }
});
exports.introspectionQuerySansSubscriptions = exports.introspectionQueryName = void 0;

var _graphql = require("graphql");

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
var introspectionQueryName = (0, _graphql.getOperationAST)((0, _graphql.parse)(_graphql.introspectionQuery)).name.value; // Some GraphQL services do not support subscriptions and fail an introspection
// query which includes the `subscriptionType` field as the stock introspection
// query does. This backup query removes that field.

exports.introspectionQueryName = introspectionQueryName;
var introspectionQuerySansSubscriptions = "\n  query ".concat(introspectionQueryName, " {\n    __schema {\n      queryType { name }\n      mutationType { name }\n      types {\n        ...FullType\n      }\n      directives {\n        name\n        description\n        locations\n        args {\n          ...InputValue\n        }\n      }\n    }\n  }\n\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields(includeDeprecated: true) {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues(includeDeprecated: true) {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n\n  fragment InputValue on __InputValue {\n    name\n    description\n    type { ...TypeRef }\n    defaultValue\n  }\n\n  fragment TypeRef on __Type {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n");
exports.introspectionQuerySansSubscriptions = introspectionQuerySansSubscriptions;