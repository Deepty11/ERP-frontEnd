import { ErpResourceApiClient } from "../utils/ErpResourceApiClient"

class LeaveApplicationService {
    createLeaveApplication = async (leaveApplication) => {
        const res = await ErpResourceApiClient.post(
            '/api/leave/create-application', leaveApplication)
        return res
    }

    getAllApplications = async () => {
        const res = await ErpResourceApiClient.get('/api/leave/leave-applications')
        return res.data
    }

    getAllApplicationsByUserId = async (userId) => {
        const response = await ErpResourceApiClient.get('/api/leave/my-leave-applications?userId=' + userId)
        return response.data
    }

    getLeaveOverview = async (userId) => {
        const res = await ErpResourceApiClient.get('/api/leave/overview?userId=' + userId)
        return res.data
    }

    leaveApplicationAction = async (leaveId, approve) => {
        const res = await ErpResourceApiClient.get(`/api/leave/action?leaveId=${leaveId}&approve=${approve}`)
        return res
    }
}

const leaveApplicationService = new LeaveApplicationService()
export default leaveApplicationService