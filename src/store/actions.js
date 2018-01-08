import {
  receive_home,
  receive_homeB,
  receive_Classify,
  receive_ClassifyB
} from '../api/index.js'
import {
  RECEIVE_HOME,
  RECEIVE_HOMEB,
  RECEIVE_CLASSIFY,
  RECEIVE_CLASSIFYB
} from './mutation-types'

export default {
  async receive_home({commit}, cb) {
    const result = await receive_home()
      const home = result
      commit(RECEIVE_HOME, {home})
      cb && cb()

  },
  async receive_homeB({commit}, cb) {
    const result = await receive_homeB()
    const homeB = result
    commit(RECEIVE_HOMEB, {homeB})
    cb && cb()
  },
  async receive_Classify({commit}, cb) {
    const result = await receive_Classify()
    const Classify = result
    commit(RECEIVE_CLASSIFY, {Classify})
    cb && cb()
  },
  async receive_ClassifyB({commit},obj, cb) {
    const result = await receive_ClassifyB(obj)
    const ClassifyB = result
    commit(RECEIVE_CLASSIFYB, {ClassifyB})
    console.log(ClassifyB.cate_list[0].list);
    cb && cb()
  },
}

