import React from "react";
import { useAuth } from "../context/AuthProvider"; // Importing useAuth to access authUser and setAuthUser
import { toast } from "react-hot-toast"; // Importing react-hot-toast for notifications

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successful");
      // after showing the toast, reload the page after 1 second
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      toast.error("Error logging out:" + error.message);
    }
  };

  return (
    <div>
      <button
        className="cursor-pointer bg-red-600 text-white transition-colors md:px-4 md:py-3 sm:px-2 sm:py-1 px-3 py-2 rounded-md hover:bg-red-700 duration-300 hover:text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
