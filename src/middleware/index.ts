import bodyParser from './bodyParser'
import views from './views'
import Static from './Static'
import tokenRequired from './token_required'
import logger from './logger'
import { errorHandler } from './response'

import cors from '@koa/cors'

export default (app: any) => {
  // 加载中间件
  app.use(errorHandler) // 错误处理
  app.use(logger) // 日志
  app.use(bodyParser) // 参数处理
  app.use(views) // 视图设置
  app.use(Static) // 静态资源设置
  app.use(cors()) // cors
}

export { tokenRequired, bodyParser, views, Static, logger }
