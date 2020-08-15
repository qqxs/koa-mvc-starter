import * as views from 'koa-views'
import * as path from 'path'

export default views(path.join(__dirname, `../../views`), {
  extension: 'ejs'
})
