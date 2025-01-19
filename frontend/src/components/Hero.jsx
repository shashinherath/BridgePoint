import React, { useEffect, useState } from "react";
import FoodImg from "../assets/images/Food.png";
import AccommodationImg from "../assets/images/Accommodation.png";
import RidesImg from "../assets/images/Rides.png";
import { Link } from "react-router-dom";

export default function Hero() {
  const slides = [
    {
      h1: "Welcome to BridgePoint!",
      p: "Where Campus Meets Community",
    },
    {
      h1: "Become a Partner",
      p: "Extend Your Circle!",
    },
    {
      h1: "Wanna Help Out a",
      p: "Fellow Student?",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#DDA200] text-white p-6 sm:p-8 rounded-b-3xl shadow-lg">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-4 text-black">
        {slides[currentSlide].h1}
      </h1>
      <p className="text-xl sm:text-2xl font-semibold text-center mb-6 text-black">
        {slides[currentSlide].p}
      </p>

      <div className="flex flex-wrap justify-around items-center text-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0 w-full sm:w-auto">
          <p className="text-center sm:text-left text-base sm:text-lg mb-2 text-black font-semibold">
            Your Hub for Food, Rides, and Resources <br />
            <span className="italic text-[#681414]">
              — Making University Life Easier and More Enjoyable!
            </span>
          </p>
          <Link to="/register">
            <button className="bg-[#681414] hover:bg-red-700 text-[#DDA200] py-2 px-4 sm:py-1 sm:px-6 rounded-2xl font-bold shadow-md">
              Join Now
            </button>
          </Link>
        </div>
        <Link to="/listing?category=food">
          <div className="w-1/3 sm:w-auto mb-4 sm:mb-0 hover:scale-105 transition-transform duration-300">
            <img
              src={FoodImg}
              alt="Food"
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2"
            />
            <p className="text-sm sm:text-lg font-medium text-[#681414]">
              Food →
            </p>
          </div>
        </Link>
        <Link to="/listing?category=accommodation">
          <div className="w-1/3 sm:w-auto mb-4 sm:mb-0 hover:scale-105 transition-transform duration-300">
            <img
              src={AccommodationImg}
              alt="Accommodation"
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2"
            />
            <p className="text-sm sm:text-lg font-medium text-[#681414]">
              Accommodation →
            </p>
          </div>
        </Link>
        <Link to="/listing?category=rides">
          <div className="w-1/3 sm:w-auto hover:scale-105 transition-transform duration-300">
            <img
              src={RidesImg}
              alt="Rides"
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2"
            />
            <p className="text-sm sm:text-lg font-medium text-[#681414]">
              Rides →
            </p>
          </div>
        </Link>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-black" : "bg-black/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
