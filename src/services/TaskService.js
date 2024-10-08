import axios from "axios";

let base_url = 'http://localhost:8080'

class TaskService {
    async createTask(task) {
        return axios({
            url: "/api/add-task",
            method: "post",
            baseURL: base_url,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export default new TaskService()