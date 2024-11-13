import axios from "axios";
import { ErpResourceApiClient } from "../utils/ErpResourceApiClient";

let base_url = 'http://localhost:8080'

class TaskService {
    createTask = async (task) => {
        const response = await ErpResourceApiClient.post("/api/task/create-task", task)
        return response.data
    }

    getAllTasks = async () => {
        const response = await ErpResourceApiClient.get("/api/task/tasks")
        return response.data
    }
}

const taskService = new TaskService()
export default taskService