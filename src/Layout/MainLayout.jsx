import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";


export default function MainLayout() {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
