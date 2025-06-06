import React from "react";

const ApplicationRow = ({ application, index }) => {
	const { job, linkedIn, github, resume } = application;
	const { title, company, company_logo, location, jobType } = job;
	return (
		<tr>
			<th>{index + 1}</th>
			<td>
				<div className="flex items-center gap-3">
					<div className="avatar">
						<div className="mask mask-squircle h-12 w-12">
							<img src={company_logo} alt={company} />
						</div>
					</div>
					<div>
						<div className="font-bold">{company}</div>
						<div className="text-sm opacity-50">{location}</div>
					</div>
				</div>
			</td>
			<td>{title}</td>
			<td>{jobType}</td>
			<th>
				<button className="btn btn-ghost btn-xs">Details</button>
			</th>
		</tr>
	);
};

export default ApplicationRow;
