var TRANSPARENT = { r: 0, g: 0, b: 0, a: 0 }
var WHITE = { r: 255, g: 255, b: 255, a: 1 }

function parseRGBA(str) {
  var pattern = /rgba?\((\d+),\s(\d+),\s(\d+)(,\s([\d\.]+))?\)/
  var matches = pattern.exec(str)
  if (!matches) {
    return TRANSPARENT
  }
  return {
    r: parseInt(matches[1], 10),
    g: parseInt(matches[2], 10),
    b: parseInt(matches[3], 10),
    a: parseFloat(matches[5] || 1)
  }
}

function blendRGBA(dst, src) {
  var a = src.a + dst.a * (1 - src.a)
  if (a === 0) {
    return TRANSPARENT
  }
  return {
    r: (src.r * src.a + dst.r * dst.a * (1 - src.a)) / a,
    g: (src.g * src.a + dst.g * dst.a * (1 - src.a)) / a,
    b: (src.b * src.a + dst.b * dst.a * (1 - src.a)) / a,
    a: a
  }
}

function relativeLuminance(rgba) {
  if (rgba.a < 1) {
    rgba = blendRGBA(WHITE, rgba)
  }
  var r = luminanceColor(rgba.r)
  var g = luminanceColor(rgba.g)
  var b = luminanceColor(rgba.b)
  return r * 0.2126 + g * 0.7152 + b * 0.0722
}

function luminanceColor(val) {
  var s = val / 255
  if (s <= 0.03928) {
    return s / 12.92
  }
  return Math.pow((s + 0.055) / 1.055, 2.4)
}

function contrastRatio(rgba1, rgba2) {
  var lums = [relativeLuminance(rgba1), relativeLuminance(rgba2)]
  lums.sort(function(a, b) {
    return b - a
  })
  return (lums[0] + 0.05) / (lums[1] + 0.05)
}

function backgroundColor(elem) {
  var stack = []
  var cur = elem
  while (cur != null) {
    var rgba = parseRGBA(window.getComputedStyle(cur).backgroundColor)
    if (rgba.a > 0) {
      stack.push(rgba)
    }
    if (rgba.a === 1) {
      break
    }
    cur = cur.parentElement
  }
  return stack.reduceRight(blendRGBA, WHITE)
}

function elementColors(elem) {
  var rgba = parseRGBA(window.getComputedStyle(elem).color)
  var bg = backgroundColor(elem)
  var fg = blendRGBA(bg, rgba)
  return [fg, bg]
}

function elementContrastRatio(elem) {
  var colors = elementColors(elem)
  return contrastRatio(colors[0], colors[1])
}

function isLargeText(elem) {
  var styles = window.getComputedStyle(elem)
  var size = parseFloat(styles.fontSize) / 1.333
  var weight = styles.fontWeight
  var isBold = weight === "bold" || parseInt(weight, 10) >= 600
  return isBold ? size >= 14 : size >= 18
}

function elementIsValid(elem) {
  var contrast = elementContrastRatio(elem)
  return isLargeText(elem) ? contrast >= 3 : contrast >= 4.5
}

exports = module.exports = elementIsValid
exports.isLargeText = isLargeText
exports.contrastRatio = elementContrastRatio
exports.parseRGBA = parseRGBA
