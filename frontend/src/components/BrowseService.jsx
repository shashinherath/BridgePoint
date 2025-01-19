import React from "react";
import { Link } from "react-router-dom";
import Riceandcurry from "../assets/images/foodcategory/Riceandcurry.png";
import Pizza from "../assets/images/foodcategory/Pizza.png";
import Bakery from "../assets/images/foodcategory/Bakery.png";
import Wings from "../assets/images/foodcategory/Wings.png";
import Burgers from "../assets/images/foodcategory/Burgers.png";
import Fruits from "../assets/images/foodcategory/Fruits.png";
import Juice from "../assets/images/foodcategory/Juice.png";
import Badulusirigama from "../assets/images/accommodation/Badulusirigama.png";
import Malangamuwa from "../assets/images/accommodation/Malangamuwa.png";
import SecondMile from "../assets/images/accommodation/SecondMile.png";
import Rambukpotha from "../assets/images/accommodation/Rambukpotha.png";
import Badulusirigama2 from "../assets/images/accommodation/Badulusirigama2.png";
import Bicycle from "../assets/images/rides/Bicycle.png";
import Car from "../assets/images/rides/Car.png";
import EBike from "../assets/images/rides/EBike.png";
import MotorBike from "../assets/images/rides/MotorBike.png";
import Van from "../assets/images/rides/Van.png";
import DoubleCab from "../assets/images/rides/DoubleCab.png";
import Bus from "../assets/images/rides/Bus.png";
import TourGuide from "../assets/images/guide/TourGuide.png";
import Tent from "../assets/images/guide/Tent.png";
import WhiteSpace from "../assets/images/guide/Whitespace.png";

export default function BrowseService({ category }) {
  const categories = {
    food: {
      title: "Affordable, Fresh, Food to Your Door Steps",
      subtitle: "Browse any food you want!",
      items: [
        {
          name: "Rice and Curry",
          image: Riceandcurry,
          url: "/listing?category=food&item=rice",
        },
        {
          name: "Pizza",
          image: Pizza,
          url: "/listing?category=food&item=pizza",
        },
        {
          name: "Bakery",
          image: Bakery,
          url: "/listing?category=food&item=bakery",
        },
        {
          name: "Wings",
          image: Wings,
          url: "/listing?category=food&item=wings",
        },
        {
          name: "Burgers",
          image: Burgers,
          url: "/listing?category=food&item=burgers",
        },
        {
          name: "Fruits",
          image: Fruits,
          url: "/listing?category=food&item=fruits",
        },
        {
          name: "Juice",
          image: Juice,
          url: "/listing?category=food&item=juice",
        },
      ],
    },
    accommodation: {
      title: "Comfortable, Safe, Housing Right at Your Fingertips",
      subtitle: "Find Your Perfect Home Away from Home!",
      items: [
        {
          name: "Malangamuwa Road",
          image: Malangamuwa,
          url: "/listing?category=accommodation&item=malangamuwa",
        },
        {
          name: "Badulusirigama",
          image: Badulusirigama,
          url: "/listing?category=accommodation&item=badulusirigama",
        },
        {
          name: "Rambukpotha",
          image: Rambukpotha,
          url: "/listing?category=accommodation&item=rambukpotha",
        },
        {
          name: "Badulusirigama",
          image: Badulusirigama2,
          url: "/listing?category=accommodation&item=badulusirigama",
        },
        {
          name: "2nd Mile",
          image: SecondMile,
          url: "/listing?category=accommodation&item=2ndmile",
        },
        {
          name: "Badulusirigama",
          image: Badulusirigama2,
          url: "/listing?category=accommodation&item=badulusirigama",
        },
        {
          name: "2nd Mile",
          image: SecondMile,
          url: "/listing?category=accommodation&item=2ndmile",
        },
      ],
    },
    rides: {
      title: "Seamless Travel, Shared Connections!",
      subtitle: "Pick the Ride That Fits You!",
      items: [
        {
          name: "Bicycle",
          image: Bicycle,
          url: "/listing?category=rides&item=bicycle",
        },
        {
          name: "EBike",
          image: EBike,
          url: "/listing?category=rides&item=ebike",
        },
        {
          name: "MotorBike",
          image: MotorBike,
          url: "/listing?category=rides&item=motorbike",
        },
        { name: "Car", image: Car, url: "/listing?category=rides&item=car" },
        { name: "Van", image: Van, url: "/listing?category=rides&item=van" },
        {
          name: "Double Cab",
          image: DoubleCab,
          url: "/listing?category=rides&item=doublecab",
        },
        { name: "Bus", image: Bus, url: "/listing?category=rides&item=bus" },
      ],
    },
    guide: {
      title: "Discover the Best of Sri Lanka!",
      subtitle: "Find the Perfect Guide for Your Adventure!",
      items: [
        {
          name: "Tour Guide",
          image: TourGuide,
          url: "/listing?category=guide&item=tour",
        },
        {
          name: "Camping",
          image: Tent,
          url: "/listing?category=guide&item=camping",
        },
        {
          name: "",
          image: WhiteSpace,
          url: "/listing?category=guide",
        },
        {
          name: "",
          image: WhiteSpace,
          url: "/listing?category=guide",
        },
        {
          name: "",
          image: WhiteSpace,
          url: "/listing?category=guide",
        },
        {
          name: "",
          image: WhiteSpace,
          url: "/listing?category=guide",
        },
        {
          name: "",
          image: WhiteSpace,
          url: "/listing?category=guide",
        },
      ],
    },
  };

  const selectedCategory = categories[category];

  return (
    <div className="flex flex-col w-full px-20 py-10">
      <h1 className="text-2xl font-bold">{selectedCategory.title}</h1>
      <p className="text-xl pb-5">{selectedCategory.subtitle}</p>
      <div className="flex flex-wrap justify-between space-x-8 sm:space-x-0">
        {selectedCategory.items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center transition-transform transform hover:scale-105"
          >
            <Link to={item.url}>
              <img
                src={item.image}
                alt={item.name}
                className="h-8 w-8 sm:h-8 sm:w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 transition-transform transform hover:scale-110"
              />
              <p className="flex justify-center font-bold text-sm pt-2 pb-3 sm:pb-0 transition-colors hover:text-blue-500">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
