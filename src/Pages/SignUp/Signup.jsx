
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import signUPLottie from "../../assets/Lottie/SignUp.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

export default function Signup() {

  const { createUsers, socialSignIn } = useContext(AuthContext);


  const handleSignup = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    const newUser = { email, password }
    console.log(newUser);
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    createUsers(email, password)
      .then(result => {
        console.log(result.user)
      }).catch((error) => {
        console.log(error.message)
      })
  }

  const googleSignIn=()=>{
    socialSignIn()
    .then(result =>{
      console.log(result.user)
    })
    .error(error =>{
      console.log(error.message)
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
        {/* Lottie Animation Section */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-white">
          <Lottie animationData={signUPLottie} loop={true} className="w-3/4 md:w-full max-w-sm" />
        </div>

        {/* Signup Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-white">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">Sign Up</h2>
          <p className="text-center text-gray-600 mb-8">Join us and start your journey today!</p>
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center justify-between my-6">
            <span className="border-t border-gray-300 flex-grow mr-3"></span>
            <span className="text-gray-500 text-sm">or</span>
            <span className="border-t border-gray-300 flex-grow ml-3"></span>
          </div>

          <button
          onClick={googleSignIn}
            className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition"
          >
            <FcGoogle className="mr-3 text-2xl" />
            Continue with Google
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
