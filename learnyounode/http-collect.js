const http = require('http')

const url = process.argv[2]

http.get(url, (response) => {
  response.setEncoding('utf8')

  response.on('error', console.error)

  let totalChar = 0
  let allData = ''

  response.on('data', (chunk) => {
    totalChar += chunk.length
    allData += chunk
  })

  response.on('end', () => {
    console.log(totalChar)
    console.log(allData)
  })

}).on('error', console.error)
