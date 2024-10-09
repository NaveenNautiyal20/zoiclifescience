import React from 'react';
import Carousel from 'react-material-ui-carousel';

const Logo = () => (
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
