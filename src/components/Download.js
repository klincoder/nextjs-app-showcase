// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import { appImages } from "../config/data";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";

// Component
export default function Download() {
  // Debug
  //console.log("Debug download: ",)

  // Return component
  return (
    <div className={`${tw?.section} ${tw?.bgWhite}`}>
      <div className={`${tw?.subSection} flex-col text-center`}>
        {/** Title */}
        <div>
          <h1 className={`${tw?.h1Text} ${tw?.blackText}`}>
            View the Source Code
          </h1>
          <p className={`${tw?.pText} ${tw?.blackText}`}>
            Full source code on Github
          </p>
        </div>

        {/** Button */}
        <CustomButton
          isLink
          href="https://github.com/klincoder/app-klincoder-nft"
          target="_blank"
          btnClass={tw?.btnPrimary}
        >
          Source Code
        </CustomButton>

        {/** Image */}
        <div className={`${tw?.flexCenter}`}>
          <CustomImage
            src={appImages?.scene}
            alt="download source code"
            imgClass={tw?.fullImg}
          />
        </div>
      </div>
    </div>
  ); // close return
} // close component
