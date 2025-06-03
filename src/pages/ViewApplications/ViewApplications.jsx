import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router";

const ViewApplications = () => {
	const applications = useLoaderData();
	const handleSelectStatus = (e, applicationId) => {
		axios
			.patch(`http://localhost:3000/api/applications/status/${applicationId}`)
			.then((response) => {
				if (response.data.modifiedCount) {
					toast.success("Application status updated");
				}
			})
			.catch((error) => toast.error(error.message));
	};
	return (
		<div className="container mx-auto py-10 px-4">
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Applicant Email</th>
						<th>Application Resume Link</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{applications.length === 0 ? (
						<tr>
							<td colSpan={4} rowSpan={3}>
								<p className="text-center">No applications found.</p>
							</td>
						</tr>
					) : (
						applications.map((application, index) => (
							<tr key={application._id}>
								<td>{index + 1}</td>
								<td>{application.email}</td>
								<td>{application.resume}</td>
								<td>
									<select
										onChange={(e) => handleSelectStatus(e, application._id)}
										defaultValue={application.status}
										className="select"
									>
										<option disabled={true}>Pick a Status</option>
										<option value={"pending"}>Pending</option>
										<option value={"under-review"}>Under Review</option>
										<option value={"interviewed"}>Interviewed</option>
										<option value={"selected"}>Selected</option>
										<option value={"rejected"}>Rejected</option>
										<option value={"hired"}>Hired</option>
									</select>
								</td>
							</tr>
						))
					)}
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
		</div>
	);
};

export default ViewApplications;
