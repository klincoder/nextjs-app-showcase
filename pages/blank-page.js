// Import resources
import React from "react";

// Import custom files
import tw from "../src/styles/twStyles";
import PageContent from "../src/components/PageContent";
import { appImages } from "../src/config/data";

// Component
function BlankPage() {
  // Debug
  //console.log("Debug blankPage: ",)

  // Return component
  return (
    <PageContent title="BlankPage">
      {/** SECTION - PAGE DETAILS */}
      <section id="BlankPage" className="bg-white">
        {/** MAIN CONTAINER */}
        <div className="container flex mx-auto px-4 py-24 md:flex-row md:space-y-0">
          {/** COL 1 */}
          <div className="flex flex-col mb-32 space-y-8 md:w-1/2">
            <p>Col 1</p>
          </div>

          {/** COL 2 */}
          <div className="flex flex-col mb-32 space-y-8 md:w-1/2">
            <p>Col 2</p>
          </div>
        </div>
      </section>
    </PageContent>
  ); // close return
} // close component

// Export
export default BlankPage;
