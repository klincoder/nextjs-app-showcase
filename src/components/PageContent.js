// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";
import PageMeta from "./PageMeta";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

// Component
export default function PageContent({
  title,
  description,
  keywords,
  screenshot,
  children,
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
      <PageHeader />

      {/** Inidividual pages as children */}
      <>{children}</>

      {/** Footer */}
      <div className="sticky top-full">
        <PageFooter />
      </div>
    </div>
  ); // close return
} // close component
