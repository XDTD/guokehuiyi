/* global exports */

function extractBacktrace(lines) {
  var backtraceLines = [];
  while(lines.length && lines[lines.length - 1].trim().indexOf('at ') === 0) {
    backtraceLines.push(lines.pop());
  }
  return backtraceLines;
}

function extractSection(text,lines) {
  for(var x = 0;x < lines.length;x++) {
    if(lines[x].indexOf(text) === 0) {
      lines[x] = lines[x].substr(text.length);
      return lines.splice(x);
    }
  }
  return [];  
}

function trim(string) { return String.prototype.trim.call(string); }

function parseLog(value) {
  if(typeof value === 'undefined') { return {}; }
  var data = {};
  
  var lines = value.match(/[^\r\n]+/g);
  
  var backtraceLines = extractBacktrace(lines);
  if(backtraceLines) data.backtrace = backtraceLines.map(trim).join("\n")
  
  var actual = extractSection('Actual: ',lines);
  if(actual.length) data.actual = actual.map(trim).join("\n");
  
  var expected = extractSection('Expected: ',lines);
  if(expected.length) data.expected = expected.map(trim).join("\n");
  
  if(lines.length) data.description = lines.map(trim).join("\n");
  
  return data;
}

exports.parseLog = parseLog;