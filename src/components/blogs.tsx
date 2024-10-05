import React from 'react';
import Carousel from 'react-material-ui-carousel';

const Logo = (_props: unknown) => (
	<section
		style={{
			backgroundImage: "url('./labs.jpg')",
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			height: '100vh', // Full height of the viewport
		}}>
		<div className="py-8 px-5 bg-cover bg-center h-screen flex flex-col items-center justify-center">
			<h5 className="text-white text-3xl sm:text-2xl text-xl font-medium mb-4 text-center">
				Our Products
			</h5>
			<h2 className="text-2xl sm:text-xl text-lg text-white mb-5 text-center px-4">
				The product portfolio caters to a wide range of PCD Pharma Products, being
				a full-range Pharma Franchise Company.
			</h2>

			<div
				style={{
					transition: 'all 0.25s ease 0s',
				}}
				className="w-full">
				<Carousel animation="slide" indicators={false} autoPlay={true}>
					<Item item={[0, 1, 2, 3]} />
					<Item item={[1, 2, 3, 4]} />
					<Item item={[2, 3, 4, 5]} />
					<Item item={[3, 4, 5, 6]} />
					<Item item={[4, 5, 6, 7]} />
					<Item item={[5, 6, 7, 0]} />
					<Item item={[6, 7, 0, 1]} />
					<Item item={[7, 0, 1, 2]} />
				</Carousel>
			</div>
		</div>
	</section>
);

const Item = (props: {item: any[]}) => {
	const logo = [
		{
			id: 0,
			img: '/2clam.jpg',
			name: '2Clam',
		},
		{
			id: 1,
			img: '/2h-10.jpg',
			name: '2H-10',
		},
		{
			id: 2,
			img: '/2h-25.jpg',
			name: '2H-25',
		},
		{
			id: 3,
			img: '/2h-drops.jpg',
			name: '2H-drops',
		},
		{
			id: 4,
			img: '/2h-syrup.jpg',
			name: '2H-syrup',
		},
		{
			id: 5,
			img: '/3d-tablets.jpg',
			name: '3D-Tablets',
		},
		{
			id: 6,
			img: '/3g-creame.jpg',
			name: '3G-Creame',
		},
		{
			id: 7,
			img: '/4g-cream.jpg',
			name: '4G-Cream',
		},
	];

	return (
		<div className="flex py-[30px] justify-center">
			{props.item.map((num) => (
				<div key={num} className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
					<div className="flex justify-center">
						<img
							className="rounded-2xl object-cover w-full h-auto p-2"
							src={logo[num].img}
							alt={logo[num].name}
						/>
					</div>
					<div className="w-full flex items-center justify-center rounded-xl bg-[#0ca1b8]">
						<div className="flex p-2 text-white text-center justify-center font-bold">
							{logo[num].name}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Logo;
