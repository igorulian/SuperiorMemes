import Axios from 'axios'

const api = Axios.create({
    baseURL: 'http://192.168.0.5:3002/api'
})

export default api