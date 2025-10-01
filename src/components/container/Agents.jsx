import React from "react";
import { useAgentsContext } from "../../context/AgentsContext";

const Agents = () => {
	const { agentDetailById } = useAgentsContext();

	return (
		<div>
			<div>
				<img className="size-full scale-150 translate-y-20" src={`${agentDetailById?.imgAgents || null}`} />
			</div>
		</div>
	);
};

export default Agents;
