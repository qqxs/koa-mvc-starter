import UserController from '@/controllers/user';
import AlbumController from '@/controllers/album';
import { tokenRequired } from '@/middleware';
import type Router from '@koa/router';
const userController = new UserController();
const albumController = new AlbumController();

function userRestApi(router: Router) {
  /**
   * @route GET /api/v1/user
   * @desc 首页
   * @access 接口是公开到
   */
  // eslint-disable-next-line @typescript-eslint/unbound-method
  router.get('/user', tokenRequired, userController.getUser);
  /**
   *
   * @return POST /api/v1/register
   * @desc 注册接口
   */
  // eslint-disable-next-line @typescript-eslint/unbound-method
  router.post('/register', userController.postRegister);

  /**
   *
   * @route POST /api/v1/login
   * @desc 登陆接口
   */
  // eslint-disable-next-line @typescript-eslint/unbound-method
  router.post('/login', userController.postLogin);

  // eslint-disable-next-line @typescript-eslint/unbound-method
  router.get('/album', albumController.getAlbum);
}

export default userRestApi;
