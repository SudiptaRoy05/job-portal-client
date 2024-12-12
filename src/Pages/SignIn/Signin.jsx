import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock } from "react-icons/md";
import signin from "../../assets/Lottie/SignIn.json";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { useContext } from "react";

export default function Signin() {
    const {signInUser} = useContext(AuthContext);

    const handleSignin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password)
        signInUser(email, password)
        .then((result) => {
            console.log(result.user)
        }).catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-white px-4">
                <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
                    {/* Lottie Animation Section */}
                    <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-white">
                        <div className="w-3/4 md:w-full max-w-sm">
                            <Lottie animationData={signin} loop={true} className="w-full" />
                        </div>
                    </div>

                    {/* Login Form Section */}
                    <form onSubmit={handleSignin} className="w-full md:w-1/2 p-6 md:p-8 bg-white">
                        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Log In</h2>
                        <p className="text-center text-gray-600 mb-8">Welcome back! Please log in to your account.</p>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <MdEmail className="text-gray-500 ml-3 text-xl" />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition border-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <MdLock className="text-gray-500 ml-3 text-xl" />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition border-none"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
                            >
                                Log In
                            </button>
                        </div>

                        <div className="flex items-center justify-between my-6">
                            <span className="border-t border-gray-300 flex-grow mr-3"></span>
                            <span className="text-gray-500 text-sm">or</span>
                            <span className="border-t border-gray-300 flex-grow ml-3"></span>
                        </div>

                        <button
                            type="button"
                            className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition"
                        >
                            <FcGoogle className="mr-3 text-2xl" />
                            Continue with Google
                        </button>

                        <p className="text-sm text-center text-gray-600 mt-4">
                            Don’t have an account?{' '}
                            <a href="/signup" className="text-blue-500 hover:underline">
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>

        </div>
    );
}
