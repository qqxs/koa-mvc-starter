import views from '@ladjs/koa-views';
import path from 'path';

export default views(path.join(__dirname, '../../templates'), {
  extension: 'html',
  map: { html: 'ejs' }, // ejs 模板引擎
});
