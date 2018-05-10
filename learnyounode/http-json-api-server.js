const http = require('http')
const url = require('url')

const port = +process.argv[2]

const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true)
  const date = new Date(parsedUrl.query.iso)
  const pathname = parsedUrl.pathname
  let result = {}

  if (pathname === '/api/parsetime') {
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }
  }
  else if(pathname === '/api/unixtime') {
    result = {
      unixtime: date.getTime()
    }
  }

  if (result) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(result))
  }
  else {
    res.writeHead(404)
    response.end()
  }
})

server.listen(port)
