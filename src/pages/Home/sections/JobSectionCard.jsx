import React from "react";
import { FiMapPin } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { SlBriefcase } from "react-icons/sl";
import { Link } from "react-router";

const JobSectionCard = () => {
	return (
		<div className="border border-blue-100 p-6 rounded-lg bg-blue-50 hover:border-blue-300 hover:bg-white hover:-translate-y-1.5 transition duration-200">
			<div className="flex gap-4 items-center mb-5">
				<div>
					<img src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/brands/brand-6.png" alt="" />
				</div>
				<div className="">
					<h4 className="text-lg mb-0.5 font-bold">Nintendo</h4>
					<p className="flex items-center gap-1 text-gray-400 text-xs">
						<FiMapPin /> New York, US
					</p>
				</div>
			</div>
			<h3 className="font-bold text-lg mb-2">Products Manager</h3>
			<div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
				<p className="flex items-center gap-1">
					<SlBriefcase /> Full time
				</p>
				<p className="flex items-center gap-1">
					<GoClock /> 6 minutes ago
				</p>
			</div>
			<p className="mb-4 text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus
				pariatur.
			</p>
			<div className="flex gap-1.5 mb-6">
				<Link className="bg-blue-100 px-1.5 pb-1 pt-1 rounded-sm text-xs/tight">ASP .Net</Link>
				<Link className="bg-blue-100 px-1.5 pb-1 pt-1 rounded-sm text-xs/tight">Figma</Link>
			</div>
			<div className="flex justify-between items-center">
				<div>
					<span className="text-lg text-blue-500 font-bold">250</span>
					<span>/Hour</span>
				</div>
				<button className="bg-blue-500/10 text-blue-400 pt-1.5 pb-2 px-3 rounded-md hover:text-white cursor-pointer hover:bg-blue-500 font-semibold text-sm transition duration-100">
					Apply now
				</button>
			</div>
		</div>
	);
};

export default JobSectionCard;
