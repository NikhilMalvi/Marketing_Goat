import React, { useState } from "react";
import MainSection from "./MainSection";
import HeadingDescription from "./HeadingDescription";

const Process = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const processTabs = [
    {
      id: 1,
      tab: "Fixed Cost Project",
      steps: [
        {
          id: "01",
          title: "Discovery Meeting",
          content:
            "The process begins with a discovery meeting discussing the client’s goals and expectations in detail.",
        },
        {
          id: "02",
          title: "Requirement Gathering",
          content:
            "Detailed requirements are systematically collected to ensure that the project's scope aligns precisely with the client's project needs.",
        },
        {
          id: "03",
          title: "Technical Consultation",
          content:
            "Our subject matter experts (SMEs) provide an overview of the technical roadmap, outlining most suitable technologies to achieve the desired outcome.",
        },
        {
          id: "04",
          title: "Scope Document",
          content:
            "A detailed scope specification document is created based on project requirements, detailing key deliverables, methodologies, along with detailed mind maps, activity diagrams, user role definitions, and a breakdown of functional and technical requirements.",
        },
        {
          id: "05",
          title: "Iterative Scope Refinement",
          content:
            "The scope document undergoes iterative refinements based on clients feedback to ensure complete alignment with the client’s expectations and vision.",
        },
        {
          id: "06",
          title: "Project Proposal",
          content:
            "We present a final formal project proposal outlining the specifications, costs, timelines, key milestones and other deliverables of the project.",
        },
        {
          id: "07",
          title: "Agreement & Contract Signing",
          content:
            "Once the proposal is approved, the terms are finalized and the contract is executed to formalize the engagement.",
        },
        {
          id: "08",
          title: "Project Onboarding",
          content:
            "The project gets initiated with a clearly defined roadmap and a technical project manager who oversees the execution process.",
        },
      ],
    },

    {
      id: 2,
      tab: "Hire Dedicated Developers",
      steps: [
        {
          id: "01",
          title: "Requirement Analysis",
          content: "Understand required skills and project goals.",
        },
        {
          id: "02",
          title: "Talent Shortlisting",
          content: "Select developers matching your needs.",
        },
        {
          id: "03",
          title: "Interview Process",
          content: "You interview and finalize developers.",
        },
        {
          id: "04",
          title: "Onboarding",
          content: "Developers are onboarded into your workflow.",
        },
        {
          id: "05",
          title: "Task Allocation",
          content: "Assign tasks and define responsibilities.",
        },
        {
          id: "06",
          title: "Daily Collaboration",
          content: "Work together with regular updates and sync.",
        },
        {
          id: "07",
          title: "Performance Tracking",
          content: "Monitor productivity and output quality.",
        },
        {
          id: "08",
          title: "Scaling Team",
          content: "Scale team up or down as per requirements.",
        },
      ],
    },

    {
      id: 3,
      tab: "Agile Development Process",
      steps: [
        {
          id: "01",
          title: "Sprint Planning",
          content: "Define sprint goals and backlog items.",
        },
        {
          id: "02",
          title: "Task Breakdown",
          content: "Divide tasks into manageable units.",
        },
        {
          id: "03",
          title: "Design & Development",
          content: "Start iterative design and development.",
        },
        {
          id: "04",
          title: "Daily Standups",
          content: "Track progress and resolve blockers quickly.",
        },
        {
          id: "05",
          title: "Testing Phase",
          content: "Perform testing during each sprint.",
        },
        {
          id: "06",
          title: "Sprint Review",
          content: "Review completed work with stakeholders.",
        },
        {
          id: "07",
          title: "Client Feedback",
          content: "Gather feedback and plan improvements.",
        },
        {
          id: "08",
          title: "Continuous Delivery",
          content: "Release updates frequently and improve continuously.",
        },
      ],
    },
  ];

  return (
    <section className="w-full px-3.75 lg:py-25 py-15 relative overflow-visible">
      <div className="max-w-7xl mx-auto flex lg:gap-20 gap-15 justify-between lg:flex-nowrap flex-wrap items-start relative overflow-visible">
        <div className="flex flex-col gap-5 lg:w-2/5 w-full lg:sticky relative lg:top-37.5 top-0">
          <HeadingDescription
            heading="Our Essential Process for Digital Marketing Services"
            description="Our digital marketing process includes research, strategy, execution, optimization, and reporting—ensuring measurable growth and impactful results for every campaign."
            className="mb-8"
            headingColor="text-black"
            descriptionColor="text-paragraph-3"
          />

          <div className="flex flex-col gap-5">
            {processTabs.map((item) => (
              <div
                className={`flex gap-5 items-center justify-between py-3.5 px-7.5 border border-[#D3D3D3] rounded-[40px] hover:bg-accent hover:text-white menu-item transition-all duration-300 ease-in cursor-pointer md:w-4/5 ${activeTab === item.id ? "bg-accent text-white" : "bg-transparent text-paragraph-5"}`}
                key={item.id}
                onClick={() => handleTabClick(item.id)}
              >
                {item.tab}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path
                    d="M17.2988 6.7002C17.2988 6.9179 17.2119 7.12658 17.0566 7.28027L11.2305 13.0391C11.1545 13.1196 11.0625 13.1848 10.9609 13.2295C10.8594 13.2742 10.7497 13.2979 10.6387 13.2998C10.5277 13.3017 10.4175 13.2814 10.3145 13.2402C10.2115 13.1991 10.1177 13.1383 10.0391 13.0605C9.96032 12.9827 9.89821 12.8893 9.85644 12.7871C9.81479 12.6851 9.79398 12.5759 9.7959 12.4658C9.79787 12.3555 9.8218 12.2462 9.86719 12.1455C9.91251 12.045 9.97829 11.9548 10.0596 11.8799L10.0605 11.8799L14.4697 7.52051L0.927734 7.52051C0.70841 7.52049 0.498227 7.4339 0.342773 7.28027C0.187255 7.12654 0.0996091 6.91811 0.0996091 6.70019C0.0996094 6.48228 0.187255 6.27385 0.342773 6.12012C0.498227 5.96649 0.708411 5.8799 0.927734 5.87988L14.4697 5.87988L10.0605 1.51953L10.0596 1.52051C9.97829 1.44555 9.91251 1.35541 9.86719 1.25488C9.8218 1.15419 9.79787 1.04487 9.7959 0.93457C9.79398 0.824481 9.81479 0.715324 9.85645 0.613281C9.89821 0.51106 9.96032 0.417676 10.0391 0.339843C10.1177 0.26213 10.2115 0.201276 10.3145 0.160156C10.4175 0.119024 10.5277 0.0986779 10.6387 0.100586C10.7497 0.102522 10.8594 0.126227 10.9609 0.170898C11.0625 0.215618 11.1546 0.279848 11.2305 0.360351L17.0566 6.12012C17.2119 6.27381 17.2988 6.48249 17.2988 6.7002Z"
                    strokeWidth="0.2"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-3/5 w-full overflow-hidden">
          {processTabs.map((item) => (
            <div
              className={`${activeTab === item.id ? "block fade-in" : "hidden"}`}
              key={item.id}
            >
              {item.steps.map((i) => (
                <div
                  className="flex flex-col md:py-10 py-8 border-t border-[#0000001a] gap-3"
                  key={i.id}
                >
                  <div className="flex justify-between items-center gap-5 w-full">
                    <h3 className="secondary-heading">{i.title}</h3>
                    <h4 className="font-sans font-semibold lg:text-[44px] md:text-[40px] sm:text-[38px] text-[36px] lg:leading-12 md:leading-10.5 sm:leading-10 leading-9.5 bg-[#9DC5FF] border_text text-white">
                      {i.id}
                    </h4>
                  </div>

                  <p className="peragraph text-paragraph">{i.content}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
