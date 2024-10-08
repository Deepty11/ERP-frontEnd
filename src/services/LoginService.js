import axios from "axios"
import { useAuth } from "../components/AuthProvider"

class LoginService {
    constructor() {
        this.base_url = "http://localhost:8080"
    }

    login = (data, success, failure) => {
        axios.post(this.base_url + "/login", data)
            .then((response) => {
                if (response) {
                    console.log(response.data.token)
                    success(response.data.token)
                }
            })
            .catch((error) => {
                failure(error)
            })
    }
}

export default new LoginService()