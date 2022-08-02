// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import FeaturesItem from "./FeaturesItem";
import { appFeaturesList, appImages } from "../config/data";

// Component
function SectionFeatures({ ...rest }) {
  // Debug
  //console.log("Debug sectionFeatures: ",)

  // Return component
  return (
    <section {...rest} className={`${tw?.section} bg-gray-50`}>
      {/** MAIN CONTAINER */}
      <div className={`${tw?.subSection} flex-col text-center py-14`}>
        {/** Header */}
        <div className="mb-6">
          <h1 className={`${tw?.h1Text}`}>Features</h1>
          <p className={`${tw?.pText}`}>Amazing solution-based app features</p>
        </div>

        {/** Features */}
        <div className="grid md:grid-cols-3 md:gap-x-12">
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
