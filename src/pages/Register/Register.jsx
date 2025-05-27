import Lottie from "lottie-react";
import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import registerLottie from "../../assets/lottie/register-lottie.json";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthContext";
import GoogleLogin from "../../features/auth/GoogleLogin";
const Register = () => {
	const { createUser, setUser, updateUser, setLoading } = use(AuthContext);
	const navigate = useNavigate();
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const displayName = form.displayName.value;
		const photoURL = form.photoURL.value;

		if (password.length < 6) {
			toast.error("Password must be at least 6 characters long.");
			return;
		}

		if (!/[A-Z]/.test(password)) {
			toast.error("Password must contain at least one uppercase letter.");
			return;
		}

		if (!/[a-z]/.test(password)) {
			toast.error("Password must contain at least one lowercase letter.");
			return;
		}

		createUser(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				updateUser({ displayName, photoURL })
					.then(() => {
						setUser({ ...user, displayName, photoURL });
					})
					.catch((error) => {
						toast.error(error);
						setUser(user);
					});

				toast.success("Registration successful!");
				navigate("/");
			})
			.catch(() => {
				toast.error("Registration failed. Please provide valid information.");
			})
			.finally(() => setLoading(false));
	};
	return (
		<div className="container max-w-7xl mx-auto flex justify-between px-4 items-center gap-10 py-12">
			<div className="w-1/2">
				<form onSubmit={handleRegister}>
					<div className="fieldset">
						<label className="label text-xl   mb-1 font-semibold">Name</label>
						<input
							type="text"
							name="displayName"
							className="input w-full border-0 bg-base-200 p-6 mb-6"
							placeholder="Enter your name"
						/>
						<label className="label text-xl   mb-1 font-semibold">Photo URL</label>
						<input
							type="text"
							name="photoURL"
							className="input w-full border-0 bg-base-200 p-6 mb-6 "
							placeholder="Enter your name"
						/>
						<label className="label text-xl   mb-1 font-semibold">Email address</label>
						<input
							type="email"
							name="email"
							className="input w-full border-0 bg-base-200  p-6"
							placeholder="Enter your email address"
						/>
						<label className="label text-xl   mb-1 font-semibold mt-5">Password</label>
						<input
							type="password"
							name="password"
							className="input w-full border-0 bg-base-200  p-6"
							placeholder="Enter your password"
							autoComplete="autocomplete"
						/>
						<div className="mt-2">
							<button type="button" className="link link-hover">
								Forgot password?
							</button>
						</div>
						<button
							type="submit"
							className="btn-neutral mt-4  p-4 text-xl rounded-md text-white font-medium transition cursor-pointer bg-gray-500"
						>
							Register
						</button>

						<p className="text-center mt-3 text-base">
							Have An Account ? <Link to="/login">Login</Link>
						</p>
					</div>
					<GoogleLogin />
				</form>
			</div>
			<div className="w-1/2">
				<Lottie animationData={registerLottie} loop={true} />
			</div>
		</div>
	);
};

export default Register;
