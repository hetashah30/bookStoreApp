import React from "react";

function contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 mx-4 mx-auto">
      <div className="container mx-auto p-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-md mb-4 mx-auto w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Contact Us
        </h1>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-300 p-2 rounded-md w-full mb-4"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 p-2 rounded-md w-full mb-4"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              className="border border-gray-300 p-2 rounded-md w-full mb-6"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-xl text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default contact;
