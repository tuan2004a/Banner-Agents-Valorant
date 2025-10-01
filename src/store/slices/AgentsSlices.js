import AgentsService from "../../service/AgentsService";

const AgentsSSlices = {

    fetchAllAgents: async() => {
        try {
            const data = await AgentsService.getAllAgents();
            return data;
        } catch (error) {
            console.log(error);
			throw error;
        }
    },

    fetchAgentsById: async(id) => {
        try {
            const dataById = await AgentsService.getAgentById(id);
            return dataById;
        } catch (error) {
            console.log(error);
			throw error;
        }
    }

}

export default AgentsSSlices;