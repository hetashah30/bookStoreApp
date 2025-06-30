import React from "react";

import Signup from "./signup"; // Importing the Signup component
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box rounded-xl p-8 shadow-lg dark:bg-black dark:text-white">
          {/* Close Button */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-xl"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
            ✕
          </button>

          {/* Title */}
          <h3 className="font-bold text-3xl text-center mb-8 text-gray-800 dark:text-white">
            Login
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Enter your Email:
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full focus:outline-none focus:ring-1 focus:ring-slate-100 text-black dark:text-white dark:bg-gray-800 dark:border-gray-700"
                {...register("email", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Enter your Password:
              </label>
              <input
                type="password"
                placeholder="********"
                className="input input-bordered w-full focus:outline-none focus:ring-1 focus:ring-slate-100 text-black dark:text-white dark:bg-gray-800 dark:border-gray-700"
                {...register("password", { required: true })}
              />
              {/* errors will return when field validation fails  */}
              {errors.password && (
                <span className="text-red-500 text-sm">
                  Password is required
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="modal-action m-0">
              <button className="btn border-none mt-3 w-full bg-pink-500 text-white hover:bg-pink-600 transition duration-300 rounded-md">
                Login
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <p className="mt-5 text-center text-sm text-gray-600 dark:text-gray-400">
            Not registered yet?{" "}
            <button
              className="text-pink-500 font-semibold hover:underline"
              onClick={() => {
                document.getElementById("my_modal_3").close();
                document.getElementById("signup_modal").showModal();
              }}
            >
              Sign up now
            </button>
            <Signup />
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
