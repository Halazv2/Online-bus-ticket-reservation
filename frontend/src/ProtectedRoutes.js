import { Navigate, Outlet, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import React, { useState } from "react";
const ProtectedRoutes = () => {
  const token = localStorage.getItem("accessToken") || null;
  const decoded = token ? jwt_decode(token) : null;
  const userEmail = localStorage.getItem("userEmail") || null;
  const verifyisAdmin = async () => {
    return axios
      .post("http://localhost:5000/api/v1/mekna7/verifyisAdmin", {
        email: userEmail,
      })
      .then((res) => {
        return res.data.roles[0];
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  React.useEffect(() => {
    verifyisAdmin().then((role) => {
      if (
        !decoded ||
        (decoded.exp * 1000 < Date.now() - 24 * 60 * 60 * 1000 &&
          role !== "ROLE_ADMIN")
      )
        navigate("/Unauthorized");
    });
  }, []);
  return <Outlet />;
};

export default ProtectedRoutes;
