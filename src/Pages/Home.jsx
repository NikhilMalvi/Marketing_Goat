import React from "react";
import MainButton from "../components/MainButton";
import OverlayBackground from "../components/OverlayBackground";
import Counter from "../components/CustomCounter";
import HomeHero from "../components/home/HomeHero";
import SectionCompoment from "../components/home/SectionCompoment";
import HomeTab from "../components/home/HomeTab";
import IndustrySection from "../components/IndustrySection";
import HomeWork from "../components/home/HomeWork";
import HomeTool from "../components/home/HomeTool";
import Benefits from "../components/Benefits";
import { featuresData } from "./featuresData";

const Home = () => {
  return (
    <>
      <HomeHero />
      <SectionCompoment />
      <HomeTab />
      <IndustrySection />
      <HomeWork />
      <HomeTool />
      <Benefits
        featuresData={featuresData}
        heading={"Benefits of Digital Marketing"}
        description={
          "Digital marketing offers global reach, targeted campaigns, measurable performance, and cost-effective growth, helping businesses boost visibility, engage audiences, increase conversions, and build long-term customer relationships across digital channels."
        }
      />
    </>
  );
};

export default Home;
