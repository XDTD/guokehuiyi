function uniq(source) {
  var result = [];
  var i;
  var len;
  for (i = 0, len = source.length; i < len; i++) {
    if (!i || source[i - 1] !== source[i])
      result.push(source[i]);
  }
  return result;
}

function except(source, others) {
  var otherMap = {};
  var i;
  var len;
  var item;
  var result = [];
  for (i = 0, len = others.length; i < len; i++) {
    otherMap[others[i]] = true;
  }
  for (i = 0, len = source.length; i < len; i++) {
    item = source[i];
    if (!otherMap[item])
      result.push(item);
  }
  return result;
}

function merge(source, others) {
  return uniq(source.concat(others).sort());
}

function grep(source, pattern) {
  var result = [];
  var item;
  var i;
  var len;
  for (i = 0, len = source.length; i < len; i++) {
    item = source[i];
    if (item.match(pattern))
      result.push(item);
  }
  return result;
}

export {except, merge, uniq, grep};
