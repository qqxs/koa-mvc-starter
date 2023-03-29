interface ResponseResult {
  code: number;
  data: any;
  msg: string | undefined;
}

/**
 * @description 序列化响应数据
 * @param {number} code 请求响应码
 * @param {any} data 请求响应数据
 * @param {string} msg 请求响应消息
 *
 * @return {ResponseResult}
 */
function builderResponse(code: number, data: any, msg: string): ResponseResult {
  return {
    code,
    data,
    msg,
  };
}

/**
 * @description 序列化响应成功数据
 * @param {number} code 请求响应成功码
 * @param {any} data 请求响应成功数据
 * @return {ResponseResult}
 */
function builderResponseSuccess(data: any): ResponseResult {
  return builderResponse(0, data, 'success');
}

/**
 * @description 序列化响应错误数据
 * @param {number} code 请求响应错误码 非 0
 * @param {any} msg 请求响应错误数据
 * @return {ResponseResult} ResponseResult
 */
function builderResponseError(code: number, msg: any = 'fail'): ResponseResult {
  return builderResponse(code, null, msg);
}

export { builderResponse, builderResponseSuccess, builderResponseError };
