const fs = require('fs')
const path = require('path')

const config = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, 'config.default.json'))
)

const env = process.argv[2]

if (env === 'release') {
  config.debug = false
} else {
  config.debug = true
}

fs.writeFileSync(
  path.resolve(__dirname, 'config.json'),
  JSON.stringify(config, null, ''),
  'utf-8'
)
