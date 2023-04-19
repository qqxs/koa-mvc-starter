interface IUserService {
  getUsersByEmail: (email: string) => any;
  createUser: (name: string, email: string, password: string, avatar?: string) => Promise<boolean>;
}

class UserService implements IUserService {
  /**
   * @desc 查询email对应的用户
   *
   * @param {string} email 邮箱
   * @returns {Promise[user]} user 用户列表
   * @memberof UserService
   */
  public getUsersByEmail(email: string) {
    console.log(email);
    return '';
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
  public async createUser(name: string, email: string, password: string, avatar?: string) {
    console.log(name, email, password, avatar);
    return await Promise.resolve(true);
  }
}

export default UserService;
