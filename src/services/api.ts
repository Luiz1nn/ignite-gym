import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.41.121:3333',
})

export { api }
