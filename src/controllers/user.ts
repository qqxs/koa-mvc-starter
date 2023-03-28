import type * as Koa from 'koa'
import jwt from 'jsonwebtoken'
import * as Util from '@/utils'
import { EMAILREG, TOKENSECRET } from '@/config'
import UserService from '@/services/user'

import { builderResponseSuccess, builderResponseError } from '@/serialize/builder'

const userService = new UserService()

class UserController {
  public async getUser(ctx: Koa.Context, next: Koa.Next) {
    ctx.body = builderResponseSuccess('hello world')
  }

  public async postRegister(ctx: Koa.Context, next: Koa.Next) {
    const { name, password, email } = ctx.request.body as any

    console.log(ctx.request.body)

    if (!email || !password || !name) {
      ctx.body = builderResponseError(1, `${!name ? '用户名' : !email ? '邮箱' : '密码'}是必填项`)
      return
    }

    if (!EMAILREG.test(email)) {
      ctx.body = builderResponseError(1, '邮箱格式不对')
      return
    }

    const findResult = await userService.getUsersByEmail(email)

    if (findResult) {
      // 邮箱被占用
      ctx.body = builderResponseError(1, '邮箱已被占用')
    } else {
      // 存储到数据库
      await userService
        .createUser(name, email, password)
        .then((user: any) => {
          // 注册成功
          ctx.body = builderResponseSuccess(null)
        })
        .catch((err: Error) => {
          console.log(err)
          ctx.body = builderResponseError(1, JSON.stringify(err))
        })
    }
  }

  public async postLogin(ctx: Koa.Context, next: Koa.Next) {
    const { email, password } = ctx.request.body as any

    if (!email || !password) {
      ctx.body = builderResponseError(1, `${!email ? '邮箱' : '密码'}是必填项`)
      return
    }

    if (!EMAILREG.test(email)) {
      ctx.body = builderResponseError(1, '邮箱格式不对')
      return
    }

    // 查询邮箱
    const findResult: any = await userService.getUsersByEmail(email)

    if (!findResult) {
      // 邮箱不存在 请先去注册
      //   ctx.status = 404;
      ctx.body = builderResponseError(1, '用户不存在！')
    } else {
      // 验证密码
      const result = Util.compareSync(password, findResult.password)

      if (result) {
        const user = findResult
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
        }

        const token = jwt.sign(payload, TOKENSECRET, { expiresIn: 3600 })

        // 登录成功
        ctx.status = 200
        ctx.body = ctx.body = builderResponseSuccess({
          token,
        })
      } else {
        // ctx.status = ;
        ctx.body = builderResponseError(1, '密码错误')
      }
    }
  }
}

export default UserController
