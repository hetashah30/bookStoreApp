import React, { useEffect } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/navbar";
import Banner from "../components/banner";
import FreeBook from "../components/freebook";
import About from "../components/about";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";

function Home() {
  useEffect(() => {
    const shouldShowToast = localStorage.getItem("showLoginToast");

    if (shouldShowToast === "true") {
      // Immediately remove the flag to avoid duplicate toasts
      localStorage.removeItem("showLoginToast");

      // Now show the toast
      toast.error("Please login to access that page", { duration: 3000 });

      // Show modal with delay
      setTimeout(() => {
        const loginModal = document.getElementById("my_modal_3");
        if (loginModal) loginModal.showModal();
      }, 200);
    }
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <FreeBook />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
