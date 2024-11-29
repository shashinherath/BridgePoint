import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeList from "../components/HomeList";
import Hero from "../components/Hero";
import AdBanner from "../components/AdBanner";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <AdBanner />
      <div className="flex flex-col justify-center items-center flex-grow">
        <HomeList bgColor="#DDFBFC" circleColor="#8EBD8A" />
        <HomeList bgColor="#FCDDDD" circleColor="#C57474" />
        <HomeList bgColor="#E0DDFC" circleColor="#988DD9" />
      </div>
      <Footer />
    </div>
  );
}
