import axios from "axios"
import { useAuth } from "../components/AuthProvider"
import userService from "./UserService"

class LoginService {
    constructor() {
        this.base_url = "http://localhost:8080"
    }

    login = async (loginData) => {
        const response = await axios.post(this.base_url + "/login", loginData)
        return response.data.token
        
        try {
            const response = await axios.post(this.base_url + "/login", loginData)
            localStorage.setItem('token', response.data.token)
            
            const loggedInUser =  await userService.getUserByUsername(loginData.username)
            console.log(loggedInUser)
            localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
            return loggedInUser
        } catch(error) {
            throw new Error(error)
        }
    }
}

export default new LoginService()