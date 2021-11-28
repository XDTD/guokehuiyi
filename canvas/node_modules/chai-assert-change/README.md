# chai-assert-change

An assertion for [chai.js](http://chaijs.com/) to test the side-effects of a
function.

## Installation

    npm install --save-dev chai-assert-change

You do need `chai` to be installed.

## API

```javascript
function assertChange({
  // The function that applies the side-effect.
  // 
  // If this yields a Promise, we'll run the queries only once it resolves.
  // We'll also propagate it back for you so that you can feed it to mocha
  // or whatever else.
  fn: function(): Any | Promise.<Any>,

  // A function that returns the value we're inspecting. That is, the expected
  // side-effect of the function.
  of: function(value: Any): Any,

  // A custom message to append to the assertion error to help you
  // trace the assertion.
  ?it: String,

  // --- QUERIES ---
  // You can use only one of these for each side-effect you're testing.

  // [1] [by]
  // 
  // Test a change in a numerical value, like "X changes by 2" or
  // "X changes by 0" as in it does not change.
  ?by: Number,

  // [2] [from, to]
  // 
  // Test non-numerical values for inequality; arrays, objects, or numbers
  // too when a delta doesn't make sense.
  // 
  // It is implemented using:
  // 
  //     chai.assert.deepEqual(a, b)
  // 
  // To use this you need to fill in both "from" and "to".
  ?from: Any,
  ?to: Any,

  // [3] [custom]
  // 
  // A custom test; you are passed the values before and after applying
  // the side-effect function and it's up to you to do the assertions.
  ?using: function(initialValue: Any, nextValue: Any): void
}): Any | Promise.<Any>
```

To test more than one side-effect you can define the `in` property as an array
of the tests. So the `fn` property remains at the root but the rest of the
properties go inside the `in` entries.

Examples are shown in the next section.

## Usage examples

### Testing a single side-effect

```javascript
import assertChange from 'chai-assert-change'

let x = 0

assertChange({
  fn: () => { x += 1 },
  of: () => x,
  by: 1
})
```

### Testing multiple side-effects

```javascript
let x = 0
let y = 0

assertChange({
  fn: () => { x += 1 },
  in: [
    {
      it: 'increments X',
      of: () => x,
      by: 1
    },
    {
      it: 'does not touch Y',
      of: () => y,
      by: 0
    }
  ]
})
```

Notice how we used `it` to label the tests. These will be used in the assertion
message if it fails to hold.

### Testing a deferred side-effect (Promise)

The following example shows how the assertion will run the tests only after
a promise resolves which is useful in async scenarios.

```javascript
it('navigates', function() {
  return assertChange({
    fn: () => router.navigate('/b'),
    of: () => location.pathname,
    from: '/a',
    to: '/b'
  })
})
```

The promise is yielded back to you (with the value it resolved with) so that
you can throw it back to your testing framework.

### Testing using a custom assertion

You can implement the `using` hook to perform any kind of test instead of
inequality. Personally I'd recommend against this because it's more difficult
to reason about but sometimes it's necessary when, for example, dealing with
deeply nested structures.

```javascript
assertChange({
  fn: () => ...,
  of: () => ...,
  using: (a, b) => {
    assert.notInclude(a, { foo: '1' })
    assert.include(b, { foo: '1' })
  }
})
```

## License

MIT