import React from "react";
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

export default function BrowseService({ category }) {
  const categories = {
    food: {
      title: "Affordable, Fresh, Food to Your Door Steps",
      subtitle: "Browse any food you want!",
      items: [
        { name: "Rice and Curry", image: Riceandcurry },
        { name: "Pizza", image: Pizza },
        { name: "Bakery", image: Bakery },
        { name: "Wings", image: Wings },
        { name: "Burgers", image: Burgers },
        { name: "Fruits", image: Fruits },
        { name: "Juice", image: Juice },
      ],
    },
    accommodation: {
      title: "Comfortable, Safe, Housing Right at Your Fingertips",
      subtitle: "Find Your Perfect Home Away from Home!",
      items: [
        { name: "Malangamuwa Road", image: Malangamuwa },
        { name: "Badulusirigama", image: Badulusirigama },
        { name: "Rambukpotha", image: Rambukpotha },
        { name: "Badulusirigama", image: Badulusirigama2 },
        { name: "2nd Mile", image: SecondMile },
        { name: "Badulusirigama", image: Badulusirigama2 },
        { name: "2nd Mile", image: SecondMile },
      ],
    },
    rides: {
      title: "Seamless Travel, Shared Connections!",
      subtitle: "Pick the Ride That Fits You!",
      items: [
        { name: "Bicycle", image: Bicycle },

        { name: "EBike", image: EBike },
        { name: "MotorBike", image: MotorBike },
        { name: "Car", image: Car },
        { name: "Van", image: Van },
        { name: "Van", image: Van },
        { name: "Van", image: Van },
      ],
    },
    guide: {
      title: "Discover the Best of Sri Lanka!",
      subtitle: "Find the Perfect Guide for Your Adventure!",
      items: [], // Add guide items here
    },
  };

  const selectedCategory = categories[category];

  return (
    <div className="flex flex-col w-full px-20 py-10">
      <h1 className="text-2xl font-bold">{selectedCategory.title}</h1>
      <p className="text-xl pb-5">{selectedCategory.subtitle}</p>
      <div className="flex flex-wrap justify-between space-x-8 sm:space-x-0">
        {selectedCategory.items.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
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
