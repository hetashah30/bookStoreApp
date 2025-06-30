import React from "react";

function cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-4 flex justify-center items-center p-3">
        <div className="w-full max-w-xs sm:max-w-sm rounded-lg p-4 px-7 bg-black text-white dark:bg-white dark:text-black border shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
          <figure className="w-full overflow-hidden rounded-lg">
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between items-center mt-4 space-x-2">
              <div className="badge badge-outline px-3 py-4 hover:bg-green-500 hover:text-white duration-300 cursor-pointer">
                ₹{item.price}
              </div>
              <div className="badge badge-outline px-3 py-4 hover:bg-pink-500 hover:text-white duration-300 cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default cards;
