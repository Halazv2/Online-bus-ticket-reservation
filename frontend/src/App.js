import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Index from "./Pages/Index.jsx";
import Login from "./Pages/auth/Login.jsx";
import Landing from "./Pages/Landing.jsx";
import Register from "./Pages/auth/Register.jsx";
import Trips from "./Pages/trips";
import Dashboardd from "./Pages/admin/Dashboard";

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
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Index trip={trip} setTrip={setTrip}  isLogged={isLogged} setIsLogged={setIsLogged}/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/Trips"
            element={<Trips trip={trip} setTrip={setTrip} />}
          />
          <Route path="/admin" element={<Dashboardd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
