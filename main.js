import Vue from 'vue'
import App from './src/App'

import store from './src/store'
import api from './src/api'

import tabBar from './src/components/basic/tabbar.vue'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$api = api

Vue.component('tab-bar', tabBar)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
