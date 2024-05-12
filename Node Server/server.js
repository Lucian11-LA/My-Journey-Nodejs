
const http = require('http');

const server= http.createServer((request,response)=>{
	console.log('servidor acessado!')

	const headers = request.headers;
	const method = request.method;
	const url = request.url;

	console.log("Headers: ");
	console.log(headers);
	console.log("Method: "+method);
	console.log("URL: "+url);
	
});

server.listen(3000);
