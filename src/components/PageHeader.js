// Import resources
import React, { useState } from "react";
import { appImages, navLinks } from "../config/data";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

// Import custom files
import tw from "../styles/twStyles";
import CustomImage from "./CustomImage";
import CustomButton from "./CustomButton";
import useAppSettings from "../hooks/useAppSettings";

// Component
function PageHeader() {
  // Define state
  const [toggleMenu, setToggleMenu] = useState(false);

  // Define router
  const router = useRouter();
  const isBlogSlug = router.pathname === "/blog/[slug]";

  // Define app settings
  const { userID } = useAppSettings();

  // Debug
  //console.log("Debug pageHeader: ", router.pathname);

  // FUNCTIONS
  // HANDLE TOGGLE MENU
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  }; // close funx

  // Return component
  return (
    <nav className="relative container mx-auto px-6 py-3 border-b border-gray-200">
      {/** Links container */}
      <div className="flex items-center justify-between">
        {/** Logo */}
        <div className="pt-2 cursor-pointer">
          <CustomButton isLink href="/" passHref>
            <a>
              <CustomImage
                image={appImages?.logo}
                alt="logo"
                width={50}
                height={50}
              />
            </a>
          </CustomButton>
        </div>

        {/** Links - large screen */}
        <div className="hidden space-x-6 md:flex">
          {/** Loop navLinks */}
          {navLinks?.length > 0 &&
            navLinks?.map((item) => (
              <CustomButton isLink key={item?.id} href={item?.link}>
                <a
                  className={` hover:text-primary 
                    ${router.pathname === item?.link ? "text-primary" : ""}
                    ${item?.isBlog && isBlogSlug && "text-primary"}
                  `}
                >
                  {item?.title}
                </a>
              </CustomButton>
            ))}
        </div>

        {/** If userID */}
        {userID ? (
          <>
            {/** My Account */}
            <CustomButton id="menuBtn" isLink href="/cms">
              <a className={`hover:text-primary`}>My Account</a>
            </CustomButton>
          </>
        ) : (
          <>
            {/** Login button */}
            <CustomButton id="menuBtn" isLink href="/login">
              <a className={`${tw?.btnPrimary} hidden md:block`}>Login</a>
            </CustomButton>
          </>
        )}

        {/** Toggle menu button */}
        <CustomButton
          isNormal
          id="toggleBtn"
          onClick={handleToggleMenu}
          btnClass={`block hamburger pb-2 lg:hidden focus:outline-none`}
        >
          {/** If toggle menu */}
          {toggleMenu ? (
            <AiOutlineClose size={30} className="text-darkBlue" />
          ) : (
            <HiMenuAlt1 size={30} className="text-darkBlue" />
          )}
        </CustomButton>
      </div>

      {/** Links - small screen */}
      {toggleMenu && (
        <div
          id="navLinksSmallScreen"
          className="absolute left-6 right-6 z-50 flex flex-col items-center self-end py-8 mt-6 space-y-6 font-bold bg-white drop-shadow-md sm:w-auto sm:self-center md:hidden"
        >
          {/** Loop navLinks */}
          {navLinks?.length > 0 &&
            navLinks?.map((item) => (
              <CustomButton isLink key={item?.id} href={item?.link}>
                <a
                  className={` hover:text-primary 
                    ${router.pathname === item?.link ? "text-primary" : ""}
                    ${item?.isBlog && isBlogSlug && "text-primary"}
                  `}
                >
                  {item?.title}
                </a>
              </CustomButton>
            ))}
          {/** Buttons */}
          {/** if !userID */}
          {!userID && (
            <div className="w-full text-center px-4">
              {/** Login button */}
              <CustomButton isLink id="loginBtnSmallScreen" href="/login">
                <a className={`w-full my-3 ${tw?.btnPrimary}`}>Login</a>
              </CustomButton>
              {/** Register button */}
              <CustomButton isLink id="registerBtnSmallScreen" href="/register">
                <a className={`w-full ${tw?.btnSecondary}`}>Register</a>
              </CustomButton>
            </div>
          )}
        </div>
      )}
    </nav>
  ); // close return
} // close component

// Export
export default PageHeader;
