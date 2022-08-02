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
        description="Give a brief explanation of the main benefits of using your app. Lore ipsum lorep ipsum lorep ipsum lorep ipsum lorep."
      />

      {/** SECTION - FEATURES */}
      <SectionFeatures id="homeFeatures" />

      {/** SECTION - ABOUT US */}
      <SectionWrapper
        id="homeAboutUs"
        title="About Us"
        image={appImages?.homeCards}
        bannerClass="bg-secondary"
        titleClass="!text-white"
        descClass="!text-gray-50"
        description="Lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum."
      />

      {/** SECTION - BENEFIT 1 */}
      <SectionWrapper
        isReverse
        title="Benefit 1"
        image={appImages?.feature}
        description="Lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum."
      />

      {/** SECTION - BENEFIT 2 */}
      <SectionWrapper
        title="Benefit 2"
        image={appImages?.mockup}
        description="Lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum lorep ipsum."
      />

      {/** SECTION - CTA */}
      <SectionCta />
    </PageContent>
  ); // close retrn
} // close component
