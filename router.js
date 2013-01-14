function route(handle, pathname, res, req){

    console.log('routing - '+ pathname);
    
    if (pathname === undefined) return;

    if(typeof handle[pathname] === 'function'){
       handle[pathname](res, req);
      }
    else{
	console.log('handler not found - ' + pathname);
	res.writeHead(400, {"Content-Type": "text/plain"});
	res.write("404, not found.");
	res.end;
    }   
}

exports.route = route;
