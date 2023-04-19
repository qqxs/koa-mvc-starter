import Koa from 'koa';
import middleware from '@/middleware';
import routers from '@/routes';
import initEnv from '@/utils/env';

async function server() {
  try {
    // 初始化env中数据
    await initEnv();
  } catch (error) {}

  const app = new Koa();
  // 配置中间件
  middleware(app);
  // 页面 、api 接口
  app.use(routers.routes());

  return app.listen(3002, () => {
    console.log(
      '  App is running at http://localhost:%d in %s mode',
      3002,
      process.env.NODE_ENV ?? 'development',
    );
    console.log('  Press CTRL-C to stop\n');
  });
}

void server();
