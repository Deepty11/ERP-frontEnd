import { ErpResourceApiClient } from "../utils/ErpResourceApiClient"

class DesignationService {
    saveDesignation = (designationDto, success, failure) => {
        ErpResourceApiClient.post(
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
        ErpResourceApiClient.get('/api/designation/designations')
        .then((res) => {
            success(res.data)
        }, (error) => {
            failure(error)
        })
    }
}

export default new DesignationService()