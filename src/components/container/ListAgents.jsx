//ListAgents.jsx
import React from "react";
import { useAgentsContext } from "../../context/AgentsContext";

const ListAgents = ({ itemsData }) => {

	const { setSelectAgentId, agentDetailById } = useAgentsContext();

	const handleSelectId = () => {
		setSelectAgentId(itemsData.id);
	}

	return (
		<div onClick={handleSelectId} className="ListAgents flex flex-col items-end pr-5 mb-7 cursor-pointer">
			<div className=" relative overflow-hidden after:absolute after:w-full after:h-0.5 after:bg-[#038C36] after:z-50 after:bottom-0 before:absolute before:w-[88%] before:h-0.5 before:bg-[#038C36] before:z-50 before:bottom-1 before:left-1/2 before:-translate-x-1/2">
				<div className=" z-10">
					<img className={`${itemsData.name} absolute size-15 overflow-hidden z-10 top-1/2 -translate-x-1/2 left-1/2 w-full h-full object-top object-cover`} src={`${itemsData.imgAgents}`} alt="" />
				</div>

				<div className={`${agentDetailById?.color?.textColor || []} z-20`}>
					<svg width="60" height="60" viewBox="0 0 68 68"  fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M63 5V63H5V22.459L25.3691 5H63Z" className="stroke-current" strokeWidth="2" />
						<path d="M67 1V67H1V20.8594L24.1699 1H67Z" className="stroke-current" strokeWidth="2" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default ListAgents;
