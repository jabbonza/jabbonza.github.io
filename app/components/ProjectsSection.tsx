'use client';

import { motion } from 'framer-motion';
import { li } from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'SCTVMS',
		description: 'Dashboard and data management system for Santa Cruz Traffic Management Office',
		image: '/sctvms.png',
		link: 'https://drive.google.com/drive/folders/1P_f5SpJMLKOkIxacQuaPUXlmrYXutXLF?usp=sharing'
	},
	{
		id: 2,
		title: 'MeloFinder',
		description: 'Prototype for a mobile application that finds nearby music events or concerts.',
		image: '/melofinder.png',
		link: 'https://www.figma.com/proto/F38zN5nu1xGZ46z8z2qClX/MeloFinder-Prototype?node-id=68-591&p=f&t=bWJNkZbMGofLqKCC-1&scaling=scale-down&content-scaling=fixed&page-id=26%3A4&starting-point-node-id=68%3A591'
	},
	{
		id: 3,
		title: 'ServIsko',
		description: 'Prototype for a mobile application for finding nearby service providers.',
		image: '/servisko.png',
		link: 'https://www.figma.com/proto/7TrtAFCBJAphpEP31DdDpS/ServIsko-Prototype?node-id=522-4506&p=f&t=ytrcZxcXFk5BDBRJ-1&scaling=min-zoom&content-scaling=fixed&page-id=221%3A1866'
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Featured Projects
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
					>
						<Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
						<div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-300 mb-4">{project.description}</p>
							<div className="flex gap-4">
								<Link
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
								>
									View Project
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</div>

		</section>
	);
}
