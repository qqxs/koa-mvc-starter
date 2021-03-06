import UserController from '../../controllers/user'
import AlbumController from '../../controllers/album'
import { tokenRequired } from '../../middlewares'
const userController = new UserController()
const albumController = new AlbumController()

// @ts-ignore
function userRestApi(router) {
  /**
   * @route GET /api/v1/user
   * @desc 首页
   * @access 接口是公开到
   */
  router.get('/user', tokenRequired, userController.getUser)

  /**
   *
   * @return POST /api/v1/register
   * @desc 注册接口
   */
  router.post('/register', userController.postRegister)

  /**
   *
   * @route POST /api/v1/login
   * @desc 登陆接口
   */
  router.post('/login', userController.postLogin)

  router.get('/album', albumController.getAlbum)
}

export default userRestApi
