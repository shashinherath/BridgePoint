import React, { useState } from "react";
import axios from "axios";

export default function AddItemPopup({ onClose, onAddItem }) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const token = localStorage.getItem("token");
  const providedservice = localStorage.getItem("providedservice");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [portionSize, setPortionSize] = useState("");
  const [seats, setSeats] = useState("");
  const [accommodationSize, setAccommodationSize] = useState("");
  const [guideType, setGuideType] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("portionSize", portionSize);
    formData.append("seats", seats);
    formData.append("accommodationSize", accommodationSize);
    formData.append("guideType", guideType);

    try {
      const response = await axios.post(
        `${backendUrl}/api/services/additem`,
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      onAddItem(response.data);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        {showSuccessMessage && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md opacity-90">
            Item added successfully!
          </div>
        )}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Add New Item
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price (LKR)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          {providedservice === "Food" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Portion Size
              </label>
              <select
                value={portionSize}
                onChange={(e) => setPortionSize(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              >
                <option value="">Select Portion Size</option>
                <option value="1 person">1 person</option>
                <option value="2 person">2 person</option>
                <option value="3 person">3 person</option>
              </select>
            </div>
          )}
          {providedservice === "Rides" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seats
              </label>
              <select
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              >
                <option value="">Select Seats</option>
                <option value="1 seat">1 seat</option>
                <option value="2 seats">2 seats</option>
                <option value="3 seats">3 seats</option>
                <option value="5 seats">5 seats</option>
                <option value="7 seats">7 seats</option>
              </select>
            </div>
          )}
          {providedservice === "Accommodation" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Accommodation Size
              </label>
              <select
                value={accommodationSize}
                onChange={(e) => setAccommodationSize(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              >
                <option value="">Select Accommodation size</option>
                <option value="1 person">1 person</option>
                <option value="2 person">2 person</option>
                <option value="3 person">3 person</option>
                <option value="4 person">4 person</option>
                <option value="6 person">6 person</option>
                <option value="8 person">8 person</option>
              </select>
            </div>
          )}
          {providedservice === "Guide" && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service type
              </label>
              <select
                value={guideType}
                onChange={(e) => setGuideType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              >
                <option value="">Select Service type</option>
                <option value="Guidance service">Guidance service</option>
                <option value="Camping service">Camping service</option>
              </select>
            </div>
          )}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition duration-300"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
