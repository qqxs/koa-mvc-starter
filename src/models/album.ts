import * as mongoose from 'mongoose'
require('../db')
const Schema = mongoose.Schema

export interface IUser {
  name?: string
  email?: string
  password?: string
  avatar?: string
  date?: Date
}

// 实例化数据模板

const AlbumSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'https://avatars0.githubusercontent.com/u/16034259?s=40&v=4'
  },
  create_at: {
    type: Date,
    default: Date.now
  },
  update_at: { type: Date, default: Date.now }
})

const AlbumModel = mongoose.model('album', AlbumSchema)

export default AlbumModel
