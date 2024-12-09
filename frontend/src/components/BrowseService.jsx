import React from "react";
import Riceandcurry from "../assets/images/foodcategory/Riceandcurry.png";
import Pizza from "../assets/images/foodcategory/Pizza.png";
import Bakery from "../assets/images/foodcategory/Bakery.png";
import Wings from "../assets/images/foodcategory/Wings.png";
import Burgers from "../assets/images/foodcategory/Burgers.png";
import Fruits from "../assets/images/foodcategory/Fruits.png";
import Juice from "../assets/images/foodcategory/Juice.png";

export default function BrowseService() {
  const food = [
    {
      name: "Rice and Curry",
      image: Riceandcurry,
    },
    {
      name: "Pizza",
      image: Pizza,
    },
    {
      name: "Bakery",
      image: Bakery,
    },
    {
      name: "Wings",
      image: Wings,
    },
    {
      name: "Burgers",
      image: Burgers,
    },
    {
      name: "Fruits",
      image: Fruits,
    },
    {
      name: "Juice",
      image: Juice,
    },
  ];
  return (
    <div className="flex flex-col w-full px-20 py-10">
      <h1 className="text-2xl font-bold">
        Affordable, Fresh, Food to Your Door Steps
      </h1>
      <p className="text-xl pb-5">Browse any food you want!</p>
      <div className="flex flex-wrap justify-between space-x-8 sm:space-x-0">
        {food.map((item, i) => (
          <div className="flex flex-col items-center justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="h-8 w-8 sm:h-8 sm:w-8 md:h-12 md:w-12 lg:h-16 lg:w-16"
            />

            <p className="flex justify-center font-bold text-sm pt-2 pb-3 sm:pb-0">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
