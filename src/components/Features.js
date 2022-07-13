// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import { appImages } from "../config/data";
import FeaturesItem from "./FeaturesItem";

// Component
export default function Features() {
  // Debug
  //console.log("Debug features: ",)

  // Return component
  return (
    <div className={`${tw?.section} ${tw?.bgPrimary} banner03`}>
      <div className={`${tw?.subSection} flex-col text-center`}>
        {/** Title */}
        <div>
          <h1 className={`${tw?.h1Text} ${tw?.whiteText}`}>Technologies</h1>
          <p className={`${tw?.pText} ${tw?.whiteText}`}>
            Built with a cross-platform technology, React Native.
          </p>
        </div>

        {/** Content */}
        <div className={tw?.flexWrap}>
          <FeaturesItem iconUrl={appImages?.react} iconText="React Native" />
          <FeaturesItem iconUrl={appImages?.javascript} iconText="JavaScript" />
        </div>
      </div>
    </div>
  ); // close return
} // close component
