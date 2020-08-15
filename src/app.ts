import * as Koa from 'koa'
import middleware from './middleware'
import routers from './routes'
// 初始化env中数据
const app: any = new Koa()

// 配置中间件
middleware(app)
// 页面 、api 接口
app.use(routers.routes(), routers.allowedMethods())

export default app
