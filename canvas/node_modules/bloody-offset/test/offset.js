var tape = require("tape")
var offset = require("..")

tape("offset", function(test){
  var div = document.createElement("div")
  div.style.height = "10px"
  div.style.width = "15px"
  document.body.insertBefore(div, document.body.firstChild)
  document.documentElement.style.paddingTop = "10px"
  document.documentElement.style.paddingLeft = "15px"
  document.documentElement.style.margin = "0"
  document.body.style.margin = "0"
  document.body.style.paddingTop = "1000px"
  document.body.style.paddingLeft = "1500px"
  var elOffset = offset(div)
  test.equal(elOffset.width, 15)
  test.equal(elOffset.height, 10)
  test.equal(elOffset.top, 1010)
  test.equal(elOffset.left, 1515)
  window.scrollTo(0, 500)
  elOffset = offset(div)
  test.equal(elOffset.width, 15)
  test.equal(elOffset.height, 10)
  test.equal(elOffset.top, 1010)
  test.equal(elOffset.left, 1515)
  test.end()
})
