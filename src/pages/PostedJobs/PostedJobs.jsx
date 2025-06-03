import React, { Suspense } from "react";
import UseAuth from "../../hooks/UseAuth";
import { jobsCreatedByPromise } from "../../api/jobsApi";
import PageLoader from "../../components/PageLoader";
import PostedJobsTable from "./PostedJobsTable";

const PostedJobs = () => {
	const { user } = UseAuth();
	return (
		<div className="container mx-auto">
			<div className="overflow-x-auto my-12">
				<Suspense fallback={<PageLoader />}>
					<PostedJobsTable jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></PostedJobsTable>
				</Suspense>
			</div>
		</div>
	);
};

export default PostedJobs;
