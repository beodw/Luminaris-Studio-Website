import React from "react";
import logo from "../assets/images/logo.png";
import {getInTouch, scrollToSection} from "../utils"

const Header = () => {
  return (
    <header className="flex justify-between items-center 2xl:py-8 py-4 px-8 lg:px-[90px] 2xl:px-[300px] z-30 w-screen">
      <div className="flex items-center space-x-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="outsourced-coder logo"
            className="h-2 w-2 sm:h-2 sm:w-2 md:h-8 md:w-8"
          />
          <span className="text-[13px] md:text-xl 2xl:text-[60px] font-semibold text-black">outsourced-coder.com</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:block flex items-center space-x-6">
          <button
            onClick={()=> scrollToSection("offer-section")}
            className="text-[10px] 2xl:text-[50px] md:text-sm font-medium text-black hover:text-blue-600 hover:no-underline"
          >
            Our Offer
          </button>
          <button
            onClick={()=> scrollToSection("testimonials-section")}
            className="text-[10px] 2xl:text-[50px] md:text-sm font-medium text-black hover:text-blue-600 hover:no-underline"
          >
            Testimonials
          </button>
          <button
            onClick={()=> scrollToSection("our-process")}
            className="text-[10px] 2xl:text-[50px] md:text-sm font-medium text-black hover:text-blue-600 hover:no-underline"
          >
            Our Process
          </button>
          {/* <div className="relative group">
            <button className="text-sm font-medium text-blue-900 hover:text-blue-600 flex items-center">
              Product
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg mt-2">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-100"
              >
                Submenu Item 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-blue-900 hover:bg-blue-100"
              >
                Submenu Item 2
              </a>
            </div>
          </div> */}
        </nav>
      </div>

      {/* Call-to-Action Button */}
      <button onClick={()=> getInTouch()} className="hover:no-underline bg-blue-500 font-bold text-white text-[10px] 2xl:text-[50px] md:text-sm 2xl:py-8 2xl:px-8 px-2 py-[4px] md:px-4 md:py-2 rounded md:rounded-md hover:cursor-pointer">
        Book a call
      </button>
    </header>
  );
};

export default Header;
