import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrowseService from "../components/BrowseService";
import BrowseList from "../components/BrowseList";
import { useLocation } from "react-router-dom";

export default function Listing() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-grow">
        <BrowseService category={category} />
        <BrowseList category={category} />
      </div>
      <Footer />
    </div>
  );
}
