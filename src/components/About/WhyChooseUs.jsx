import React from "react";
import Background from "../Background";
import IconImg1 from "../../assets/IconImg1.svg";
import IconImg2 from "../../assets/IconImg2.svg";
import IconImg3 from "../../assets/IconImg3.svg";
import IconImg4 from "../../assets/IconImg4.svg";
import IconImg5 from "../../assets/IconImg5.svg";
import IconImg6 from "../../assets/IconImg6.svg";
import MainButton from "../MainButton";
import ServiceCard from "../ServiceCard";

const WhyChooseUs = () => {
  const featuresData = [
    {
      id: 1,
      title: "Outstanding software",
      description:
        "We deliver reliable software, no overpriced slides, just real, high-performing products that drive results.",
      icon: IconImg1,
    },
    {
      id: 2,
      title: "Highly Skilled People",
      description:
        "We carefully select talent and empower our team to excel in every aspect of our craft.",
      icon: IconImg2,
    },
    {
      id: 3,
      title: "Battle-tested Process",
      description:
        "With 04+ years and 210+ products, we’ve battle-tested our approach to products.",
      icon: IconImg3,
    },
    {
      id: 4,
      title: "Exceeding Expectation",
      description:
        "We go above and beyond... and beyond for our clients and never let them down.",
      icon: IconImg4,
    },
    {
      id: 5,
      title: "Blazing-fast Delivery",
      description:
        "We stay lean, move fast, and deliver tangible products in days, not weeks.",
      icon: IconImg5,
    },
    {
      id: 6,
      title: "Unbeatable ROI",
      description:
        "We offer the best time, cost, and value equation to every single customer.",
      icon: IconImg6,
    },
  ];

  return (
    <Background className="bg-[#F2F6FF]!">
      <h2 className="primary-heading text-center">
        Reasons Why smart brands choose us
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {featuresData.map((feature) => (
          <ServiceCard key={feature.id} feature={feature} />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <MainButton
          text={"Request a Demo"}
          type="button"
          className="bg-accent hover:bg-white text-white hover:text-accent w-max text-center uppercase"
          storkeColor="#0048ff"
          link="/"
        />
      </div>
    </Background>
  );
};

export default WhyChooseUs;
