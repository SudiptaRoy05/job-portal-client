import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-400"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-400"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-400"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-400"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg">
      <div className="navbar container mx-auto px-4 lg:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown Menu for Mobile */}
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost text-white lg:hidden"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>
          <a href="/" className="text-2xl font-bold">
            BrandName
          </a>
        </div>

        {/* Navbar Center for Larger Screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6 text-white">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end space-x-3">
          <Link to="/login" className="btn bg-white text-blue-600 hover:bg-blue-100">
            Sign In
          </Link>
          <Link to="/signup" className="btn bg-blue-500 hover:bg-blue-600 text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
