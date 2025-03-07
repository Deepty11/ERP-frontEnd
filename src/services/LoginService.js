import AxiosLoginInstance from "../utils/AxiosLoginInstance"

class LoginService {
    login = async (loginData) => {
        const response = await AxiosLoginInstance.post("/login", loginData);
        return response.data.token;
    }
}

export default new LoginService();