import type * as Koa from 'koa';
import logger from '@/utils/logger';

// // 这个middleware用于将ctx.data中的内容最终回传给客户端
// // 回传的格式遵循这样的格式：{ code: 0, msg: string data: any }
// export const responseHandler = (ctx: Koa.Context) => {
//   if (ctx.result !== undefined) {
//     ctx.type = "json";
//     ctx.body = {
//       code: 200,
//       msg: ctx.msg || "",
//       data: ctx.data,
//     };
//   }
// };

// 这个middleware处理在其它middleware中出现的异常
// 并将异常消息回传给客户端：{ code: '错误代码', msg: '错误信息' }
export const errorHandler = async (ctx: Koa.Context, next: Koa.Next) => {
  try {
    await next();
  } catch (err: any) {
    if (err.code == null) {
      logger.error(err.stack);
    }

    ctx.body = {
      code: err.code || -1,
      data: null,
      msg: err.msg || '未知错误',
    };
    // 保证返回状态是 200, 保证前端不会抛出异常
    ctx.status = 200;
  }
};
