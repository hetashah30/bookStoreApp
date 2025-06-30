import React from "react";

import Home from "./home/home"; // Importing the Home component
import Courses from "./course/courses"; // Importing the Courses component
import { Routes } from "react-router-dom"; // Importing react-router-dom for routing
import { Route } from "react-router-dom"; // Importing Route for defining routes
import Signup from "./components/signup"; // Importing the Signup component
import Contact from "./components/contact"; // Importing the Contact component

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
