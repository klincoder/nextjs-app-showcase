// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import { appImages } from "../config/data";
import Navbar from "./Navbar";
import PageMeta from "./PageMeta";
import Footer from "./Footer";

// Component
export default function PageContent({
  title,
  description,
  keywords,
  screenshot,
  children,
  ...rest
}) {
  // Debug
  //console.log("Debug pageContent: ",)

  // Return component
  return (
    <div>
      {/** Page meta */}
      <PageMeta
        isNormal
        title={title}
        description={description}
        keywords={keywords}
        screenshot={screenshot}
      />

      {/** Header */}
      {/* <Navbar /> */}

      {/** Inidividual pages as children */}
      <>{children}</>

      {/** Footer */}
      <Footer />
    </div>
  ); // close return
} // close component
