import {NextPage} from 'next';
import React, {useState} from 'react';

import {
	FaFacebookF,
	FaTwitter,
	FaClipboard,
	FaUser,
	FaAward,
	FaProductHunt,
	FaSearch,
	FaPhoneAlt,
} from 'react-icons/fa';
import {IoMdMail} from 'react-icons/io';
import {MdLocationOn} from 'react-icons/md';

import {ImInstagram} from 'react-icons/im';

import {FiMenu} from 'react-icons/fi';
import Banner from '@healthvisa/components/banner';
import Blogs from '@healthvisa/components/blogs';
import CardsSection from '@healthvisa/components/card';
import VerticalTimeline from '@healthvisa/components/timeline';

const HealthVisa: NextPage = () => {
	const [togglemenu, setTogglemenu] = useState(false);

	const toggleNav = () => {
		setTogglemenu(!togglemenu);
	};

	const navlinks = [
		{
			id: 1,
			name: 'HOME',
		},
		{
			id: 2,
			name: 'ABOUT US',
		},
		{
			id: 3,
			name: 'SERVICES',
		},
		{
			id: 4,
			name: 'OUR PRODUCTS',
		},
		{
			id: 5,
			name: 'CONTACT US',
		},
	];

	const state = [
		{
			id: 1,
			title: 'staff',
			count: '150',
			icon: <FaClipboard />,
		},
		{
			id: 2,
			title: 'Customer',
			count: '2000',
			icon: <FaUser />,
		},
		{
			id: 3,
			title: 'Awards',
			count: '10',
			icon: <FaAward />,
		},
		{
			id: 4,
			title: 'Products',
			count: '500+',
			icon: <FaProductHunt />,
		},
	];
	const services = [
		{
			id: 1,
			name: 'TABLETS',
			Image: '/tablets.jpg',
		},
		{
			id: 2,
			name: 'SYRUP',
			Image: '/syrup.jpg',
		},
		{
			id: 3,
			name: 'INJECTION',
			Image: '/injection.jpg',
		},
		{
			id: 4,
			name: 'OINTMENT',
			Image: '/Ointment.jpg',
		},
		{
			id: 5,
			name: 'OIL',
			Image: '/oil.jpg',
		},
		{
			id: 6,
			name: 'EAR EYE DROPS',
			Image: '/eye-drop.jpg',
		},
	];
	const contants = [
		{
			id: 1,
			name: 'TABLETS',
			Image: '/content.jpg',
		},
		{
			id: 2,
			name: 'SYRUP',
			Image: '/content1.jpg',
		},
		{
			id: 3,
			name: 'INJECTION',
			Image: '/content2.jpg',
		},
		{
			id: 4,
			name: 'OINTMENT',
			Image: '/content3.jpg',
		},
		{
			id: 5,
			name: 'OIL',
			Image: '/content4.jpg',
		},
		{
			id: 6,
			name: 'EAR EYE DROPS',
			Image: '/content5.jpg',
		},
	];

	return (
		<div className="container ">
			{/* SECTION NAVBAR */}
			<div className="container navbar-main text-[#333333] fixed left-0 right-0 top-0 z-10 bg-white flex justify-between items-center">
				<div className="ml-10 w-32 h-24">
					<img src="/zoic.png" alt="" />
				</div>
				<div className="w-full flex justify-end  text-sm font-bold tracking-widest cursor-pointer">
					<ul className="flex justify-between items-center gap-1">
						{navlinks.map((link, index) => (
							<li
								className="hover:bg-[#0ca1b8] hover:text-white rounded-xl py-2 px-5"
								style={{
									backgroundColor: index === 0 ? '#0ca1b8' : 'none',
								}}
								key={link.id}>
								{link.name}
							</li>
						))}
					</ul>
				</div>
				<div className="px-2">
					<div className="flex items-center bg-gray-100 p-2 border-[1px]  shadow-sm rounded-xl border-[#0ca1b8]">
						<input
							type="text"
							placeholder="Search..."
							className="bg-transparent outline-none flex-grow px-2 text-gray-700"
						/>
						<FaSearch className="h-6 w-6 text-[#0ca1b8] cursor-pointer" />
					</div>
				</div>
			</div>
			<div className="fixed top-0 w-full h-28 bg-white">
				<div className="ml-10 w-32 h-24 py-3 pr-5  fixed">
					<img src="/zoic.png" alt="" />
				</div>
				{togglemenu && (
					<ul className="nav-list flex">
						{navlinks.map((link) => (
							<li
								className="nav-item flex font-bold text-sm tracking-widest cursor-pointer"
								key={link.id}>
								{link.name}
							</li>
						))}
					</ul>
				)}

				<button
					type="button"
					onClick={toggleNav}
					className="btn hover:#0ca1b8 text-3xl m-2 top-2 right-3 absolute text-[#0ca1b8]">
					<span>
						<FiMenu />
					</span>
				</button>
			</div>
			<div className="">
				<Banner />
			</div>
			{/* SECTION ABOUT US */}
			<div className="py-8 px-5">
				<div className="px-5 text-2xl text-[#333333]  font-bold mt-11   text-left">
					<h6>ABOUT US</h6>
					<h2 className="text-[#0ca1b8] mt-4">Welcome to Zoic Life Sciences</h2>
				</div>
				<div className="px-5 text-sm mt-4">
					<p>
						Zoic Life Sciences has earned a reputation as a Top Pharma Company
						in Dehradun with complete customer satisfaction, which has been
						accredited by the ISO 9001:2008, WHO, GMP, and FDI specialized
						agencies. The organization has also been known as the best PCD
						Pharma Franchise Company in India.
					</p>
					<p className="mt-3">
						About Us Welcome to Zoic Life Sciences Zoic Life Sciences has
						earned a reputation as a Top Pharma Company in Dehradun with
						complete customer satisfaction, which has been accredited by the
						ISO 9001:2008, WHO, GMP, and FDI specialized agencies. The
						organization has also been known as the best PCD Pharma Franchise
						Company in India. We engage in the distribution of a comprehensive
						selection of Pharmaceutical medicines that range from
						Anti-Hypertensives, Hypolipidemic, Anti-Diabetic, Anti-Epileptic,
						Anti-Vertigo, Psychotropic, Anti-Infective, Derma Care, Gynae
						Care, Nutraceuticals, Neutropics, Anti-Oxidant Supplements, Dental
						Care, Post-Operative Wound Management, Eye/Ear Drops, Ayurvedic,
						to Hepatoprotective Products. With a view to a wider expansion of
						pharmaceuticals to promote the nation’s health, our organization
						provides the most profitable opportunities for its Pharma
						Franchise in India.
					</p>
					<button className="bg-[#0ca1b8] mt-4 hover:bg-black hover:underline text-white font-bold tracking-widest py-2 px-5 rounded">
						READ MORE
					</button>
				</div>
			</div>
			{/* SECTION CARD */}
			<CardsSection />
			{/* SECTION SERVICES */}
			<div className="py-8 px-5">
				<div className="flex flex-col items-center justify-center text-center p-6 bg-gray-100">
					{/* Heading */}
					<h2 className="text-[#0ca1b8] text-3xl font-medium mb-4">
						Our Category Range
					</h2>

					<p className="text-lg max-w-4xl">
						Owning ISO GMP manufacturing infrastructure facilities benefits
						associates with in-house services of drug formulations sourced
						from trusted and credible vendors.
					</p>
				</div>

				<div className="flex items-center justify-between h-full w-full  flex-wrap">
					{services.map((service) => (
						<div key={service.id}>
							<div className="flex text-[#0ca1b8] items-center justify-center relative top-52 left-[22%] h-7 w-7/12 text-base bg-white font-bold">
								{service.name}
							</div>
							<div className="hover:opacity-70 w-full">
								<img src={service.Image} alt="" />
							</div>
						</div>
					))}
				</div>
			</div>
			{/* SECTION TimelineCard */}
			<VerticalTimeline />
			{/* SECTION ABOU SECTION */}
			<div className="py-8 px-5">
				<div className=" flex flex-col items-center justify-center text-center p-6 bg-gray-100">
					<div>
						<h2 className="text-[#0ca1b8] text-3xl font-medium mb-4">
							What Make Us To Launch Website and makes us unique ?
						</h2>

						<p className="text-lg max-w-4xl">
							Our Website is run by a team of experienced professionals
							serving the solar industry for a number of years. Quality,
							speed, reliability, consistent support, and, a model to
							provide you genuine buyers and sellers is our pivot.
						</p>
					</div>
					<div className="max-w-4xl my-12 flex w-full justify-between">
						{state.map((states) => (
							<div key={states.id}>
								<div className="text-3xl hover:scale-110 shadow-lg  bg-[#0ca1b8] h-20 w-20 text-white mb-3 rounded-full flex justify-center items-center">
									{states.icon}
								</div>
								<div className="text-xl font-bold tracking-widest">
									<h3 className="text-xl font-semibold">
										{states.title}
									</h3>
									<p className="text-lg text-gray-600">
										{states.count}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* SECTION OUR PRODUCT */}
			<Blogs />
			{/* SECTION content */}
			<div className="py-8 px-5">
				<div className="flex flex-col items-center justify-center text-center ">
					<h2 className="text-[#0ca1b8] text-3xl leading-10 mb-4">
						Award & Achievement
					</h2>
				</div>

				<div className="flex items-center justify-between flex-wrap">
					{contants.map((contant) => (
						<div key={contant.id}>
							<div className="p-3 justify-between md:h-96 md:w-[405px] flex">
								<img src={contant.Image} alt="" />
							</div>
						</div>
					))}
				</div>
			</div>
			{/* SECTION content */}
			<div className="md:flex justify-between ">
				<div className="py-8 px-5 w-[70%]">
					<div className="px-5 text-2xl text-[#333333]  font-bold mt-11   text-left">
						<h2 className="text-[#0ca1b8] text-3xl leading-10 mt-4">
							Start Your Own Ethical Pharma Franchise Business in India
						</h2>
					</div>
					<div className="px-5 text-base mt-4">
						<p>
							Zoic Life Sciences came into existence in the pharmaceutical
							industry in the year 2000 and established itself as a
							reputable Ethical Pharma Franchise Company in India. The
							pharmaceutical products have been approved by the quality
							control professionals, and the organization as a whole
							maintains the code of conduct set forth by the significant
							specializations such as the WHO, GMP, and FDI. We provide the
							best Ethical Pharma Franchise of a wide selection of products
							at the most competitive prices, as well as the most durable
							and appealing packaging material. We have a well-established
							PCD distributorship programme where we provide the best
							Ethical Pharma Products to pharma wholesalers, retailers, PCD
							distributors, and start-ups where medical representatives can
							start their own monopoly-based PCD Ethical Pharma Franchise in
							their territory.
						</p>
						<p className="mt-3">
							With years of experience, we have earned the trust of many
							pharmaceutical consumers and distributors. Our distributors
							will not have to wait long for anything because we are known
							for providing speedy service. Since we are known for our
							prompt service, our distributors will not wait long for
							anything. Moreover, we provide assistance to our Franchise
							associates with marketing, product positioning, and business
							development. For any further queries, please speak to one of
							our sales agents, who will provide you with all the required
							responses regarding the Ethical Pharma Franchise in India at
							+91 70880 14041.
						</p>
					</div>
				</div>
				<div className="w-[40%]  mt-5 p-3 bg-white border-2 shadow-md rounded-md">
					<h2 className="text-2xl font-bold bg-[#0ca1b8] text-white p-4 rounded-t-md">
						Enquire Us
					</h2>
					<form className="p-4">
						<div className="mb-4">
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="mb-4">
							<input
								type="email"
								name="email"
								placeholder="Email"
								className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						<div className="mb-4">
							<input
								type="text"
								name="city"
								placeholder="Your City"
								className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="mb-4">
							<input
								type="tel"
								name="phone"
								placeholder="Phone Number"
								className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="mb-4">
							<textarea
								name="message"
								placeholder="Message"
								className="w-full h-32 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-[#0ca1b8] text-white py-2 rounded hover:bg-black transition-colors">
							Send
						</button>
					</form>
				</div>
			</div>
			<footer className="bg-gray-800  text-white py-10">
				<div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-wrap justify-between">
						{/* Left Section - Company Info */}
						<div className="w-full md:w-1/4 mb-8 md:mb-0">
							<img
								src="/zoic.png"
								alt="Zoic Logo"
								className="mb-4 w-24 h-16 bg-white rounded-xl p-3 "
							/>
							<p className="text-sm">
								Zoic Life Sciences has earned a reputation as a Top Pharma
								Company in Dehradun with complete customer satisfaction,
								which has been accredited by the ISO 9001:2008, WHO, GMP,
								and FDI specialized agencies.
							</p>
						</div>

						{/* Middle Section - Quick Links */}
						<div className="w-full md:w-1/5 mb-8 md:mb-0">
							<h3 className="text-lg text-white  font-bold mb-4">
								Quick Links
							</h3>
							<ul>
								<li className="mb-2 border-b-[1px]">
									<a
										href="#"
										className="hover:text-[#0ca1b8] hover:scale-110">
										Home
									</a>
								</li>
								<li className="mb-2 border-b-[1px]">
									<a href="#" className="hover:text-[#0ca1b8]">
										About
									</a>
								</li>
								<li className="mb-2 border-b-[1px]">
									<a href="#" className="hover:text-[#0ca1b8]">
										Our Product
									</a>
								</li>
								<li className="mb-2 border-b-[1px]">
									<a href="#" className="hover:text-[#0ca1b8]">
										Contract Manufacturing
									</a>
								</li>
								<li className="mb-2 border-b-[1px]">
									<a href="#" className="hover:text-[#0ca1b8]">
										Track Order
									</a>
								</li>
								<li className="mb-2 border-b-[1px]">
									<a href="#" className="hover:text-[#0ca1b8]">
										Contact
									</a>
								</li>
								<li className="mb-2 border-b-[1px]">
									<a href="#" className="hover:text-[#0ca1b8]">
										Franchise Opportunity
									</a>
								</li>
							</ul>
						</div>

						{/* Middle Section - Our Product */}
						<div className="w-full md:w-1/5 mb-8 md:mb-0">
							<h3 className="text-lg  text-white  font-bold mb-4">
								Our Product
							</h3>
							<ul>
								<li className="mb-2  border-b-[1px]">
									<a href="#" className="hover:text-[#0ca1b8]">
										Tablets
									</a>
								</li>
								<li className="mb-2 border-b-[1px]">
									<a href="#" className="hover:text-[#0ca1b8]">
										Capsules
									</a>
								</li>
								<li className="mb-2 border-b-[1px]">
									<a href="#" className="hover:text-[#0ca1b8]">
										Syrups
									</a>
								</li>
								<li className="mb-2 border-b-[1px]">
									<a href="#" className="hover:text-[#0ca1b8]">
										Oil
									</a>
								</li>
								<li className="mb-2 border-b-[1px]">
									<a href="#" className="hover:text-[#0ca1b8]">
										Injection
									</a>
								</li>
							</ul>
						</div>

						{/* Right Section - Contact */}
						<div className="w-full md:w-1/4">
							<h3 className="text-lg text-white  font-bold mb-4">
								Connect With Us
							</h3>
							<ul>
								<li className="mb-2">
									<p className="flex items-center">
										<span className="mr-2">
											<MdLocationOn />
										</span>{' '}
										Plot No.72/1 Tyagi Road, Dehradun-248001,
										Uttarakhand, India
									</p>
								</li>
								<li className="mb-2">
									<p className="flex items-center">
										<span className="mr-2">
											<FaPhoneAlt />
										</span>{' '}
										+91 7088014041, +91 7060249961
									</p>
								</li>
								<li className="mb-2">
									<p className="flex items-center">
										<span className="mr-2">
											<IoMdMail />
										</span>{' '}
										zoiclifesciences.sales@gmail.com
									</p>
								</li>
								<li className="mb-2">
									<p className="flex items-center">
										<span className="mr-2">
											<IoMdMail />
										</span>{' '}
										zoiclifesciences.med@gmail.com
									</p>
								</li>
							</ul>

							{/* Social Icons */}
							<div className="flex space-x-4 mt-4">
								<li className="hover:bg-[#0ca1b8] rounded-full text-white h-10 w-12 flex  text-center items-center justify-center cursor-pointer">
									<FaFacebookF />
								</li>

								<li className="hover:bg-[#0ca1b8] rounded-full text-white h-10 w-12 flex  text-center items-center justify-center cursor-pointer">
									<FaTwitter />
								</li>

								<li className="hover:bg-[#0ca1b8] rounded-full text-white h-10 w-12 flex  text-center items-center justify-center cursor-pointer">
									<ImInstagram />
								</li>

								<li className="hover:bg-[#0ca1b8] rounded-full text-white h-10 w-12 flex  text-center items-center justify-center cursor-pointer">
									<ImInstagram />
								</li>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className="bg-gray-800 border-t-[1px]  text-white py-10">
				<div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
					<div className="  text-white text-sm">
						© 2023 Zoic Life Sciences All Rights Reserved. || Web Development
						and Designing By {''}
						<span className="text-[#0ca1b8] font-bold cursor-pointer ease-in-out ">
							WebHopers.
						</span>
					</div>
				</div>
			</div>
			{/* SECTION COPYRIGHT */}
		</div>
	);
};

export default HealthVisa;
