import React, { useEffect, useState } from "react";
import SellerNavbar from "../components/SellerNavbar";
import SellerListing from "../components/SellerListing";
import { useNavigate } from "react-router-dom";

export default function SellerDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const userType = localStorage.getItem("userType");
  const navigate = useNavigate();

  useEffect(() => {
    if (userType !== "serviceprovider") {
      navigate("/");
    }
  }, [userType]);

  return (
    <div>
      <SellerNavbar onSearch={setSearchTerm} />
      <div className="flex flex-col justify-center items-center flex-grow">
        <SellerListing searchTerm={searchTerm} />
      </div>
    </div>
  );
}
