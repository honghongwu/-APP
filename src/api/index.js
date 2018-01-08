/**
 * Created by hong on 2018/1/4.
 */
import ajax from './ajax'

export const receive_home = () => ajax('/api')
export const receive_homeB = () => ajax('/text')
export const receive_Classify = () => ajax('/class')
export const receive_ClassifyB = (obj) => ajax('/index/v3/goods/category/main.html',obj)


//最好不要这样写1,2,3
// export const requestRatings = () => ajax('/api1')
// export const requestGoods = () => ajax('/api2')
// export const requestGoods = () => ajax('/api3')
