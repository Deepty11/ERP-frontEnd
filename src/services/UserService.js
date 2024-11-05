import { ErpResourceApiClient } from "../utils/ErpResourceApiClient";

class UserService {
    createUser = async (user) => {
        const res = await ErpResourceApiClient.post("/api/user/add-user",user)
        return res.data
    }

    getUserList = async () => {
        const res = await ErpResourceApiClient.get('/api/user/users')
        return res.data
    }

    getUserByUsername = async (username) => {
        const response = await ErpResourceApiClient.get('/api/user/loggedInUser?username=' + username)
        return response.data
    }

    getUserDetailsById = async (userId) => {
        const response = await ErpResourceApiClient.get('/api/user/getUserDetails?id=' + userId)
        return response.data
    }
}

export default new UserService()