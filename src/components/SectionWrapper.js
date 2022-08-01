// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";
import { appImages } from "../config/data";

// Component
function SectionWrapper({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) {
  // Debug
  //console.log("Debug sectionWrapper: ",)

  // Return component
  return (
    <div
      className={`
        min-h-screen 
        ${tw?.section} 
        ${reverse ? tw?.bgWhite : tw?.bgPrimary} 
        ${banner}
      `}
    >
      <div
        className={`
          flex items-center 
          ${reverse ? tw?.boxReverseClass : tw?.boxClass}
        `}
      >
        <div
          className={`
            ${tw?.descDiv}
            ${reverse ? " fadeRightMini" : " fadeLeftMini"}
            ${reverse ? tw?.textRight : tw?.textLeft}
          `}
        >
          {/** TITLE */}
          <h1
            className={`
              ${tw?.h1Text}
              ${reverse ? tw?.blackText : tw?.whiteText}
            `}
          >
            {title}
          </h1>

          {/** DESCRIPTION */}
          <p
            className={`
              ${tw?.descriptionText}
              ${reverse ? tw?.blackText : tw?.whiteText}
            `}
          >
            {description}
          </p>

          {/** If show button - imgUrl={appImages?.expo} link="" */}
          {showBtn && (
            <CustomButton
              isLink
              href="https://expo.dev/@klincoder/klincoder-nft"
            >
              <a className={tw?.btnBlack} target="_blank">
                {/** Image */}
                <CustomImage
                  src={appImages?.expo}
                  alt="expo icon"
                  width={30}
                  height={30}
                  imgClass={tw?.btnIcon}
                />
                {/** Text */}
                <div className="flex flex-col justify-start ml-4">
                  <p className={`${tw?.btnText} font-normal text-xs`}>
                    View it on
                  </p>
                  <p className={`${tw?.btnText} font-bold text-sm`}>
                    Expo Store
                  </p>
                </div>
              </a>
            </CustomButton>
          )}
        </div>

        {/** IMAGE */}
        <div className={`flex-1 p-8 sm:px-0 ${tw?.flexCenter}`}>
          <CustomImage
            src={mockupImg}
            alt="mockup"
            imgClass={`
              ${tw?.sectionImg}
              ${reverse ? " fadeRightMini" : " fadeLeftMini"}
            `}
          />
        </div>
      </div>
    </div>
  ); // close return
} // close component

// Export default
export default SectionWrapper;
