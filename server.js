var http = require('http');

var url = require('url');


var server = http.createServer(function(req, res) {

var page = url.parse(req.url).pathname;

var test = require('./main'); // Calls for test.js (same folder)

res.writeHead(200, {"Content-Type": "text/plain"});

test.sayGoodbye();
test.sayHello();

res.end();

});

server.listen(8080);