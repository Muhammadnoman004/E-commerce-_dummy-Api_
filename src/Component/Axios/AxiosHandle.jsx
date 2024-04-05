import axios from 'axios'

const AxiosHandle = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: { 'Content-Type': 'application/json' }
})

AxiosHandle.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

AxiosHandle.interceptors.response.use(
    (response) => {
        return response.data;
    }
    , (error) => {
        return Promise.reject(error);
    }
)

export default AxiosHandle;