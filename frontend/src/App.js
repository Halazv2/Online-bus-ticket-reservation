import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Index from "./Pages/Index.jsx";
import Login from "./Pages/auth/Login.jsx";
import Register from "./Pages/auth/Register.jsx";
import Trips from "./Pages/trips";
import Dashboardd from "./Pages/admin/Dashboard";
import DashboardUser from "./Pages/admin/DashboardUser";
import ProtectedRoutes from "./ProtectedRoutes";
import Booking from "./Pages/booking";

function App() {
  const [isLogged, setIsLogged] = useState(true);
  const [trip, setTrip] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogged(false);
    }
  }, []);
  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/trips" element={<Trips />} />
            <Route path="/dashboard" element={<Dashboardd />} />
            <Route path="/dashboard/users" element={<DashboardUser />} />
          </Route>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
