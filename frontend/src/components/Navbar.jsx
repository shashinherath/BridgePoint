import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

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
  return (
    <Disclosure as="nav" className="bg-orange-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
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
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
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
                <div className="flex items-center space-x-4">
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
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md bg-orange-900 px-3 py-2 text-base font-medium text-white"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-orange-300 hover:bg-orange-700 hover:text-white"
              >
                Food
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-orange-300 hover:bg-orange-700 hover:text-white"
              >
                Accommodation
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-orange-300 hover:bg-orange-700 hover:text-white"
              >
                Ride
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-orange-300 hover:bg-orange-700 hover:text-white"
              >
                Local Guide
              </Disclosure.Button>
            </div>
            <div className="border-t border-orange-700 pb-3 pt-4">
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
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
