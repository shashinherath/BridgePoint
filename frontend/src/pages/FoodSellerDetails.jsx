import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SellerProfile from "../components/SellerProfile";
import { useState, useEffect } from "react";

const FoodSellerDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar onSearch={setSearchTerm} searchItem={searchTerm} />
      <SellerProfile />
      <Footer />
    </div>
  );
};

export default FoodSellerDetails;
