import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../assets/list.json"; // Importing the book list
import Cards from "./cards"; // Importing the Cards component

function freebook() {
  const filterData = list.filter((data) => data.category === "Free");
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
      <div className="w-full mt-20 container mx-auto px-4 sm:px-6 lg:px-10">
        <div>
          <h1 className="pb-2 text-lg sm:text-xl font-semibold">
            Free Offered Courses
          </h1>
          <p>
            Explore our specially curated selection of free courses designed to
            boost your knowledge and skills—at zero cost!
          </p>
        </div>

        <div className="w-full mt-4 custom-slider flex flex-col gap-4">
          {/* Using the Slider component to display the cards. To pass the data from parents to child we use props. Props: In react "props" (properties) are a way to pass data from a parent component to a child component. Prop allows, component to be dynamic and render accordingly. */}
          <Slider {...settings}>
            {filterData.map((item) => (
              <div key={item.id}>
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default freebook;
