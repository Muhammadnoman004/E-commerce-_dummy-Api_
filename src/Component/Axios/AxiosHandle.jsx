import axios from 'axios'

const AxiosHandle = axios.create({
    baseURL: 'https://dummyjson.com'
})

AxiosHandle.interceptors.request.use(
    (config) => {
        return {
            ...config,
            headers: {
                Authorization: 'Bearer noononomannnnn'
            }
        }
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default AxiosHandle;