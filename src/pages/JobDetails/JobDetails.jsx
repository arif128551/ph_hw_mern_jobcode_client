import React from "react";
import { FiMapPin } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { SlBriefcase } from "react-icons/sl";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
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
	} = useLoaderData();
	return (
		<div className="max-w-7xl mx-auto my-16">
			<figure className="my-4">
				<img
					className="rounded-lg"
					src={"https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/job-single/thumb.png"}
					alt=""
				/>
			</figure>
			<div className="flex justify-between items-center">
				<div>
					<h1 className="text-4xl/snug font-black mb-1 text-center">{title}</h1>
					<div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
						<p className="flex items-center gap-1">
							<SlBriefcase /> {jobType}
						</p>
						<p className="flex items-center gap-1">
							<GoClock /> {applicationDeadline}
						</p>
					</div>
				</div>
				<Link
					to={`/jobs/apply/${_id}`}
					className="bg-blue-500 pt-2.5 pb-3 px-6 rounded-lg text-white cursor-pointer hover:bg-blue-950 hover:-translate-y-0.5 transition duration-200 font-semibold"
				>
					Apply now
				</Link>
			</div>
			<div>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default JobDetails;
