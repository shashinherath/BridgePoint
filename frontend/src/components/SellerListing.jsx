import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlusIcon } from "@heroicons/react/24/outline";
import AddItemPopup from "./AddItemPopup";
import ItemPopup from "./ItemPopup";

const SellerListing = () => {
  const backendUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : process.env.Backend_URL;

  const token = localStorage.getItem("token");

  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/api/services/getitems`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setFoodItems(response.data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchFoodItems();
  }, []);

  const [food, setFood] = useState(foodItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false); // State for AddItemPopup
  const [message, setMessage] = useState(""); // State for the message
  const [showMessage, setShowMessage] = useState(false); // To control the sliding animation
  const [animationClass, setAnimationClass] = useState(""); // State for the animation class

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedItem(null);
  };

  const handleEditItem = (editedItem) => {
    console.log("Edited item:", editedItem);
    handleClosePopup();
  };

  const handleDeleteItem = () => {
    console.log("Deleted item:", selectedItem);
    handleClosePopup();
  };

  const handleAddItem = (newItem) => {
    setFood([...food, newItem]);
    setIsAddPopupOpen(false);
    setMessage("Item added successfully!");
    setShowMessage(true); // Show the message with animation

    // Apply the animation class
    setAnimationClass("slide-animation");

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
      setMessage("");
      setAnimationClass(""); // Reset animation
    }, 3000);
  };

  return (
    <div>
      {showMessage && (
        <div
          className={`fixed top-4 right-4 bg-white text-green-600 p-3 rounded-lg border border-green-400 shadow-lg ${animationClass}`}
          style={{
            animation: "slide 3s ease-in-out infinite",
          }}
        >
          {message}
        </div>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 justify-items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 place-items-center pt-10">
        {foodItems.map((item, i) => (
          <div
            key={i}
            onClick={() => handleItemClick(item)}
            className="cursor-pointer"
          >
            <div className="rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 bg-gray-300 flex items-center justify-center cursor-pointer">
              <img
                src={backendUrl + item.imageUrl}
                alt={item.name}
                className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"
              />
            </div>
            <p className="flex justify-center font-bold text-sm pt-2">
              {item.name}
            </p>
          </div>
        ))}
        <div onClick={() => setIsAddPopupOpen(true)} className="cursor-pointer">
          <div className="rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 bg-gray-300 flex items-center justify-center">
            <PlusIcon
              className="h-8 w-8 sm:h-16 sm:w-16 md:h-24 md:w-24 lg:h-24 lg:w-24"
              style={{ strokeWidth: 3 }}
            />
          </div>
          <p className="flex justify-center font-bold text-sm pt-2">Add new</p>
        </div>
        {isPopupOpen && (
          <ItemPopup
            item={selectedItem}
            onClose={handleClosePopup}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
          />
        )}
        {isAddPopupOpen && (
          <AddItemPopup
            onClose={() => setIsAddPopupOpen(false)}
            onAddItem={handleAddItem}
          />
        )}
      </div>
    </div>
  );
};

export default SellerListing;
