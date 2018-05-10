const fs = require('fs')

const file = process.argv[2]

fs.readFile(file, 'utf8', (error, data) => {
  if (error) {
    throw error
  }

  const lines = data.split('\n').length - 1
  console.log(lines)
})
// The same of `cat [FILE] | wc -l`
