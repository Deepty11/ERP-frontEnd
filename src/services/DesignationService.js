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

    getDesignationDetailsById = async (id) => {
        const response = await ErpResourceApiClient.get('/api/designation/designation-details?id=' + id)
        return response.data
    }

    updateDesignationDetailsById = async (id, designationDetails) => {
        const response = await ErpResourceApiClient.post('/api/designation/edit-designation?id=' + id, designationDetails)
        return response.data
    }

    deleteDesignationById = async (id) => {
        const response =  await ErpResourceApiClient.delete('/api/designation/delete?id='+ id)
        return response.data
    }

}

export default new DesignationService()