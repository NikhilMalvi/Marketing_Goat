import React from "react";
import MainSection from "../MainSection";
import HeadingDescription from "../HeadingDescription";
import aboutImg from "../../assets/About/aboutImg.jpg";

const WhoWeAre = () => {
  return (
    <MainSection>
      <div className="max-w-375 mx-auto">
        <HeadingDescription
          heading="Who We are"
          description="At It Solution, we help businesses thrive in the digital era with tailored IT solutions, from custom software to AI and cloud integration—enhancing efficiency, customer experience, and innovation in a constantly evolving technology landscape.."
          className="mb-8"
          headingColor="text-black"
          descriptionColor="text-paragraph-3 lg:w-17/20 w-full"
        />

        <div className="flex gap-0 rounded-[40px] lg:flex-nowrap flex-wrap overflow-hidden">
          <img
            src={aboutImg}
            alt="About Us"
            className="lg:w-3/5 w-full lg:h-142.5 h-auto object-cover"
          />
          <div className="flex flex-col justify-center gap-5 lg:p-10 md:p-7 p-6 lg:w-2/5 w-full bg-[#F0F4FF]">
            <h2 className="secondary-heading">
              Transforming Businesses through Tech Leadership
            </h2>
            <p className="peragraph text-paragraph-3">
              IT Solutions brings together deep technical expertise and
              industry-specific knowledge to tackle real-world business
              challenges. We serve diverse sectors—including fintech,
              healthcare, and retail—delivering robust, scalable, and
              future-ready solutions. Our collaborative mindset positions us as
              strategic partners, committed to building sustainable, long-term
              success with every client engagement.
            </p>

            <p className="peragraph text-paragraph-3">
              We specialize in leading languages & frameworks, harness emerging
              technologies like AI, ML, and blockchain, and build future-ready
              systems that keep our clients ahead in an ever-evolving digital
              world.
            </p>
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default WhoWeAre;
