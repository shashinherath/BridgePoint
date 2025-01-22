import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemPopup = ({ item, onClose, onEdit, onDelete, onAdd }) => {
  if (!item) return null;

  const backendUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : import.meta.env.VITE_BACKEND_URL;

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

  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    setName(item.name);
    setPrice(item.price);
    setDescription(item.description);
    setPortionSize(item.portionSize);
    setSeats(item.seats);
    setAccommodationSize(item.accommodationSize);
    setGuideType(item.guideType);
  }, [item]);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    if (image !== null) formData.append("image", image);
    formData.append("description", description);
    formData.append("portionSize", portionSize);
    formData.append("seats", seats);
    formData.append("accommodationSize", accommodationSize);
    formData.append("guideType", guideType);

    try {
      const response = await axios.put(
        `${backendUrl}/api/services/updateitem/${item._id}`,
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      onEdit(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error editing item:", error);
    }
  };

  const handleDeleteClick = () => {
    setDeleteId(item._id);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(
        `${backendUrl}/api/services/deleteitem/${deleteId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      onDelete(deleteId);
      setDeleteId("");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {isEditing ? (
          <>
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
            {providedservice === "Guide" && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type
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
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSaveClick}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <img
              src={backendUrl + item.imageUrl}
              alt={item.name}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-xl text-gray-800 mb-4">Rs.{item.price}</p>
            <p className="text-gray-700 mb-4">{item.description}</p>
            {providedservice === "Food" && (
              <p className="text-gray-700 mb-4">
                Portion Size: {item.portionSize || "Not selected"}
              </p>
            )}
            {providedservice === "Accommodation" && (
              <p className="text-gray-700 mb-4">
                Accommodation Size: {item.accommodationSize || "Not selected"}
              </p>
            )}
            {providedservice === "Rides" && (
              <p className="text-gray-700 mb-4">
                Seats: {item.seats || "Not selected"}
              </p>
            )}
            {providedservice === "Guide" && (
              <p className="text-gray-700 mb-4">
                Service Type: {item.guideType || "Not selected"}
              </p>
            )}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleEditClick}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={handleDeleteClick}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
      {showDeleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              onClick={cancelDelete}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <p className="text-center mb-4">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-around">
              <button
                onClick={confirmDelete}
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemPopup;
