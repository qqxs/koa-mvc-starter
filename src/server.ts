// require("@babel/register");
// 初始化env中数据
import app from './app'

/**
 * Start Koa server.
 */
const server = app.listen(3002, () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    3002,
    process.env.NODE_ENV || 'development'
  )
  console.log('  Press CTRL-C to stop\n')
})

export default server
