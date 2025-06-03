import React from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "./Footer";
import UseAuth from "../hooks/UseAuth";
import PageLoader from "../components/PageLoader";

const RootLayout = () => {
	const { loading } = UseAuth();
	const navigation = useNavigation();
	const isLoading = navigation.state === "loading";
	if (loading || isLoading) {
		return <PageLoader />;
	}
	return (
		<>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</>
	);
};

export default RootLayout;
