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
import Solutions from "../components/Solutions";
import Testimonial from "../components/Testimonial";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Faq from "../components/Faq";
import BlogCard from "../components/Blog/BlogCard";
import PageBlog from "../components/Blog/PageBlog";

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
        benefitsLink="/"
      />
      <Solutions />
      <Testimonial />
      <Process />
      <CTA
        className="bg-[#0042E8]"
        ctaTitle="Get Started with Our SEO Services Today!"
        ctaDescription="IT Solutions has the highly qualified and expert team of designer and developers, you need to start planning and executing your project today"
      />
      <Faq />
      {/* <BlogCard /> */}
      <PageBlog limit={3} />
    </>
  );
};

export default Home;
