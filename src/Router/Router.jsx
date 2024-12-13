import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Signup from "../Pages/SignUp/Signup";
import Signin from "../Pages/SignIn/Signin";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";


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