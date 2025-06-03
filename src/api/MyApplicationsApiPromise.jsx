import UseAxiosToken from "../hooks/UseAxiosToken";

const MyApplicationsApiPromise = () => {
	const axiosSecure = UseAxiosToken();

	const applicationsApiPromise = (email) => {
		return axiosSecure.get(`/my-applications?email=${email}`).then((res) => res.data);
	};

	return {
		applicationsApiPromise,
	};
};

export default MyApplicationsApiPromise;
