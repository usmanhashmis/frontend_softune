import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../components/Login/Login";
function ProtectedRoutes() {
  const rootprotect = localStorage.getItem("token");
  // if (!rootprotect) {
  //   return <Navigate to="signup" />;
  // } else return (rootprotect = true);
  return rootprotect ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;
