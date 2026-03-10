import React from "react";
import homeImage01 from "../../assets/homeImage01.png";
import homeImage02 from "../../assets/homeImage02.png";
import homeImage03 from "../../assets/homeImage03.png";
import homeS2img from "../../assets/homeS2img.png";

const SectionCompoment = () => {
  return (
    <section className="w-full px-3.75 lg:py-25 py-15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-between lg:flex-nowrap flex-wrap lg:gap-x-12.5 gap-x-0 gap-y-12.5">
        <div className="flex flex-col gap-5 lg:w-3/5 w-full lg:order-1 order-2">
          <h2 className="primary-heading">
            A Team of SEO Experts Delivering Measurable Impact
          </h2>
          <p className="peragraph text-paragraph">
            With over 4 years of hands-on experience, our dedicated SEO team
            brings deep industry knowledge and proven strategies to the table.
            From on-page optimization to advanced technical audits and
            content-driven growth, we’ve consistently helped businesses boost
            visibility, rankings, and ROI. Backed by data and driven by results,
            our experts stay updated with the latest algorithm changes to ensure
            your brand stays ahead in search.
          </p>
          <p className="peragraph text-paragraph">
            Experienced SEO experts delivering tailored strategies that boost
            search rankings, drive quality traffic, and ensure long-term digital
            growth for your business.
          </p>
          <div className="flex items-center justify-between gap-5 mt-5 lg:w-4/5 md:w-3/5 md:flex-nowrap flex-wrap w-full">
            <div className="md:w-max w-full">
              <img src={homeImage01} alt="SEO Expert 1" className="w-auto" />
            </div>
            <div className="md:w-max w-full">
              <img
                src={homeImage02}
                alt="SEO Expert 2"
                className="md:w-max w-auto"
              />
            </div>
            <div className="md:w-max w-full">
              <img
                src={homeImage03}
                alt="SEO Expert 3"
                className="md:w-max w-auto"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 w-full flex items-center lg:justify-end justify-start lg:order-2 order-1">
          <img src={homeS2img} alt="SEO Strategy" className="w-auto" />
        </div>
      </div>
    </section>
  );
};

export default SectionCompoment;
