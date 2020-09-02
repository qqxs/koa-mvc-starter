import * as Koa from 'koa'
import middleware from './middleware'
import routers from './routes'
import initEnv from './utils/env'

function setUp() {
  // 初始化env中数据
  initEnv()

  const app: any = new Koa()
  // 配置中间件
  middleware(app)
  // 页面 、api 接口
  app.use(routers.routes(), routers.allowedMethods())

  return app
}

const app: any = setUp()

export default app
