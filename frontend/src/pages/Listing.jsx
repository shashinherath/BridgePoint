import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrowseService from "../components/BrowseService";
import BrowseList from "../components/BrowseList";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Listing() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const searchItem = queryParams.get("item") || "";
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setSearchTerm(searchItem);
  }, [searchItem]);

  return (
    <div className="flex flex-col">
      <Navbar onSearch={setSearchTerm} searchItem={searchItem} />
      <div className="flex flex-col justify-center items-center flex-grow">
        <BrowseService category={category} />
        <BrowseList category={category} searchTerm={searchTerm} />
      </div>
      <Footer />
    </div>
  );
}
