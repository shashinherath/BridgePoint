import React from "react";
import SellerNavbar from "../components/SellerNavbar";
import SellerListing from "../components/SellerListing";

export default function SellerDashboard() {
  return (
    <div>
      <SellerNavbar />
      <div className="flex flex-col justify-center items-center flex-grow">
        <SellerListing />
      </div>
    </div>
  );
}
