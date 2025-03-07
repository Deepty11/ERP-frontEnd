import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export default AxiosInstance;