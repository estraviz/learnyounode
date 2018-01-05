var http = require('http');

var url = process.argv[2];

var request = http.get(url, function(response) {
  response.setEncoding('utf8');
  response.on("data", function(body) {
    console.log(body);
  });
});

request.on("error", function(err) {
  console.log('ERROR: ' + err.message);
});

request.end();
