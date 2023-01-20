import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 以模块的方式注册
  // 以模块方式注册的值，state.子模块.属性名就能取到值了，因为每个模块开启了命名空间，所以调用其中的值要加模块名
  modules: {
    app,
    settings,
    user
  },
  getters
})

export default store
