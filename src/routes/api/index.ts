import * as Router from 'koa-router'
import userRestApi from './user'

const router: any = new Router()

userRestApi(router)

export default router
