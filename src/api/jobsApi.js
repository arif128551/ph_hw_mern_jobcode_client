export const jobsCreatedByPromise = (email) => {
	return fetch(`http://localhost:3000/api/jobs?email=${email}`, {
		credentials: "include",
	}).then((res) => res.json());
};
