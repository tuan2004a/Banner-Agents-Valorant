import React from 'react';
import { useAgentsContext } from "../../context/AgentsContext";

const Agents = () => {

	const { agentDetailById } = useAgentsContext();

    return (
		<div className="">
			<div>
				<img className="size-full scale-150 translate-y-20" src={`${agentDetailById?.imgAgents || []}`} alt="" />
			</div>
		</div>
	);
}

export default Agents
