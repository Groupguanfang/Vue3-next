import axios from "axios"

const request = axios.create({
  baseURL: "https://api.light.xhhzs.cn/v2",
  timeout: 100000,
})

request.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

export default request
