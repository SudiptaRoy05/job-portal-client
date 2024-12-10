import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Signup from "../Pages/SignUp/Signup";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<h1>404 Not Found</h1>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/sugnup',
                element:<Signup></Signup>,
            }
        ]

    }
])


export default router