import { ErpResourceApiClient } from "../utils/ErpResourceApiClient";

class UserService {
    createUser = (user, success, failure) => {
        ErpResourceApiClient
            .post(
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
        ErpResourceApiClient
            .get('/api/user/users')
            .then((res) => {
                console.log(res.data)
                success(res.data)
            }).catch(error => {
                console.log("Error occured while fetching users " + error)
                failure(error)
            })

    }

    getUserByUsername = (username) => {
        ErpResourceApiClient
            .get('/api/user/loggedInUser?username=' + username)
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('loggedInUser', res.data)
                // success(res.data)
            }).catch(error => {
                console.log("Error occured while fetching users " + error)
                // failure(error)
            })
    }
}


export default new UserService()