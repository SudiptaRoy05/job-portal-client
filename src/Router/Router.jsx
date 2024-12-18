import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Signup from "../Pages/SignUp/Signup";
import Signin from "../Pages/SignIn/Signin";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobDetails/JobApply";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyPostedJobs from "../Pages/AddJobs/MyPostedJobs";
import VIewApplications from "../Pages/ViewApplications/VIewApplications";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1>404 Not Found</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
            },

            {
                path: '/jobApply/:id',
                element: <PrivateRoute>
                    <JobApply></JobApply>
                </PrivateRoute>,
            },
            {
                path: '/myapplication',
                element: <PrivateRoute>
                    <MyApplication></MyApplication>
                </PrivateRoute>,
            },
            {
                path: '/addjobs',
                element: <PrivateRoute>
                    <AddJobs></AddJobs>
                </PrivateRoute>,
            },
            {
                path: '/mypostedjobs',
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path: '/viewapplication/:job_id',
                element: <PrivateRoute>
                    <VIewApplications></VIewApplications>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobApplications/jobs/${params.job_id}`),
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            }
        ]

    }
])


export default router