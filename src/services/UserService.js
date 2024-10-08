import axios from "axios";
import { useAuth } from "../components/AuthProvider";
import { axiosInstance } from "../utils/AxiosUtils";

class UserService {
    createUser = (user, success, failure) => {
        axiosInstance.post(
            "/api/user/add-user",
            user
        ).then((res) => {
            return res.data
        }).then(() => {
            success()
        })
        .catch(error => {
            failure(error)
        })
    }
    
     getUserList = (success, failure) => {
        axiosInstance.get('/api/user/users')
        .then((res) => {
            console.log(res.data)
            success(res.data)
        }).catch(error => {
            console.log("Error occured while fetching users "+ error)
            failure(error)
        })

    }
}

export default new UserService()