import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Index from "./Pages/Index.jsx";
import Login from "./Pages/auth/Login.jsx";
import Register from "./Pages/auth/Register.jsx";
import Trips from "./Pages/trips";
import Dashboard from "./Pages/admin/Dashboard";
import DashboardUser from "./Pages/admin/DashboardUser";
import ProtectedRoutes from "./ProtectedRoutes";
import Booking from "./Pages/booking";
import AfterBooking from "./Pages/booking/AfterBooking";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Unauthorized from "./Pages/err/401";
import Notfound from "./Pages/err/404";

function App() {

  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          {/* ProtectedRoutes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/users" element={<DashboardUser />} />
          </Route>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/Ticket/:id" element={<AfterBooking />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/Unauthorized" element={<Unauthorized />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
