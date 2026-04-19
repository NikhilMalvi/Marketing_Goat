import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceDetails from "../components/Service/ServiceDetails";
import graphicDesignServicesData from "../Data/GraphicDesign/graphicDesignServicesData";
import ServiceChoose from "../components/Service/ServiceChoose";
import whyChooseGraphicDesignData from "../Data/GraphicDesign/whyChooseGraphicDesignData";
import StepsToEngage from "../components/Service/StepsToEngage";
import CTA from "../components/CTA";
import Solutions from "../components/Solutions";
import IndustrySection from "../components/IndustrySection";
import Testimonial from "../components/Testimonial";
import ServiceProcess from "../components/Service/ServiceProcess";
import graphicProcess from "../Data/GraphicDesign/graphicProcess";
import Faq from "../components/Faq";
import graphicDesignFaqData from "../Data/GraphicDesign/graphicDesignFaqData";
import PageBlog from "../components/Blog/PageBlog";

const GraphicDesigning = () => {
  const counterData = [
    {
      id: 1,
      number: 15,
      suffix: "+",
      start: 1,
      label: "Brand Identity created",
    },
    {
      id: 2,
      number: 30,
      suffix: "+",
      start: 10,
      label: "Logos created",
    },
    {
      id: 3,
      number: 200,
      suffix: "+",
      start: 100,
      label: "Social media post designed",
    },
    {
      id: 4,
      number: 10,
      suffix: "+",
      start: 0,
      label: "Brochure designed",
    },
  ];

  return (
    <>
      <HeroSection
        pageTitle="Graphic Designing"
        pageHeading="Designs with a Pulse: Where Brand Identity Meets Creativity"
        pageDescription="We craft bold, impactful graphic designs that bring your brand identity to life. Our creative approach ensures every visual element tells a story and leaves a lasting impression on your audience."
        counterData={counterData}
      />
      <ServiceDetails
        servicesData={graphicDesignServicesData}
        serviceclass="lg:grid-cols-2 grid-cols-1 gap-8"
        cardClass="border-[#E2E2E2]!"
        heading="Bold Visual Design Solutions for Modern Brands"
        description="We deliver bold, visually striking design solutions tailored for today’s dynamic brands. From logos and brand identity to marketing collateral and digital creatives, our graphic design services fuse creativity with strategy to ensure your visuals stand out, connect with your audience, and communicate your brand story with impact."
      />
      <ServiceChoose
        chooseTitle="Why Choose IT Soolution as Your Digital Marketing Partner?"
        approachData={whyChooseGraphicDesignData}
      />
      <StepsToEngage />
      <CTA
        className="bg-linear-360 from-primary to-[#0038C3]"
        ctaTitle="Visuals That Click. Designs That Stick."
        ctaDescription="We craft impactful visuals that capture attention, communicate clearly, and leave a memorable impression across digital and print platforms."
      />
      <Solutions />
      <IndustrySection />
      <Testimonial />
      <ServiceProcess processMainData={graphicProcess} />
      <Faq faqData={graphicDesignFaqData} />
      <PageBlog limit={3} />
    </>
  );
};

export default GraphicDesigning;
