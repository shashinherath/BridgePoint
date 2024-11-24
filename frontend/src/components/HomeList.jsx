import React from "react";

export default function HomeList({ bgColor, circleColor }) {
  return (
    <div
      className="rounded-[25px] mx-4 my-5 h-60 w-full max-w-6xl p-5 flex flex-wrap justify-center space-x-4"
      style={{ backgroundColor: bgColor }}
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48"
          style={{ backgroundColor: circleColor }}
        ></div>
      ))}
    </div>
  );
}
