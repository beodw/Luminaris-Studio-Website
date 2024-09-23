import React from "react";
import logo from "../assets/images/logo.png";
import "@fontsource/poppins";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-black shadow-md">
      {/* Header Container */}
      <div className="header__container flex justify-center py-2">
        <div className="home-header-logo ">
          {/* Logo */}
          <Link to={"/"} className="no-underline hover:no-underline">
            <span id="hs_cos_wrapper_home_logo_" className="hs_cos_wrapper flex items-center gap-3 font-poppins text-white font-bold">
              <img src={logo} className="w-7 rounded-md h-auto" />
              Software Starter.com
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
