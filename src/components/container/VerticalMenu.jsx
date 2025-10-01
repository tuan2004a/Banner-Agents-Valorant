import React from "react";
import { useAgentsContext } from "../../context/AgentsContext";

const VerticalMenu = () => {
	const { agentDetailById } = useAgentsContext();

	return (
		<div className={`${agentDetailById?.color?.textColor || null} translate-y-5`}>
			<h6 style={{ textOrientation: `mixed`, writingMode: `vertical-rl` }} className="uppercase tracking-[16px] text-[14px] leading-none">
				BIND PERSONALIZADA
			</h6>
		</div>
	);
};

export default VerticalMenu;
