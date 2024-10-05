import React from 'react';
import {CheckBadgeIcon, UsersIcon, CubeIcon, ScaleIcon} from '@heroicons/react/24/solid';

const TimelineCard = ({
	title,
	description,
	color,
	icon: Icon,
}: {
	title: string;
	description: string;
	color: string;
	icon: any;
}) => (
	<div className="flex flex-col md:flex-row items-center md:items-start mb-8 relative">
		{/* Timeline line and dot */}
		<div className="flex flex-col items-center">
			<div
				className={`w-6 h-6 rounded-full flex items-center justify-center ${color} text-white shadow-lg`}>
				<Icon className="h-4 w-4" />
			</div>
			<div className="w-1 h-full bg-gray-300" />
		</div>

		{/* Card Content */}
		<div className="bg-white rounded-lg shadow-lg p-6 ml-6 md:w-1/2 hover:scale-105 transform transition duration-500 ease-in-out">
			<h3 className={`text-lg font-bold ${color} mb-2`}>{title}</h3>
			<p className="text-gray-600">{description}</p>
		</div>
	</div>
);

const VerticalTimeline = () => (
	<div
		style={{
			backgroundImage: "url('./labs.jpg')",
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			height: '', // Full height of the viewport
		}}
		className=" py-10  flex items-center justify-center">
		<div className="max-w-4xl mx-auto px-4">
			<h2 className="text-3xl font-bold text-center text-white mb-10">
				Why Choose Us For Pharma Third Party Manufacturing
			</h2>

			<div className="relative">
				<TimelineCard
					title="ISO 9001:2008 CERTIFIED"
					description="Zoic Life Sciences is an ISO certified Pharma company, committed to high quality products. We have also earned the right amount of trust, respect in the market."
					color="bg-pink-500 rounded"
					icon={CheckBadgeIcon}
				/>
				<TimelineCard
					title="OUR QUALITY APPROACH"
					description="We are committed to follow the quality norms for manufacturing products. We formulate all our offered medicines as per the set quality norms."
					color="bg-green-500"
					icon={ScaleIcon}
				/>
				<TimelineCard
					title="DEDICATED WORKFORCE"
					description="Our team members are quite diverse to create a comprehensive, high-performance culture in our company, which will affect our business outcomes."
					color="bg-purple-500"
					icon={UsersIcon}
				/>
				<TimelineCard
					title="PACKAGING"
					description="We make use of the proven techniques for packaging all the medicines. By using such advanced techniques, we aim to ensure the leakage & breakage proof delivery."
					color="bg-blue-500"
					icon={CubeIcon}
				/>
				<TimelineCard
					title="ETHICS AND COMPLIANCE"
					description="Our policies and procedures are carefully devised so that our company and partners conduct business in a legal, ethical and responsible manner."
					color="bg-red-500"
					icon={ScaleIcon}
				/>
			</div>
		</div>
	</div>
);

export default VerticalTimeline;
