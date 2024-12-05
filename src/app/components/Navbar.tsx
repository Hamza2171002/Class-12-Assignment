import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="bg-[#043873]">
      {/* Main Navbar Container */}
      <div className="w-full h-auto py-4 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-[220px] flex items-center justify-between">
        {/* Logo Section */}
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <div className="hidden md:flex w-auto h-auto justify-between items-center">
          <ul className="flex space-x-6 text-[16px] md:text-[18px] font-semibold leading-[23px] text-white">
            <li className="hover:text-[#FFE492] cursor-pointer">Products</li>
            <li className="hover:text-[#FFE492] cursor-pointer">Solutions</li>
            <li className="hover:text-[#FFE492] cursor-pointer">Resources</li>
            <li className="hover:text-[#FFE492] cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* Login Button (Always Visible) */}
        <div className="hidden md:block">
          <button className="py-2 px-4 md:py-3 md:px-10 rounded-lg bg-[#FFE492] text-black font-medium hover:bg-yellow-400">
            Login
          </button>
        </div>

        {/* Hamburger Menu (Visible on Small Screens) */}
        {/* <div className="md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div> */}
      </div>

      {/* Mobile Navigation Dropdown (Optional) */}
      {/* You can toggle this dropdown with state if needed */}
      <div className="md:hidden bg-[#043873]">
        <ul className="flex flex-col space-y-4 text-center py-4 text-white">
          <li className="hover:text-[#FFE492] cursor-pointer">Products</li>
          <li className="hover:text-[#FFE492] cursor-pointer">Solutions</li>
          <li className="hover:text-[#FFE492] cursor-pointer">Resources</li>
          <li className="hover:text-[#FFE492] cursor-pointer">Pricing</li>
          <li>
            <button className="py-2 px-6 rounded-lg bg-[#FFE492] text-black font-medium hover:bg-yellow-400">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
