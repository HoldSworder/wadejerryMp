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
    getPhoneNumber({ commit, rootGetters }, detail) {
      return new Promise(async (resolve, reject) => {
        const sessionId = rootGetters['basic/getSessionId']

        detail.sessionId = sessionId
        const phoneNumberInfo = await api.basic.getPhoneNumber(detail)

        commit(types.SET_PHONE_NUMBER, phoneNumberInfo.phoneNumber)
        resolve(phoneNumberInfo)
      })
    }
  }
}