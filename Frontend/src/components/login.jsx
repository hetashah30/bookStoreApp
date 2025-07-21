import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

// Using environment variable for the base URL
const baseURL = import.meta.env.VITE_API_BASE_URL;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [authUser, setAuthUser] = useAuth();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(`${baseURL}/user/login`, userInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data && res.data.user) {
        toast.success("Login Successful!");
        document.getElementById("my_modal_3")?.close();
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user);
        // const redirectPath = localStorage.getItem("redirectAfterLogin");
        // if (redirectPath) {
        //   localStorage.removeItem("redirectAfterLogin");
        //   window.location.href = redirectPath;
        // }
      } else {
        toast.error("Login failed: Invalid response from server.");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error("Login Failed: " + error.response.data.message);
      } else {
        toast.error("Login Failed: Something went wrong");
        console.error(error);
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box rounded-xl p-8 shadow-lg dark:bg-black dark:text-white">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-xl"
            onClick={() => document.getElementById("my_modal_3")?.close()}
          >
            ✕
          </button>

          <h3 className="font-bold text-3xl text-center mb-8">Login</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm mb-2">Enter your Email:</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>

            {/* Password */}
            <div className="mb-8">
              <label className="block text-sm mb-2">Enter your Password:</label>
              <input
                type="password"
                placeholder="********"
                className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  Password is required
                </span>
              )}
            </div>

            {/* Submit */}
            <div className="modal-action m-0">
              <button className="btn border-none mt-3 w-full bg-pink-500 text-white hover:bg-pink-600 transition rounded-md">
                Login
              </button>
            </div>
          </form>

          <div className="mt-5 text-center text-sm text-gray-600 dark:text-gray-400">
            Not registered yet?{" "}
            <button
              className="text-pink-500 font-semibold hover:underline"
              onClick={() => {
                document.getElementById("my_modal_3")?.close();
                document.getElementById("signup_modal")?.showModal();
              }}
            >
              Sign up now
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
