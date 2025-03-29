import { toast } from "react-toastify";
import AxiosLoginInstance from "../utils/AxiosLoginInstance"

class LoginService {

    login = async (loginData) => {
        try {
            const response = await AxiosLoginInstance.post("/login", loginData);
    
            if (response.data.token) {
                return { success: true, token: response.data.token };
            }
    
            return { success: false, message: "Token should not be null!" };
        } catch (error) {
            if (error.response) {
                return { success: false, message: error.response.data.message };
            } else if (error.request) {
                return { success: false, message: 'An error occured! please try again later'};
            } else {
                return { success: false, message: 'Bad request' };
            }
        }
    }
}

export default new LoginService();