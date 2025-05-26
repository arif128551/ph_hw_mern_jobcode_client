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
		</>
	);
	return (
		<div className="bg-base-200">
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
					<a className="btn btn-ghost text-2xl font-extrabold">Job Code</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{listItems}</ul>
				</div>
				<div className="navbar-end gap-3">
					{user ? (
						<button className="btn btn-primary" onClick={handleLogout}>
							Logout
						</button>
					) : (
						<>
							{" "}
							<Link className="btn btn-primary" to={"/login"}>
								Login
							</Link>
							<Link className="btn btn-accent" to={"/register"}>
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
