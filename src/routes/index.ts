import Router from '@koa/router';
import userRestApiRouter from './api';
import pageRenderRouter from './render/page';

const router: Router = new Router();

// restful api
router.use('/api/v1', userRestApiRouter.routes());

// page
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
router.use('', pageRenderRouter.routes());

export default router;
