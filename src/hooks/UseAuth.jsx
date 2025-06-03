import React, { use } from "react";
import { AuthContext } from "../providers/AuthContext";

const UseAuth = () => {
	const userInfo = use(AuthContext);
	return userInfo;
};

export default UseAuth;
