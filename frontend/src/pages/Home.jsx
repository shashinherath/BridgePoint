import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeList from "../components/HomeList";
import Hero from "../components/Hero";
import AdBanner from "../components/AdBanner";
import RiceAndCurry from "../assets/images/food/RiceAndCurry.png";
import Kottu from "../assets/images/food/Kottu.png";
import StringHoppers from "../assets/images/food/StringHoppers.png";
import EggHoppers from "../assets/images/food/EggHoppers.png";
import Noodles from "../assets/images/food/Noodles.png";
import Malangamuwa from "../assets/images/accommodation/Malangamuwa.png";
import Badulusirigama from "../assets/images/accommodation/Badulusirigama.png";
import Badulusirigama2 from "../assets/images/accommodation/Badulusirigama2.png";
import SecondMile from "../assets/images/accommodation/SecondMile.png";
import Rambukpotha from "../assets/images/accommodation/Rambukpotha.png";
import Bicycle from "../assets/images/rides/Bicycle.png";
import EBike from "../assets/images/rides/EBike.png";
import MotorBike from "../assets/images/rides/MotorBike.png";
import Car from "../assets/images/rides/Car.png";
import Van from "../assets/images/rides/Van.png";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const title = [
    "Explore Popular Foods Near You",
    "New Accommodation Listings Near You",
    "Affordable Rides",
  ];

  const food = [
    {
      name: "Rice and Curry",
      image: RiceAndCurry,
    },
    {
      name: "Kottu",
      image: Kottu,
    },
    {
      name: "String Hoppers",
      image: StringHoppers,
    },
    {
      name: "Egg Hoppers",
      image: EggHoppers,
    },
    {
      name: "Noodles",
      image: Noodles,
    },
  ];

  const accommadation = [
    {
      name: "Malangamuwa Rd",
      image: Malangamuwa,
    },
    {
      name: "Badulusirigama",
      image: Badulusirigama,
    },
    {
      name: "Badulusirigama2",
      image: Badulusirigama2,
    },
    {
      name: "2nd Mile",
      image: SecondMile,
    },
    {
      name: "Rambukpotha",
      image: Rambukpotha,
    },
  ];

  const rides = [
    {
      name: "Bicycle",
      image: Bicycle,
    },
    {
      name: "E Bike",
      image: EBike,
    },
    {
      name: "Motor Bike",
      image: MotorBike,
    },
    {
      name: "Car",
      image: Car,
    },
    {
      name: "Van",
      image: Van,
    },
  ];

  return (
    <div className="flex flex-col">
      <Navbar onSearch={setSearchTerm} searchItem={searchTerm} />
      <Hero />
      <div className="flex flex-col justify-center items-center flex-grow">
        <AdBanner />
        <HomeList
          bgColor="#DDFBFC"
          circleColor="#8EBD8A"
          array={food}
          title={title[0]}
        />
        <HomeList
          bgColor="#FCDDDD"
          circleColor="#C57474"
          array={accommadation}
          title={title[1]}
        />
        <HomeList
          bgColor="#E0DDFC"
          circleColor="#988DD9"
          array={rides}
          title={title[2]}
        />
      </div>
      <Footer />
    </div>
  );
}
