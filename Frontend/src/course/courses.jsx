import React from "react";
import Navbar from "../components/navbar"; // Importing the Navbar component
import Course from "../components/course"; // Importing the Course component
import Footer from "../components/footer"; // Importing the Footer component

function courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default courses;
