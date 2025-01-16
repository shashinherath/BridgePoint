import React, { useState } from "react";
import SellerNavbar from "../components/SellerNavbar";
import SellerListing from "../components/SellerListing";

export default function SellerDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <SellerNavbar onSearch={setSearchTerm} />
      <div className="flex flex-col justify-center items-center flex-grow">
        <SellerListing searchTerm={searchTerm} />
      </div>
    </div>
  );
}
