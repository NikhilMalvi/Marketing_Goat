import React from "react";
import OverlayBackground from "./OverlayBackground";
import MainButton from "./MainButton";
import Counter from "./CustomCounter";

const HeroSection = ({
  pageTitle,
  pageHeading,
  pageDescription,
  counterData,
}) => {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center px-3.75 lg:pt-65 lg:pb-20 md:pt-62.5 md:pb-15 pt-50 pb-15 lg:min-h-228.25 md:min-h-237.25 sm:min-h-225.5 min-h-280.75">
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

        <div className="flex justify-between lg:gap-6 md:flex-nowrap flex-wrap w-full mt-25 md:mt-37.5 sm:gap-x-0 sm:gap-y-6">
          {counterData.map((counter) => (
            <div
              className="border-t border-[#0000001a] lg:w-1/4 sm:w-1/2 w-full"
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
