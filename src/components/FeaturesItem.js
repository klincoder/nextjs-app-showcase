// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import { appImages } from "../config/data";
import CustomImage from "./CustomImage";

// Component
export default function FeaturesItem({ iconUrl, iconText }) {
  // Debug
  //console.log("Debug featuresItem: ",)

  // Return component
  return (
    <div className={tw?.featureCard}>
      {/** Image */}
      <CustomImage src={iconUrl} alt="icon" imgClass={tw?.featureImg} />
      {/** Text */}
      <p className={tw?.featureText}>{iconText}</p>
    </div>
  ); // close return
} // close component
