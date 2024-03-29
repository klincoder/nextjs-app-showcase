// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";
import { appImages } from "../config/data";

// Component
function SectionCta({ ...rest }) {
  // Debug
  //console.log("Debug sectionCta: ",)

  // Return component
  return (
    <section {...rest} className={`${tw?.section} bg-primary`}>
      {/** MAIN CONTAINER */}
      <div className={`${tw?.subSection} flex-col text-center py-14`}>
        {/** Header */}
        <div className="mb-6">
          <h1 className={`${tw?.h1Text} !text-white`}>Download App</h1>
          <p className={`${tw?.pText} !text-white`}>
            Available for Android & iOS devices
          </p>
        </div>

        {/** Buttons */}
        <div className="flex gap-3">
          {/** Android */}
          <CustomButton isLink href="/#">
            <a className={tw?.btnSecondary} target="_blank">
              Android
            </a>
          </CustomButton>
          {/** iOS */}
          <CustomButton isLink href="/#">
            <a className={tw?.btnSecondary} target="_blank">
              iOS
            </a>
          </CustomButton>
        </div>

        {/** Image */}
        {/* <div className={`${tw?.flexCenter}`}>
          <CustomImage
            src={appImages?.scene}
            alt="download source code"
            imgClass={tw?.fullImg}
          />
        </div> */}
      </div>
    </section>
  ); // close return
} // close component

// Export
export default SectionCta;
