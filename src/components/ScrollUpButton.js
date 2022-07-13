// Import resources
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { appColors } from "../config/data";

// Import custom files
import CustomButton from "./CustomButton";

// Component
export default function ScrollUpButton() {
  // Define state for button visibility
  const [isVisible, setIsVisible] = useState(false);

  // FUNCTIONS
  // HANDLE TOGGLE VISIBILITY
  const handleToggleVisibility = () => {
    // If window vertical offset
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    } // close if
  }; // close fxn

  // HANDLE SCROLL UP
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0, // Set the top cordinate to 0
      behavior: "smooth", // Make scrolling smooth
    });
  }; // close fxn

  // SIDE EFFECTS
  // LISTEN TO SCROLL EVENT
  useEffect(() => {
    // Listen to page scroll
    window.addEventListener("scroll", handleToggleVisibility);
    // Clean up
    return () => window.removeEventListener("scroll", handleToggleVisibility);
  }, []);

  // Return component
  return (
    <>
      {/** If isVisible */}
      {isVisible && (
        <CustomButton
          isNormal
          onClick={handleScrollUp}
          btnClass={`fixed z-100 w-50 h-50 rounded-full bottom-100 right-10 bg-[${appColors?.primary}]`}
        >
          <FaArrowUp />
        </CustomButton>
      )}
    </>
  ); // close return
} // close component
