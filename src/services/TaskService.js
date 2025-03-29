import { AxiosInstance } from "../utils/AxiosInstance";

class TaskService {
    createTask = async (task) => {
        const response = await AxiosInstance.post("/api/task/create-task", task)
        return response.data
    }

    getAllTasks = async () => {
        const response = await AxiosInstance.get("/api/task/tasks")
        return response.data
    }

    getTaskById = async (id) => {
        const response = await AxiosInstance.get("/api/task/getTaskDetails?id="+id)
        return response.data
    }

    updateTask = async (id, taskDto) => {
        const response = await AxiosInstance.post("/api/task/edit-task?id="+id, taskDto)
        return response.data
    }
}

export default new TaskService()