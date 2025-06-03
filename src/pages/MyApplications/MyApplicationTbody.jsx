import React, { useEffect, useState } from "react";
import ApplicationRow from "./ApplicationRow";

const MyApplicationTbody = ({ applicationsApiPromise }) => {
	const [applications, setApplications] = useState([]);

	useEffect(() => {
		applicationsApiPromise.then((data) => {
			setApplications(data);
		});
	}, [applicationsApiPromise]);
	return (
		<tbody>
			{applications.map((application, index) => (
				<ApplicationRow key={application._id} application={application} index={index}></ApplicationRow>
			))}
		</tbody>
	);
};

export default MyApplicationTbody;
