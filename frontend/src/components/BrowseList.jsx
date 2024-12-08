import React from "react";

export default function BrowseList() {
  return (
    <div className="flex flex-col justify-start w-full px-20">
      <h1 className="text-2xl font-bold">Popular near you</h1>

      <div className="xl:lg:md:sm:grid xl:lg:md:sm:grid-cols-4 xl:lg:md:sm:justify-items-center flex flex-wrap justify-start py-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="bg-white w-72 h-64 m-4 rounded-lg shadow-xl">
            <img
              src="https://via.placeholder.com/150"
              alt="food"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h1 className="text-xl font-semibold">CDK</h1>
              <p className="text-sm text-gray-500">Vegitable Rice</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xl font-bold">Rs. 150</p>
                <button className="bg-orange-800 text-white px-4 py-2 rounded-md">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
