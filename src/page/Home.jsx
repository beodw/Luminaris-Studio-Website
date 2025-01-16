import React from "react";
import "../assets/styles/scss/layout/_main.scss";
import "../assets/styles/scss/layout/_features.scss";
import featureContent from "../assets/data/FeatureContent"; // Import the content
import OfferSection from "../components/OfferSection";
import CTASection from "../components/CTASection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import OurProcess from "../components/OurProcess";

const Home = () => {
  const { sectionTitle, sectionParagraph, features } = featureContent;

  const firstWord = sectionTitle.split(" ")[0];
  const restOfTitle = sectionTitle.split(" ")[1];
  return(
    <div class="flex flex-col transparent">
              <CTASection />
              <OfferSection />
              <TestimonialSection />
              <OurProcess />
              <Footer/>
      </div>
  );
};

export default Home;
