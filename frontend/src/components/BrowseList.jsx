import React, { useEffect, useState } from "react";
import ListView from "./ListView";
import axios from "axios";

export default function BrowseList({ category }) {
  const backendUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : process.env.Backend_URL;

  const token = localStorage.getItem("token");

  const [items, setItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/services/getitemsforstudents/${category}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchItems();
  }, [category]);

  const openPopup = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedItem(null);
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col justify-start w-full px-20">
      <h1 className="text-2xl font-bold">Popular near you</h1>

      <div className="xl:lg:md:sm:grid xl:lg:md:sm:grid-cols-4 xl:lg:md:sm:justify-items-center flex flex-wrap justify-start py-5">
        {items.map((item) => (
          <div className="bg-white w-72 h-64 m-4 rounded-lg shadow-xl">
            <img
              src={backendUrl + item.imageUrl}
              alt="item"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h1 className="text-xl font-semibold">
                {item.providerId.companyname}
              </h1>
              <p className="text-sm text-gray-500">{item.name}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xl font-bold">Rs. {item.price}</p>
                <button
                  className="bg-orange-800 text-white px-4 py-2 rounded-md"
                  onClick={() => openPopup(item)}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <ListView selectedItem={selectedItem} closePopup={closePopup} />
      )}
    </div>
  );
}
