const drf = require('./directory-reading-filtering')

const directory = process.argv[2]
const extension = process.argv[3]

drf(directory, extension, (error, files) => {
  if (error) {
    throw error
  }

  for (const file of files) {
    console.log(file)
  }
})
