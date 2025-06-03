import { useQuery } from "@tanstack/react-query";
import React, { use } from "react";
import PageLoader from "../../components/PageLoader";
import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import ApplicationRow from "./ApplicationRow";
import MyApplicationsApiPromise from "../../api/MyApplicationsApiPromise";
import MyApplicationTbody from "./MyApplicationTbody";

const MyApplications = () => {
	const { user } = UseAuth();
	// const { isPending, error, data } = useQuery({
	// 	queryKey: ["my-applications"],
	// 	queryFn: () =>
	// 		user.getIdToken().then((token) =>
	// 			fetch(`http://localhost:3000/api/my-applications?email=${user.email}`, {
	// 				headers: {
	// 					Authorization: `Bearer ${token}`,
	// 				},
	// 			}).then((res) => res.json())
	// 		),
	// });

	// if (isPending) return <PageLoader />;

	// if (error) return toast.error(error.message);

	const { applicationsApiPromise } = MyApplicationsApiPromise();

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
					<MyApplicationTbody applicationsApiPromise={applicationsApiPromise(user.email)}></MyApplicationTbody>
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
