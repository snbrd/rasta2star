import axios from 'axios'

const api = axios.create({
  baseURL: `https://zionlabs.previewyour.site/`,
})

export default api
