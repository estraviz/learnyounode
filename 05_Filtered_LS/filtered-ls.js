var fs = require('fs');
var path = require('path');
var route = process.argv[2];
var fileExtensionFilter = process.argv[3];

fs.readdir(route, 'utf8', function (err, listFiles) {
  if(err) {
    return console.log(err);	
  }	  
  listFiles.forEach(function (fileName) {
    if(path.extname(fileName).slice(1) == fileExtensionFilter) {
      console.log(fileName);
    }
  });
});
