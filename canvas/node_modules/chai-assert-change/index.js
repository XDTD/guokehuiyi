const { assert } = require('chai')
const invariant = require('invariant')

// -------------------------- UTILS --------------------------
const Index = {
  // (String[]): Object
  of: list => list.reduce((map, x) => { map[x] = 1; return map; }, {}),

  // (Object, String[]): String[]
  difference: (index, list) => list.filter(x => index[x] !== 1)
}

// (function(): Any): Any
const evaluate = x => x()

// (Object, String): Boolean
const hasOwnProperty = (object, property) => (
  Object.prototype.hasOwnProperty.call(object, property)
)

// ({ ?message: String, ?it: String }): String?
const labelOf = spec => spec.message || spec.it;

// (String[], Object): Object
const omit = (keys, object) => Object.keys(object).reduce((map, key) => {
  if (keys.indexOf(key) === -1) {
    map[key] = object[key];
  }

  return map;
}, {})

// (function(Any): void): (Any): Any
const tap = f => x => { f(x); return x; }

// ({ ?message: String, ?it: String }): (String): String
const trace = spec => message => {
  const label = labelOf(spec)

  if (label) {
    return `${message} (${label})`
  }
  else {
    return message
  }
}

// -------------------------- MEAT --------------------------
const KnownTestProperties = Index.of([
  'by',
  'from',
  'it',
  'message',
  'of',
  'to',
  'using',
])

const assertions = [
  {
    when: spec => hasOwnProperty(spec, 'from') && hasOwnProperty(spec, 'to'),
    assert: spec => (x, y) => {
      assert.deepEqual(x, spec.from,
        trace(spec)(`Expected value to have been ${spec.from} but was ${x}`)
      )

      assert.deepEqual(y, spec.to,
        trace(spec)(`Expected value to become ${spec.to} but instead became ${y}`)
      )
    }
  },
  {
    when: spec => hasOwnProperty(spec, 'by'),
    assert: spec => (x, y) => {
      assert.equal(
        x + spec.by,
        y,
        trace(spec)(
          `Expected value to change from ${x} to ` +
          `${x + spec.by} but it now is ${y}`
        )
      )
    }
  },
  {
    when: spec => hasOwnProperty(spec, 'using'),
    assert: spec => (x, y) => {
      spec.using(x, y, labelOf(spec))
    }
  },
  {
    when: () => true,
    assert: spec => (x, y) => {
      assert.notEqual(x, y, labelOf(spec))
    }
  }
]

function assertMultiChange(context) {
  const specs = context.in;

  invariant(typeof context.fn === 'function',
    'Must define the "fn" property to apply the side-effects.'
  )

  invariant(Array.isArray(specs),
    'Must define the "in" property with the side-effect tests.'
  )

  invariant(specs.length > 0,
    'Must define the "in" property to contain at least one side-effect test.'
  )

  specs.forEach(spec => {
    invariant(hasOwnProperty(spec, 'of'),
      'Must define the "of" property to test the side-effect.'
    )

    invariant(typeof spec.of === 'function',
      'Must define the "of" property as a function to test the side-effect.'
    )

    const unrecognizedProperties = Index.difference(KnownTestProperties, Object.keys(spec))

    invariant(unrecognizedProperties.length === 0,
      `Unrecognized properties ${JSON.stringify(unrecognizedProperties)}.`
    )
  })

  const xs = specs.map(x => x.of).map(evaluate)
  const returnValue = context.fn()
  const runAssertions = () => {
    const ys = specs.map(x => x.of).map(evaluate)

    context.in.forEach((spec, index) => {
      assertions
        .find(x => x.when(spec))
        .assert(spec)(
          xs[index],
          ys[index]
        )
      ;
    })
  }

  if (returnValue && typeof returnValue.then === 'function') {
    return returnValue.then(tap(runAssertions))
  }
  else {
    return runAssertions()
  }
}

function assertChange(context) {
  invariant(context && typeof context === 'object' && !Array.isArray(context),
    'Assertion is missing or malformed!'
  )

  if (!Array.isArray(context.in)) {
    return assertMultiChange({
      fn: context.fn,
      in: [ omit([ 'fn' ], context) ]
    })
  }

  return assertMultiChange(context)
}

module.exports = assertChange