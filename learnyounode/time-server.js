const net = require('net')

const port = Number(process.argv[2])

function zeroFill(number) {
  return (`0${number}`).slice(-2)
}

function now() {
  const date = new Date()
  const year = date.getFullYear()
  const month = zeroFill(date.getMonth() + 1)
  const day = zeroFill(date.getDate())
  const hours = zeroFill(date.getHours())
  const minutes = zeroFill(date.getMinutes())

  return `${year}-${month}-${day} ${hours}:${minutes}`
}

const server = net.createServer((socket) => {
  console.log('Client connected')

  socket.on('end', () => {
    console.log('Client disconnected')
  })

  socket.write(`${now()}\n`)

  socket.end()
})

server.on('error', (error) => {
  throw error
})

server.listen(port, () => {
  console.log('Server bound')
});
