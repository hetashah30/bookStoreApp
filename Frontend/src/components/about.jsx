import React from "react";

function Above() {
  return (
    <section
      id="about"
      className="w-full bg-gray-200 dark:bg-gray-800 py-16 px-5 md:px-20"
    >
      <div className="max-w-7xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Why Choose <span className="text-pink-500">bookStore?</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          At BookStore, we blend convenience, variety, and affordability to give
          you an unparalleled reading experience. Here’s what sets us apart:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-pink-500">
              Vast Collection
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              From academic books to fictional tales, we offer an extensive
              collection to fuel every reader’s passion.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-pink-500">
              Easy Access
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              User-friendly interface, responsive design, and mobile-ready
              browsing ensure a smooth reading journey.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-pink-500">
              Affordable & Free Picks
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              Get amazing deals and free book downloads to keep your learning
              alive without breaking the bank.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Above;
