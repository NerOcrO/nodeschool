const fs = require('fs')
const path = require('path')

module.exports = (directory, extension, callback) => {
  fs.readdir(directory, (error, files) => {
    if (error) {
      return callback(error)
    }

    const data = []

    for (const file of files) {
      if (path.extname(file) === `.${extension}`) {
        data.push(file)
      }
    }

    callback(null, data)
  })
}
