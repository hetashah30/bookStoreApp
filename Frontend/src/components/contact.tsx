import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const contactInfo = {
      fullname: data.fullname,
      email: data.email,
      message: data.message,
    };

    // Send contactInfo to the server or perform any other action
    await axios
      .post("http://localhost:4001/contactform/contact", contactInfo)
      .then((res) => {
        toast.success(res.data.message);
        const formElement = document.getElementById(
          "contact"
        ) as HTMLFormElement | null;
        if (formElement) {
          formElement.reset();
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/contactbg.jpg')",
      }}
    >
      <div className="backdrop-blur-md bg-white/30 dark:bg-black/30 text-gray-900 dark:text-white rounded-lg shadow-lg p-10 w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <form id="contact" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label htmlFor="name">
              <p className="text-xl">Name:</p>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="border border-gray-300 p-2 rounded-md w-full dark:bg-gray-900 dark:text-white"
              {...register("fullname", { required: true })}
            />
            {/* Display error message if fullname is not provided */}
            {errors.fullname && (
              <span className="text-red-500 text-sm">Name is required</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email">
              <p className="text-xl">Email:</p>
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="border border-gray-300 p-2 rounded-md w-full dark:bg-gray-900 dark:text-white"
              {...register("email", { required: true })}
            />
            {/* Display error message if email is not provided */}
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="message">
              <p className="text-xl">Message:</p>
            </label>
            <textarea
              id="message"
              placeholder="Enter your message here..."
              className="border border-gray-300 p-2 rounded-md w-full dark:bg-gray-900 dark:text-white"
              {...register("message", { required: true })}
            />
            {/* Display error message if message is not provided */}
            {errors.message && (
              <span className="text-red-500 text-sm">Message is required</span>
            )}
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

export default Contact;
