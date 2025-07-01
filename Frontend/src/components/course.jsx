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
            Welcome to Your Book Library! Explore, Read, Learn, and Grow with
            our curated books. Explore, Read, Learn, and Grow with our curated
            collection of books.
            <br />
            Whether you're here for adventure, knowledge, or inspiration – we've
            got the perfect book for you!
            <br />
            🚀 Ready to get started? Browse our books below and begin your
            reading adventure!
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
