const Fly = require('flyio/dist/npm/wx')

const fly = new Fly()

fly.config.baseURL = 'https://www.wadejerry.xyz/wx/'
fly.config.timeout = 10000
fly.config.responseType = 'json'
// fly.config.withCredentials = true
fly.config.headers = {
	  'Content-Type': 'application/json;charset=utf-8'
}

fly.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
        return response.data
    },
    (err) => {
        uni.showToast({
          title: err,
          duration: 2000
        })
        //发生网络错误后会走到这里
        return Promise.resolve(err)
    }
)

export default fly