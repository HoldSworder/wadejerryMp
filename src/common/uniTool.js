class uniTool {
	/**
	 * 封装uniapp获取provider函数
	 */
	static getProvider() {
		return new Promise((resolve, reject) => {
			uni.getProvider({
				service: 'oauth',
				success(res) {
					resolve(res.provider)
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}

	/**
	 * 封装uniapp登录函数
	 * @param {string} provider 
	 */
	static login(provider) {
		return new Promise((resolve, reject) => {
			uni.login({
				provider,
				success(loginRes) {
					resolve(loginRes)
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}

	/**
	 * 封装uniapp获取样式函数
	 * @param {string}} id 节点选择器
	 * @param {this} THAT 
	 */
	static getStyle(id, THAT) {
		return new Promise((resolve, reject) => {
			const view = uni.createSelectorQuery().in(THAT).select(id)
			view.fields({
				id: true,
				dataset: true,
				rect: true,
				size: true,
				scrollOffset: true,
				context: true,
			}, data => {
				resolve(data)
			}).exec()
		})
	}
}

export default uniTool
