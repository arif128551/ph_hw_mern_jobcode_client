import React, { use } from "react";
import PostedJobsRows from "./PostedJobsRows";

const PostedJobsTable = ({ jobsCreatedByPromise }) => {
	const jobs = use(jobsCreatedByPromise);
	return (
		<table className="table">
			<thead>
				<tr>
					<th>#</th>
					<th>Job Title</th>
					<th>Application Deadline</th>
					<th>View Applications</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{jobs.map((job, index) => (
					<PostedJobsRows key={job._id} index={index} job={job}></PostedJobsRows>
				))}
			</tbody>
			<tfoot>
				<tr>
					<th>#</th>
					<th>Job Title</th>
					<th>Application Deadline</th>
					<th>View Applications</th>
					<th></th>
				</tr>
			</tfoot>
		</table>
	);
};

export default PostedJobsTable;
