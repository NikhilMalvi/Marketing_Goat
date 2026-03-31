import React from "react";
import MainSection from "../MainSection";
import { Link } from "react-router-dom";

const WeMakeDifference = () => {
  const aboutCardsData = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "IT Solution empowers businesses by improving efficiency and driving innovation through next-generation technologies. We help organizations unlock potential, embrace digital transformation, and achieve sustainable growth. Our strategic approach combines technology & vision to deliver customized solutions that create real impact and position your business for long-term success in a competitive market.",
      buttonText: "Let’s Connect",
      link: "/contact",
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "Our mission is to consistently lead in technology innovation, delivering world-class software services and solutions to a global clientele. We prioritize exceptional quality, rapid turnaround, and cost-effective strategies—empowering businesses with scalable, future-ready technologies that drive growth, efficiency, and competitive advantage across diverse industries and markets.",
      buttonText: "Enterprise Plan",
      link: "/plans",
    },
    {
      id: 3,
      title: "Our Approach",
      description:
        "We believe in excellence and passion towards our work. We follow the Kaizen Principle, which aims for constant and never ending improvement. We are customer centric and completely relationship oriented. Technology is our passion and our focus is to empower your business with the latest technology and provide a higher return on investment. We make technology simple.",
      buttonText: "Enterprise Plan",
      link: "/plans",
    },
  ];

  return (
    <MainSection>
      <div className="max-w-375 mx-auto">
        <h2 className="primary-heading mb-8">How We Make a Difference</h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5">
          {aboutCardsData.map((card) => (
            <div
              className="flex flex-col gap-5 border border-border lgp-10 md:p-8 sm:p-7 p-6 rounded-[30px]"
              key={card.id}
            >
              <h3 className="secondary-heading-2 border-b border-[#0000001a] pb-5.5">
                {card.title}
              </h3>
              <p className="peragraph text-paragraph-3 lg:min-h-55 min-h-auto">
                {card.description}
              </p>

              <Link
                to={card.link}
                className="flex items-center gap-2 justify-between accent text-paragraph-2 py-5 px-8 rounded-[40px] bg-[#F0F0F0]"
              >
                {card.buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path
                    d="M17.2988 6.69995C17.2988 6.91766 17.2119 7.12633 17.0566 7.28003L11.2305 13.0388C11.1545 13.1194 11.0625 13.1845 10.9609 13.2292C10.8594 13.2739 10.7497 13.2976 10.6387 13.2996C10.5277 13.3015 10.4175 13.2811 10.3145 13.24C10.2115 13.1989 10.1177 13.138 10.0391 13.0603C9.96032 12.9825 9.89821 12.8891 9.85644 12.7869C9.81479 12.6848 9.79398 12.5757 9.7959 12.4656C9.79787 12.3553 9.8218 12.246 9.86719 12.1453C9.91251 12.0447 9.97829 11.9546 10.0596 11.8796L10.0605 11.8796L14.4697 7.52026L0.927734 7.52026C0.70841 7.52024 0.498227 7.43366 0.342773 7.28003C0.187255 7.1263 0.0996091 6.91786 0.0996091 6.69995C0.0996094 6.48204 0.187255 6.2736 0.342773 6.11987C0.498227 5.96624 0.708411 5.87966 0.927734 5.87964L14.4697 5.87964L10.0605 1.51929L10.0596 1.52026C9.97829 1.44531 9.91251 1.35517 9.86719 1.25464C9.8218 1.15395 9.79787 1.04462 9.7959 0.934326C9.79398 0.824237 9.81479 0.71508 9.85645 0.613037C9.89821 0.510816 9.96032 0.417432 10.0391 0.339599C10.1177 0.261886 10.2115 0.201032 10.3145 0.159912C10.4175 0.118779 10.5277 0.0984338 10.6387 0.100342C10.7497 0.102278 10.8594 0.125982 10.9609 0.170654C11.0625 0.215374 11.1546 0.279604 11.2305 0.360107L17.0566 6.11987C17.2119 6.27357 17.2988 6.48224 17.2988 6.69995Z"
                    strokeWidth="0.2"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </MainSection>
  );
};

export default WeMakeDifference;
