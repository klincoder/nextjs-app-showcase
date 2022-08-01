// TW STYLES
const tw = {
  whiteText: "text-white",
  blackText: "text-tertiary",

  bgWhite: "bg-white",
  bgPrimary: "bg-primary",

  boxClass: "flex-row md:flex-col",
  boxReverseClass: "flex-row-reverse md:flex-col-reverse",

  textLeft: "text-left",
  textRight: "text-right",

  h1Text:
    "font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13",
  pText:
    "my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16",
  descriptionText:
    "my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16",
  btnText: "text-white font-IBMPlex minmd:text-lg",

  btnPrimary:
    "bg-primary mt-4 py-4 px-6 text-white text-lg minmd:text-2xl font-IBMPlex font-medium rounded-lg hover:shadow-2xl",
  btnBlack:
    "bg-black flex items-center py-2 px-4 rounded-md mt-2 w-fit cursor-pointer",

  section: "flex justify-center items-center p-16 sm:p-8",
  subSection: "flex items-center w-full minmd:w-3/4",
  descDiv: "flex-1 w-full flex justify-start flex-col md:mb-10 ",

  flexCenter: "flex justify-center items-center",
  flexWrap: "flex justify-center flex-wrap",

  fullImg: "w-full h-full object-cover",
  sectionImg: "w-full h-full minmd:w-11/12 minmd:h-11/12 object-contain",
  btnIcon: "w-5 h-5 md:min-w-10 md:min-h-10 object-contain",

  featureImg: "w-20 h-20 minlg:w-40 minlg:h-40 object-contain mb-1",
  featureText:
    "font-semibold font-IBMPlex text-base minlg:text-3xl text-tertiary",
  featureCard:
    "bg-white m-10 p-6 rounded-md flex justify-around items-center flex-col hover:shadow-lg cursor-pointer w-40 h-40 minlg:w-80 minlg:h-80",

  // NEW
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
