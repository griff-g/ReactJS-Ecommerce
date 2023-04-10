import axios from 'axios'

const instance = axios.create({
    baseURL:process.env.ECOMMERCE_BASE_URL
})

export default instance