import type * as Koa from 'koa'
import AlbumService from '../services/album'
import { builderResponseSuccess } from '../serialize/builder'

const userService = new AlbumService()

class AlbumController {
  async getAlbum(ctx: Koa.Context, next: Koa.Next) {
    const album = await userService.getUsersById('1000')
    console.log(album)
    ctx.body = builderResponseSuccess(album)
  }
}

export default AlbumController
