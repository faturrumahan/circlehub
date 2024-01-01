import React from "react";
import { NavLink, Link } from "react-router-dom";

const Sidebar = ({ id }) => {
  return (
    <>
      <aside
        id="logo-sidebar"
        className="h-full w-full bg-[#242424] bg-opacity-[0.98] lg:bg-transparent"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto px-3 py-2 lg:py-4">
          <ul className="flex justify-center space-x-5 lg:flex-col lg:space-x-0 lg:space-y-2">
            <li className="hidden lg:block">
              <Link
                to="/"
                className="my-2 flex items-center justify-center ps-2.5 lg:my-0 lg:mb-2 lg:justify-start"
              >
                {/* <div className="mr-2 h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div> */}
                <img src="chub.png" alt="logo" className="mr-2 h-8 w-8"></img>
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                  Circle
                  <span className="ms-1 rounded-md bg-orange-400 p-1 text-black">
                    Hub
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <NavLink
                to="/"
                className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-700 aria-[current=page]:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                <span className="ms-3 hidden lg:block">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-700 aria-[current=page]:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="ms-3 hidden lg:block">Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-700 aria-[current=page]:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>

                <span className="ms-3 hidden lg:block">Search</span>
              </NavLink>
            </li>
            {/* {id && (
              <li>
                <NavLink
                  to="/add"
                  className="group flex items-center rounded-lg p-2 text-white hover:bg-gray-700 aria-[current=page]:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">Create</span>
                </NavLink>
              </li>
            )} */}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
