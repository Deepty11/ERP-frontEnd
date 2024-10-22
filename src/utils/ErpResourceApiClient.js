import axios from "axios";

export const ErpResourceApiClient = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

ErpResourceApiClient.interceptors.request.use(
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