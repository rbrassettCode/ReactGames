import axios from "axios";

const API_URL = "http://localhost:8080/api";

class AuthService {
    async login(username, password) {
        const response = await axios.post(API_URL + "/login", {
            username,
            password
        });
    }

}

export default new AuthService();