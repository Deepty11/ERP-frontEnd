import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

AxiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)