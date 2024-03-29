import wepy from '@wepy/core'
import utils from './utils'
import md5 from './md5'
import tip from './tips'

const API_SECRET_KEY = 'admatser2019'
const TIMESTAMP = utils.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async (params = {}, url) => {
  debugger
  tip.loading()
  let data = params.query || {}
  data.sign = SIGN
  data.time = TIMESTAMP
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': 'application/json' }
  })
  tip.loaded()
  return res
}

module.exports = {
  wxRequest
}
