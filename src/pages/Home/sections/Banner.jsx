import React from "react";
import { motion } from "motion/react";
import img1 from "../../../assets/home/banner/img1.jpg";
import img2 from "../../../assets/home/banner/img2.jpg";
import icon1 from "../../../assets/home/banner/icon1.png";
import icon2 from "../../../assets/home/banner/icon2.png";
import { Link } from "react-router";
const Banner = () => {
	return (
		<div className="py-10 overflow-hidden bg-blue-50">
			<div className="navbar container max-w-7xl mx-auto px-4 flex gap-35">
				<div className="w-3/5  flex items-center flex-col">
					<h1 className="text-6xl/tight font-extrabold mb-5">
						<span>Career Code</span> Your Path to Better Opportunities
					</h1>
					<p className="text-gray-500 mb-4 text-lg">
						<span>Career</span> Code is a self-driven home work project designed to help you practice, grow, and
						showcase real-world job preparation skills with confidence.
					</p>
					<Link
						className="bg-blue-500 pt-2.5 pb-3 px-6 rounded-lg text-white cursor-pointer hover:bg-blue-950 hover:-translate-y-0.5 transition duration-200 font-semibold self-start"
						to={"/register"}
					>
						Get Started
					</Link>
				</div>
				<div className="w-2/5 relative min-h-[700px]">
					<motion.img
						src={img1}
						animate={{ y: [40, 100, 40] }}
						transition={{ duration: 5, repeat: Infinity }}
						alt=""
						className="rounded-t-4xl rounded-br-4xl border-b-8 border-l-8 border-blue-500"
					/>
					<motion.img
						src={icon1}
						animate={{ y: [30, 120, 30] }}
						transition={{ duration: 10, repeat: Infinity }}
						alt=""
						className="absolute -right-20 top-15"
					/>
					<motion.img
						src={img2}
						animate={{ x: [100, 150, 100] }}
						transition={{ duration: 10, repeat: Infinity }}
						className="rounded-t-4xl rounded-br-4xl border-b-8 border-l-8 border-blue-500"
						alt=""
					/>
					<motion.img
						src={icon2}
						animate={{ y: [0, 50, 0] }}
						transition={{ duration: 10, repeat: Infinity }}
						alt=""
						className="absolute -left-10 bottom-50"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
