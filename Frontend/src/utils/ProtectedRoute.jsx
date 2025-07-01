import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [authUser] = useAuth();
  const location = useLocation();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    setChecking(false);
  }, []);

  if (checking) return null;

  if (!authUser) {
    // Show toast from home
    localStorage.setItem("showLoginToast", "true");

    // Save current path to redirect later after login
    localStorage.setItem("redirectAfterLogin", location.pathname);

    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
