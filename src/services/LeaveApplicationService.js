import { ErpResourceApiClient } from "../utils/ErpResourceApiClient"

class LeaveApplicationService {
    createLeaveApplication = (leaveApplication, success, failure) => {
        ErpResourceApiClient
            .post(
                "/api/leave/create-application",
                leaveApplication
            )
            .then((res) => {
                return res.data
            })
            .then((data) => {
                success(data)
            })
            .catch(error => {
                failure(error)
            })
    }

    getAllApplications = (success, failure) => {
        ErpResourceApiClient
            .get("/api/leave/applications")
            .then((res) => {
                return res.data
            })
            .then(data => {
                success(data)
            })
            .catch(error => {
                failure(error)
            })

    }

}

const leaveApplicationService = new LeaveApplicationService()
export default leaveApplicationService