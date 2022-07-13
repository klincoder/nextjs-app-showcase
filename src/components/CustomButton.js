// Import resources
import React from "react";

// Import custom files
import tw from "../styles/twStyles";

// Component
export default function CustomButton({
  isNormal,
  type,
  onClick,
  isLink,
  href,
  target,
  divClass,
  btnClass,
  children,
  ...rest
}) {
  // Debug
  //console.log("Debug customButton: ",)

  // Return component
  return (
    <>
      {/** IsNormal */}
      {isNormal && (
        <div className={divClass}>
          <button
            type={type || "button"}
            onClick={onClick}
            className={btnClass}
            {...rest}
          >
            {children}
          </button>
        </div>
      )}

      {/** IsLink */}
      {isLink && (
        <a
          href={href || "#"}
          target={target || "self"}
          className={btnClass}
          {...rest}
        >
          {children}
        </a>
      )}
    </>
  ); // close return
} // close component
