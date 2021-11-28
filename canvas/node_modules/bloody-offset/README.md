# offset

[![browser support](https://ci.testling.com/bloodyowl/offset.png)](https://ci.testling.com/bloodyowl/offset)

## install

```sh
$ npm install bloody-offset
```

## require

```javascript
var offset = require("bloody-offset")
```

## api

### `offset(element) > object`

returns element's offset

- `object.height` : integer, element's height
- `object.width` : integer, element's width
- `object.top` : integer, element's top offset
- `object.left` : integer, element's left offset


## example

```javascript
var elementOffset = offset(element)

lightbox.style.top = elementOffset.top + "px"
lightbox.style.left = elementOffset.left + "px"
lightbox.style.display = "block"
```
