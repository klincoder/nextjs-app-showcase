// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import CustomImage from "./CustomImage";
import { appImages } from "../config/data";

// Component
function FeaturesItem({ title, description, image, ...rest }) {
  // Debug
  //console.log("Debug featuresItem: ",)

  // Return component
  return (
    <div className={tw?.featureCard}>
      {/** Image */}
      <CustomImage
        src={image}
        alt={title}
        imgClass={tw?.featureImg}
        width={100}
        height={100}
      />

      {/** Title */}
      <h3 className={tw?.featureText}>{title}</h3>

      {/** Description */}
      <p className="text-sm">{description}</p>
    </div>
  ); // close return
} // close component

// Export
export default FeaturesItem;
