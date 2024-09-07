import React from "react";
import "../assets/styles/scss/layout/_features.scss";
import featureContent from "../assets/data/FeatureContent"; // Import the content

const FeatureSection = () => {
  const { sectionTitle, sectionParagraph, features } = featureContent;

  return (
    <section className="features section">
      <div className="container">
        <div className="features-inner section-inner">
          <div className="features-header text-center">
            <div className="container-sm">
              <h2 className="section-title mt-0">{sectionTitle}</h2>
              <p className="section-paragraph">{sectionParagraph}</p>
            </div>
          </div>
          <div className="features-wrap">
            {features.map((feature, index) => (
              <div key={index} className="feature text-center is-revealing">
                <div className="feature-inner">
                  <div
                    className="feature-icon"
                    style={{ background: feature.iconBgColor }}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="feature-title h3-mobile mb-8">
                    {feature.title}
                  </h4>
                  <p className="text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
