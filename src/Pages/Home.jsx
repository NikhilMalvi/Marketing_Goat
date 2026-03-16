import React from "react";
import MainButton from "../components/MainButton";
import OverlayBackground from "../components/OverlayBackground";
import Counter from "../components/CustomCounter";
import HomeHero from "../components/home/HomeHero";
import SectionCompoment from "../components/home/SectionCompoment";
import HomeTab from "../components/home/HomeTab";

const Home = () => {
  return (
    <>
      <HomeHero />
      <SectionCompoment />
      <HomeTab />
    </>
  );
};

export default Home;
