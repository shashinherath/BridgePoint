import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SellerProfile from "../components/SellerProfile";
import { useState } from "react";

const FoodSellerDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col">
      <Navbar onSearch={setSearchTerm} searchItem={searchTerm} />
      <SellerProfile />
      <Footer />
    </div>
  );
};

export default FoodSellerDetails;
