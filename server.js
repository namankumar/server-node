var http = require('http');
var url = require('url');

function start(route){
    http.createServer(function(req, res){
	var pathname = url.parse(request.url).pathname;
	console.log('req - ' + pathname);

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello from Node. OH MA GAWD.\n');
    }).listen(8080);

    console.log('Server running!');
}

exports.start = start;
