import React, { useState } from "react";
import RicenCurry from "../assets/images/food/RicenCurry.png";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const ListView = ({ selectedItem, closePopup, category }) => {
  const backendUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : process.env.Backend_URL;

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [shopRating, setShopRating] = useState(3.5); // Initial shop rating
  const [ratingCount, setRatingCount] = useState(1); // Initial rating count

  const handleRating = (value) => {
    const newRatingCount = ratingCount + 1;
    const newShopRating = (shopRating * ratingCount + value) / newRatingCount;

    setRating(value);
    setShopRating(newShopRating);
    setRatingCount(newRatingCount);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];
    for (let i = 1; i <= fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-yellow-500">
          ★
        </span>
      );
    }
    if (halfStar) {
      stars.push(
        <span key="half" className="text-yellow-300">
          ★
        </span>
      );
    }
    for (let i = 1; i <= emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">
          ★
        </span>
      );
    }
    return (
      <div className="flex items-center">
        {stars}
        <span className="ml-2 text-gray-500">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        <div className="bg-white rounded-xl max-w-3xl p-6 relative shadow-lg flex transform transition-transform duration-300 hover:scale-105">
          <button
            className="absolute top-2 right-5 text-2xl text-gray-500 hover:text-black transition duration-300"
            onClick={closePopup}
          >
            <FaTimes />
          </button>

          {/* Photo Segment */}
          <div className="w-1/3 p-4">
            <img
              src={backendUrl + selectedItem.imageUrl}
              alt="Delicious Food"
              className="w-full h-auto rounded-lg object-cover shadow-lg"
            />
          </div>
          {/* Food Details Segment */}
          <div className="w-1/3 p-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {selectedItem.name}
            </h2>
            <p className="text-lg text-gray-500 mb-3">
              {selectedItem.description}
            </p>
            <p className="text-lg font-bold text-green-700 mb-1">
              Price: Rs. {selectedItem.price}.00
            </p>
            {category === "food" && (
              <p className="text-lg text-blue-700">
                Portion size: {selectedItem.portionSize}
              </p>
            )}
            {category === "accommodation" && (
              <p className="text-lg text-blue-700">
                Accommodation size: {selectedItem.accommodationSize}
              </p>
            )}
            {category === "rides" && (
              <p className="text-lg text-blue-700">
                Seats: {selectedItem.seats}
              </p>
            )}
            {category === "guide" && (
              <p className="text-lg text-blue-700">
                Guide Type: {selectedItem.guideType}
              </p>
            )}
          </div>
          {/* Other Information Segment */}
          <div className="w-1/3 p-4">
            <div className="mb-2">
              <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
                {selectedItem.providerId.companyname}
              </h1>
              <h4 className="text-xl font-semibold text-gray-800 mb-1 text-center">
                Contact Details:
              </h4>
              <p className="text-lg text-gray-700 mb-4 text-center">
                {selectedItem.providerId.mobilenumber}
              </p>

              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-gray-500 text-lg">Shop Rating:</span>
                {renderStarRating(shopRating)}
              </div>
              <div className="flex justify-center items-center space-x-3 mb-4 text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer ${
                      hoverRating >= star || rating >= star
                        ? "text-yellow-500"
                        : "text-gray-300"
                    } transition duration-300 hover:scale-125`}
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => handleMouseEnter(star)}
                    onMouseLeave={handleMouseLeave}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Link to="/sellerview">
                <button className="bg-orange-700 text-white py-1 px-2 rounded hover:bg-orange-800 transition duration-300 transform hover:scale-110">
                  View Shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
