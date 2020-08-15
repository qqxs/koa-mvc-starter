import * as Static from 'koa-static'
import * as path from 'path'

export default Static(path.join(__dirname, `../../public`))
