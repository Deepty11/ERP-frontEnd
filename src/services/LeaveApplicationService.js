import { AxiosInstance } from "../utils/AxiosInstance";

class LeaveApplicationService {
    createLeaveApplication = async (leaveApplication) => {
        const res = await AxiosInstance.post(
            '/api/leave/create-application', leaveApplication)
        return res
    }

    getAllApplications = async () => {
        const res = await AxiosInstance.get('/api/leave/leave-applications')
        console.log(res);
        return res.data
    }

    getAllApplicationsByUserId = async (userId) => {
        const response = await AxiosInstance.get('/api/leave/my-leave-applications?userId=' + userId)
        return response.data
    }

    getLeaveOverview = async (userId) => {
        const res = await AxiosInstance.get('/api/leave/overview?userId=' + userId)
        return res.data
    }

    leaveApplicationAction = async (leaveId, action) => {
        const res = await AxiosInstance.get(`/api/leave/action?leaveId=${leaveId}&action=${action}`)
        return res
    }
}

export default new LeaveApplicationService();