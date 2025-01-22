import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo/Logo.png";
import UpdateProfile from "./UpdateProfile";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SellerNavbar({ onSearch }) {
  const backendUrl =
    import.meta.env.MODE === "development"
      ? "http://localhost:5000"
      : import.meta.env.VITE_BACKEND_URL;

  const token = localStorage.getItem("token");

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/user/getuser`, {
          headers: {
            Authorization: token,
          },
        });
        console.log("User data:", response.data);
        setUserData(response.data);
        fetchAverageRating(response.data._id);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };

  const handleProfileSave = (formData) => {
    console.log("Profile updated:", formData);
    setIsProfileOpen(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    localStorage.removeItem("providedservice");
    navigate("/");
  };

  const handleGoHome = () => {
    navigate("/");
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
      <div className="flex items-center text-lg">
        {stars}
        <span className="ml-2 text-white font-semibold">
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  const fetchAverageRating = async (userId) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/services/getaveragerating/${userId}`
      );
      setAverageRating(response.data.average);
    } catch (error) {
      console.error("Error fetching average rating:", error);
    }
  };

  return (
    <>
      <Disclosure as="nav" className="bg-orange-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 sm:h-24 items-center justify-between">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex-shrink-0">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={Logo}
                      alt="BridgePoint"
                    />
                    <img
                      className="hidden h-20 w-auto lg:block"
                      src={Logo}
                      alt="BridgePoint"
                    />
                  </div>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex flex-col">
                    <h1 className="text-3xl text-white font-extrabold">
                      Dashboard
                    </h1>
                    <p className="text-xl text-white font-bold">
                      {userData.providedservice} Provider
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:w-0">
                  <div className="flex-col items-center">
                    <p className="text-white text-center font-semibold text-lg">
                      My Rating:
                    </p>
                    <div className="ml-2">
                      {renderStarRating(averageRating)}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-orange-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border-0 bg-orange-700 py-1.5 pl-10 pr-3 text-orange-300 placeholder:text-orange-400 focus:bg-white focus:text-orange-900 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Search"
                        type="search"
                        onChange={(e) => onSearch(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-orange-400 hover:bg-orange-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden lg:ml-4 lg:block">
                  <div className="flex items-center">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <Menu.Button className="flex rounded-full bg-orange-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={backendUrl + userData.profileImageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={handleGoHome}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Go to Home
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={handleProfileClick}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                                onClick={handleSignOut}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="border-t border-orange-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={backendUrl + userData.profileImageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {userData.companyname}
                    </div>
                    <div className="text-sm font-medium text-white">
                      {userData.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    onClick={handleProfileClick}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-orange-700 hover:text-white"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    onClick={handleGoHome}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-orange-700 hover:text-white"
                  >
                    Go to Home
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-orange-700 hover:text-white"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {isProfileOpen && (
        <UpdateProfile
          onClose={handleProfileClose}
          onSave={handleProfileSave}
        />
      )}
    </>
  );
}
