// Import resources
import { useRecoilValue } from "recoil";

// Import custom files
import PageContent from "../src/components/PageContent";
import tw from "../src/styles/twStyles";
import { appImages } from "../src/config/data";
import SectionWrapper from "../src/components/SectionWrapper";
import Features from "../src/components/Features";
import Download from "../src/components/Download";
import Footer from "../src/components/Footer";
import CustomButton from "../src/components/CustomButton";
import { allUsersAtom, userAtom } from "../src/recoil/atoms";

// Component
export default function Home() {
  const allUsers = useRecoilValue(allUsersAtom);

  // Debug
  //console.log("Debug homepage: ", allUsers?.length);

  // Return component
  return (
    <PageContent title="Klincoder App - NFT Marketplace">
      {/** SECTION - HERO */}
      <SectionWrapper
        title="Launch your own NFT store without stress."
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using KlincoderNft."
        showBtn
        mockupImg={appImages?.homeHero}
        banner="banner"
      />

      {/** SECTION - EASY TO USE */}
      <SectionWrapper
        title="Simple to Use"
        description="Experience a buttery UI of KlincoderNFT marketplace. Smooth constant colors ofr  afluent UI design."
        mockupImg={appImages?.homeCards}
        reverse
      />

      {/** SECTION - FEATURES */}
      <Features />

      {/** SECTION - DEPLOYMENT */}
      <SectionWrapper
        title="Deploy Everywhere"
        description="KlincoderNFT is powered by Expo-CLI which runs natively on Android & iOS devices for your users. You can quickly get your app into their hands."
        mockupImg={appImages?.feature}
        reverse
      />

      {/** SECTION - CREATIVE SHOWCASE */}
      <SectionWrapper
        title="A creative way to showcase your NFTs"
        description="The app contains two screens. The first screen lists all your NFTs while the second one shows the details of a specifc NFT and bids."
        mockupImg={appImages?.mockup}
        banner="banner02"
      />

      {/** SECTION - DOWNLOAD */}
      <Download />

      {/** SECTION - FOOTER */}
      {/* <Footer /> */}
    </PageContent>
  ); // close retrn
} // close component
