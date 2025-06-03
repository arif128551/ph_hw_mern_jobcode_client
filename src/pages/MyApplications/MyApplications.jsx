import { useQuery } from "@tanstack/react-query";
import React from "react";
import PageLoader from "../../components/PageLoader";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import ApplicationRow from "./ApplicationRow";

const MyApplications = () => {
	const { user } = UseAuth();
	const { isPending, error, data } = useQuery({
		queryKey: ["my-applications"],
		queryFn: () =>
			fetch(`http://localhost:3000/api/my-applications?email=${user.email}`, { credentials: "include" }).then((res) =>
				res.json()
			),
	});

	if (isPending) return <PageLoader />;

	if (error) return toast.error(error.message);

	return (
		<div className="container mx-auto">
			<div className="overflow-x-auto my-12">
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Company</th>
							<th>Job Title</th>
							<th>Job Type</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{data.map((application, index) => (
							<ApplicationRow key={application._id} application={application} index={index}></ApplicationRow>
						))}
					</tbody>
					<tfoot>
						<tr>
							<th>#</th>
							<th>Company</th>
							<th>Job Title</th>
							<th>Job Type</th>
							<th></th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
};

export default MyApplications;
