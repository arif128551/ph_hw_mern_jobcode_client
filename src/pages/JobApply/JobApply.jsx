import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import toast from "react-hot-toast";

const JobApply = () => {
	const { id: jobId } = useParams();
	const { user } = UseAuth();
	const handleJobApply = (e) => {
		e.preventDefault();
		const form = e.target;
		const linkedIn = form.linkedIn.value;
		const github = form.github.value;
		const resume = form.resume.value;

		const data = {
			jobId: jobId,
			email: user.email,
			linkedIn,
			github,
			resume,
		};
		axios
			.post("http://localhost:3000/api/jobs/application", data)
			.then((res) => {
				const data = res.data;
				if (data.insertedId) {
					toast.success("You have applied successfully");
				}
			})
			.catch((error) => toast.error(error.message));
	};
	return (
		<div className="container mx-auto flex justify-between px-4 items-center gap-10 py-12">
			<div className="w-full">
				<form onSubmit={handleJobApply}>
					<div className="fieldset">
						<label className="label text-xl   mb-1 font-semibold">Linkedin Url</label>
						<input
							type="url"
							name="linkedIn"
							className="input w-full border-0 bg-base-200 p-6 mb-6"
							placeholder="Enter linkedin profile link"
						/>
						<label className="label text-xl   mb-1 font-semibold">Github Url</label>
						<input
							type="url"
							name="github"
							className="input w-full border-0 bg-base-200 p-6 mb-6 "
							placeholder="Enter your github link"
						/>
						<label className="label text-xl   mb-1 font-semibold">Your resume url</label>
						<input
							type="url"
							name="resume"
							className="input w-full border-0 bg-base-200  p-6"
							placeholder="Enter your resume url"
						/>

						<button
							type="submit"
							className="btn-neutral mt-4  p-4 text-xl rounded-md text-white font-medium transition cursor-pointer bg-gray-500"
						>
							Apply
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default JobApply;
