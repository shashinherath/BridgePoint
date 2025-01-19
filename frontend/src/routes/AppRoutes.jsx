import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Listing from "../pages/Listing";
import SellerDashboard from "../pages/SellerDashboard";
import FoodSellerDetails from "../pages/FoodSellerDetails";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="listing" element={<Listing />} />
        <Route path="dashboard" element={<SellerDashboard />} />
        <Route path="sellerview/:id" element={<FoodSellerDetails />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
}
