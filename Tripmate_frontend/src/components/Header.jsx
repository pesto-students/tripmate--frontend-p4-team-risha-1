import React from "react";

const Header = () => {
  return (
    <>
      <nav class="bg-gray-800 text-white py-3 px-6">
        <div class="container mx-auto flex items-center justify-between">
          <div class="w-1/4 text-left">
            <a href="#" class="text-xl font-bold">
              Brand
            </a>
          </div>
          <div class="w-1/2 text-center hidden lg:flex">
            <ul class="inline-flex">
              <li>
                <a class="px-4 py-2 hover:bg-gray-700" href="#">
                  Home
                </a>
              </li>
              <li>
                <a class="px-4 py-2 hover:bg-gray-700" href="#">
                  About
                </a>
              </li>
              <li>
                <a class="px-4 py-2 hover:bg-gray-700" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div class="w-1/4 text-right">
            <a href="#" class="text-xl font-bold">
              User
            </a>
          </div>
          <div class="w-1/2 text-center lg:hidden">
            <button
              class="px-3 py-2 rounded-lg text-gray-500 hover:text-white hover:bg-gray-700"
              id="nav-toggle"
              aria-label="menu"
            >
              <svg
                class="fill-current w-3 h-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
