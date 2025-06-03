import React from "react";
import { FiMapPin } from "react-icons/fi";
import { SlBriefcase } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { Link } from "react-router";
import JobSectionCard from "./JobSectionCard";

const JobsSection = ({ featuredJobsData }) => {
	return (
		<div className="container max-w-7xl mx-auto px-4 py-18">
			<h2 className="text-4xl/snug font-black mb-1 text-center">Jobs of the day</h2>
			<p className="text-center text-lg mb-10">Search and connect with the right candidates faster.</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{featuredJobsData.map((jobData) => (
					<JobSectionCard key={jobData._id} jobData={jobData}></JobSectionCard>
				))}
			</div>
		</div>
	);
};

export default JobsSection;
