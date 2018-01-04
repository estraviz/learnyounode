var fs = require('fs');
var path = require('path');
var filteredFile = undefined;

function filteredList(callback) {
  fs.readdir(process.argv[2], 'utf8', function doneReading(err, listFiles) {
    if(err) {
      return console.log(err);	
    }	  
    for(var i = 0; i < listFiles.length; i++) {
      if(path.extname(listFiles[i]).slice(1) == process.argv[3]) {
	filteredFile = listFiles[i];
        callback();
      }
    }
  });
}

function printFilteredFileName() {
  console.log(filteredFile);
}

filteredList(printFilteredFileName);
