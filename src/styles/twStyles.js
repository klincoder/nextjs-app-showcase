// TW STYLES
const tw = {
  boxClass: "flex-row mdMax:flex-col",
  boxReverseClass: "flex-row-reverse mdMax:flex-col-reverse",

  h1Text:
    "font-bold font-IBMPlex text-5xl sm:text-4xl mdMin:text-6xl lgMin:text-8xl leading-12 mdMin:leading-13",
  pText:
    "my-5 mdMin:my-10 font-IBMPlex font-light text-xl mdMin:text-3xl lgMin:text-4xl mdMin:leading-16",
  descText:
    "my-5 mdMin:my-10 font-IBMPlex font-light text-xl mdMin:text-3xl lgMin:text-4xl mdMin:leading-16",
  btnText: "text-white font-IBMPlex mdMin:text-lg",

  btnPrimary:
    "bg-primary mt-4 py-4 px-6 text-white text-lg mdMin:text-2xl font-IBMPlex font-medium rounded-lg hover:shadow-2xl",
  btnBlack:
    "bg-black flex items-center py-2 px-4 rounded-md mt-2 w-fit cursor-pointer",

  section: "flex justify-center items-center p-16 sm:p-8",
  subSection: "flex items-center w-full mdMin:w-3/4",
  descDiv: "flex-1 w-full flex justify-start flex-col md:mb-10 ",

  flexCenter: "flex justify-center items-center",
  flexWrap: "flex justify-center flex-wrap",

  fullImg: "w-full h-full object-cover",
  sectionImg: "w-full h-full mdMin:w-11/12 mdMin:h-11/12 object-contain",
  btnIcon: "w-5 h-5 md:min-w-10 md:min-h-10 object-contain",

  featureImg: "w-20 h-20 mb-3 object-contain rounded-full",
  featureText: "text-base text-gray-800 font-semibold  lgMin:text-3xl",
  featureCard:
    "flex flex-col justify-around items-center bg-white m-10 p-6 w-100 h-100 rounded-md hover:shadow-lg",

  cmsNavIconLeft: "w-3 h-3 mr-3",
  cmsNavIconRight: "ml-auto",

  btnPrimary:
    "inline-block px-6 py-3 bg-primary rounded-full text-white text-sm font-semibold leading-tight uppercase shadow-md hover:bg-lightPrimary hover:shadow-lg focus:bg-lightPrimary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg disabled:opacity-60 disabled:pointer-events-none transition duration-150 ease-in-out",
  btnPrimaryWhite:
    "inline-block px-6 py-3 bg-white rounded-full text-primary text-sm font-semibold leading-tight uppercase shadow-md hover:bg-lightPrimary hover:shadow-lg focus:bg-lightPrimary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lightPrimary active:shadow-lg disabled:opacity-60 disabled:pointer-events-none transition duration-150 ease-in-out",

  btnSecondary:
    "inline-block px-6 py-3 bg-secondary rounded-full text-white text-sm font-semibold leading-tight uppercase shadow-md hover:bg-lightSecondary hover:shadow-lg focus:bg-lightSecondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lightSecondary active:shadow-lg disabled:opacity-60 disabled:pointer-events-none transition duration-150 ease-in-out",
  btnSecondaryWhite:
    "inline-block px-6 py-3 bg-white rounded-full text-secondary text-sm font-semibold leading-tight uppercase shadow-md hover:bg-lightSecondary hover:shadow-lg focus:bg-lightSecondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lightSecondary active:shadow-lg disabled:opacity-60 disabled:pointer-events-none transition duration-150 ease-in-out",

  btnDanger:
    "inline-block px-6 py-3 bg-danger rounded-full text-white text-sm font-semibold leading-tight uppercase shadow-md hover:bg-lightDanger hover:shadow-lg focus:bg-lightDanger focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lightDanger active:shadow-lg disabled:opacity-60 disabled:pointer-events-none transition duration-150 ease-in-out",

  btnSuccess:
    "inline-block px-6 py-3 bg-success rounded-full text-white text-sm font-semibold leading-tight uppercase shadow-md hover:bg-lightSuccess hover:shadow-lg focus:bg-lightSuccess focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lightSuccess active:shadow-lg disabled:opacity-60 disabled:pointer-events-none transition duration-150 ease-in-out",

  btnAccent:
    "inline-block px-6 py-3 bg-accent rounded-full text-white text-sm font-semibold leading-tight uppercase shadow-md hover:bg-lightAccent hover:shadow-lg focus:bg-lightAccent focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lightAccent active:shadow-lg disabled:opacity-60 disabled:pointer-events-none transition duration-150 ease-in-out",

  btnPaginator:
    "page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none rounded-full text-gray-500 transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none focus:shadow-none",

  aboutStatsIcon: "text-primary w-7 h-7",
};

// Export
export default tw;
