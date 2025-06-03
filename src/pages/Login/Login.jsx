import Lottie from "lottie-react";
import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import loginLottie from "../../assets/lottie/login-lottie.json";
import { AuthContext } from "../../providers/AuthContext";
import toast from "react-hot-toast";
import GoogleLogin from "../../features/auth/GoogleLogin";
const Login = () => {
	const { signInUserWithEmailPass, setLoading } = use(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state || "/";
	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		signInUserWithEmailPass(email, password)
			.then(() => {
				toast.success("Welcome back! You have successfully logged in.");
				navigate(from);
			})
			.catch((error) => {
				if (error.code === "auth/wrong-password") {
					toast.error("Wrong password. Please try again.");
				} else {
					toast.error("Login failed. Please try again.");
				}
			})
			.finally(() => setLoading(false));
	};
	return (
		<div className="container max-w-7xl mx-auto flex justify-between px-4 items-center gap-10 py-12">
			<div className="w-1/2">
				<form onSubmit={handleLogin}>
					<div className="fieldset">
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
							className="btn-neutral mt-4  p-4 text-xl rounded-md text-white bg-gray-500 font-medium transition cursor-pointer"
						>
							Login
						</button>
						<GoogleLogin from={from} />
						<p className="text-center mt-3 text-base">
							Dont’t Have An Account ? <Link to="/register">Register</Link>
						</p>
					</div>
				</form>
			</div>
			<div className="w-1/2">
				<Lottie animationData={loginLottie} loop={true} />
			</div>
		</div>
	);
};

export default Login;
