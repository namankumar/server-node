function route(handle, pathname, res){

    console.log('routing - '+ pathname);
    
    if (pathname === undefined) return;

    if(typeof handle[pathname] === 'function'){
       handle[pathname](res);
      }
    else{
	console.log('handler not found - ' + pathname);
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("404, not found.");
	res.end;
	console.log("res end");
    }   
}

exports.route = route;
