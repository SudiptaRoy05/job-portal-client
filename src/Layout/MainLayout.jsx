import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

export default function MainLayout() {
    return (
        <div className="max-w-7xl mx-auto h-screen flex flex-col">
            <header className="flex-shrink-0">
                <Navbar></Navbar>
            </header>
            <main className="flex-grow overflow-auto">
                <Outlet></Outlet>
            </main>
            <footer className="flex-shrink-0">
                <Footer></Footer>
            </footer>
        </div>
    )
}
