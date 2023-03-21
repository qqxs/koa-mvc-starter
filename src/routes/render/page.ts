import Router from '@koa/router'
// import middleware from '@/middleware'
const router: any = new Router()

/**
 * @route GET /register
 * @desc 注册
 * @access 接口是公开到
 */
router.get('/register', async (ctx: any, next: () => Promise<any>) => {
  await ctx.render('register', {
    title: '注册',
    content: '欢迎'
  })
})

/**
 * @route GET /register
 * @desc 注册
 * @access 接口是公开到
 */
router.get('/login', async (ctx: any, next: () => Promise<any>) => {
  await ctx.render('login', {
    title: '登录',
    content: '欢迎'
  })
})

/**
 * @route GET /
 * @desc 首页
 * @access 接口是公开到
 */
router.get('/', async (ctx: any, next: () => Promise<any>) => {
  await ctx.render('index', {
    title: '首页',
    content: 'Hello World!'
  })
})

export default router
