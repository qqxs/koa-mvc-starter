import type * as Koa from 'koa';
import jwt from 'jsonwebtoken';
import { TOKENSECRET } from '@/config/index';

async function jwtVerify(token: string) {
  return await new Promise((resolve, reject) => {
    jwt.verify(token, TOKENSECRET, (err, decoded: any) => {
      if (err) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject([err]);
      } else resolve([null, decoded]);
    });
  });
}

export default async (ctx: Koa.Context, next: Koa.Next) => {
  let token = '';
  if (ctx.headers.authorization && ctx.headers.authorization.split(' ')[0] === 'Bearer') {
    token = ctx.headers.authorization.split(' ')[1];
  }

  try {
    await jwtVerify(token);
  } catch (e) {
    ctx.status = 401;
    if (ctx.request.url.includes('/api/')) {
      ctx.body = {
        code: 401,
        msg: '错误的 accessToken',
      };
    } else {
      ctx.redirect('/login');
    }
    return;
  }

  await next();
};
