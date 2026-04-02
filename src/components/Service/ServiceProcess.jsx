import React from "react";
import MainButton from "../MainButton";
import HeadingDescription from "../HeadingDescription";

const ServiceProcess = ({ processData }) => {
  return (
    <section className="w-full px-3.75 lg:py-25 py-15 relative overflow-visible">
      <div className="max-w-7xl mx-auto flex lg:gap-20 gap-15 justify-between lg:flex-nowrap flex-wrap items-start relative overflow-visible">
        <div className="flex flex-col gap-2.5 lg:w-2/5 w-full lg:sticky relative lg:top-37.5 top-0">
          <HeadingDescription
            heading="Our Essential Process for Digital Marketing Services"
            description="The search landscape is always evolving. To stay competitive and rank higher, you need modern SEO strategies tailored to your business goals and audience—not outdated tactics. That’s where we come in."
            className=""
            headingColor="text-black"
            descriptionColor="text-paragraph-3"
          />
          <p className="peragraph text-paragraph-3 mb-2.5">
            At IT Solution, we take a data-driven, customer-first approach to
            SEO. Our team crafts personalized strategies that fuel long-term
            growth and measurable success. Leveraging our streamlined Agile SEO
            methodology, we build high-impact campaigns focused on results,
            adaptability, and sustained digital visibility.
          </p>

          <MainButton
            text={"Talk to our experts"}
            type="button"
            className="bg-accent hover:bg-black text-white hover:text-white w-max text-center uppercase"
            storkeColor="#ffffff"
            link="/"
          />
        </div>

        <div className="lg:w-3/5 w-full overflow-hidden">
          {processData.map((process) => (
            <div
              className="flex flex-col md:py-10 py-8 border-t border-[#0000001a] gap-3"
              key={process.id}
            >
              <div className="flex justify-between items-center gap-5 w-full">
                <h3 className="secondary-heading-2">{process.title}</h3>
                <h4 className="font-sans font-semibold lg:text-[44px] md:text-[40px] sm:text-[38px] text-[36px] lg:leading-12 md:leading-10.5 sm:leading-10 leading-9.5 bg-[#9DC5FF] border_text text-white">
                  {process.step}
                </h4>
              </div>

              <p className="peragraph text-paragraph">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
