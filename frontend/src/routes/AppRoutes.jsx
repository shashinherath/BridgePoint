import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Listing from "../pages/Listing";
import SellerDashboard from "../pages/SellerDashboard";
import ServiceProviderRegister from "../pages/ServiceProviderRegister";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="listing" element={<Listing />} />
        <Route path="dashboard" element={<SellerDashboard />} />
        <Route path="ServiceProviderRegister" element={<ServiceProviderRegister/>}/>
      </Routes>
    </>
  );
}
