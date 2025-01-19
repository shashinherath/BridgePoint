import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaStore,
  FaCity,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const SellerProfile = () => {
  const backendUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : process.env.Backend_URL;

  const token = localStorage.getItem("token");

  const [userData, setUserData] = useState({});
  const [averageRating, setAverageRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [userResponse, ratingResponse] = await Promise.all([
          axios.get(`${backendUrl}/api/user/getprovider/${id}`, {
            headers: { Authorization: token },
          }),
          axios.get(`${backendUrl}/api/services/getaveragerating/${id}`, {
            headers: { Authorization: token },
          }),
        ]);
        setUserData(userResponse.data);
        setAverageRating(ratingResponse.data.average);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-8 max-w-6xl">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white p-8 rounded-lg flex-1">
          <div className="flex flex-col items-center md:items-start gap-8">
            <img
              src={backendUrl + userData.profileImageUrl}
              alt={userData.companyname}
              className="w-48 h-48 rounded-full border-4 border-white shadow-xl object-cover"
            />
            <div>
              <h1 className="text-4xl font-bold mb-4">
                {userData.companyname}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < averageRating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                    size={24}
                  />
                ))}
                <span className="text-xl ml-2">
                  ({averageRating.toFixed(1)})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaStore className="text-xl" />
                <span className="text-lg">{userData.providedservice}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6 flex-1">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-600 text-xl" />
              <div>
                <p className="text-gray-600">Address</p>
                <p className="font-medium">{userData.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCity className="text-orange-600 text-xl" />
              <div>
                <p className="text-gray-600">Location</p>
                <p className="font-medium">
                  {userData.city}, {userData.state}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-orange-600 text-xl" />
              <div>
                <p className="text-gray-600">Phone</p>
                <p className="font-medium">{userData.mobilenumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-600 text-xl" />
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-medium">{userData.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
