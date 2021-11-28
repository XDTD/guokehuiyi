const valid = require("./index")

function testEl(fg, bg1, bg2, pt = 12, w = "normal") {
  // jsdom seems not to supprt inheritance for getComputedStyle, but browsers do
  // jsdom does not normalize font sizes to px with getComputedStyle
  const html = `
    <div style="background-color: ${bg2};">
      <div style="
        background-color: ${bg1};
        color: ${fg};
        font-size: ${pt * 1.333}px;
        font-weight: ${w};
      " id="testEl">Text</div>
    </div>
  `
  document.body.innerHTML = html
  return document.getElementById("testEl")
}

test("black on white is valid", () => {
  const el = testEl("#000", "#fff", "#000")
  expect(valid(el)).toBeTruthy()
})

test("white on black is valid", () => {
  const el = testEl("#fff", "#000", "#000")
  expect(valid(el)).toBeTruthy()
})

test("white on 54% black over white is valid", () => {
  const el = testEl("#fff", "rgba(0, 0, 0, 0.54)", "#fff")
  expect(valid(el)).toBeTruthy()
})

test("white on 42% black over white is invalid", () => {
  const el = testEl("#fff", "rgba(0, 0, 0, 0.42)", "#fff")
  expect(valid(el)).toBeFalsy()
})

test("white on 42% black over white is valid with large text", () => {
  const el = testEl("#fff", "rgba(0, 0, 0, 0.42)", "#fff", 18)
  expect(valid(el)).toBeTruthy()
  const el2 = testEl("#fff", "rgba(0, 0, 0, 0.42)", "#fff", 14, "bold")
  expect(valid(el2)).toBeTruthy()
})

test("white on 41% black over white is valid with small text", () => {
  const el = testEl("#fff", "rgba(0, 0, 0, 0.41)", "#fff", 18)
  expect(valid(el)).toBeFalsy()
})

test("18pt text is considered large text", () => {
  const el = testEl("#fff", "rgba(0, 0, 0, 0.41)", "#fff", 18)
  expect(valid.isLargeText(el)).toBeTruthy()
})

test("14pt text is considered large text if bold", () => {
  const el = testEl("#fff", "rgba(0, 0, 0, 0.41)", "#fff", 14, "bold")
  expect(valid.isLargeText(el)).toBeTruthy()
  const el2 = testEl("#fff", "rgba(0, 0, 0, 0.41)", "#fff", 14, 600)
  expect(valid.isLargeText(el2)).toBeTruthy()
})

test("14pt text is considered small text if not bold", () => {
  const el = testEl("#fff", "rgba(0, 0, 0, 0.41)", "#fff", 14, "normal")
  expect(valid.isLargeText(el)).toBeFalsy()
  const el2 = testEl("#fff", "rgba(0, 0, 0, 0.41)", "#fff", 14, 500)
  expect(valid.isLargeText(el2)).toBeFalsy()
})

test("13pt text is considered small text", () => {
  const el = testEl("#fff", "rgba(0, 0, 0, 0.41)", "#fff", 13, "bold")
  expect(valid.isLargeText(el)).toBeFalsy()
})

test("black on white has contrast ratio of 21", () => {
  const el = testEl("#000", "#fff", "#000")
  expect(valid.contrastRatio(el)).toBe(21)
})

test("white on black has contrast ratio of 21", () => {
  const el = testEl("#fff", "#000", "#fff")
  expect(valid.contrastRatio(el)).toBe(21)
})

test("white on 70% black on white has contrast ratio of about 8.5", () => {
  const el = testEl("#fff", "rgba(0, 0, 0, 0.7)", "#fff")
  expect(valid.contrastRatio(el)).toBeCloseTo(8.5, 1)
})

test("red on white has contrast ratio of about 4", () => {
  const el = testEl("#f00", "#fff", "#fff")
  expect(valid.contrastRatio(el)).toBeCloseTo(4, 0)
})

test("parses rgb color", () => {
  expect(valid.parseRGBA("rgb(1, 2, 3)")).toEqual({ r: 1, g: 2, b: 3, a: 1 })
})

test("parses rgba color", () => {
  expect(valid.parseRGBA("rgba(1, 2, 3, 0.5)")).toEqual({
    r: 1,
    g: 2,
    b: 3,
    a: 0.5
  })
})
