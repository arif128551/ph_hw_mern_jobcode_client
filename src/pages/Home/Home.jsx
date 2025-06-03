import React from "react";
import Banner from "./sections/Banner";
import JobsSection from "./sections/JobsSection";
import { useQuery } from "@tanstack/react-query";
import PageLoader from "../../components/PageLoader";
import toast from "react-hot-toast";

const Home = () => {
	const {
		data: featuredJobsData,
		isPending: isFeaturedJobsLoading,
		error: featuredJobsError,
	} = useQuery({
		queryKey: ["featured-jobs"],
		queryFn: () => fetch("http://localhost:3000/api/jobs/featured").then((res) => res.json()),
	});

	if (isFeaturedJobsLoading) return <PageLoader />;

	if (featuredJobsError) return toast.error(featuredJobsError.message);

	return (
		<>
			<Banner></Banner>
			<JobsSection featuredJobsData={featuredJobsData}></JobsSection>
		</>
	);
};

export default Home;
