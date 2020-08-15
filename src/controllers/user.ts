import * as Koa from 'koa'
import * as jwt from 'jsonwebtoken'
import * as Util from '../utils'
import { EMAILREG, TOKENSECRET } from '../config'
import UserService from '../services/user'
const userService = new UserService()

class UserController {
  public async getUser(ctx: Koa.Context, next: Koa.Next) {
    ctx.body = 'hello world'
  }

  public async postRegister(ctx: Koa.Context, next: Koa.Next) {
    let { name, password, email } = ctx.request.body

    if (!email || !password || !name) {
      ctx.body = {
        code: 1,
        msg: `${!name ? '用户名' : !email ? '邮箱' : '密码'}是必填项`
      }
      return
    }

    if (!EMAILREG.test(email)) {
      ctx.body = {
        code: 1,
        msg: '邮箱格式不对'
      }
      return
    }

    const findResult = await userService.getUsersByEmail(email)

    if (findResult) {
      // 邮箱被占用
      ctx.body = {
        code: 1,
        msg: '邮箱已被占用'
      }
    } else {
      // 存储到数据库
      await userService
        .newAndSave(name, email, password)
        .then((user: any) => {
          ctx.body = {
            code: 0,
            msg: '注册成功'
          }
        })
        .catch((err: Error) => {
          console.log(err)
          ctx.body = {
            code: 1,
            msg: JSON.stringify(err)
          }
        })
    }
  }

  public async postLogin(ctx: Koa.Context, next: Koa.Next) {
    const { email, password } = ctx.request.body

    if (!email || !password) {
      ctx.body = {
        code: 1,
        msg: `${!email ? '邮箱' : '密码'}是必填项`
      }
      return
    }

    if (!EMAILREG.test(email)) {
      ctx.body = {
        code: 1,
        msg: '邮箱格式不对'
      }
      return
    }

    // 查询邮箱
    const findResult: any = await userService.getUsersByEmail(email)

    if (!findResult) {
      // 邮箱不存在 请先去注册
      //   ctx.status = 404;
      ctx.body = {
        code: 1,
        msg: '用户不存在！'
      }
    } else {
      // 验证密码
      const result = Util.compareSync(password, findResult.password)

      if (result) {
        const user = findResult
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar
        }

        const token = jwt.sign(payload, TOKENSECRET, { expiresIn: 3600 })

        ctx.status = 200
        ctx.body = {
          code: 0,
          msg: '登录成功',
          token: token
        }
      } else {
        // ctx.status = ;
        ctx.body = {
          code: 1,
          msg: '密码错误'
        }
      }
    }
  }
}

export default UserController
