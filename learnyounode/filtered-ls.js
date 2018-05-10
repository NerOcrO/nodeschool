const fs = require('fs')
const path = require('path')

const directory = process.argv[2]
const extension = `.${process.argv[3]}`

fs.readdir(directory, (error, files) => {
  if (error) {
    throw error
  }

  for (const file of files) {
    if (path.extname(file) === extension) {
      console.log(file)
    }
  }
})
