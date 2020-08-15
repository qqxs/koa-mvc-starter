import AlbumModel from '../models/album'

class AlbumService {
  /**
   *
   * @param {string} id 相册id
   * @returns {Promise[album]}
   * @memberof AlbumService
   */
  public getUsersById(id: string) {
    const newAlbumModel: any = new AlbumModel({
      name: 'ss',
      email: 'xxxxx'
    })

    return newAlbumModel.save()
  }
}

export default AlbumService
