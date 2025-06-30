import React from "react";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted:", data);
  };

  return (
    <div>
      <dialog id="signup_modal" className="modal">
        <div className="modal-box rounded-xl p-8 shadow-lg dark:bg-black dark:text-white">
          {/* Close Button OUTSIDE the form */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-xl"
            onClick={() => document.getElementById("signup_modal").close()}
          >
            ✕
          </button>

          {/* Title */}
          <h3 className="font-bold text-3xl text-center mb-8 text-gray-800 dark:text-white">
            Sign Up
          </h3>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Name Field */}
            <div className="mb-4 text-left">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="input input-bordered w-full dark:bg-gray-800 text-black dark:text-white"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full dark:bg-gray-800 text-black dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6 text-left">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="input input-bordered w-full dark:bg-gray-800 text-black dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  Password is required
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="modal-action m-0 mb-4">
              <button
                type="submit"
                className="btn border-none w-full bg-pink-500 text-white hover:bg-pink-600 transition rounded-md"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <button
              type="button"
              className="text-pink-500 font-semibold hover:underline"
              onClick={() => {
                document.getElementById("signup_modal").close();
                document.getElementById("my_modal_3").showModal();
              }}
            >
              Login here
            </button>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;
