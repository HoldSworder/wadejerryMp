import Vue from 'vue'
import Vuex from 'vuex'

import basic from 'store/modules/basic.js'
import user from 'store/modules/user.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		basic,
		user
	}
})

export default store
