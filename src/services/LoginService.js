import axios from "axios"
import { useAuth } from "../components/AuthProvider"

class LoginService {
    constructor() {
        this.base_url = "http://localhost:8080"
    }
}

export default new LoginService()