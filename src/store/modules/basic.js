import api from 'api/index'
import uniTool from 'common/uniTool.js'
import * as types from 'store/types.js'

export default {
  namespaced: true,
  state: {
    sessionId: ''
  },
  getters: {
    getSessionId: state => state.sessionId
  },
  mutations: {
    [types.SET_SESSIONID](state, sessionId) {
      state.sessionId = sessionId
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

        uni.setStorageSync('sessionId', logInfo.sessionId)
        
        commit(types.SET_SESSIONID, logInfo.sessionId)

        resolve()
      })

    }
  }
}