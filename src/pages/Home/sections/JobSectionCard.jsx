import React from "react";
import { FiMapPin } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { SlBriefcase } from "react-icons/sl";
import { Link } from "react-router";

const JobSectionCard = ({ jobData }) => {
	const {
		_id,
		title,
		location,
		jobType,
		category,
		applicationDeadline,
		salaryRange,
		description,
		company,
		requirements,
		responsibilities,
		status,
		hr_email,
		hr_name,
		company_logo,
	} = jobData;

	console.log(jobData);

	return (
		<div className="border border-blue-100 p-6 rounded-lg bg-blue-50 hover:border-blue-300 hover:bg-white hover:-translate-y-1.5 transition duration-200 group">
			<div className="flex gap-4 items-center mb-5">
				<figure>
					<img className="w-12 h-12" src={company_logo} alt={company} />
				</figure>
				<div className="">
					<h4 className="text-lg mb-0.5 font-bold">{company}</h4>
					<p className="flex items-center gap-1 text-gray-400 text-xs">
						<FiMapPin /> {location}
					</p>
				</div>
			</div>
			<h3 className="font-bold text-lg mb-2">{title}</h3>
			<div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
				<p className="flex items-center gap-1">
					<SlBriefcase /> {jobType}
				</p>
				<p className="flex items-center gap-1">
					<GoClock /> {applicationDeadline}
				</p>
			</div>
			<div className="mb-2">
				<span className="text-lg text-blue-500 font-bold">
					{salaryRange.min} - {salaryRange.max}
				</span>
				<span className="uppercase ml-2">{salaryRange.currency}</span>
			</div>
			<p className="mb-4 text-gray-700">{description.split(" ").slice(0, 12).join(" ")}...</p>
			<div className="flex flex-wrap gap-1.5 mb-6">
				{requirements.slice(0, 2).map((requirement, index) => (
					<Link key={index} className="bg-blue-100 px-1.5 pb-1 pt-1 rounded-sm text-xs/tight">
						{requirement}
					</Link>
				))}
			</div>
			<div className="flex justify-between items-center">
				<Link
					to={`/jobs/${_id}`}
					className="bg-blue-500/10 text-blue-400 pt-1.5 pb-2 px-3 rounded-md group-hover:text-white cursor-pointer group-hover:bg-blue-500 font-semibold text-sm transition duration-100"
				>
					Job Details
				</Link>
			</div>
		</div>
	);
};

export default JobSectionCard;
