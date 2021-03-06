// Import resources
import React from "react";
import moment from "moment";

// Import custom files
import tw from "../styles/twStyles";
import { appImages } from "../config/data";
import CustomButton from "./CustomButton";

// Component
export default function Footer() {
  // Debug
  //console.log("Debug footer: ",)

  // Return component
  return (
    <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
      <div className={`pt-8 ${tw?.pText} ${tw?.whiteText}`}>
        <div>Copyright &copy; {`${moment().format("YYYY")} KlincoderNFT`}</div>
        <span>Website by </span>
        <CustomButton
          isLink
          href="https://github.com/klincoder"
          target="_blank"
          btnClass="bold underline"
        >
          Klincoder
        </CustomButton>
      </div>
    </div>
  ); // close return
} // close component
