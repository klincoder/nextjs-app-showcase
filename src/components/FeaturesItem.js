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
    <div className="bg-white p-6 mb-12 rounded-xl shadow-lg lg:mb-0">
      {/* <div className="inline-block bg-primary p-2 mb-6 rounded-full shadow-lg"> */}
      {/** Image */}
      <CustomImage
        src={image}
        alt={title}
        width={60}
        height={60}
        imgClass="shadow-lg rounded-full"
      />
      {/* </div> */}

      {/** Title */}
      <h5 className="text-lg font-bold mb-4">{title}</h5>

      {/** Description */}
      <p className="text-gray-500">{description}</p>
    </div>
  ); // close return
} // close component

// Export
export default FeaturesItem;
