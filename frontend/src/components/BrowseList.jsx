import React, { useEffect, useState } from "react";
import ListView from "./ListView";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BrowseList({ category, searchTerm }) {
  const backendUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : process.env.Backend_URL;

  const token = localStorage.getItem("token");

  const [items, setItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const userType = localStorage.getItem("userType");
  const navigate = useNavigate();

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

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.providerId.companyname
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.price.toString().includes(searchTerm)
  );

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
        {filteredItems.map((item, index) => (
          <div
            key={item.id || index}
            className="bg-white w-72 h-64 m-4 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={backendUrl + item.imageUrl}
              alt="item"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <p className="text-sm text-gray-500">
                {item.providerId.companyname}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xl font-bold">Rs. {item.price}</p>
                <button
                  className="bg-orange-800 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    if (!userType) {
                      navigate("/login");
                      return;
                    } else {
                      openPopup(item);
                    }
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <ListView
          selectedItem={selectedItem}
          closePopup={closePopup}
          category={category}
        />
      )}
    </div>
  );
}
