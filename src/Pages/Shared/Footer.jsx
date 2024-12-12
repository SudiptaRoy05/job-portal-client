import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '../../assets/Icon/LOGO.png'
export default function Footer() {
    return (
        <div>
            <footer className="footer bg-gradient-to-r from-purple-500 to-blue-600 text-white p-10">
                <aside className="space-y-4">
                    <img src={logo} alt="LOGO" />
                    <p className="text-lg font-semibold">
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav className="space-y-4">
                    <h6 className="footer-title text-xl font-semibold">Services</h6>
                    <a className="link link-hover text-white flex items-center gap-2">
                        <i className="text-blue-300">&#x1F4E6;</i> Branding
                    </a>
                    <a className="link link-hover text-white flex items-center gap-2">
                        <i className="text-blue-300">&#x1F4D8;</i> Design
                    </a>
                    <a className="link link-hover text-white flex items-center gap-2">
                        <i className="text-blue-300">&#x1F4CA;</i> Marketing
                    </a>
                    <a className="link link-hover text-white flex items-center gap-2">
                        <i className="text-blue-300">&#x1F4F1;</i> Advertisement
                    </a>
                </nav>
                <nav className="space-y-4">
                    <h6 className="footer-title text-xl font-semibold">Company</h6>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </nav>
                <nav className="space-y-4">
                    <h6 className="footer-title text-xl font-semibold">Legal</h6>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>
                </nav>
                <div className="space-y-4">
                    <h6 className="footer-title text-xl font-semibold">Follow Us</h6>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="text-blue-300 hover:text-blue-500">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" className="text-blue-300 hover:text-blue-500">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" className="text-blue-300 hover:text-blue-500">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com" className="text-blue-300 hover:text-blue-500">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
