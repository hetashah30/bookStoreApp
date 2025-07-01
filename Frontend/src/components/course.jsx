import React, { useState, useEffect } from "react";
import Cards from "./cards"; // Importing the Cards component
// import list from "../assets/list.json"; // Importing the course list - this is used only for testing purposes, actual data will be fetched from the POSTMAN API in the backend by using book.map instead of list.map
import { Link } from "react-router-dom"; // Importing Link for navigation
import axios from "axios"; // Importing axios for API calls

function Course() {
  const [book, setBook] = useState([]); // State to hold book data from the API (if no books - initially empty array to avoid errors)
  useEffect(() => {
    //Fetching book data from the API
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      {/* <div className="max-w-screen-2xl container mx-auto px-4 sm:px-6 lg:px-10"> */}
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="mt-20 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl text-center mt-20 mb-12">
            We're delighted to have you{" "}
            <span className="text-pink-500">here :)</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            ratione eum error! Maxime quas blanditiis, esse, iste odit saepe
            fugiat natus, nemo voluptatem adipisci modi aliquam laboriosam optio
            ratione ipsa repudiandae? Debitis aliquid doloribus perferendis
            omnis culpa mollitia neque quo aspernatur nulla ad nesciunt soluta
            distinctio, numquam repudiandae quidem minima?
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {book.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
