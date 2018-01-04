var fs = require('fs');
var path = require('path');

var outputList = [];

var getFiles = function(route, extension, done) {
  fs.readdir(route, 'utf8', function (err, listFiles) {
    if(err) {
      return done(err);
    }	  
    listFiles.forEach(function (fileName) {
      if(path.extname(fileName).slice(1) == extension) {
	outputList.push(fileName);
      }
    });
    done(null, outputList);
  });
}

module.exports = getFiles;
