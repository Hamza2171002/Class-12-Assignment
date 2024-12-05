import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-white py-8 px-4 sm:px-10 md:px-20 lg:px-40">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/logo.png"
              alt="Whitespace Logo"
              width={191}
              height={40}
              className="mr-2"
            />
            {/* <h2 className="font-bold text-lg">Whitespace</h2> */}
          </div>
          <p className="text-sm">
            Whitespace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>

        {/* Links - Product */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Overview</li>
            <li className="hover:text-yellow-400 cursor-pointer">Pricing</li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Customer stories
            </li>
          </ul>
        </div>

        {/* Links - Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Blog</li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Guides & tutorials
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              Help center
            </li>
          </ul>
        </div>

        {/* Links - Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">About us</li>
            <li className="hover:text-yellow-400 cursor-pointer">Careers</li>
            <li className="hover:text-yellow-400 cursor-pointer">Media kit</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-300">
        © 2021 Whitespace LLC.
      </div>
    </footer>
  );
};

export default Footer;
