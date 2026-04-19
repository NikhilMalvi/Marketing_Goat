import React from "react";
import MainSection from "../MainSection";
import HeadingDescription from "../HeadingDescription";
import logos_facebook from "../../assets/service/logos_facebook.svg";
import logos_youtube from "../../assets/service/logos_youtube.svg";
import logos_instagram from "../../assets/service/logos_instagram.svg";
import logos_pinterest from "../../assets/service/logos_pinterest.svg";
import logos_twitter from "../../assets/service/logos_twitter.svg";
import logos_linkedin from "../../assets/service/logos_linkedin.svg";

const SMMPlatforms = () => {
  const platformsData = [
    {
      id: 1,
      title: "Facebook Advertising",
      description:
        "Facebook ads boost audience interaction by combining text and images. Target users by preferences, location, and budget. With billions of active users, it’s a powerful platform for measurable engagement and reach.",
      logo: logos_facebook,
    },
    {
      id: 2,
      title: "YouTube Advertising",
      description:
        "YouTube, the second-largest search engine, offers massive reach & precise targeting. Unlike TV ads, You -Tube marketing lets you connect directly with your audience by simply linking your AdWords account for easy campaign setup.",
      logo: logos_youtube,
    },
    {
      id: 3,
      title: "Instagram Advertising",
      description:
        "Leverage the power of Instagram, one of the fastest- growing platforms, to strengthen your brand identity with high-quality Instagram marketing services tailored to engage Indian audiences and boost your online presence.",
      logo: logos_instagram,
    },

    {
      id: 4,
      title: "Pinterest Advertising",
      description:
        "Leverage the power of pins and boards to grow your business. Hire IT Solution, India’s leading Pinterest management service provider, for expert strategies that maximize visibility, engagement, and ROI.",
      logo: logos_pinterest,
    },
    {
      id: 5,
      title: "Twitter Advertising",
      description:
        "Twitter ads let you choose goals like engagement, clicks, installs, or leads, charging only when results happen. Set daily budgets and cost limits to run highly targeted, performance-based marketing campaigns.",
      logo: logos_twitter,
    },
    {
      id: 6,
      title: "LinkedIn Advertising",
      description:
        "Our LinkedIn ads target B2B audiences with precision. With high decision-making power and strong buying intent, LinkedIn offers CPC and CPM options to drive results and boost business influence.",
      logo: logos_linkedin,
    },
  ];

  return (
    <MainSection>
      <div className="max-w-375 mx-auto">
        <HeadingDescription
          heading="Our Social Media Marketing Services Include Promotion On Following Social Media Platforms"
          description="When you decide to hire us for social media marketing services, our domain experts can help you determine the most appropriate social media platforms for your business and offered products. We are fully capable of launching, monitoring and managing social media advertising campaigns including:"
          className="text-start mb-8"
          headingColor="text-black"
          descriptionColor="text-paragraph"
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5">
          {platformsData.map((platform) => (
            <div
              className="rounded-[30px] py-10 px-7.5 border border-[#D9E4FF] bg-[#FAFBFF] flex flex-col gap-5"
              key={platform.id}
            >
              <img
                src={platform.logo}
                alt={platform.title}
                className="w-max mb-2"
              />
              <h3 className="secondary-heading-2">{platform.title}</h3>
              <p className="peragraph text-paragraph-5">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MainSection>
  );
};

export default SMMPlatforms;
