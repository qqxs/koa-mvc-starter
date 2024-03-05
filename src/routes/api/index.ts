import Router from '@koa/router';
import userRestApi from './user';

const router = new Router();

userRestApi(router);

export default router;
