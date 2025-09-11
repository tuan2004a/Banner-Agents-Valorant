//index.jsx

import React from 'react';
import Agents from "../components/container/Agents";
import InforAgents from "../components/container/InforAgents";
import ListAgents from "../components/container/ListAgents";
import VerticalMenu from "../components/container/VerticalMenu";
import NavBar from "../components/NavBar";
import { AgentsProvider, useAgentsContext } from "../context/AgentsContext";


const IndexContext = () => {

	const { AgentsData, agentDetailById } = useAgentsContext();
	const ListAgentsData = AgentsData.data || [];
	console.log(agentDetailById);

	return (
		<div>
			{/* <div style={{background:`no-repeat top center / 100% 100%`}} className="bg-[url(/bg-agents/)] w-full h-screen"> */}
			<div className="w-full h-screen overflow-hidden cursor-default" style={{ background: `url(${agentDetailById?.bgAgents || []}) no-repeat top center / 100% 100%` }}>
				<header className="w-full px-10 fixed top-8">
					<NavBar />
				</header>
				<main className="flex items-center px-10 h-screen gap-5">
					<section className="w-[calc(7%-6.66px)]">
						<VerticalMenu />
					</section>
					<section className="w-[calc(53%-6.66px)] max-h-[865px] self-end overflow-hidden">
						<Agents />
					</section>
					<section className="w-[calc(29%-6.66px)]">
						<InforAgents />
					</section>
				</main>
				<div className="absolute w-[calc(12%-15px)] top-1/2 right-0 -translate-y-1/2">{ListAgentsData.length > 0 && ListAgentsData.map((items, index) => <ListAgents itemsData={items} key={index} />)}</div>
			</div>
		</div>
	);
}


const Index = () => {
    return (
		<AgentsProvider>
			<IndexContext />
		</AgentsProvider>
	);
}
export default Index;
