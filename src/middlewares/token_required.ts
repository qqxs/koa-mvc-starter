import * as Koa from 'koa'
import * as jwt from 'jsonwebtoken'
import { TOKENSECRET } from '../config/index'

function jwtVerify(token: string) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, TOKENSECRET, (err, decoded: any) => {
      if (err) {
        reject([err])
      } else resolve([null, decoded])
    })
  })
}

export default async (ctx: Koa.Context, next: Koa.Next) => {
  let token = ''
  if (ctx.headers.authorization && ctx.headers.authorization.split(' ')[0] === 'Bearer') {
    token = ctx.headers.authorization.split(' ')[1]
  }

  try {
    // @ts-ignore
    await jwtVerify(token)
  } catch (e) {
    // console.log(e);
    ctx.status = 401
    if (/\/api\//.test(ctx.request.url)) {
      ctx.body = {
        code: 401,
        msg: '错误的 accessToken'
      }
    } else {
      ctx.redirect('/login')
    }
    return
  }

  await next()
}
