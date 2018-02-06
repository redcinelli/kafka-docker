const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
	var body = []
	request.on('data', (chunk) => {
		body.push(chunk);
	}).on('end', () => {
		body = Buffer.concat(body).toString();
		// at this point, `body` has the entire request body stored in it as a string 
		console.log(request.url, body, request.headers)
		response.end(JSON.stringify(body.toUpperCase()))
	});
	
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	  if (err) {
		      return console.log('something bad happened', err)
		    }

	  console.log(`server is listening on ${port}`)
})
