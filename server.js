var http = require('http');
var url = require('url');
var formidable = require('formidable');

function start(route, handle){
    http.createServer(function(req, res){

	var pathname = url.parse(req.url).pathname;
	console.log('req' + pathname);
	route(handle, pathname, res, req);
    }).listen(8080);

    console.log('Server online!');
}

exports.start = start;
