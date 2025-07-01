import React from "react";
import Navbar from "../components/navbar"; // Importing the Navbar component
import Contact from "../components/contact"; // Importing the Course component
import Footer from "../components/footer"; // Importing the Footer component

function contacts() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default contacts;
