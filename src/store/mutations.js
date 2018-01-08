
import {
  RECEIVE_HOME,
  RECEIVE_HOMEB,
  RECEIVE_CLASSIFY,
  RECEIVE_CLASSIFYB,
} from './mutation-types'

export default {
  //首页
  [RECEIVE_HOME](state, {home}) {
    state.home = home
  },
  //首页2
  [RECEIVE_HOMEB](state, {homeB}) {
    state.homeB = homeB
  },
  //分类
  [RECEIVE_CLASSIFY](state, {Classify}) {
    state.Classify = Classify
  },
  //分类子
  [RECEIVE_CLASSIFYB](state, {ClassifyB}) {
    state.ClassifyB = ClassifyB
  }

}
