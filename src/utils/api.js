import {wxRequest} from './wxRequest'
import {API_URL} from './constant'
import {API_URL_TEST} from './constant'

let debug = true

const apiUrl = (debug === true ? API_URL_TEST : API_URL)

// 广告 开始
/**
 * 获取广告条数
 * @param  {[type]} params [参数描述]
 * @return {[type]} data   [data]
 */
const getAdList = (params) => wxRequest(params, apiUrl + 'AdManage/Query')

// 广告 结束

// 用户 开始
const wxJsCode2Session = (params) => wxRequest(params, apiUrl + '/api/wechat/jscode2session')
const user2session = (params) => wxRequest(params, apiUrl + '/api/wechat/user2session?jsoncallback=?')

// 用户 结束

// test
const test = (params) => wxRequest(params, apiUrl + 'WxOpenTest/Test')

export default{
  getAdList,
  wxJsCode2Session,
  user2session,
  test
}
