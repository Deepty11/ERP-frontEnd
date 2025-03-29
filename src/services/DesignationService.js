import { AxiosInstance } from "../utils/AxiosInstance";

class DesignationService {
    saveDesignation = async (designationDto, success, failure) => {
        try {
            const response = await AxiosInstance.post('/api/designation/add-designation', designationDto);
            success(response.data);
        } catch(error) {
            failure(error);
        }
    }

    getAllDesignations = async (success, failure) => {
        try {
            const response = await AxiosInstance.get('/api/designation/designations');
            success(response.data);
        } catch(error) {
            failure(error);
        }
    }

    getDesignationDetailsById = async (id) => {
        const response = await AxiosInstance.get('/api/designation/designation-details?id=' + id);
        return response.data;
    }

    updateDesignationDetailsById = async (id, designationDetails) => {
        const response = await AxiosInstance.post('/api/designation/edit-designation?id=' + id, designationDetails);
        return response.data;
    }

    deleteDesignationById = async (id) => {
        const response =  await AxiosInstance.delete('/api/designation/delete?id='+ id);
        return response.data;
    }
}

export default new DesignationService()