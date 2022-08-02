// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import FeaturesItem from "./FeaturesItem";
import { appFeaturesList, appImages } from "../config/data";

// Component
function SectionFeatures() {
  // Debug
  //console.log("Debug sectionFeatures: ",)

  // Return component
  return (
    <section className={`${tw?.section} bg-primary banner03`}>
      {/** MAIN CONTAINER */}
      <div className={`${tw?.subSection} flex-col text-center`}>
        {/** Header */}
        <div>
          <h1 className={`${tw?.h1Text} ${tw?.whiteText}`}>Features</h1>
          <p className={`${tw?.pText} ${tw?.whiteText}`}>
            Amazing solution-based app features
          </p>
        </div>

        {/** Features */}
        <div className="grid grid-cols-3 md:gap-x-12">
          {/** Loop appFeaturesList */}
          {appFeaturesList?.length > 0 &&
            appFeaturesList?.map((item) => (
              <FeaturesItem
                key={item?.id}
                title={item?.title}
                description={item?.desc}
                image={item?.image}
              />
            ))}
        </div>
      </div>
    </section>
  ); // close return
} // close component

// Export
export default SectionFeatures;
