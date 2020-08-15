import * as Koa from 'koa'
import logger from '../utils/logger'

export default async (ctx: Koa.Context, next: Koa.Next) => {
  const start = new Date().getTime()
  await next()
  const ms = new Date().getTime() - start

  const remoteAddress =
    ctx.headers['x-forwarded-for'] ||
    ctx.ip ||
    ctx.ips ||
    (ctx.socket &&
      (ctx.socket.remoteAddress ||
        // @ts-ignore
        (ctx.socket.socket && ctx.socket.socket.remoteAddress)))
  let logText = `${ctx.method} ${ctx.status} ${
    ctx.url
  } 请求参数： ${JSON.stringify(ctx.request.body)} 响应参数： ${JSON.stringify(
    ctx.body
  )} - ${remoteAddress} - ${ms}ms`
  logger.info(logText)
}
