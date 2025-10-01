import axios from "axios";
import { API_URL } from "../config/api";

class AgentsService{
    static async getAllAgents(){
        try {
            const res = await axios.get(`${API_URL}/agents`);
            return res;
        } catch (error) {
            console.log(error);
			throw error;
        }
    }

    static async getAgentById(id){
        try {
            const resById = await axios.get(`${API_URL}/agents/${id}`);
			return resById.data;
        } catch (error) {
            console.log(error);
			throw error;
        }
    }
}

export default AgentsService;