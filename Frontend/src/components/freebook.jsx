import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import list from "../assets/list.json"; // Importing the book list - this is used only for testing purposes, actual data will be fetched from the POSTMAN API in the backend by using book.map instead of list.map
import axios from "axios"; // Importing axios for API calls
import Cards from "./cards"; // Importing the Cards component

function Freebook() {
  const [book, setBook] = useState([]); // State to hold book data from the API (if no books - initially empty array to avoid errors)
  useEffect(() => {
    //Fetching book data from the API
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-backend-m0hl.onrender.com/book");
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  // const filterData = list.filter((data) => data.category === "Free");
  // console.log(filterData);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <>
      <div
        id="free"
        className="w-full mt-20 mb-20 container mx-auto px-4 sm:px-6 lg:px-10"
      >
        <div>
          <h1 className="pb-2 text-lg sm:text-xl font-semibold">
            Free Offered Books
          </h1>
          <p>
            Explore our specially curated selection of free books designed to
            boost your knowledge and skills—at zero cost!
          </p>
        </div>

        <div className="w-full mt-4 custom-slider flex flex-col gap-4">
          {/* Using the Slider component to display the cards. To pass the data from parents to child we use props. Props: In react "props" (properties) are a way to pass data from a parent component to a child component. Prop allows, component to be dynamic and render accordingly. */}
          <Slider {...settings}>
            {book.map((item) => (
              <div key={item._id}>
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
