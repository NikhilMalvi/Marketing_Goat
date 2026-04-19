import React from "react";
import HeroSection from "../components/HeroSection";
import SectionCompoment from "../components/home/SectionCompoment";
import ServiceDetails from "../components/Service/ServiceDetails";
import SMMservices from "../Data/SMM/SMMservice";
import Benefits from "../components/Benefits";
import socialMediaBenefitsData from "../Data/SMM/SMMBenefits";
import StepsToEngage from "../components/Service/StepsToEngage";
import ServiceChoose from "../components/Service/ServiceChoose";
import SMMChoose from "../Data/SMM/SMMChoose";
import CTA from "../components/CTA";
import SMMPlatforms from "../components/Service/SMMPlatforms";
import Testimonial from "../components/Testimonial";
import ServiceProcess from "../components/Service/ServiceProcess";
import Faq from "../components/Faq";
import PageBlog from "../components/Blog/PageBlog";
import SMMProcessData from "../Data/SMM/SMMProcessData";
import socialMediaMarketingFaqData from "../Data/SMM/SMMFaqs";

const SocialMediaMarketing = () => {
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

  const componentData = {
    title: "More Than Marketers, We’re Brand Storytellers",
    description: [
      "At IT Solution, our social media team blends creativity, strategy, and data to build meaningful brand connections online. We’re more than just content creators, we’re storytellers, analysts, and growth enablers. Every campaign is crafted with purpose, backed by research, inspired by trends, and customized to reflect your brand’s voice, engage your audience, and deliver measurable results across platforms.",
      "From content planning to performance analytics, we handle it all. Our mission is simple: to turn your social presence into a meaningful, measurable business advantage.",
    ],
    imageClassName: "py-10 lg:px-18 md:px-15 px-10 rounded-[30px] bg-[#F7FAFF]",
  };

  return (
    <>
      <HeroSection
        pageTitle="Social Media Marketing"
        pageHeading="Turning Clicks into Conversations, Brands into Communities"
        pageDescription="We design strategic social media campaigns that inspire interaction, spark conversations, & grow communities, helping your brand move beyond clicks to create real, lasting connections with your audience across every major platform."
        counterData={counterData}
      />
      <SectionCompoment componentData={componentData} />
      <ServiceDetails
        servicesData={SMMservices}
        serviceclass="lg:grid-cols-2 grid-cols-1 gap-8"
        cardClass="border-[#E2E2E2]!"
        heading="Bold Visual Design Solutions for Modern Brands"
        description="We deliver bold, visually striking design solutions tailored for today’s dynamic brands. From logos and brand identity to marketing collateral and digital creatives, our graphic design services fuse creativity with strategy to ensure your visuals stand out, connect with your audience, and communicate your brand story with impact."
      />
      <Benefits
        featuresData={socialMediaBenefitsData}
        heading={"Benefits of Social Media Marketing"}
        description={
          "Social media marketing boosts brand awareness, increases engagement, generates leads, builds customer trust, and drives business growth through cost-effective strategies."
        }
        benefitsLink="/"
      />
      <StepsToEngage />
      <ServiceChoose
        chooseTitle="Why Choose IT Soolution as Your Digital Marketing Partner?"
        approachData={SMMChoose}
      />
      <CTA
        className="bg-linear-360 from-primary to-[#0038C3]"
        ctaTitle="Social Strategies That Speak Your Brand"
        ctaDescription="We create engaging, goal-driven social content that turns followers into customers and builds strong, lasting connections for your brand."
      />
      <SMMPlatforms />
      <Testimonial />
      <ServiceProcess processMainData={SMMProcessData} />
      <Faq faqData={socialMediaMarketingFaqData} />
      <PageBlog limit={3} />
    </>
  );
};

export default SocialMediaMarketing;
