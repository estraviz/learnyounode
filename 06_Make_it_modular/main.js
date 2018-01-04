var files = require('./getfiles')

var route = process.argv[2];
var extension = process.argv[3];

function done(err, list) {
  if(err) {
    return console.error("Error: ", err);
  }
  list.forEach(function(file) {
    console.log(file);
  });
}

files(route, extension, done);
