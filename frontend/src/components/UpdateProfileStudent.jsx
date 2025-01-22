import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateProfileStudent = ({ onClose, onSave }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const token = localStorage.getItem("token");

  const [userData, setUserData] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [existingProfileImage, setExistingProfileImage] = useState("");
  const [showProfileImage, setShowProfileImage] = useState(null);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/user/getuser`, {
          headers: {
            Authorization: token,
          },
        });
        const user = response.data;
        setUserData(user);
        setFirstName(user.firstname);
        setLastName(user.lastname);
        setEmail(user.email);
        setMobileNumber(user.mobilenumber);
        setExistingProfileImage(user.profileImageUrl);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  }, [password, confirmPassword]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setShowProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordError) return;

    const formData = new FormData();
    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("email", email);
    formData.append("mobilenumber", mobileNumber);
    if (password) formData.append("password", password);
    if (profileImage) formData.append("profileImage", profileImage);

    try {
      const response = await axios.put(
        `${backendUrl}/api/user/updateuser`,
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setProfileImage(null);
      setShowProfileImage("");
      onSave(response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${backendUrl}/api/user/deleteuser`, {
        headers: { Authorization: token },
      });
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-10"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded shadow-lg w-full max-w-4xl my-20 max-h-full flex flex-col justify-center overflow-y-auto gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -right-0 -top-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 transition-colors duration-200"
          onClick={onClose}
        >
          ✕
        </button>
        <main className="w-full min-h-screen py-1 md:w-full lg:w-full">
          <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
              <h2 className="pl-1 text-2xl font-bold sm:text-3xl">
                Student Profile
              </h2>
              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-orange-500"
                    src={
                      showProfileImage
                        ? showProfileImage
                        : backendUrl + existingProfileImage
                    }
                    alt="Profile avatar"
                  />
                  <div className="flex flex-col space-y-5 sm:ml-8">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="profileImage"
                      name="profileImage"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="profileImage"
                      className="py-3.5 px-7 text-base font-medium text-white focus:outline-none bg-[#202142] rounded-lg border border-gray-200 hover:bg-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-200 cursor-pointer"
                    >
                      Add picture
                    </label>
                    <button
                      type="button"
                      className="py-3.5 px-7 text-base font-medium text-red-500 focus:outline-none bg-white rounded-lg border border-red-200 hover:bg-red-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-red-200"
                      onClick={() => setShowDeleteModal(true)}
                    >
                      Delete profile
                    </button>
                  </div>
                </div>
                <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                      <div className="w-full">
                        <label
                          htmlFor="firstname"
                          className="block mb-2 text-sm font-medium text-gray-600"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          className="bg-orange-50 border border-orange-300 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                          placeholder="Your first name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="lastname"
                          className="block mb-2 text-sm font-medium text-gray-600"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          className="bg-orange-50 border border-orange-300 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                          placeholder="Your lastname"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-2 sm:mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="bg-orange-50 border border-orange-300 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        placeholder="your profession"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2 sm:mb-6">
                      <label
                        htmlFor="mobilenumber"
                        className="block mb-2 text-sm font-medium text-gray-600"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobilenumber"
                        name="mobilenumber"
                        className="bg-orange-50 border border-orange-300 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                        placeholder="Your mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2 sm:mb-6">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-600"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className={`bg-orange-50 border ${
                          passwordError ? "border-red-500" : "border-orange-300"
                        } text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5`}
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-2 sm:mb-6">
                      <label
                        htmlFor="confirmpassword"
                        className="block mb-2 text-sm font-medium text-gray-600"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        className={`bg-orange-50 border ${
                          passwordError ? "border-red-500" : "border-orange-300"
                        } text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5`}
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      {passwordError && (
                        <p className="mt-2 text-sm text-red-600">
                          {passwordError}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Delete Account
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete your account? This action cannot
              be undone. All your data will be permanently removed.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfileStudent;
