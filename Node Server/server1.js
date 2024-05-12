const http = require('http');

const server = http.createServer((request,response)=>{

	if(request.url == '/test'){
		response.setHeader('Content-type','text/html');
		response.end('<h1>Ola mundo!</h1>');
	}else{
		response.setHeader('Content-type','text/html');
		response.end('<h1>Pagina nao encontrada!</h1>');
	}
});

server.listen(3000);