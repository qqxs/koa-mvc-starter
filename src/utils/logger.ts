import * as fs from 'fs'
import * as path from 'path'
import * as log4js from 'log4js'
import { LogPath } from '../config'

const logsDir = path.parse(LogPath).dir
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}

log4js.configure({
  appenders: {
    console: { type: 'console' },
    dateFile: {
      type: 'dateFile',
      filename: LogPath,
      pattern: '-yyyy-MM-dd'
    }
  },
  categories: {
    default: {
      appenders: ['console', 'dateFile'],
      level: 'info'
    }
  }
})

export default log4js.getLogger('[Default]')
