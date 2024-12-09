import React from "react";
import RiceAndCurry from "../assets/images/food/RiceAndCurry.png";
import Kottu from "../assets/images/food/Kottu.png";
import StringHoppers from "../assets/images/food/StringHoppers.png";
import EggHoppers from "../assets/images/food/EggHoppers.png";
import Noodles from "../assets/images/food/Noodles.png";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function SellerListing() {
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

  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 justify-items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 place-items-center pt-10">
      {food.map((item, i) => (
        <div key={i}>
          <div className="rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 bg-gray-300 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"
            />
          </div>
          <p className="flex justify-center font-bold text-sm pt-2">
            {item.name}
          </p>
        </div>
      ))}
      <div>
        <div className="rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 bg-gray-300 flex items-center justify-center">
          <PlusIcon
            className="h-8 w-8 sm:h-16 sm:w-16 md:h-24 md:w-24 lg:h-24 lg:w-24"
            style={{ strokeWidth: 3 }}
          />
        </div>
        <p className="flex justify-center font-bold text-sm pt-2">Add new</p>
      </div>
    </div>
  );
}
