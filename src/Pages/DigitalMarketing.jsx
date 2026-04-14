import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceDetails from "../components/Service/ServiceDetails";
import ServiceChoose from "../components/Service/ServiceChoose";
import digitalData from "../Data/DigitalService/DigitalData";
import digitalApproach from "../Data/DigitalService/digitalApproach";
import StepsToEngage from "../components/Service/StepsToEngage";
import CTA from "../components/CTA";
import Solutions from "../components/Solutions";
import IndustrySection from "../components/IndustrySection";
import Testimonial from "../components/Testimonial";
import ServiceProcess from "../components/Service/ServiceProcess";
import digitalProcess from "../Data/DigitalService/digitalProcess";
import Faq from "../components/Faq";
import digitalMarketingFaq from "../Data/DigitalService/digitalFaqData";
import PageBlog from "../components/Blog/PageBlog";

const DigitalMarketing = () => {
  const counterData = [
    {
      id: 1,
      number: 10,
      suffix: "+",
      start: 1,
      label: "Problem- Solver for Digital Marketing",
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
      label: "Client trust built on results",
    },
  ];

  return (
    <>
      <HeroSection
        pageTitle="Digital Marketing"
        pageHeading="Creative Digital Marketing Services"
        pageDescription="IT Solution, a trusted IT solutions partner, empowers businesses with innovative, scalable, and technology-driven services. Our expert-led approach delivers tailored digital solutions that enhance performance, streamline operations, and drive growth."
        counterData={counterData}
      />
      <ServiceDetails
        servicesData={digitalData}
        serviceclass="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
        cardClass="hover:border-y-3 hover:border-y-background hover:border-x-[#F1F1F1] "
        heading="Empowering Brands with Targeted Digital Marketing to Stand Out and Engage Their Ideal Audience."
        description="We build strong brands and drive customer growth with data-driven strategies, expert-led campaigns, and advanced SEO—delivering faster results, higher ROI, and scalable digital marketing solutions tailored to your business goals."
      />
      <ServiceChoose
        chooseTitle="Why Choose IT Soolution as Your Digital Marketing Partner?"
        approachData={digitalApproach}
      />
      <StepsToEngage />
      <CTA
        className="bg-linear-360 from-primary to-[#0038C3]"
        ctaTitle="Power Up Your Marketing Game"
        ctaDescription="Take your brand to the next level with our digital marketing expertise, drive traffic, increase visibility, and convert clicks into loyal, paying customers."
      />
      <Solutions />
      <IndustrySection />
      <Testimonial />
      <ServiceProcess processMainData={digitalProcess} />
      <Faq faqData={digitalMarketingFaq} />
      <PageBlog limit={3} />
    </>
  );
};

export default DigitalMarketing;
