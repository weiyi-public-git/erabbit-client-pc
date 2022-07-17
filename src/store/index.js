import { createStore } from 'vuex'
import createPersisedState from 'vuex-persistedstate'

// 三个模块
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'

// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart, category, user
  },
  // 配置插件
  plugins: [
    // 默认存储在localStorage上
    createPersisedState({
      // 本地存储名字
      key: 'erabbit-client-pc-store',
      // 指定需要储存的模块
      paths: ['user', 'cart']
    })
  ]
})
