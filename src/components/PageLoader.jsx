import React from "react";
import { HashLoader } from "react-spinners";

const PageLoader = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<HashLoader size={60} color="#5F29CC" />
		</div>
	);
};

export default PageLoader;
