import path from 'path';

/** 邮箱正则 */
export const EMAIL_REG =
  /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

/** mLab https://mlab.com/ */
export const DB_CONFIG: string = 'mongodb://shineshao:shineshao12345@ds253094.mlab.com:53094/shine';

/** jwt secret */
export const TOKEN_SECRET = 'shineshao';

export const LogPath = path.resolve(__dirname, '../../logs/logger.log');
