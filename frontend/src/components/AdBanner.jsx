import React from "react";

export default function AdBanner() {
  return (
    <div>
      <div className="bg-gray-300 text-black text-center py-8 my-4 mx-96 rounded-xl">
        <h1 className="font-bold text-xl pb-2">
          Get exclusive discounts through BridgePoint
        </h1>
        <p>
          <span className="font-semibold">
            Get up to 10% off for food and get delivered for free! |
          </span>
          <span> Ends Jan 13, Min spend Rs.700/-</span>
        </p>
      </div>
    </div>
  );
}
