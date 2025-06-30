import React from "react";

import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
import FreeBook from "../components/freebook";

function home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </>
  );
}

export default home;
