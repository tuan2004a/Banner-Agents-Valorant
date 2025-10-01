import React from "react";
import { useAgentsContext } from "../../context/AgentsContext";

const InforAgents = () => {
	const { agentDetailById } = useAgentsContext();

	return (
		<div className="mt-18">
			<h5 className={` ${agentDetailById?.color?.textColor || null} text-lg tracking-[10px]`}>{agentDetailById?.role?.role || null}</h5>
			<h1 style={{ fontFamily: `Insomnia` }} className={` tracking-[5px] text-7xl inline-block leading-normal bg-linear-to-t ${agentDetailById?.color?.textGradient || null} text-transparent not-italic bg-clip-text`}>
				{agentDetailById?.name}
			</h1>
			<div className={`${agentDetailById?.color?.textColor || null} ${agentDetailById?.color?.borderColor || null} flex items-start space-x-5 p-5`}>
				<img className="size-11 rounded-full block shrink-0" src={`${agentDetailById?.role?.img || null}`} />
				<div>
					<h5 className="text-base mb-1.5">{agentDetailById?.role?.role || null}</h5>
					<p className="text-xs leading-normal inline-block">A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.</p>
				</div>
			</div>

			{/* skill */}
			<div className={`${agentDetailById?.color?.textColor || null} skill grid grid-cols-4 mt-3 gap-3 uppercase font-medium`}>
				<div className={`${agentDetailById?.color?.borderColor || null}  w-full flex flex-col justify-center items-center`}>
					<img className="w-[75%] py-2" src={`${agentDetailById?.skill?.Q?.img || null}`} />
					<p className="w-full text-center leading-none py-1 border-t">Q</p>
				</div>
				<div className={`${agentDetailById?.color?.borderColor || null} w-full flex flex-col justify-center items-center`}>
					<img className="w-[75%] py-2" src={`${agentDetailById?.skill?.E?.img || null}`} />
					<p className="w-full text-center leading-none py-1 border-t">e</p>
				</div>
				<div className={`${agentDetailById?.color?.borderColor || null} w-full flex flex-col justify-center items-center`}>
					<img className="w-[75%] py-2" src={`${agentDetailById?.skill?.C?.img || null}`} />
					<p className="w-full text-center leading-none py-1 border-t ">c</p>
				</div>
				<div className={`${agentDetailById?.color?.borderColor || null} w-full flex flex-col justify-center items-center`}>
					<img className="w-[75%] py-2" src={`${agentDetailById?.skill?.X?.img || null}`} />
					<p className="w-full text-center leading-none py-1 border-t ">x</p>
				</div>
			</div>
			{/* skill */}

			<div className={`btnView ${agentDetailById?.name || null} mt-8 ml-[8px] relative size-fit `}>
				<button className={`z-10 cursor-pointer overflow-hidden py-[1.3rem] px-[3rem] text-white ${agentDetailById?.color?.borderColor || null} text-lg `}>view contract</button>
			</div>
		</div>
	);
};

export default InforAgents;
