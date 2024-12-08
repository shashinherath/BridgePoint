import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrowseService from "../components/BrowseService";
import BrowseList from "../components/BrowseList";

export default function Listing() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-grow">
        <BrowseService />
        <BrowseList />
      </div>
      <Footer />
    </div>
  );
}
