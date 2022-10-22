import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// // layouts

// import Admin from "./layouts/Admin.js";
// import Auth from "./layouts/Auth.js";

// views without layouts

// import Landing from "./Pages/Landing.js";
// import Profile from "./Pages/Profile.js";
import Index from "./Pages/Index.js";
import Login from "./Pages/auth/Login.js";
import IndexNavbar from "./Components/Navbars/IndexNavbar.js";
import Landing from "./Pages/Landing.js";
import Register from "./Pages/auth/Register.js";

function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <IndexNavbar className="sticky" />
        <Routes>
          {/* <Route path="/admin" element={<Admin />} /> */}
          {/* <Route path="/auth" element={<Auth />} /> */}
          <Route path="/landing" element={<Landing />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/" element={<Index />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
