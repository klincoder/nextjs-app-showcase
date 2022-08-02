// Import resources
import React from "react";
import moment from "moment";
import { useRouter } from "next/router";

// Import custom files
import tw from "../styles/twStyles";
import useAppSettings from "../hooks/useAppSettings";
import CustomButton from "./CustomButton";
import { appImages, copyrightLinks } from "../config/data";

// Component
function PageFooter() {
  // Define app settings
  const { siteInfo } = useAppSettings();

  // Define router
  const router = useRouter();

  // Debug
  //console.log("Debug footer: ",)

  // Return component
  return (
    <footer className="flex flex-col items-center justify-center px-4 py-2 bg-secondary">
      {/** MAIN CONTAINER */}
      <div className={`pt-8 ${tw?.pText} !text-white text-center`}>
        {/** Copyright links */}

        {copyrightLinks?.length > 0 && (
          <ul className="flex flex-wrap justify-center text-base mb-1 space-x-2">
            {/** Loop copyrightLinks */}
            {copyrightLinks?.map((item) => (
              <li key={item?.id} className="underline">
                <CustomButton isLink href={item?.link}>
                  <a
                    className={` hover:text-primary 
                      ${router.pathname === item?.link ? "text-primary" : ""}
                    `}
                  >
                    {item?.title}
                  </a>
                </CustomButton>
              </li>
            ))}
          </ul>
        )}

        {/** Copyright */}
        <div className="text-base">
          Copyright &copy;{" "}
          {`${moment().format("YYYY")} ${siteInfo?.copyrightName}`}
        </div>
        {/* <span>Website by </span>
        <CustomButton isLink href="https://github.com/klincoder">
          <a className="bold underline" target="_blank">
            Klincoder
          </a>
        </CustomButton> */}
      </div>
    </footer>
  ); // close return
} // close component

// Export default
export default PageFooter;
