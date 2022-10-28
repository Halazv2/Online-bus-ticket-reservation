import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("accessToken") || null;
  const decoded = token ? jwt_decode(token) : null;

  if (!decoded || decoded.exp * 1000 < Date.now() - 24 * 60 * 60 * 1000) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
