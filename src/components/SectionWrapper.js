// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";
import CustomImage from "./CustomImage";
import { appImages } from "../config/data";

// Component
function SectionWrapper({
  isReverse,
  title,
  image,
  description,
  showBtn,
  bannerClass,
  titleClass,
  descClass,
  ...rest
}) {
  // Debug
  //console.log("Debug sectionWrapper: ",)

  // Return component
  return (
    <section
      {...rest}
      className={`
        min-h-screen flex justify-center items-center p-16 sm:p-8
        ${isReverse ? "bg-gray-50" : "bg-white"} 
        ${bannerClass}
      `}
    >
      {/** MAIN CONTAINER */}
      <div
        className={`
          flex items-center 
          ${isReverse ? tw?.boxReverseClass : tw?.boxClass}
        `}
      >
        {/** LEFT CONTAINER */}
        <div
          className={`
            ${tw?.descDiv}
            ${isReverse ? " fadeRightMini" : " fadeLeftMini"}
            ${isReverse ? "text-right" : "text-left"}
          `}
        >
          {/** Title */}
          <h1 className={`${tw?.h1Text} ${titleClass}`}>{title}</h1>

          {/** Description */}
          <p className={`${tw?.descText} ${descClass}`}> {description}</p>

          {/** Button */}
          {showBtn && (
            <CustomButton isLink href="https://expo.dev/@klincoder">
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
                    Download on
                  </p>
                  <p className={`${tw?.btnText} font-bold text-sm`}>
                    Expo Store
                  </p>
                </div>
              </a>
            </CustomButton>
          )}
        </div>

        {/** RIGHT CONTAINER*/}
        <div className={`flex-1 p-8 sm:px-0 ${tw?.flexCenter}`}>
          {/** Image */}
          <CustomImage
            src={image}
            alt="mockup"
            imgClass={`
              ${tw?.sectionImg}
              ${isReverse ? " fadeRightMini" : " fadeLeftMini"}
            `}
          />
        </div>
      </div>
    </section>
  ); // close return
} // close component

// Export default
export default SectionWrapper;
