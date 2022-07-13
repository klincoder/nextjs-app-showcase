// Import resources
import React from "react";
import Image from "next/image";

// Import custom files
import tw from "../styles/twStyles";
import { appImages } from "../config/data";

// Component
export default function CustomImage({ src, alt, imgClass, ...rest }) {
  // Debug
  //console.log("Debug CustomImage: ",)

  // Return component
  return (
    <>
      <Image src={src} alt={alt} className={imgClass} {...rest} />
    </>
  ); // close return
} // close component
