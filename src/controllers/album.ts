import * as Koa from 'koa'
import AlbumService from '../services/album'

const userService = new AlbumService()

class AlbumController {
  async getAlbum(ctx: Koa.Context, next: Koa.Next) {
    const album = await userService.getUsersById('1000')
    console.log(album)
    ctx.body = {
      code: 0,
      msg: 'msg'
    }
  }
}

export default AlbumController
