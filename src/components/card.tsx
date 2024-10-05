import React from 'react';
import {
	GlobeAltIcon,
	RocketLaunchIcon,
	DevicePhoneMobileIcon,
	BriefcaseIcon,
} from '@heroicons/react/24/solid';

const Card = ({
	title,
	icon: Icon,
	description,
	color,
}: {
	title: string;
	icon: any;
	description: string;
	color: string;
}) => (
	<div
		className={`flex flex-col items-center bg-white rounded-xl shadow-md p-6 mx-4 my-4 transform transition duration-500 hover:scale-105 ${color}`}>
		<div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg mb-4">
			<Icon className="h-10 w-10 text-gray-700" />
		</div>
		<h2 className="text-lg font-bold mb-2 text-white">{title}</h2>
		<p className="text-sm text-center text-white">{description}</p>
	</div>
);

const CardsSection = () => (
	<div
		style={{
			backgroundImage: "url('./labs.jpg')",
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			height: '100vh', // Full height of the viewport
		}}
		className="flex flex-col items-center justify-center py-10">
		<h1 className="text-4xl font-bold mb-10 text-white">
			Our Mission, Vision, Value
		</h1>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
			<Card
				title="OUR MISSION"
				icon={GlobeAltIcon}
				description="We at Zoic Life Sciences believe that complete customer satisfaction is the key to expand business everywhere."
				color="bg-teal-500"
			/>
			<Card
				title="OUR VISION"
				icon={RocketLaunchIcon}
				description="To uphold our social responsibilities of delivering the highest standard healthcare services."
				color="bg-yellow-500"
			/>
			<Card
				title="OUR VALUE"
				icon={DevicePhoneMobileIcon}
				description="Our Business Values with clients are as simple as LIFELONG 'Business Relations'."
				color="bg-blue-500"
			/>
			<Card
				title="QUALITY CONTROL"
				icon={BriefcaseIcon}
				description="Our medicines are developed under the strict guidance of renowned healthcare professionals."
				color="bg-green-500"
			/>
		</div>
	</div>
);

export default CardsSection;
