// Import resources
import homeHero from "../assets/home_hero.png";
import homeCards from "../assets/home_cards.png";
import feature from "../assets/feature.png";
import expo from "../assets/expo.png";
import expo02 from "../assets/expo02.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import scene from "../assets/scene.png";
import mockup from "../assets/mockup.png";
import logo from "../assets/logo.png";

// BASE URL
export const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASEURL_PROD
    : process.env.NEXT_PUBLIC_BASEURL_DEV;

// CURRENCY SYMBOL
export const currSymbol = { ngn: "₦", btc: "₿", usd: "$" };

// INTL NUMBER FORMAT
export const intl = new Intl.NumberFormat();

// FILE EXTENSIONS
export const fileExtensions = ["jpg", "jpeg", "gif", "png"];

// APP COLORS
export const appColors = {
  primary: "#001F2D",
  secondary: "#4D626C",
  danger: "#ff5252",
  success: "#198754",
  error: "#dc3545",
  info: "#0dcaf0",
  warning: "#FFC107",
  white: "#ffffff",
  black: "#000000",
  lightBlack: "#333333",
  grey: "#74858C",
  lightGrey: "#f5f5f5",
};

// APP IMAGES
export const appImages = {
  homeHero,
  homeCards,
  feature,
  expo,
  expo02,
  javascript,
  react,
  scene,
  mockup,
  general: "https://placehold.co/600x400.png",
  logo,
};

// APP REGEX
export const appRegex = {
  numDecimal: /^\d*(\.\d+)?$/,
  fiveDecimals: /^\d*(\.\d{1,5})?$/, ///(\.\d{1,5})?$/; ///^\d*(\.\d+{1,5})?$/
  digitsOnly: /^[0-9]+$/,
  cannotStartWithZero: /^(?:[1-9]\d*|0)$/,
  url: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
};

// API ROUTES
export const apiRoutes = {
  adStatus: "mailjet-ad-status",
  adminTranx: "mailjet-admin-tranx",
  broadcast: "mailjet-broadcast",
  contactForm: "mailjet-contact-form",
  login: "mailjet-login",
  newUser: "mailjet-new-user",
  otp: "mailjet-otp",
  passChange: "mailjet-pass-change",
  profileChange: "mailjet-profile-change",
  proofStatus: "mailjet-proof-status",
  submitProof: "mailjet-submit-proof",
  userTranx: "mailjet-user-tranx",
  welcome: "mailjet-welcome",
};

// ALERT MSG
export const alertMsg = {
  general: "Internal error. Please contact support.",
  loginSucc: "Login successful",
  loginErr: "Invalid credentials",
  registerSucc: "Account created",
  otpSendSucc: "We sent your OTP code. Check your inbox or spam.",
  otpSendErr: "Failed to send OTP. Try again.",
  otpVerifyErr: "Invalid code",
  emailExistSucc: "Email address already exist",
  emailExistErr: "Invalid email address",
  usernameExistSucc: "Username already exist",
  usernameExistErr: "Invalid username",
  isRequiredAll: "All fields are required",
  passRecoverySucc: "Password recovery successful",
  passRecoveryErr: "Failed to recover password",
};

// NAV LINKS
export const navLinks = [
  { id: "123", title: "Home", link: "/" },
  { id: "456", title: "About", link: "/#homeAbout" },
  { id: "789", title: "Services", link: "/#homeServices" },
  { id: "1213", title: "Contact", link: "/contact" },
];

// APP FEATURES LIST
export const appFeaturesList = [
  {
    id: "123",
    title: "Feature 1",
    desc: "Lorep ipsum lorep ispum lorep ispum lorep ispum lorep ispum lorep ispum.",
    image: appImages?.react,
  },
  {
    id: "456",
    title: "Feature 2",
    desc: "Lorep ipsum lorep ispum lorep ispum lorep ispum lorep ispum lorep ispum.",
    image: appImages?.react,
  },
  {
    id: "789",
    title: "Feature 3",
    desc: "Lorep ipsum lorep ispum lorep ispum lorep ispum lorep ispum lorep ispum.",
    image: appImages?.react,
  },
];

// COPYRIGHT LINKS
export const copyrightLinks = [
  { id: "123", title: "FAQs", link: "/faqs" },
  { id: "456", title: "Privacy", link: "/privacy" },
  { id: "789", title: "Terms", link: "/terms" },
];
