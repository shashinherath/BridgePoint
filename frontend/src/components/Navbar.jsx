import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import UpdateProfile from "./UpdateProfile";
import UpdateProfileSrudent from "./UpdateProfileStudent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ onSearch, searchItem }) {
  const backendUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : process.env.Backend_URL;

  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [searchValue, setSearchValue] = useState(searchItem);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

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
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
    onSearch(searchItem);
  }, [token]);

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

  const handleGoDashboard = () => {
    if (userType === "serviceprovider") {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  const handleEnterSearch = () => {
    if (location.pathname === "/") {
      navigate("/listing?category=food&item=" + searchValue);
    }
  };

  const getNavClassName = (path) => {
    if (path === "/" && location.pathname === "/") {
      return "rounded-md bg-orange-700 px-3 py-2 text-sm font-medium text-white";
    } else if (path === "food" && category === "food") {
      return "rounded-md bg-orange-700 px-3 py-2 text-sm font-medium text-white";
    } else if (path === "accommodation" && category === "accommodation") {
      return "rounded-md bg-orange-700 px-3 py-2 text-sm font-medium text-white";
    } else if (path === "rides" && category === "rides") {
      return "rounded-md bg-orange-700 px-3 py-2 text-sm font-medium text-white";
    } else if (path === "guide" && category === "guide") {
      return "rounded-md bg-orange-700 px-3 py-2 text-sm font-medium text-white";
    }
    return "rounded-md px-3 py-2 text-sm font-medium text-orange-300 hover:bg-orange-700 hover:text-white";
  };

  const getNavClassNameMobile = (path) => {
    if (path === "/" && location.pathname === "/") {
      return "block rounded-md bg-orange-900 px-3 py-2 text-base font-medium text-white";
    } else if (path === "food" && category === "food") {
      return "block rounded-md bg-orange-900 px-3 py-2 text-base font-medium text-white";
    } else if (path === "accommodation" && category === "accommodation") {
      return "block rounded-md bg-orange-900 px-3 py-2 text-base font-medium text-white";
    } else if (path === "rides" && category === "rides") {
      return "block rounded-md bg-orange-900 px-3 py-2 text-base font-medium text-white";
    } else if (path === "guide" && category === "guide") {
      return "block rounded-md bg-orange-900 px-3 py-2 text-base font-medium text-white";
    }
    return "block rounded-md px-3 py-2 text-base font-medium text-orange-300 hover:bg-orange-700 hover:text-white";
  };

  return (
    <>
      <Disclosure as="nav" className="bg-orange-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex-shrink-0">
                    <img
                      className="block h-8 w-auto lg:hidden transition-transform duration-300 transform hover:scale-110"
                      src={Logo}
                      alt="BridgePoint"
                    />
                    <img
                      className="hidden h-20 w-auto lg:block transition-transform duration-300 transform hover:scale-110"
                      src={Logo}
                      alt="BridgePoint"
                    />
                  </div>
                  <div className="hidden lg:ml-6 lg:block">
                    <div className="flex space-x-4">
                      <Link to="/" className={getNavClassName("/")}>
                        Home
                      </Link>
                      <Link
                        to="/listing?category=food"
                        className={getNavClassName("food")}
                      >
                        Food
                      </Link>
                      <Link
                        to="/listing?category=accommodation"
                        className={getNavClassName("accommodation")}
                      >
                        Accommodation
                      </Link>
                      <Link
                        to="/listing?category=rides"
                        className={getNavClassName("rides")}
                      >
                        Ride
                      </Link>
                      <Link
                        to="/listing?category=guide"
                        className={getNavClassName("guide")}
                      >
                        Local Guide
                      </Link>
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
                        value={searchValue}
                        onChange={(e) => {
                          setSearchValue(e.target.value);
                          onSearch(e.target.value);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleEnterSearch();
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex lg:hidden">
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
                  <div className="flex items-center space-x-4">
                    {token === null && (
                      <>
                        <Link to="/register">
                          <button className="bg-orange-700 hover:bg-orange-600 text-white py-1.5 px-4 rounded-lg font-semibold">
                            Register
                          </button>
                        </Link>
                        <Link to="/login">
                          <button className="bg-orange-700 hover:bg-orange-600 text-white py-1.5 px-4 rounded-lg font-semibold">
                            Login
                          </button>
                        </Link>
                      </>
                    )}
                    {token !== null && (
                      // Profile dropdown
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
                            {userType === "serviceprovider" && (
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    onClick={handleGoDashboard}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Go to Dashboard
                                  </a>
                                )}
                              </Menu.Item>
                            )}
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
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link to="/" className={getNavClassNameMobile("/")}>
                  Home
                </Link>
                <Link
                  to="/listing?category=food"
                  className={getNavClassNameMobile("food")}
                >
                  Food
                </Link>
                <Link
                  to="/listing?category=accommodation"
                  className={getNavClassNameMobile("accommodation")}
                >
                  Accommodation
                </Link>
                <Link
                  to="/listing?category=rides"
                  className={getNavClassNameMobile("rides")}
                >
                  Ride
                </Link>
                <Link
                  to="/listing?category=guide"
                  className={getNavClassNameMobile("guide")}
                >
                  Local Guide
                </Link>
              </div>
              <div className="border-t border-orange-700 pb-3 pt-4">
                {token === null && (
                  <div className="mt-3 space-y-1 px-2">
                    <Link to="/register">
                      <Disclosure.Button className="block rounded-md px-3 py-2 text-base font-medium text-orange-400 hover:bg-orange-700 hover:text-white">
                        Register
                      </Disclosure.Button>
                    </Link>
                    <Link to="/login">
                      <Disclosure.Button className="block rounded-md px-3 py-2 text-base font-medium text-orange-400 hover:bg-orange-700 hover:text-white">
                        Login
                      </Disclosure.Button>
                    </Link>
                  </div>
                )}
                {token !== null && (
                  <>
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
                          {userType === "serviceprovider"
                            ? userData.companyname
                            : userData.firstname + userData.lastname}
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
                      {userType === "serviceprovider" && (
                        <Disclosure.Button
                          as="a"
                          href="#"
                          onClick={handleGoDashboard}
                          className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-orange-700 hover:text-white"
                        >
                          Go to Dashboard
                        </Disclosure.Button>
                      )}
                      <Disclosure.Button
                        as="a"
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-orange-700 hover:text-white"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </Disclosure.Button>
                    </div>
                  </>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {isProfileOpen && userType === "serviceprovider" && (
        <UpdateProfile
          onClose={handleProfileClose}
          onSave={handleProfileSave}
        />
      )}
      {isProfileOpen && userType === "student" && (
        <UpdateProfileSrudent
          onClose={handleProfileClose}
          onSave={handleProfileSave}
        />
      )}
    </>
  );
}
