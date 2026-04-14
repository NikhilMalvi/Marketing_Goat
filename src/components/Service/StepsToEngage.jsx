import React from "react";
import MainSection from "../MainSection";
import MainButton from "../MainButton";
import stepsToEngage from "../../assets/stepsToEngage.png";
import EngageImg1 from "../../assets/EngageImg1.svg";
import EngageImg2 from "../../assets/EngageImg2.svg";
import EngageImg3 from "../../assets/EngageImg3.svg";
import EngageImg4 from "../../assets/EngageImg4.svg";

const StepsToEngage = () => {
  const hiringProcessData = [
    {
      id: 1,
      icon: EngageImg1,
      title: "Share your Requirements",
      description:
        "Tell us about your project’s current stage and specific needs.",
    },
    {
      id: 2,
      icon: EngageImg2,
      title: "Identify Suitable Candidates",
      description:
        "We will identify and recommend developers from our in-house talent pool.",
    },
    {
      id: 3,
      icon: EngageImg3,
      title: "Conduct Interviews",
      description: "Interview developers to assess skills and project fit.",
    },
    {
      id: 4,
      icon: EngageImg4,
      title: "Resource Onboarding & Kick-off",
      description:
        "Schedule a kickoff meeting and begin SCRUM-based execution.",
    },
  ];

  return (
    <MainSection>
      <div className="max-w-375 mx-auto">
        <div className="flex lg:mb-12 mb-20 justify-between md:items-center md:flex-row flex-col w-full gap-4">
          <h2 className="primary-heading font-semibold!">Steps to Engage</h2>
          <MainButton
            text={"Hire developer now!"}
            type="button"
            className="bg-accent hover:bg-black text-white hover:text-white w-max text-center uppercase"
            storkeColor="#ffffff"
            link="/"
          />
        </div>

        <div className="w-full">
          <div className="lg:flex hidden justify-center">
            <img
              src={stepsToEngage}
              className="w-[80%]"
              alt="Steps to Engage"
            />
          </div>

          <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-y-20 gap-x-8">
            {hiringProcessData.map((item) => (
              <div
                className="relative flex flex-col items-center max-w-full lg:even:mt-25 even:mt-0"
                key={item.id}
              >
                <div className="flex justify-center items-center w-full absolute left-0 -top-11">
                  <div className="h-21.5 w-21.5 flex justify-center items-center bg-[#E5EFFF] rounded-full">
                    <img src={item.icon} alt={`Step ${item.id}`} />
                  </div>
                </div>

                <div className="w-full bg-[url(/src/assets/EngageBox.svg)] bg-top bg-cover bg-no-repeat py-12.5 px-7.5 text-center lg:min-h-78 min-h-70 flex flex-col justify-center border-[0px_1px_1px_1px] border-[#CCDFFF] lg:rounded-[20px] rounded-[40px]">
                  <h3 className="secondary-heading-2">{item.title}</h3>
                  <p className="peragraph mt-2.5 text-paragraph-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainSection>
  );
};

export default StepsToEngage;
