import axios from 'axios'

export const baseUrl = process.env.REACT_APP_BASE_URL
// const baseUrl = 'http://127.0.0.1:8000';

const MainApi = axios.create({
    baseURL: baseUrl,
})

MainApi.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Token ${token}`
    }
    return config
})
MainApi.interceptors.response.use(null, function (error) {
    const userType = localStorage.getItem('user_type')

    if (error?.response?.data?.status === 401) {
        window.location.href = '/sign-out'
    }
    // window.location.href = '/nurse/signin';
    return Promise.reject(error)
})

export default MainApi
