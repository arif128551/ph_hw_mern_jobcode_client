import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/JobDetails/JobDetails";
import PageLoader from "../components/PageLoader";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJobs from "../pages/AddJobs/AddJobs";
import PostedJobs from "../pages/PostedJobs/PostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/jobs/add",
				element: (
					<PrivateRoute>
						<AddJobs></AddJobs>
					</PrivateRoute>
				),
			},
			{
				path: "/posted-jobs",
				element: (
					<PrivateRoute>
						<PostedJobs></PostedJobs>
					</PrivateRoute>
				),
			},
			{
				path: "/jobs/:id",
				Component: JobDetails,
				loader: ({ params }) => fetch(`http://localhost:3000/api/jobs/${params.id}`),
				HydrateFallback: PageLoader,
			},
			{
				path: "/applications/job/:jobId",
				element: (
					<PrivateRoute>
						<ViewApplications></ViewApplications>
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`http://localhost:3000/api/applications/job/${params.jobId}`),
				HydrateFallback: PageLoader,
			},
			{
				path: "/jobs/apply/:id",
				element: (
					<PrivateRoute>
						<JobApply></JobApply>
					</PrivateRoute>
				),
			},
			{
				path: "/my-applications",
				element: (
					<PrivateRoute>
						<MyApplications></MyApplications>
					</PrivateRoute>
				),
			},
			{
				path: "/register",
				Component: Register,
			},
		],
	},
]);

export default router;
