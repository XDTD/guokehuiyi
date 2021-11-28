"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixtures = void 0;

/**
 *  Copyright (c) 2019 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */
var fixtures = [{
  desc: 'does not modify query with no fragments',
  query: "\n      query Test {\n        id\n      }",
  mergedQuery: "\n      query Test {\n        id\n      }"
}, {
  desc: 'inlines simple nested fragment',
  query: "\n      query Test {\n        ...Fragment1\n      }\n      \n      fragment Fragment1 on Test {\n        id\n      }",
  mergedQuery: "\n      query Test {\n        ...on Test {\n          id\n        }\n      }"
}, {
  desc: 'inlines triple nested fragment',
  query: "\n      query Test {\n        ...Fragment1\n      }\n      \n      fragment Fragment1 on Test {\n        ...Fragment2\n      }\n      \n      fragment Fragment2 on Test {\n        ...Fragment3\n      }\n      \n      fragment Fragment3 on Test {\n        id\n      }",
  mergedQuery: "\n      query Test {\n        ...on Test {\n          ...on Test {\n            ...on Test {\n              id\n            }\n          }\n        }\n      }"
}, {
  desc: 'inlines multiple fragments',
  query: "\n      query Test {\n        ...Fragment1\n        ...Fragment2\n        ...Fragment3\n      }\n      \n      fragment Fragment1 on Test {\n        id\n      }\n      \n      fragment Fragment2 on Test {\n        id\n      }\n      \n      fragment Fragment3 on Test {\n        id\n      }",
  mergedQuery: "\n      query Test {\n        ...on Test {\n          id\n        }\n        ...on Test {\n          id\n        }\n        ...on Test {\n          id\n        }\n      }"
}, {
  desc: 'removes duplicate fragment spreads',
  query: "\n      query Test {\n        ...Fragment1\n        ...Fragment1\n      }\n      \n      fragment Fragment1 on Test {\n        id\n      }",
  mergedQuery: "\n      query Test {\n        ...on Test {\n          id\n        }\n      }"
}];
exports.fixtures = fixtures;