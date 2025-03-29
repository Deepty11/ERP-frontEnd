import { AxiosInstance } from "../utils/AxiosInstance";

class UserService {
    createUser = async (user) => {
        const res = await AxiosInstance.post("/api/user/add-user",user)
        return res.data
    }

    getUserList = async () => {
        const res = await AxiosInstance.get('/api/user/users')
        return res.data
    }

    getUserByUsername = async (username) => {
        const response = await AxiosInstance.get('/api/user/loggedInUser?username=' + username)
        return response.data
    }

    getUserDetailsById = async (userId) => {
        const response = await AxiosInstance.get('/api/user/getUserDetails?id=' + userId)
        return response.data
    }

    updateUserDetailsById = async (id, userDto) => {
        const response =  await AxiosInstance.post('/api/user/update?id='+ id, userDto)
        return response.data
    }

    deleteUserById = async (id) => {
        const response =  await AxiosInstance.delete('/api/user/delete?id='+ id)
        return response.data
    }

    uploadProfilePicture = async (id, data) => {
        const response = await AxiosInstance.post('/api/user/upload/profile-picture?id=' + id, data)
        return response.data
    }
}

export default new UserService()