import axios from "axios";

const API_URL = "http://localhost:8080/api";

class AuthService {
    async login(username, password) {
        const response = await axios.post(API_URL + "/login", {
            username,
            password
        });
        return response;
    }
    
    async register(username, password) {
        const response = await axios.post(API_URL + "/register", {
            username,
            password
        });
        return response;
    }

    async delete(username) {
        const response = await axios.delete(API_URL + "/delete", { data: {username} });
        return response
    }

}

export default new AuthService();