import React from "react";
import "../assets/styles/scss/layout/_features.scss";
import featureContent from "../assets/data/FeatureContent"; // Import the content
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { getInTouch } from "../utils";

const OfferSection = () => {
  const { sectionTitle, sectionParagraph, features } = featureContent;

  const firstWord = sectionTitle.split(" ")[0];
  const restOfTitle = sectionTitle.split(" ")[1];

  return (
    <section id="offer-section" className="features section max-w-[320px] md:max-w-[1000px] lg:max-w-[1024px] 2xl:max-w-[2048px]">
        <div className="w-screen flex justify-center">
          <h2 className="self-center text-black font-semibold">Our Offer</h2>
        </div>
        <div className="w-screen flex flex-col">
          {
            features.map((feature, index) => {
              const { title, description, icon, imageFileName } = feature;
              const firstOfferTitleWord = title.split(" ")[0];
              const restOfOfferTitle = title.split(" ").slice(1).join(" ");

              return (
                <div className="grid grid-cols-1 lg:grid-cols-2 py-4 w-3/4 self-center mb-4 lg:mb-0" key={index}>
                  <div className="flex flex-col justify-center items-center lg:items-start px-4 lg:max-w-[350px] mb-4">
                      <p className="text-[30px] font-bold text-black font-poppins">{firstOfferTitleWord}<span className="text-blue-500 italic">{restOfOfferTitle}</span></p>
                      <p className="text-[12px] lg:text-[17px] text-gray-800 font-poppins text-justify max-w-[300px]">{description}</p>
                      <button onClick={()=> getInTouch()} className="bg-blue-500 text-white mt-[40px] px-6 py-3 font-bold rounded pulsate font-poppins w-[200px] text-xs">Get In Touch</button>
                  </div>
                
                  <img className="rounded" src={`./images/${imageFileName}`} alt=""/>
                </div>
              );
            })
          }
        </div>
    </section>
  );
};

export default OfferSection;
