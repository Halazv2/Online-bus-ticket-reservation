import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Index from "./Pages/Index.js";
import Login from "./Pages/auth/Login.js";
import IndexNavbar from "./Components/Navbars/IndexNavbar.js";
import Landing from "./Pages/Landing.js";
import Register from "./Pages/auth/Register.js";
import FooterSmall from "./Components/Footers/FooterSmall.js";
import Trips from "./Pages/trips";

function App() {
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogged(false);
    }
  }, []);
  return (
    <div className="relative">
      <BrowserRouter>
        <IndexNavbar
          className="sticky"
          isLogged={isLogged}
          setIsLogged={setIsLogged}
        />
        <Routes>
          {/* <Route path="/admin" element={<Admin />} /> */}
          {/* <Route path="/auth" element={<Auth />} /> */}
          <Route path="/landing" element={<Landing />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/" element={<Index />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Trips" element={<Trips />} />

        </Routes>
        <FooterSmall />
      </BrowserRouter>
    </div>
  );
}

export default App;
