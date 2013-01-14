var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require('fs');
var formidable = require('formidable');

function start(res){
    console.log("reqHandler - start");

    //to make longer calls non-blocking
    exec("ls -lah",  function(errro, stdout, stderr){
	res.writeHead(200, {"Content-Type": "text/plain"});	
	res.write(stdout);
	res.end();
    });    
}

function upload(res){
  console.log("reqHandler - upload");    
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/receive" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

//    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(body);
    res.end();
}

function receive(res, req){

    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(req, function(error, fields, files){
	if(error){
	    res.writeHead(500, {"Content-Type": "text/plain"});
	    res.write("error in upload:\n " + error + "\n");
	    res.end();
	}else{
	    res.writeHead(200, {"Content-Type": "text/html"});
	    res.write("received image: <br /> <img src='/show?path="+files.upload.path+"' />");
	    res.end();
	}
    });
}

function show(res, req){
    console.log(querystring.parse(req.url)['/show?path']);
    fs.readFile(querystring.parse(req.url['/show?path'])['path'], "binary", function(error, file) {
	if(error) {
	    response.writeHead(500, {"Content-Type": "text/plain"});
	    console.log('error: '+error);
	    response.write(error + "\n");
	    response.end();
	} else {
	    console.log('file success');
	    response.writeHead(200, {"Content-Type": "image/png"});
	    response.write(file, "binary");
	    response.end();
	}
    });
}

exports.start = start;
exports.upload = upload;
exports.receive = receive;
exports.show = show;
