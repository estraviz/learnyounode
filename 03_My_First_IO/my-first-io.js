var fs = require('fs');
var fileText = fs.readFileSync(process.argv[2], 'utf8');
var fileLines = fileText.split('\n');
var numLines = fileLines.length - 1;
console.log(numLines);
