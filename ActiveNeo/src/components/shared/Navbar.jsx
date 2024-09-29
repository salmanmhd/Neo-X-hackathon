import React from "react";
import { Link } from "react-router-dom"; // Import for navigation links

const Navbar = () => {
  return (
    <nav className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
      {/* Logo */}
      <div className="text-indigo-500 md:order-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      </div>

      {/* Navigation Links */}
      <div className="text-gray-400 order-3 w-full md:w-auto md:order-2 flex flex-grow justify-center">
        <div className="md:px-4 md:py-2">
          <Link to="/tracker" className="text-indigo-500">
            Workout Tracker
          </Link>
        </div>
        <ul className="flex font-semibold justify-between">
          <li className="md:px-4 md:py-2 hover:text-indigo-500">
            <Link to="/">Home</Link>
          </li>
          <li className="md:px-4 md:py-2 hover:text-indigo-500">
            <Link to="#footer">About</Link>
          </li>
          <li className="md:px-4 md:py-2 hover:text-indigo-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="md:px-4 md:py-2 hover:text-indigo-500">
            <Link to="/dashboard">Dash Board</Link>
          </li>
        </ul>
      </div>

      {/* Login Button */}
      <div className="order-2 md:order-3 flex flex-row">
        <button className="px-4 py-2 border border-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2 hover:bg-gradient-to-r from-purple-500 to-black mr-4">
          <Link to="/connectwallet">Connect Wallet</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
