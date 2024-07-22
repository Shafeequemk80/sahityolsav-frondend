import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./global.css";
import "./index.css";
import UserSide from "./UserSide.jsx";
import AdminSide from "./AdminSide.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      
    <Router>
      <Routes>
        <Route path="/" element={<UserSide />} />
        <Route path="/admin" element={<AdminSide />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
