// import React, {useState} from 'react';

// const Banner = () => {
// 	const banners = [
// 		{id: 1, image: './zoic2.jpg'},
// 		{id: 2, image: './zoic3.jpg'},
// 		{id: 3, image: './zoic1.jpg'},
// 		{id: 4, image: './zoic.jpg'},
// 	];

// 	const [currentIndex, setCurrentIndex] = useState(0);

// 	const prevSlide = () => {
// 		setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
// 	};

// 	const nextSlide = () => {
// 		setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
// 	};

// 	return (
// 		<div className="relative border pt-[88px] h-full overflow-hidden">
// 			<div
// 				className="flex transition-transform duration-500 ease-in-out"
// 				style={{transform: `translateX(-${currentIndex * 100}%)`}}>
// 				{banners.map((banner) => (
// 					<img
// 						key={banner.id}
// 						src={banner.image}
// 						alt={`Banner ${banner.id}`}
// 						className="w-full h-full object-cover"
// 					/>
// 				))}
// 			</div>

// 			{/* Left Arrow */}
// 			<button
// 				onClick={prevSlide}
// 				className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-[#0ca1b8] p-2 rounded-full focus:outline-none hover:bg-gray-600">
// 				&#10094;
// 			</button>

// 			{/* Right Arrow */}
// 			<button
// 				onClick={nextSlide}
// 				className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-[#0ca1b8] p-2 rounded-full focus:outline-none hover:bg-gray-600">
// 				&#10095;
// 			</button>

// 			{/* Indicator Dots */}
// 			<div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
// 				{banners.map((_, index) => (
// 					<button
// 						key={index}
// 						onClick={() => setCurrentIndex(index)}
// 						className={`h-3 w-3 rounded-full ${
// 							currentIndex === index ? 'bg-[#0ca1b8]' : 'bg-gray-400'
// 						}`}
// 					/>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default Banner;

import React from 'react';
import Carousel from 'react-material-ui-carousel';

const Logo = (_props: unknown) => (
	<section>
		<div className="w-full h-full">
			<div>
				<Carousel animation="slide" indicators={true} autoPlay>
					<Item item={[0]} />
					<Item item={[1]} />
					<Item item={[2]} />
					<Item item={[3]} />
				</Carousel>
			</div>
		</div>
	</section>
);
const Item = (props: {item: any[]}) => {
	const logo = [
		{
			id: 0,
			img: './zoic2.jpg',
		},
		{
			id: 1,
			img: './zoic3.jpg',
		},
		{
			id: 2,
			img: './zoic1.jpg',
		},
		{
			id: 3,
			img: './zoic.jpg',
		},
	];
	return (
		<div className="pt-[88px] object-cover ">
			{props.item.map((num) => (
				<div className="flex justify-center object-cover h-full w-full">
					<img className="w-full h-full object-cover" src={logo[num].img} />
				</div>
			))}
		</div>
	);
};

export default Logo;
