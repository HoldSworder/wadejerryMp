import api from 'api/index'
import uniTool from 'common/uniTool.js'
import * as types from 'store/types.js'

export default {
  namespaced: true,
  state: {
    openid: '',
    session_key: '',
    unionid: ''
  },
  getters: {
    getOpenid: state => state.openid,
    getSessionKey: state => state.session_key,
    getUnionid: state => state.unionid
  },
  mutations: {
    [types.SET_OPENID](state, openid) {
      state.openid = openid
    },
    [types.SET_SESSION_KEY](state, session_key) {
      state.session_key = session_key
    },
    [types.SET_UNIONID](state, unionid) {
      state.unionid = unionid
    }
  },
  actions: {
    login({ commit }) {
      return new Promise(async (resolve, reject) => {
        const provider = await uniTool.getProvider()
				const code = await uniTool.login(provider)
        const logInfo = await api.basic.login({
          code: code.code
        })
        
        commit(types.SET_OPENID, logInfo.openid)
        commit(types.SET_SESSION_KEY, logInfo.session_key)
        commit(types.SET_UNIONID, logInfo.unionid)

        resolve()
      })

    }
  }
}