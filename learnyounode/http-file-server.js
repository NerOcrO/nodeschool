const http = require('http')
const fs = require('fs')

const port = +process.argv[2]
const path = process.argv[3]

const server = http.createServer((request, response) => {
  fs.createReadStream(path).pipe(response)
})

server.listen(port)
