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

const Home = () => {
  return (
    <>
      <HomeHero />
      <SectionCompoment />
      <HomeTab />
      <IndustrySection />
      <HomeWork />
      <HomeTool />
    </>
  );
};

export default Home;
