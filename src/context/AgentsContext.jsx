//AgentsContext.jsx

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import AgentsService from "../store/slices/AgentsSlices";

export const AgentsContext = createContext(null);

const initialState = {
	Agents: [],
};


export const AgentsProvider = ({ children }) => {
	const [state, setState] = useState(initialState);
	const [AgentsData, setAgentsData] = useState([]);
	const [selectAgentId, setSelectAgentId] = useState(null);
	const [agentDetailById, setAgentDetailById] = useState();

	const fetchsAgentsRef = useRef(null);

	// fetch all agents
	const LoadAgents = useCallback(async () => {
		try {
			const result = await AgentsService.fetchAllAgents();
			setAgentsData(result);
			return result;
		} catch (error) {
			console.log(error);
			throw error;
		}
	});

	useEffect(() => {
		if (!fetchsAgentsRef.current) {
			fetchsAgentsRef.current = true;
			LoadAgents();
		}
	}, [LoadAgents]);

	// fetch agent by id
	const LoadAgentsById = useCallback(async (id) => {
		try {
			const resultById = await AgentsService.fetchAgentsById(id);
			setAgentDetailById(resultById);
			return resultById;
		} catch (error) {
			console.log(error);
			throw error;
		}
	});

	// call api when selectAgentId change
	useEffect(() => {
		if (selectAgentId) {
			LoadAgentsById(selectAgentId);
		}
	}, [selectAgentId]);


	const contextValue = useMemo(
		() => ({
			AgentsData,
			agentDetailById,
			setSelectAgentId,
			LoadAgents,
			selectAgentId,
		}),
		[AgentsData, selectAgentId, LoadAgents, agentDetailById]
	);

	return <AgentsContext.Provider value={contextValue}>{children}</AgentsContext.Provider>;
};

export const useAgentsContext = () => {
	const context = useContext(AgentsContext);
	if (!context) throw new Error("useAgentsContext must be used within a AgentsProvider");
	return context;
};