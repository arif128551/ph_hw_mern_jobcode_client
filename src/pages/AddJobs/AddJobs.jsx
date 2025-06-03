import React from "react";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import toast from "react-hot-toast";

const AddJobs = () => {
	const { user } = UseAuth();
	const handleAddJob = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const formEntries = Object.fromEntries(formData.entries());
		const { min, max, currency, ...newJob } = formEntries;
		newJob.salaryRange = {
			min,
			max,
			currency,
		};
		newJob.requirements = newJob.requirements.split(",").map((req) => req.trim());
		newJob.responsibilities = newJob.responsibilities.split(",").map((req) => req.trim());

		axios
			.post("http://localhost:3000/api/jobs/add", newJob)
			.then((res) => {
				const data = res.data;
				if (data.insertedId) {
					toast.success("Job added successfully");
					form.reset();
				}
			})
			.catch((error) => toast.error(error.message));
	};
	return (
		<div className="container mx-auto py-10 px-4">
			<h1 className="text-5xl font-bold text-center mb-10">Add Job</h1>
			<form
				onSubmit={handleAddJob}
				className="max-w-7xl mx-auto shadow-lg border border-blue-50 rounded-lg p-10 space-y-8"
			>
				<fieldset className="fieldset">
					<label className="label">Job Title</label>
					<input type="text" name="title" className="input w-full mb-3" placeholder="Job Title" required />

					<label className="label">Job Location</label>
					<input type="text" name="location" className="input w-full mb-3" placeholder="Job Location" required />
				</fieldset>

				<fieldset className="fieldset">
					<label className="label">Job Type</label>
					<div className="filter mb-3">
						<input className="btn filter-reset" type="radio" name="jobType" defaultValue="" aria-label="All" />
						<input className="btn" type="radio" name="jobType" defaultValue="On-site" aria-label="On-site" />
						<input className="btn" type="radio" name="jobType" defaultValue="Remote" aria-label="Remote" />
						<input className="btn" type="radio" name="jobType" defaultValue="Hybrid" aria-label="Hybrid" />
						<input className="btn" type="radio" name="jobType" defaultValue="Part-time" aria-label="Part-time" />
						<input className="btn" type="radio" name="jobType" defaultValue="Full-time" aria-label="Full-time" />
						<input className="btn" type="radio" name="jobType" defaultValue="Internship" aria-label="Internship" />
					</div>

					<label className="label">Category</label>
					<select name="category" defaultValue="" className="select w-full mb-3" required>
						<option disabled value="">
							Pick a category
						</option>
						<option value="Software Development">Software Development</option>
						<option value="Design & Creative">Design & Creative</option>
						<option value="Marketing & Sales">Marketing & Sales</option>
						<option value="Customer Support">Customer Support</option>
						<option value="Finance & Accounting">Finance & Accounting</option>
						<option value="Human Resources (HR)">Human Resources (HR)</option>
						<option value="Education & Training">Education & Training</option>
						<option value="Engineering">Engineering</option>
						<option value="Healthcare">Healthcare</option>
						<option value="Data Science & Analytics">Data Science & Analytics</option>
						<option value="Content Writing">Content Writing</option>
						<option value="Project Management">Project Management</option>
						<option value="Legal & Law">Legal & Law</option>
						<option value="Administration">Administration</option>
					</select>

					<label className="label">Application Deadline</label>
					<input name="applicationDeadline" type="date" className="input w-full mb-3" required />
				</fieldset>

				<fieldset>
					<label className="label">Salary Range</label>
					<div className="flex flex-col sm:flex-row gap-4">
						<div className="flex-1">
							<label className="label">Min</label>
							<input name="min" type="number" className="input w-full mb-3" placeholder="Min Amount" required />
						</div>
						<div className="flex-1">
							<label className="label">Max</label>
							<input name="max" type="number" className="input w-full mb-3" placeholder="Max Amount" required />
						</div>
						<div className="flex-1">
							<label className="label">Currency</label>
							<select name="currency" defaultValue="" className="select w-full mb-3" required>
								<option disabled value="">
									Pick a currency
								</option>
								<option value="BDT">BDT</option>
								<option value="USD">USD</option>
							</select>
						</div>
					</div>
				</fieldset>

				<fieldset className="fieldset">
					<label className="label">Job Description</label>
					<textarea
						name="description"
						className="textarea textarea-bordered w-full mb-3"
						placeholder="Write full job description..."
						rows="4"
						required
					></textarea>
				</fieldset>

				<fieldset className="fieldset">
					<label className="label">Requirements (comma separated)</label>
					<input
						type="text"
						name="requirements"
						className="input w-full mb-3"
						placeholder="JavaScript, React, Node.js"
						required
					/>

					<label className="label">Responsibilities (comma separated)</label>
					<input
						type="text"
						name="responsibilities"
						className="input w-full mb-3"
						placeholder="Fix bugs, Write tests, Attend meetings"
						required
					/>
				</fieldset>

				<fieldset className="fieldset">
					<label className="label">Company Name</label>
					<input type="text" name="company" className="input w-full mb-3" placeholder="Company Name" required />

					<label className="label">Company Logo URL</label>
					<input
						type="url"
						name="company_logo"
						className="input w-full mb-3"
						placeholder="https://logo-url.com/logo.png"
						required
					/>

					<label className="label">HR Name</label>
					<input type="text" name="hr_name" className="input w-full mb-3" placeholder="Farhan Rahman" required />

					<label className="label">HR Email</label>
					<input
						type="email"
						name="hr_email"
						defaultValue={user.email}
						readOnly
						className="input w-full mb-3"
						placeholder="hr@example.com"
						required
					/>
				</fieldset>

				<fieldset className="fieldset">
					<label className="label">Status</label>
					<select name="status" defaultValue="" className="select w-full mb-3" required>
						<option disabled value="">
							Select Status
						</option>
						<option value="active">Active</option>
						<option value="closed">Closed</option>
						<option value="draft">Draft</option>
					</select>
				</fieldset>

				<button className="btn btn-primary w-full">Submit Job</button>
			</form>
		</div>
	);
};

export default AddJobs;
