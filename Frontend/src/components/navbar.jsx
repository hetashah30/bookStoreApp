import React from "react";
// import React, { useState, useEffect } from "react";
import Login from "./login";
import { useAuth } from "../context/AuthProvider"; // Importing useAuth to access authUser and setAuthUser
import Logout from "./logout"; // Importing the Logout component
import { useTheme } from "../context/ThemeProvider"; // import this
import Signup from "./signup";
import { Link } from "react-router-dom";

function Navbar() {
  const [authUser] = useAuth(); // Using useAuth to get authUser and setAuthUser for login/logout functionality

  const { theme, setTheme } = useTheme(); // ✅ Use global theme state

  const navItems = (
    <>
      <li>
        <a
          href="/"
          className="hover:text-yellow-100 transition-colors duration-300"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/course"
          className="hover:text-yellow-100 transition-colors duration-300"
        >
          Course
        </a>
      </li>
      <li>
        <a
          href="/contact"
          className="hover:text-yellow-100 transition-colors duration-300"
        >
          Contact Us
        </a>
      </li>
      <li>
        {/* <a
          href="#about"
          className="scroll-smooth hover:text-yellow-100 transition-colors duration-300"
        >
          About
        </a> */}
        <Link
          to="/#about"
          className="scroll-smooth hover:text-yellow-100 transition-colors duration-300"
        >
          About
        </Link>
      </li>
      <li>
        {/* <a
          href="#testimonials"
          className="scroll-smooth hover:text-yellow-100 transition-colors duration-300"
        >
          Reviews
        </a> */}
        <Link
          to="/#testimonials"
          className="scroll-smooth hover:text-yellow-100 transition-colors duration-300"
        >
          Reviews
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div
        className="dark:bg-slate-900 dark:text-white sticky top-0 left-0 right-0 z-50 shadow transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 md:p-6 sm:p-4 flex justify-between items-center shadow-lg"
        // className={`w-full transition-all duration-300 ease-in-out ${
        //   sticky ? "bg-white shadow-md" : "bg-transparent"
        // } fixed top-0 left-0 z-50`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="flex text-lg font-medium menu menu-sm dropdown-content bg-black text-white dark:bg-white dark:text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            {/* <a className="text-2xl font-bold cursor-pointer md:px-20 px-4">  */}
            <a className="text-white md:text-3xl sm:text-md text-xl font-bold tracking-wider cursor-pointer">
              bookStore
            </a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="text-white text-lg menu menu-horizontal px-1">
                {navItems}
              </ul>
            </div>
            {/* <div className="hidden md:block">
              <label className="input px-3 py-2 border rounded-md">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="black"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  className="grow w-full text-black bg-white dark:text-black dark:bg-white placeholder-gray-500 outline-none ring-0 focus:ring-0 border border-gray-300 focus:border-black"
                  type="search"
                  placeholder="Search"
                />
              </label>
            </div> */}

            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className={`h-8 w-8 fill-current ${
                  theme === "light" ? "hidden" : "block"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme("light")}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className={`h-8 w-8 fill-current ${
                  theme === "dark" ? "hidden" : "block"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme("dark")}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {authUser ? (
              <Logout />
            ) : (
              <div>
                <a
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="cursor-pointer bg-white text-black dark:bg-slate-900 dark:text-white dark:hover:bg-white dark:hover:text-black transition-colors md:px-4 md:py-3 px-3 py-2 rounded-md hover:bg-slate-800 duration-300 hover:text-white"
                >
                  Login
                </a>
                <Login />
                <Signup />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
