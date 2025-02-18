import React, { useState, useEffect } from "react";
import axios from "axios";
import { PlusIcon } from "@heroicons/react/24/outline";
import AddItemPopup from "./AddItemPopup";
import ItemPopup from "./ItemPopup";

export default function SellerListing({ searchTerm }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const token = localStorage.getItem("token");

  const [foodItems, setFoodItems] = useState([]);
  const [food, setFood] = useState(foodItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/services/getitems`, {
        headers: {
          Authorization: token,
        },
      });
      setFoodItems(response.data);
      setFood(response.data);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

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
    fetchFoodItems();
    setIsAddPopupOpen(false);
    setMessage("Item updated successfully!");
    setShowMessage(true);
    setAnimationClass("slide-animation");
    setTimeout(() => {
      setShowMessage(false);
      setMessage("");
      setAnimationClass("");
    }, 3000);
    handleClosePopup();
  };

  const handleDeleteItem = (deleteId) => {
    console.log("Deleted item:", deleteId);
    fetchFoodItems();
    setIsAddPopupOpen(false);
    setMessage("Item deleted successfully!");
    setShowMessage(true);
    setAnimationClass("slide-animation");
    setTimeout(() => {
      setShowMessage(false);
      setMessage("");
      setAnimationClass("");
    }, 3000);
    handleClosePopup();
  };

  const handleAddItem = (newItem) => {
    setFood([...food, newItem]);
    setIsAddPopupOpen(false);
    setMessage("Item added successfully!");
    setShowMessage(true);
    setAnimationClass("slide-animation");
    setTimeout(() => {
      setShowMessage(false);
      setMessage("");
      setAnimationClass("");
    }, 3000);
    fetchFoodItems();
  };

  const filteredFoodItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {filteredFoodItems.map((item, i) => (
          <div
            key={i}
            onClick={() => handleItemClick(item)}
            className="cursor-pointer"
          >
            <div className="rounded-full h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 bg-gray-300 flex items-center justify-center cursor-pointer">
              <img
                src={backendUrl + item.imageUrl}
                alt={item.name}
                className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 rounded-full"
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
}
