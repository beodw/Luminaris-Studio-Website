import React from "react";
import logo from "../assets/images/logo.png";
import "@fontsource/poppins";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-black shadow-md">
      {/* Top Banner */}
      <div className=" bg-purple-600 text-white font-poppins font-semibold text-[16px]">
        <div className=" text-center py-1">
          Click to See if you Qualify for a Scaling Workshop
        </div>
      </div>

      {/* Header Container */}
      <div className="header__container flex justify-center py-4">
        <div className="home-header-logo">
          {/* Logo */}
          <Link to={"/"}>
            <span id="hs_cos_wrapper_home_logo_" className="hs_cos_wrapper">
              <img src={logo} className="w-7 rounded-md h-auto" />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
