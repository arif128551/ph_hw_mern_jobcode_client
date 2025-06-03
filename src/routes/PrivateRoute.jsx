import React, { use } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthContext";
import { Navigate, useLocation } from "react-router";
import PageLoader from "../components/PageLoader";

const PrivateRoute = ({ children }) => {
	const { user, loading } = use(AuthContext);
	const location = useLocation();
	if (loading) {
		return <PageLoader />;
	}

	if (user && user?.email) {
		return children;
	}
	toast.error("You must be logged in to see the content.");
	return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
