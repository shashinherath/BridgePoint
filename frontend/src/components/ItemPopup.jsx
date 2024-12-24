import React, { useState } from 'react';
import RiceAndCurry from "../assets/images/food/RiceAndCurry.png";
import Kottu from "../assets/images/food/Kottu.png";
import StringHoppers from "../assets/images/food/StringHoppers.png";
import EggHoppers from "../assets/images/food/EggHoppers.png";
import Noodles from "../assets/images/food/Noodles.png";

const ItemPopup = ({ item, onClose, onEdit, onDelete, onAdd }) => { // Add onAdd prop
  if (!item) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState({ ...item });
  const [portionSize, setPortionSize] = useState('');
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePortionChange = (e) => {
    setPortionSize(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedItem);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    onDelete();
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const getImage = (itemName) => {
    switch (itemName) {
      case 'Rice and Curry':
        return RiceAndCurry;
      case 'Kottu':
        return Kottu;
      case 'String Hoppers':
        return StringHoppers;
      case 'Egg Hoppers':
        return EggHoppers;
      case 'Noodles':
        return Noodles;
      default:
        return '';
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOutsideClick}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96"> {/* Set fixed width */}
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={editedItem.name}
              onChange={handleChange}
              className="w-full mb-4 border rounded p-2"
              placeholder="Item Name"
            />
            <input
              type="text"
              name="price"
              value={editedItem.price}
              onChange={handleChange}
              className="w-full mb-4 border rounded p-2"
              placeholder="Item Price"
            />
            <textarea
              name="description"
              value={editedItem.description}
              onChange={handleChange}
              className="w-full mb-4 border rounded p-2"
              placeholder="Item Description"
            />
            <label htmlFor="portionSize" className="block text-gray-700 mb-2">Select Portion Size:</label>
            <select id="portionSize" value={portionSize} onChange={handlePortionChange} className="mb-4 border rounded">
              <option value="">Select size</option>
              <option value="small">1 Person</option>
              <option value="medium">2 Person</option>
              <option value="large">3 Person</option>
            </select>
            <div className="flex justify-end space-x-4">
              <button onClick={handleSaveClick} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
              <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
            </div>
          </>
        ) : (
          <>
            <img src={getImage(item.name)} alt={item.name} className="w-full h-64 object-cover mb-4 rounded" /> {/* Keep image size consistent */}
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-xl text-gray-800 mb-4">Rs.{item.price}</p>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <label htmlFor="portionSize" className="block text-gray-700 mb-2">Select Portion Size:</label>
            <select id="portionSize" value={portionSize} onChange={handlePortionChange} className="mb-4 border rounded">
              <option value="">Select size</option>
              <option value="small">1 Person</option>
              <option value="medium">2 Person</option>
              <option value="large">3 Person</option>
            </select>
            <div className="flex justify-end space-x-4">
              <button onClick={handleEditClick} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
              <button onClick={handleDeleteClick} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
          </>
        )}
      </div>
      {showDeleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <p className="text-center mb-4">Are you sure you want to delete this item?</p>
            <div className="flex justify-around">
              <button onClick={confirmDelete} className="bg-red-500 text-white px-4 py-2 rounded">Yes</button>
              <button onClick={cancelDelete} className="bg-gray-500 text-white px-4 py-2 rounded">No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemPopup;
