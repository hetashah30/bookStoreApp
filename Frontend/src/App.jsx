import React, { useEffect } from "react";

import Home from "./home/home"; // Importing the Home component
import Courses from "./course/courses"; // Importing the Courses component
import { Routes, Route } from "react-router-dom"; // Importing react-router-dom for routing
//import { Route } from "react-router-dom"; // Importing Route for defining routes
import Signup from "./components/signup"; // Importing the Signup component
import Contacts from "./contact/contacts"; // Importing the Contacts component
import { Toaster } from "react-hot-toast"; // Importing react-hot-toast for notifications
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  // const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const element = document.documentElement;
    if (savedTheme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
