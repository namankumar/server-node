var exec = require("child_process").exec;

function start(res){
    console.log("reqHandler - start");

    //to make longer calls non-blocked
    exec("ls -lah",  function(errro, stdout, stderr){
	res.writeHead(200, {"Content-Type": "text/plain"});	
	res.write(stdout);
	res.end();
    });    
}

function upload(res){
    res.writeHead(200, {"Content-Type": "text/plain"});    
    console.log("reqHandler - upload");
    res.write("upload file here");
    res.end();
}

exports.start = start;
exports.upload = upload;
