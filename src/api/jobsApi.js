export const jobsCreatedByPromise = (email) => {
	return fetch(`http://localhost:3000/api/jobs?email=${email}`).then((res) => res.json());
};
