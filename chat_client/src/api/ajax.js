import axios from 'axios'
export default function ajax(url = '',data = {}, type = 'GET') {
  if (type === 'GET') {
    // 准备url query参数数据
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += `${key}=${data[key]}&`
    })
    if(dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
    return axios.get(url)
  }else {
    // 发送post请求
    return axios.post(url,data) // data: 包含请求体数据的对象
  }
}