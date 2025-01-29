import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./global.css";
import "./index.css";

import UserSide from "./UserSide.jsx";
import AdminSide from "./AdminSide.jsx";
import ImageUpload from "./ImageUpload.jsx";
import AllResult from "./AllResult.jsx";
import ScoreAd from "./ScoreAd.jsx";
import Login from "./Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<UserSide />} />
        <Route path="/admin/login" element={isAdminLoggedIn?<Navigate to={'/admin'}/>: <Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/addImage"
          element={
            <ProtectedRoute>
              <ImageUpload />
            </ProtectedRoute>
          }
        />
             <Route
          path="admin/addresult"
          element={
            <ProtectedRoute>
              <AdminSide />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/allresult"
          element={
            <ProtectedRoute>
              <AllResult />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/addteampoint"
          element={
            <ProtectedRoute>
              <ScoreAd />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
