import api from 'api/index'
import * as types from 'store/types'

export default {
  namespaced: true,
  state: {
    phoneNumber: ''
  },

  getters: {
    getPhoneNumber: state => state.phoneNumber
  },

  mutations: {
    [types.SET_PHONE_NUMBER](state, phoneNumber) {
      state.phoneNumber = phoneNumber
    }
  },

  actions: {
    getPhoneNumber({ commit, rootGetters }) {
      return new Promise(async (resolve, reject) => {
        const openid = rootGetters['basic/getOpenid']
        const sessionKey = rootGetters['basic/getSessionKey']

        const phoneNumber = await api.basic.getPhoneNumber({
          openid,
          sessionKey
        })

        commit(types.SET_PHONE_NUMBER, phoneNumber)
        resolve(phoneNumber)
      })
    }
  }
}