import * as bcrypt from 'bcrypt'

// 生成salt的迭代次数
const saltRounds = 10

/**
 * 密码加密
 *
 * @param {string} password 密码
 *
 * @return {string} 加密后的密码
 */
const enBcryptSync = (password: string) => {
  // 随机生成salt
  const salt = bcrypt.genSaltSync(saltRounds)
  const hash = bcrypt.hashSync(password, salt)

  return hash
}

/**
 *  同步比较 是否相对
 * @param {string} password 密码
 * @param {string} hash 数据中加密的密码
 *
 * @return {boolean} 返回比较结果
 */
const compareSync = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash)
}

export { enBcryptSync, compareSync }
