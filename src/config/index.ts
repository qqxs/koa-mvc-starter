import path from 'path'

/** 邮箱正则 */
export const EMAILREG =
  /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/

/** mLab https://mlab.com/ */
export const DBConfig: string = 'mongodb://shineshao:shineshao12345@ds253094.mlab.com:53094/shine'

/** jwt secret */
export const TOKENSECRET = 'shineshao'

export const LogPath = path.resolve(__dirname, '../logs/logger.log')
