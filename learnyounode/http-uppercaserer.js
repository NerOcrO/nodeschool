const http = require('http')

const port = Number(process.argv[2])

const server = http.createServer((request, response) => {
  if (request.method !== 'POST') {
    return response.end('Send me a POST\n')
  }

  request.on('data', (chunk) => {
    response.write(chunk.toString().toUpperCase())
  });
})

server.listen(port)
