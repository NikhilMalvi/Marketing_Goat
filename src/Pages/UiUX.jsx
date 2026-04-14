import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceDetails from "../components/Service/ServiceDetails";
import UiUxServiceData from "../Data/UI_UX/UiUxServiceData";
import StepsToEngage from "../components/Service/StepsToEngage";
import CTA from "../components/CTA";
import UiUxChoose from "../components/Service/UiUxChoose";
import UIUXExperience from "../components/Service/UIUXExperience";
import UIUXTable from "../components/Service/UIUXTable";
import Testimonial from "../components/Testimonial";
import ServiceProcess from "../components/Service/ServiceProcess";
import UIUXProcess from "../Data/UI_UX/UIUXprocess";
import Solutions from "../components/Solutions";
import Faq from "../components/Faq";
import uiuxFaqData from "../Data/UI_UX/UIUXFaq";
import PageBlog from "../components/Blog/PageBlog";

const UiUX = () => {
  const counterData = [
    {
      id: 1,
      number: 70,
      suffix: "%",
      start: 10,
      label: "Increase in User Engagement",
    },
    {
      id: 2,
      number: 40,
      suffix: "%",
      start: 10,
      label: "Improvement in Conversion Rates",
    },
    {
      id: 3,
      number: 65,
      suffix: "%",
      start: 10,
      label: "Increase in Customer Retention",
    },
    {
      id: 4,
      number: 15,
      suffix: "+",
      start: 10,
      label: "Projects Delivered",
    },
  ];

  const table1Data = {
    id: 1,
    mainHeading: (
      <>
        Why
        <span className="text-accent"> UI/UX </span>
        Designing services from IT Services India?
      </>
    ),
    mainDescription:
      "IT Solutions stands out from outsourcing UI/UX design companies and freelancers. We bring top design skills and innovative solutions to every project.",
    title: "What you get",
    columns: ["Freelance", "Outsourcing vendor", "IT solutions"],
    rows: [
      {
        label: "Top design talent",
        values: [true, true, true],
      },
      {
        label: "Expert & experience designers for web & app",
        values: [false, true, true],
      },
      {
        label: "Seamless access to designers",
        values: [true, true, true],
      },
      {
        label: "Flexible team scaling",
        values: [false, false, true],
      },
      {
        label: "Your dedicated success manager",
        values: [false, false, true],
      },
      {
        label: "Quick project launch",
        values: [false, false, true],
      },
      {
        label: "3-Day free trial",
        values: [false, false, true],
      },
    ],
  };

  const table2Data = {
    id: 2,
    mainHeading: (
      <>
        What Sets Us Apart from In-House
        <span className="text-accent"> UX/UI Designers? </span>
      </>
    ),
    mainDescription:
      "IT Solutions acts as your dedicated in-house UX/UI design team, delivering high-quality, user-focused designs without the hassle of hiring, managing operations, or incurring the high costs typically associated with maintaining an internal team.",
    title: "Characteristic",
    columns: ["In-house designer", "IT solutions"],
    rows: [
      {
        label: "Top design skills",
        values: [true, true],
      },
      {
        label: "Full-time engagement",
        values: [true, true],
      },
      {
        label: "Complete control over your project",
        values: [true, true],
      },
      {
        label: "Quick recruitment and onboarding",
        values: [false, true],
      },
      {
        label: "No overhead costs",
        values: [false, true],
      },
      {
        label: "No operational burden",
        values: [false, true],
      },
      {
        label: "Fast team scaling",
        values: [false, true],
      },
    ],
  };

  return (
    <>
      <HeroSection
        pageTitle="UI/UX Designing"
        pageHeading="Expert UI UX Design Company for Intuitive Digital Solutions"
        pageDescription="We solve business challenges through smart UI/UX design. As a leading agency in the USA and India, we craft engaging, intuitive digital experiences that boost user satisfaction, increase engagement, and drive conversions."
        counterData={counterData}
      />
      <ServiceDetails
        servicesData={UiUxServiceData}
        serviceclass="lg:grid-cols-2 grid-cols-1 gap-8"
        cardClass="border-[#E2E2E2]!"
        heading="UI/UX Design Services"
        description="Elevate your brand with IT Services India's professional UI/UX Design Services. Our expert UI/UX Design Company focuses on your unique business goals, delivering tailored, user-centric solutions that enhance engagement, boost user activation, and improve conversion rates. Let’s collaborate to craft a compelling, intuitive, and impactful digital experience that drives success."
      />
      <StepsToEngage />
      <CTA
        className="bg-linear-360 from-primary to-[#0038C3]"
        ctaTitle="Interfaces That Click. Experiences That Stick."
        ctaDescription="We design intuitive interfaces that engage users instantly and create lasting digital experiences that drive retention, loyalty, and growth."
      />
      <UiUxChoose />
      <UIUXExperience />
      <UIUXTable comparisonData={table1Data} className="bg-[#F0F4FF]" />
      <UIUXTable comparisonData={table2Data} className="bg-white" />
      <Testimonial />
      <ServiceProcess processMainData={UIUXProcess} btnClass="hidden" />
      <Solutions />
      <Faq faqData={uiuxFaqData} />
      <PageBlog limit={3} />
    </>
  );
};

export default UiUX;
