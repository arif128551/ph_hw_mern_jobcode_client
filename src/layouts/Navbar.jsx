import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
	const { user, signOutUser } = use(AuthContext);
	const handleLogout = () => {
		signOutUser()
			.then(() => {
				toast.success("Logout successfully");
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};
	const listItems = (
		<>
			<li>
				<NavLink to={"/"}>Home</NavLink>
			</li>
			{user && (
				<>
					<li>
						<NavLink to={"/my-applications"}>My Applications</NavLink>
					</li>
					<li>
						<NavLink to={"/jobs/add"}>Add Jobs</NavLink>
					</li>
					<li>
						<NavLink to={"/posted-jobs"}>My Jobs</NavLink>
					</li>
				</>
			)}
		</>
	);
	return (
		<div className="bg-blue-50 py-5">
			<div className="navbar container max-w-7xl mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
							</svg>
						</div>
						<ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
							{listItems}
						</ul>
					</div>
					<Link to={"/"} className="text-2xl font-extrabold">
						<span className="text-blue-500">Career</span>Code
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu-horizontal gap-10 px-1 font-semibold">{listItems}</ul>
				</div>
				<div className="navbar-end gap-3">
					{user ? (
						<button
							className="bg-blue-500 py-2.5 px-6 rounded-lg text-white cursor-pointer font-semibold"
							onClick={handleLogout}
						>
							Logout
						</button>
					) : (
						<>
							<Link
								className="py-2.5 px-6 rounded-lg text-black hover:underline cursor-pointer hover:text-blue-500 hover:-translate-y-0.5 transition duration-200 font-semibold"
								to={"/login"}
							>
								Login
							</Link>
							<Link
								className="bg-blue-500 pt-2.5 pb-3 px-6 rounded-lg text-white cursor-pointer hover:bg-blue-950 hover:-translate-y-0.5 transition duration-200 font-semibold"
								to={"/register"}
							>
								Register
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
