import React, { useState } from "react";
import Form from "./Form";
import white_logo from "../assets/white_logo.png";
import ListPage from "./ListPage";
import footerimg1 from "../assets/footerimg1.png";
import starIcon from "../assets/starIcon.svg";
import footerimg2 from "../assets/footerimg2.png";
import footerimg3 from "../assets/footerimg3.png";
import footerimg4 from "../assets/footerimg4.png";
import footerimg5 from "../assets/footerimg5.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaRedditAlien,
  FaQuora,
} from "react-icons/fa";

const Footer = () => {
  const services = [
    {
      text: "Website Development",
      link: "#",
    },
    {
      text: "Digital Marketing",
      link: "#",
    },
    {
      text: "UI/UX Designing",
      link: "#",
    },
    {
      text: "Graphic Designing",
      link: "#",
    },
    {
      text: "SEO Services",
      link: "#",
    },
    {
      text: "Social Media Marketing",
      link: "#",
    },
    {
      text: "Twitter Trends",
      link: "#",
    },
    {
      text: "Performance Marketing",
      link: "#",
    },
    {
      text: "PPC Services",
      link: "#",
    },
  ];

  const hire = [
    {
      text: "SEO Packages",
      link: "#",
    },
    {
      text: "Website Dev. Packages",
      link: "#",
    },
    {
      text: "PPC Packages",
      link: "#",
    },
    {
      text: "SMM Packages",
      link: "#",
    },
    {
      text: "UI/UX Packages",
      link: "#",
    },
    {
      text: "Graphic Packages",
      link: "#",
    },
    {
      text: "Twitter Trends Packages",
      link: "#",
    },
  ];

  const info = [
    {
      text: "About Us",
      link: "#",
    },
    {
      text: "Contact US",
      link: "#",
    },
    {
      text: "Careers",
      link: "#",
    },
    {
      text: "Blogs",
      link: "#",
    },
    {
      text: "FAQ’s",
      link: "#",
    },
    {
      text: "Html Sitemap",
      link: "#",
    },
  ];

  const footerBox = [
    {
      footerimg: footerimg1,
      rating: 4.6,
    },
    {
      footerimg: footerimg2,
      rating: 4.6,
    },
    {
      footerimg: footerimg3,
      rating: 4.6,
    },
    {
      footerimg: footerimg4,
      rating: 4.6,
    },
    {
      footerimg: footerimg5,
      rating: 4.6,
    },
  ];

  const socialIcons = [
    {
      icon: <FaYoutube />,
      link: "#",
    },
    {
      icon: <FaInstagram />,
      link: "#",
    },
    {
      icon: <FaLinkedin />,
      link: "#",
    },
    {
      icon: <FaFacebookF />,
      link: "#",
    },

    {
      icon: <FaTwitter />,
      link: "#",
    },
    {
      icon: <FaRedditAlien />,
      link: "#",
    },
    {
      icon: <FaQuora />,
      link: "#",
    },
  ];

  return (
    <footer className="bg-[url('/src/assets/footer-bg.png')] bg-cover bg-center px-[15px] py-15 h-full w-full relative">
      <div className="max-w-[1500px] mx-auto">
        {/* row 1 form section */}

        <Form
          text="Interested in Discussing a Project with us ?"
          textClass="text-white"
          inputclass="bg-input text-[#FFFFFF80] placeholder:text-[#FFFFFF80]"
          labelclass="text-[#F0F0F0]"
          checkboxclass="bg-[#FFFFFF33] border-none text-white"
          colortype="colortype1"
          uploadclass="border-[#ffffff33] text-border"
        />
        {/* row 2 */}
        <div
          className="w-full pt-[50px] border-t border-[#FFFFFF1A] flex lg:flex-nowrap flex-wrap gap-y-8 gap-x-0 lg:justify-between
        justify-start"
        >
          <div className="flex flex-col lg:w-[36%] md:w-1/2 w-full md:pr-16 pr-0 gap-5 lg:border-r border-[#FFFFFF26] border-none">
            <img src={white_logo} alt="White Logo" className="w-max" />
            <p className="peragraph text-footer">
              Marketing Goat delivers result-driven digital strategies designed
              to elevate your brand’s presence, boost audience engagement, and
              drive measurable business growth. Our tailored approach combines
              creativity & data to ensure impactful campaigns that align with
              your goals and maximize return on investment across all digital
              platforms.
            </p>

            <ul className="text-white font-urbanist text-[18px] font-normal leading-[30px] flex flex-col gap-1.5">
              <li>
                <b>Email: </b>
                <a href="mailto:hello@ITSolutions.com" className="">
                  hello@ITSolutions.com
                </a>
              </li>
              <li>
                <b>Phone: </b>
                <a href="tel:+910123456789" className="text-white">
                  +91 0123 456 789
                </a>
              </li>
            </ul>
          </div>
          <ListPage heading="Services" list={services} />
          <ListPage heading="Hire" list={hire} />
          <ListPage heading="Info." list={info} />
        </div>
        {/* row 3 */}
        <div className="w-full pt-20 pb-12 grid grid-cols-5 gap-5 max-[1400px]:grid-cols-3 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1">
          {/* icon box */}

          {footerBox.map((item, index) => (
            <div
              className="py-[34.5px] px-[30px] border-none flex items-center justify-between rounded-[18px] bg-[#FFFFFF0F]"
              key={index}
            >
              <img src={item.footerimg} alt={`Footer Icon ${index + 1}`} />
              <div className="flex items-center gap-2 ">
                <img src={starIcon} alt="Star Icon" />
                <span className="font-urbanist text-[18px] text-white leading-6 font-semibold">
                  {item.rating}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* row 4 */}
        <div className="w-full flex md:justify-between justify-center md:gap-0 gap-8 md:flex-nowrap flex-wrap pt-18 border-t border-[#FFFFFF1A] text-white">
          <div className="mg:w-1/2 w-full flex items-center justify-center md:justify-start  gap-[30px]">
            <div className="flex gap-[10px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <g clipPath="url(#clip0_220_813)">
                  <path d="M10 0.625C4.82234 0.625 0.625 4.82234 0.625 10C0.625 15.1777 4.82234 19.375 10 19.375C15.1777 19.375 19.375 15.1777 19.375 10C19.375 4.82234 15.1777 0.625 10 0.625ZM15.7452 15.7452C14.3206 17.1656 12.4183 18.0047 10.4088 18.099C8.39935 18.1933 6.42675 17.5361 4.87536 16.2555C3.32398 14.9749 2.30495 13.1625 2.01683 11.1716C1.72871 9.18064 2.19215 7.15375 3.31684 5.48585C4.44153 3.81794 6.14691 2.62851 8.10067 2.14931C10.0544 1.6701 12.1166 1.93546 13.8854 2.89367C15.6542 3.85188 17.0029 5.43431 17.6687 7.3326C18.3345 9.2309 18.2698 11.3091 17.487 13.1622C17.0791 14.1278 16.4875 15.0051 15.7452 15.7452Z"></path>
                  <path d="M5.93875 7.8125H7.50125V9.375H5.93875V7.8125ZM12.5012 7.8125H14.0638V9.375H12.5012V7.8125ZM13.2157 12C12.9739 12.6101 12.5539 13.1332 12.0105 13.5011C11.4671 13.869 10.8255 14.0646 10.1692 14.0625H9.83328C9.17703 14.0646 8.53535 13.869 7.99191 13.5011C7.44848 13.1332 7.02849 12.6101 6.78672 12L6.73676 11.875H5.39062L5.62625 12.4641C5.96257 13.3049 6.54312 14.0257 7.293 14.5334C8.04288 15.0411 8.92769 15.3125 9.83328 15.3125H10.1692C11.0748 15.3125 11.9596 15.0411 12.7095 14.5334C13.4594 14.0257 14.0399 13.3049 14.3763 12.4641L14.6119 11.875H13.2656L13.2157 12Z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_220_813">
                    <rect width="20" height="20"></rect>
                  </clipPath>
                </defs>
              </svg>
              <span className="peragraph">Say hi!</span>
            </div>
            <div className="flex items-center text-white gap-[15px] peragraph">
              {socialIcons.map((item, index) => (
                <a href={item.link} key={index}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mg:w-1/2 w-full flex items-center justify-center md:justify-end gap-[30px]">
            <span className="peragraph">@2025 It Solutions LLC</span>
            <span className="peragraph bg-[#ffffff26]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1"
                height="20"
                viewBox="0 0 1 20"
                fill="currentColor"
              >
                <rect opacity="0.15" width="1" height="20" />
              </svg>
            </span>
            <span className="peragraph">Privacy & Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
