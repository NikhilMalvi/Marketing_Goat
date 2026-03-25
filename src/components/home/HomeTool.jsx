import React, { useState } from "react";
import tooliImage1 from "../../assets/tooliImage1.png";
import tooliImage2 from "../../assets/tooliImage2.png";
import tooliImage3 from "../../assets/tooliImage3.png";
import tooliImage4 from "../../assets/tooliImage4.png";
import tooliImage5 from "../../assets/tooliImage5.png";
import tooliImage6 from "../../assets/tooliImage6.png";
import tooliImage7 from "../../assets/tooliImage7.png";
import tooliImage8 from "../../assets/tooliImage8.png";
import HeadingDescription from "../HeadingDescription";

const HomeTool = () => {
  const [tabData, setTabData] = useState([
    {
      id: 1,
      title: "SEO",
      content: [
        {
          subid: 11,
          subTitle: "Google Analytics",
          icon: tooliImage1,
        },

        {
          subid: 12,
          subTitle: "Google Tag Manager",
          icon: tooliImage2,
        },
        {
          subid: 13,
          subTitle: "Google Search Console",
          icon: tooliImage3,
        },
        {
          subid: 14,
          subTitle: "SEMrush",
          icon: tooliImage4,
        },
        {
          subid: 15,
          subTitle: "Ahrefs",
          icon: tooliImage5,
        },
        {
          subid: 16,
          subTitle: "Moz",
          icon: tooliImage6,
        },
        {
          subid: 17,
          subTitle: "Page Speed Insights",
          icon: tooliImage7,
        },
        {
          subid: 18,
          subTitle: "Yoast SEO ",
          icon: tooliImage8,
        },
      ],
    },
    {
      id: 2,
      title: "PPC",
      content: [
        {
          subid: 21,
          subTitle: "Google Analytics",
          icon: tooliImage1,
        },

        {
          subid: 22,
          subTitle: "Google Tag Manager",
          icon: tooliImage2,
        },
        {
          subid: 23,
          subTitle: "Google Search Console",
          icon: tooliImage3,
        },
        {
          subid: 24,
          subTitle: "SEMrush",
          icon: tooliImage4,
        },
        {
          subid: 25,
          subTitle: "Ahrefs",
          icon: tooliImage5,
        },
        {
          subid: 26,
          subTitle: "Moz",
          icon: tooliImage6,
        },
        {
          subid: 27,
          subTitle: "Page Speed Insights",
          icon: tooliImage7,
        },
        {
          subid: 28,
          subTitle: "Yoast SEO",
          icon: tooliImage8,
        },
      ],
    },
    {
      id: 3,
      title: "SMO",
      content: [
        {
          subid: 31,
          subTitle: "Google Analytics",
          icon: tooliImage1,
        },

        {
          subid: 32,
          subTitle: "Google Tag Manager",
          icon: tooliImage2,
        },
        {
          subid: 33,
          subTitle: "Google Search Console",
          icon: tooliImage3,
        },
        {
          subid: 34,
          subTitle: "SEMrush",
          icon: tooliImage4,
        },
        {
          subid: 35,
          subTitle: "Ahrefs",
          icon: tooliImage5,
        },
        {
          subid: 36,
          subTitle: "Moz",
          icon: tooliImage6,
        },
        {
          subid: 37,
          subTitle: "Page Speed Insights",
          icon: tooliImage7,
        },
        {
          subid: 38,
          subTitle: "Yoast SEO ",
          icon: tooliImage8,
        },
      ],
    },
    {
      id: 4,
      title: "Website",
      content: [
        {
          subid: 41,
          subTitle: "Google Analytics",
          icon: tooliImage1,
        },

        {
          subid: 42,
          subTitle: "Google Tag Manager",
          icon: tooliImage2,
        },
        {
          subid: 43,
          subTitle: "Google Search Console",
          icon: tooliImage3,
        },
        {
          subid: 44,
          subTitle: "SEMrush",
          icon: tooliImage4,
        },
        {
          subid: 45,
          subTitle: "Ahrefs",
          icon: tooliImage5,
        },
        {
          subid: 46,
          subTitle: "Moz",
          icon: tooliImage6,
        },
        {
          subid: 47,
          subTitle: "Page Speed Insights",
          icon: tooliImage7,
        },
        {
          subid: 48,
          subTitle: "Yoast SEO",
          icon: tooliImage8,
        },
      ],
    },
  ]);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <section className="w-full px-3.75 lg:py-25 py-15 relative overflow-hidden bg-[#E5EDFF] lg:my-25 my-15">
      <div className="max-w-375 mx-auto flex flex-col gap-5">
        <HeadingDescription
          heading="Tech Stack & Tools we work with"
          description="Few of the many tools and technologies in our arsenal"
          className="text-center"
          headingColor="text-black"
          descriptionColor="text-paragraph-3"
        />
        <div className="w-full flex lg:flex-row flex-col lg:items-stretch border border-border-2 rounded-[30px] bg-white">
          {/* tab column */}
          <div className="lg:w-1/4 w-full lg:border-r border-r-0 border-border-2 ">
            <div className="lg:flex flex-col grid md:grid-cols-4 grid-cols-1 gap-3.75 md:p-7.5 p-6">
              {tabData.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={`cursor-pointer text-center py-5 lg:px-10 px-6 rounded-2xl hover:bg-accent hover:text-white transition duration-300  ${activeTab === item.id ? "bg-accent text-white" : "bg-background-2 text-[#909090]"}`}
                  onClick={() => handleTabClick(item.id)}
                >
                  <span className="lg:text-[18px] font-normal lg:leading-7 text-base leading-full">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* content column */}
          <div className="lg:w-3/4 w-full overflow-hidden">
            {tabData.map((item) => (
              <div
                key={item.id}
                className={`transition-all duration-300 ${activeTab === item.id ? "block fade-in" : "hidden"}`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1250px]:grid-cols-5!">
                  {item.content.map((i) => (
                    <div
                      className="sm:border-r border-r-0 border-b border-[#F0F0F0] py-12.5 px-5 flex flex-col items-center gap-5 text-center"
                      key={i.subid}
                    >
                      <img src={i.icon} alt="" className="h-12.5" />
                      <h4 className="sub-heading">{i.subTitle}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default HomeTool;
