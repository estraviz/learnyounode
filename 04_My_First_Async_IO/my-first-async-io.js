var fs = require('fs');
var numLines = undefined;

function myFirstAsyncIO(callback) {
  fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileText) {
    if(err) {
      return console.log(err);	
    }	  
    var fileLines = fileText.split('\n'); 
    numLines = fileLines.length - 1;
    callback();
  });
}

function getNumLines() {
  console.log(numLines);
}

myFirstAsyncIO(getNumLines);

/*
var fileText = fs.readFile(process.argv[2], 'utf8', function doneReading(err, );
var fileLines = fileText.split('\n');
var numLines = fileLines.length - 1;
console.log(numLines);
*/
