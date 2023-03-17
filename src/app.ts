import Koa from 'koa'
import middleware from './middlewares'
import routers from './routes'
import initEnv from './utils/env'

async function setUp() {
  // 初始化env中数据
  await initEnv()

  const app: any = new Koa()
  // 配置中间件
  middleware(app)
  // 页面 、api 接口
  app.use(routers.routes(), routers.allowedMethods())

  return app
}

const app: any = setUp()

export default app
