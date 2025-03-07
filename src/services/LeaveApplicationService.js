import { AxiosInstance } from "../utils/AxiosInstance";

class LeaveApplicationService {
    createLeaveApplication = async (leaveApplication) => {
        const res = await AxiosInstance.post(
            '/api/leave/create-application', leaveApplication)
        return res
    }

    getAllApplications = async () => {
        const res = await AxiosInstance.get('/api/leave/leave-applications')
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

    leaveApplicationAction = async (leaveId, approve) => {
        const res = await AxiosInstance.get(`/api/leave/action?leaveId=${leaveId}&approve=${approve}`)
        return res
    }
}

export default new LeaveApplicationService();