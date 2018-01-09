/**
 * Created by hong on 2018/1/4.
 */
import ajax from './ajax'
//写登陆验证时用
import fetch from './fetch'

export const receive_home = () => ajax('/api')
export const receive_homeB = () => ajax('/text')
export const receive_Classify = () => ajax('/class')
export const receive_ClassifyB = (obj) => ajax('/index/v3/goods/category/main.html',obj)
export const receive_reginste = ()=>ajax('/reginste')

export const getUser = () => fetch('/v1/user')


/**
 * 获取图片验证码
 */
export const getcaptchas = () => fetch('/v1/captchas', {}, 'POST')

/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', {
  username,
  password,
  captcha_code
}, 'POST')

/**
 * 获取短信验证码
 */
export const mobileCode = phone => ajax('/test/sendcode', {phone})

/**
 * 手机号登录
 */
export const phoneLogin = (phone, code) => ajax('/test/login', {phone, code}, 'POST')

