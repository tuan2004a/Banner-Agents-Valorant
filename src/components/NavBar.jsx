import React from "react";
import { useAgentsContext } from "../context/AgentsContext";


const NavBar = () => {

	const { agentDetailById } = useAgentsContext();

	return (
		<div className={`${agentDetailById?.color?.textColor || []} navbar w-full flex items-start justify-between`}>
			<div >
				<svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g>
						<path d="M39.75 0.25V26.8965L26.8965 39.75H0.25V0.25H39.75Z" className="stroke-current" strokeWidth="0.5" />
						<path d="M4 16V5L28 33H18L4 16Z" className="fill-current"/>
						<path d="M33 16V5L21 20H29L33 16Z" className="fill-current" />
					</g>
				</svg>
			</div>
			<nav>
				<ul className="flex space-x-23 items-center leading-none uppercase">
					<li>Latest</li>
					<li>Collection</li>
					<li>Career</li>
					<li>Soter</li>
					<button className="flex flex-col space-y-1  ">
						<span className={`${agentDetailById?.color?.bgColor || []} h-1 w-7`}></span>
						<span className={`${agentDetailById?.color?.bgColor || []} h-1 w-4`}></span>
					</button>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
