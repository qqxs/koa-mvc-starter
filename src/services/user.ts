/*
 * @Description:
 * @Author: ShineShao <xiaoshaoqq@gmail.com>
 * @Date: 2020-05-15 13:52:25
 */
import UserModel from '../models/mongo/user'
import * as gravatar from 'gravatar'
import * as Util from '../utils'

class UserService {
  /**
   * @desc 查询email对应的用户
   *
   * @param {string} email 邮箱
   * @returns {Promise[user]} user 用户列表
   * @memberof UserService
   */
  public getUsersByEmail(email: string) {
    return UserModel.findOne({ email })
  }

  /**
   * @desc 添加新用户
   *
   * @param {string} name 用户名
   * @param {string} email 邮箱
   * @param {string} password 密码
   * @param {string} [avatar] 头像
   * @returns {Promise[user]} user 保存结果
   * @memberof UserService
   */
  public newAndSave(
    name: string,
    email: string,
    password: string,
    avatar?: string
  ) {
    const newUserModel: any = new UserModel({
      name,
      email,
      password: Util.enBcryptSync(password),
      avatar: avatar || this.makeGravatar(email)
    })

    return newUserModel.save()
  }

  private makeGravatar(email: string) {
    return gravatar.url(email, {
      s: '100',
      r: 'pg',
      d: 'mm'
    })
  }
}

export default UserService
