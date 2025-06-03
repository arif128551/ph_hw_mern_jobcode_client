import axios from "axios";
import React from "react";
import UseAuth from "./UseAuth";

const axiosInstance = axios.create({
	baseURL: "http://localhost:3000/api",
});

const UseAxiosToken = () => {
	const { user } = UseAuth();
	axiosInstance.interceptors.request.use((config) => {
		config.headers.authorization = `Bearer ${user.accessToken}`;
		return config;
	});
	axiosInstance.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
	return axiosInstance;
};

export default UseAxiosToken;
