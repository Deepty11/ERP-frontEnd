import { axiosInstance } from "../utils/AxiosUtils"

class DesignationService {
    saveDesignation = (designationDto, success, failure) => {
        axiosInstance.post(
            '/api/designation/add-designation',
            designationDto
        ).then((res) => {
            return res.data
        }).then((data) => {
            success(data)
        })
        .catch(error => {
            failure(error)
        })
    }

    getAllDesignations = (success, failure) => {
        axiosInstance.get('/api/designation/designations')
        .then((res) => {
            success(res.data)
        }, (error) => {
            failure(error)
        })
    }
}

export default new DesignationService()
