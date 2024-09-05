import React from "react";
import PackageColumns from "../components/PackageColumns";
import trophy from "../assets/images/trophyImg.png";
import msg from "../assets/images/msgImg.png";
import coin from "../assets/images/coinImg.png";

const OfferCards = () => {
  return (
    <div className="mx-[50px]  flex flex-col  justify-center mt-7 mb-28">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-[42px] font-poppins">
          Simple, straight forward pricing
        </h2>
        <p className="text-[18px]">Choose a plan followed to your needs</p>
      </div>

      <div className="relative ">
        <img src={trophy} alt="" className="hidden md:block absolute w-[150px] top-[20px] -left-[50px]" />
        <img src={msg} alt="" className="hidden md:block absolute w-[110px] -top-[60px] -right-[50px] " />
        <img src={coin} alt="" className="hidden md:block absolute w-[130px] -bottom-[130px] -right-[50px] " />

        <PackageColumns />
      </div>
    </div>
  );
};

export default OfferCards;
