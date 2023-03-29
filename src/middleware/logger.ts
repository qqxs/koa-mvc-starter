import type * as Koa from 'koa';
import logger from '@/utils/logger';

export default async (ctx: Koa.Context, next: Koa.Next) => {
  const start = new Date().getTime();
  await next();
  const ms = new Date().getTime() - start;

  const remoteAddress =
    ctx.headers['x-forwarded-for'] ??
    ctx.ip ??
    ctx.ips ??
    // eslint-disable-next-line
    (ctx.socket && (ctx.socket.remoteAddress ?? 'no IP')); //ctx.socket?.socket?.remoteAddress
  const logText = `${ctx.method} ${ctx.status} ${ctx.url} 请求参数： ${JSON.stringify(
    ctx.request.body,
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  )} 响应参数： ${JSON.stringify(ctx.body)} - ${remoteAddress} - ${ms}ms`;
  logger.info(logText);
};
