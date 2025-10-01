//index.jsx

import React, { useEffect, useState } from 'react';
import Agents from "../components/container/Agents";
import InforAgents from "../components/container/InforAgents";
import ListAgents from "../components/container/ListAgents";
import VerticalMenu from "../components/container/VerticalMenu";
import NavBar from "../components/NavBar";
import { AgentsProvider, useAgentsContext } from "../context/AgentsContext";


const IndexContext = () => {

	const { AgentsData, agentDetailById, setSelectAgentId, selectAgentId } = useAgentsContext();
	const ListAgentsData = AgentsData.data || [];
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	useEffect(()=>{
		if (ListAgentsData.length > 0 && !selectAgentId) {
			setSelectAgentId(ListAgentsData[0].id);
		}
	})

	const handleMouseMove = (e) => {
		const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
		const x = ((left + width / 2 - e.clientX) / width) * 30;
		const y = ((top + height / 2 - e.clientY) / height) * 30;
		setOffset({ x, y });
	};

	return (
		<div>
			{/* <div style={{background:`no-repeat top center / 100% 100%`}} className="bg-[url(/bg-agents/)] w-full h-screen"> */}
			<div className="w-full h-screen overflow-hidden cursor-default" style={{ background: `url(${agentDetailById?.bgAgents || null}) no-repeat top center / 100% 100%` }}>
				<header className="w-full px-10 fixed top-8">
					<NavBar />
				</header>
				<main className="flex items-center px-10 h-screen gap-5">
					<section className="w-[calc(7%-6.66px)]">
						<VerticalMenu />
					</section>
					<section
						onMouseMove={handleMouseMove}
						className="w-[calc(53%-6.66px)] max-h-[865px] self-end"
						style={{
							transform: `translate(${offset.x}px, ${offset.y}px)`,
							transition: "transform 0.1s ease-out",
						}}
					>
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
