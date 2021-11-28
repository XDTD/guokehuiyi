"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExampleSchema = exports.ExampleQuery = exports.ExampleUnion = exports.ExampleUnionType2 = exports.ExampleUnionType1 = exports.ExampleEnum = exports.ExampleInterface = void 0;

var _graphql = require("graphql");

var ExampleInterface = new _graphql.GraphQLInterfaceType({
  name: 'exampleInterface',
  fields: {
    name: {
      name: 'nameField',
      type: _graphql.GraphQLString
    }
  }
});
exports.ExampleInterface = ExampleInterface;
var ExampleEnum = new _graphql.GraphQLEnumType({
  name: 'exampleEnum',
  values: {
    value1: {
      value: 'Value 1'
    },
    value2: {
      value: 'Value 2'
    },
    value3: {
      value: 'Value 3',
      deprecationReason: 'Only two are needed'
    }
  }
});
exports.ExampleEnum = ExampleEnum;
var ExampleUnionType1 = new _graphql.GraphQLObjectType({
  name: 'Union Type 1',
  interfaces: [ExampleInterface],
  fields: {
    name: {
      name: 'nameField',
      type: _graphql.GraphQLString
    },
    enum: {
      name: 'enumField',
      type: ExampleEnum
    }
  }
});
exports.ExampleUnionType1 = ExampleUnionType1;
var ExampleUnionType2 = new _graphql.GraphQLObjectType({
  name: 'Union Type 2',
  interfaces: [ExampleInterface],
  fields: {
    name: {
      name: 'nameField',
      type: _graphql.GraphQLString
    },
    string: {
      name: 'stringField',
      type: _graphql.GraphQLString
    }
  }
});
exports.ExampleUnionType2 = ExampleUnionType2;
var ExampleUnion = new _graphql.GraphQLUnionType({
  name: 'exampleUnion',
  types: [ExampleUnionType1, ExampleUnionType2]
});
exports.ExampleUnion = ExampleUnion;
var ExampleQuery = new _graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    string: {
      name: 'exampleString',
      type: _graphql.GraphQLString
    },
    union: {
      name: 'exampleUnion',
      type: ExampleUnion
    },
    fieldWithArgs: {
      name: 'exampleWithArgs',
      type: _graphql.GraphQLString,
      args: {
        stringArg: {
          name: 'exampleStringArg',
          type: _graphql.GraphQLString
        }
      }
    },
    deprecatedField: {
      name: 'booleanField',
      type: _graphql.GraphQLBoolean,
      deprecationReason: 'example deprecation reason'
    }
  }
});
exports.ExampleQuery = ExampleQuery;
var ExampleSchema = new _graphql.GraphQLSchema({
  query: ExampleQuery
});
exports.ExampleSchema = ExampleSchema;