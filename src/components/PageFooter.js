// Import resources
import React from "react";
import moment from "moment";

// Import custom files
import tw from "../styles/twStyles";
import CustomButton from "./CustomButton";
import { appImages } from "../config/data";

// Component
function PageFooter() {
  // Debug
  //console.log("Debug footer: ",)

  // Return component
  return (
    <footer className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
      {/** COPYRIGHT */}
      <div className={`pt-8 ${tw?.pText} ${tw?.whiteText}`}>
        <div>Copyright &copy; {`${moment().format("YYYY")} KlincoderNFT`}</div>
        <span>Website by </span>
        <CustomButton isLink href="https://github.com/klincoder">
          <a className="bold underline" target="_blank">
            Klincoder
          </a>
        </CustomButton>
      </div>
    </footer>
  ); // close return
} // close component

// Export default
export default PageFooter;
