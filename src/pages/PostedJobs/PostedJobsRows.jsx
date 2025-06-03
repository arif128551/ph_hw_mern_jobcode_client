import React from "react";
import { Link } from "react-router";

const PostedJobsRows = ({ index, job }) => {
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{job.title}</td>
			<td>{job.applicationDeadline}</td>
			<td>
				<Link to={`/applications/job/${job._id}`}>View Applications</Link>
			</td>
		</tr>
	);
};

export default PostedJobsRows;
