import React from "react";
import HeroSection from "../components/HeroSection";
import WhoWeAre from "../components/About/WhoWeAre";
import WeMakeDifference from "../components/About/WeMakeDifference";
import CTA from "../components/CTA";
import WhyChooseUs from "../components/About/WhyChooseUs";
import Testimonial from "../components/Testimonial";

const AboutUs = () => {
  const counterData = [
    {
      id: 1,
      number: 40,
      suffix: "+",
      start: 10,
      label: "Problem- Solver with a purpose",
    },
    {
      id: 2,
      number: 10,
      suffix: "+",
      start: 0,
      label: "Years of Tech-Driven Impact",
    },
    {
      id: 3,
      number: 120,
      suffix: "+",
      start: 10,
      label: "Countries where we make a Difference",
    },
    {
      id: 4,
      number: 96,
      suffix: "%",
      start: 10,
      label: "Client trust built on results ",
    },
  ];

  return (
    <>
      <HeroSection
        pageTitle="About Us"
        pageHeading="Transforming Challenges into Smart, Future-Proof Outcomes"
        pageDescription="At It Solution, we blend technology with human insight to deliver smart, user-focused solutions. We help startups and enterprises simplify complex challenges through innovative, domain-specific software that drives real impact and lasting value."
        counterData={counterData}
      />
      <WhoWeAre />
      <WeMakeDifference />
      <CTA
        className="bg-linear-360 from-primary to-[#0038C3]"
        ctaTitle="Get Started with Our SEO Services Today!"
        ctaDescription="IT Solutions has the highly qualified and expert team of designer and developers, you
        need to start planning and executing your project today"
      />
      <WhyChooseUs />
      <Testimonial />
    </>
  );
};

export default AboutUs;
