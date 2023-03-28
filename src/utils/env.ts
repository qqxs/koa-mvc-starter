import * as dotenv from 'dotenv'

const initEnv = async () => {
  dotenv.config()
  return await new Promise((resolve, reject) => {
    const result = dotenv.config({
      path: process.env.NODE_ENV === 'production' ? '.env' : '.env.local',
    })
    if (result.error) {
      // throw result.error
      reject(result.error)
    }
    resolve(result)
  })
}

export default initEnv
