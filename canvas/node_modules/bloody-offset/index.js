function getScrolled(){
  var top = window.pageYOffset
  if(typeof top == "number") {
    return {
      top : top,
      left : window.pageXOffset
    }
  }
  return {
    top : document.documentElement.scrollTop,
    left : document.documentElement.scrollLeft
  }
}

function toInt(number){
  return parseInt(number, 10)
}

module.exports = function(element){
  var clientRect = element.getBoundingClientRect()
  var scrolled = getScrolled()
  return {
    top : toInt(clientRect.top + scrolled.top),
    left : toInt(clientRect.left + scrolled.left),
    width : toInt(clientRect.right - clientRect.left),
    height : toInt(clientRect.bottom - clientRect.top)
  }
}
