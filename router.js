function route(handle, pathname){
    console.log('routing - '+ pathname);
    
    if (pathname === undefined) return;

    if(typeof handle[pathname] === 'function')
	handle[pathname]();
    else
	console.log('handler not found - ' + pathname);
}

exports.route = route;
