import axios from 'axios'

const Axios = axios.create({
  baseURL: global.baseUrl,
  timeout: 10000,
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    //发送请求之前
    return config
  },
  error => {
    uni.showToast({
      title: error,
      duration: 2000
    })
    return Promise.reject(error)
  }
)

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    // 对响应数据做些事
    return res.data
  },
  error => {
    console.log(error)
    console.log(error.response)
    uni.showToast({
      title: error,
      duration: 2000
    })

    // 返回 response 里的错误信息
    let errorInfo = error.data.error ? error.data.error.message : error.data
    return Promise.reject(errorInfo)
  }
)

export default Axios