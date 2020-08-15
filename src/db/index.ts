import * as mongoose from 'mongoose'
import { DBConfig } from '../config'

class DB {
  static istance: any
  public dbClient: any

  static getInstance() {
    if (!DB.istance) {
      DB.istance = new DB()
    }
    return DB.istance
  }

  constructor() {
    this.dbClient = ''
    this.connect()
  }

  connect() {
    return new Promise((resolve: any, reject: any) => {
      if (!this.dbClient) {
        this.dbClient = mongoose.connect(DBConfig, {
          useNewUrlParser: true
        }) //创建一个数据库连接
        mongoose.connection.on('connected', () => {
          console.log(`${DBConfig} Connecting database successfully`)
          resolve()
        })
        mongoose.connection.on('disconnected', () => {
          console.log(`${DBConfig} Closed to connect to database`)
          DB.istance = null
          this.dbClient = null
          reject()
        })
      }
    })
  }
}

export default DB.getInstance()
