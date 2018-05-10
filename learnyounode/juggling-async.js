const http = require('http')

function getRequest(url, callback) {
  http.get(url, (response) => {
    response.setEncoding('utf8')

    response.on('error', (error) => {
      callback(error)
    })

    let allData = ''

    response.on('data', (chunk) => {
      allData += chunk
    })

    response.on('end', () => {
      callback(null, allData)
    })

    response.on('error', console.error)
  }).on('error', console.error)
}

getRequest(process.argv[2], (error, data) => {
  console.log(data)

  getRequest(process.argv[3], (error, data) => {
    console.log(data)

    getRequest(process.argv[4], (error, data) => {
      console.log(data)
    })
  })
})
