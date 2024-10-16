import { axiosInstance } from "../utils/AxiosUtils"

class LeaveApplicationService {
    createLeaveApplication = (leaveApplication, success, failure) => {
        axiosInstance
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
        axiosInstance
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