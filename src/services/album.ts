interface IAlbumService {
  getUsersById: (id: string | number) => boolean;
}

class AlbumService implements IAlbumService {
  /**
   *
   * @param {string} id 相册id
   * @returns {Promise[album]}
   * @memberof AlbumService
   */
  public getUsersById(id: string | number) {
    return true;
  }
}

export default AlbumService;
