var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandlers");

var handle = {};
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;
handle['/receive'] = requestHandler.receive;
handle['/show'] = requestHandler.show;

server.start(router.route, handle);
