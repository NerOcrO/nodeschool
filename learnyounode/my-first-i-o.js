const fs = require('fs')

const file = process.argv[2]

const content = fs.readFileSync(file, 'utf8')
const lines = content.split('\n').length - 1
console.log(lines)
// The same of `cat [FILE] | wc -l`
