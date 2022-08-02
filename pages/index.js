// Import resources
import { useRecoilValue } from "recoil";

// Import custom files
import tw from "../src/styles/twStyles";
import PageContent from "../src/components/PageContent";
import SectionWrapper from "../src/components/SectionWrapper";
import SectionFeatures from "../src/components/SectionFeatures";
import SectionCta from "../src/components/SectionCta";
import { appImages } from "../src/config/data";
import { allUsersAtom, userAtom } from "../src/recoil/atoms";

// Component
export default function Home() {
  // Define atom
  const allUsers = useRecoilValue(allUsersAtom);

  // Debug
  //console.log("Debug homepage: ", allUsers?.length);

  // Return component
  return (
    <PageContent title="App Showcase - Klincoder">
      {/** SECTION - HERO */}
      <SectionWrapper
        showBtn
        title="The best app headline goes here. Make it simple & catchy."
        image={appImages?.homeHero}
        bannerClass="banner"
        description="Give a brief explanation of the main benefits of using your app. Lore ipsum lorep ipsum lorep ipsum lorep ipsum lorep."
      />

      {/** SECTION - BENEFITS */}
      <SectionWrapper
        isReverse
        title="App Benefit 1"
        image={appImages?.homeCards}
        description="Lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum."
      />

      {/** SECTION - FEATURES */}
      <SectionFeatures />

      {/** SECTION - DEPLOYMENT */}
      <SectionWrapper
        isReverse
        title="Deploy Everywhere"
        image={appImages?.feature}
        description="KlincoderNFT is powered by Expo-CLI which runs natively on Android & iOS devices for your users. You can quickly get your app into their hands."
      />

      {/** SECTION - CREATIVE SHOWCASE */}
      <SectionWrapper
        title="A creative way to showcase your NFTs"
        image={appImages?.mockup}
        bannerClass="banner02"
        description="The app contains two screens. The first screen lists all your NFTs while the second one shows the details of a specifc NFT and bids."
      />

      {/** SECTION - CTA */}
      <SectionCta />
    </PageContent>
  ); // close retrn
} // close component
