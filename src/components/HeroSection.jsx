import React from "react";
import OverlayBackground from "./OverlayBackground";
import MainButton from "./MainButton";
import Counter from "./CustomCounter";

const HeroSection = ({ pageTitle, pageHeading, pageDescription }) => {
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
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center px-3.75 lg:pt-75 lg:pb-20 md:pt-62.5 md:pb-15 pt-50 pb-15">
      {/* <!-- Moving gradient --> */}
      <OverlayBackground />

      <div className="flex flex-col justify-center z-10 gap-5 max-w-375 mx-auto">
        <div className="py-3 px-7.5 bg-[#FFFFFF1A] border border-border rounded-[60px] sub-heading font-semibold! leading-none! text-center text-[#444444] w-max">
          {pageTitle}
        </div>
        <div className="flex lg:gap-15 gap-5 justify-between lg:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 w-full">
            <h1 className="hero-heading">{pageHeading}</h1>
          </div>
          <div className="flex flex-col gap-5 lg:w-1/2 w-full">
            <p className="peragraph text-paragraph-2">{pageDescription}</p>
            <MainButton
              text={"Request a Demo"}
              type="button"
              className="bg-accent hover:bg-white text-white hover:text-accent w-max text-center uppercase"
              storkeColor="#0048ff"
              link="/"
            />
          </div>
        </div>

        <div className="flex justify-between gap-6 md:flex-nowrap flex-wrap w-full mt-25 md:mt-37.5">
          {counterData.map((counter) => (
            <div
              className="border-t border-[#0000001a] lg:w-1/4 w-full"
              key={counter.id}
            >
              <p className="text-[15px] font-normal font-urbanist pt-2.5 mb-2">
                {counter.label}
              </p>
              <Counter
                start={counter.start}
                end={counter.number}
                duration={1000}
                prefix={counter.prefix}
                suffix={counter.suffix}
                className="lg:text-[50px] md:text-[40px] text-[30px] font-bold"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
