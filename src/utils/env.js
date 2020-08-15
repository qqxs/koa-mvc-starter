const dotenv = require('dotenv')
const initEnv = () => {
  const result = dotenv.config({
    path: process.env.NODE_ENV == 'production' ? '.env' : '.env.local'
  })
  if (result.error) {
    throw result.error
  }
  // result.parsed;
}

export default initEnv()
