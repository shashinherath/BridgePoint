import React from "react";
import { Link } from "react-router-dom";

export default function HomeList({ bgColor, circleColor, array, title }) {
  return (
    <div
      className="rounded-[25px] mx-4 my-4 w-full max-w-6xl p-5"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="font-semibold text-xl pb-4 ml-10">{title}</h1>
      <div className="flex flex-wrap justify-center space-x-4">
        {array.map((item, i) => (
          <div
            key={i}
            className="hover:scale-105 transition-transform duration-300"
          >
            <Link to={item.url}>
              <div
                className="rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 bg-white flex items-center justify-center"
                style={{ backgroundColor: circleColor }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full object-cover"
                />
              </div>
              <p className="flex justify-center font-bold text-sm pt-2 hover:text-gray-500 transition-colors duration-300">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
