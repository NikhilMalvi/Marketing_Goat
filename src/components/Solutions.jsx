import React from "react";
import HeadingDescription from "./HeadingDescription";
import solutionImg1 from "../assets/solutionImg1.png";
import solutionImg2 from "../assets/solutionImg2.png";
import solutionImg3 from "../assets/solutionImg3.png";
import { useNavigate } from "react-router-dom";
import MainButton from "./MainButton";

const Solutions = () => {
  const navigate = useNavigate();

  const solutionData = [
    {
      id: 1,
      title: "Dashboard Design",
      subtitle: "Health & Management",
      image: solutionImg1,
      link: "#",
    },
    {
      id: 2,
      title: "Marketing Analytics",
      subtitle: "Monitor & eCommerce",
      image: solutionImg2,
      link: "#",
    },
    {
      id: 3,
      title: "AI Logo",
      subtitle: "Brand Design & Logo Design",
      image: solutionImg3,
      link: "#",
    },
  ];

  return (
    <section className="w-full px-3.75 lg:py-25 py-15 relative overflow-hidden">
      <div className="max-w-450 mx-auto">
        <HeadingDescription
          heading="Solutions We’ve Delivered"
          description="Explore Our successful projects where we delivered innovative, user-focused IT solutions across fintech, 
          eCommerce, healthcare, and education with measurable impact."
          className="text-center mb-8"
          headingColor="text-black"
          descriptionColor="text-paragraph mx-auto lg:w-2/3 md:w-4/5 w-full"
        />

        <div className="max-w-405 mx-auto bg-[#E5EDFF] rounded-[40px] lg:p-12.5 md:p-10 sm:p-8 p-6 flex flex-col gap-8">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {solutionData.map((item) => (
              <div
                className="bg-white p-5 flex lg:flex-col md:flex-row flex-col lg:justify-normal md:justify-between justify-normal gap-5 rounded-[30px] border border-[#DBE5FF]"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt=""
                  className="lg:w-full md:w-[30%] rounded-[26px]"
                />
                <div className="flex justify-between items-center gap-5">
                  <div className="">
                    <h3 className="secondary-heading-2 text-[22px]!">
                      {item.title}
                    </h3>
                    <p className="peragraph text-[#909090]">{item.subtitle}</p>
                  </div>

                  <div
                    className="border-[0.2px] border-[#909090] text-[#909090] h-11 w-11 flex items-center justify-center rounded-full cursor-pointer"
                    onClick={() => {
                      navigate(`/${item.link}`);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path
                        d="M14.2988 6.2002C14.2988 6.34972 14.2593 6.49575 14.1846 6.62012L14.0977 6.7373L9.29785 12.0557L9.29785 12.0547C9.23476 12.1291 9.15887 12.1901 9.07324 12.2324C8.98672 12.2751 8.89241 12.2979 8.79687 12.2998C8.70142 12.3016 8.60643 12.2825 8.51855 12.2432C8.43079 12.2038 8.35197 12.1452 8.28613 12.0723C8.22026 11.9993 8.1682 11.9127 8.13379 11.8184C8.09951 11.7242 8.0834 11.6235 8.08496 11.5225C8.08657 11.4212 8.10614 11.3206 8.14355 11.2275C8.18099 11.1345 8.23543 11.05 8.30371 10.9795L8.30469 10.9795L11.9268 6.96484L0.798828 6.96484C0.609834 6.96472 0.430984 6.88155 0.300781 6.7373C0.170787 6.59327 0.0996091 6.39992 0.0996091 6.20019C0.0996093 6.00047 0.170787 5.80712 0.300781 5.66309C0.430984 5.51884 0.609835 5.43567 0.798828 5.43555L11.9268 5.43555L8.30469 1.41992L8.30371 1.4209C8.23543 1.3504 8.18099 1.26594 8.14355 1.17285C8.10614 1.07979 8.08657 0.979207 8.08496 0.877929C8.0834 0.776884 8.09951 0.676211 8.13379 0.582031C8.1682 0.487644 8.22026 0.401131 8.28613 0.328125C8.35197 0.255176 8.43079 0.196565 8.51855 0.157226C8.60643 0.117899 8.70142 0.0987545 8.79688 0.100586C8.89241 0.102453 8.98672 0.125252 9.07324 0.167969C9.15865 0.210155 9.23485 0.270528 9.29785 0.344726L14.0977 5.66309L14.1846 5.78027C14.2593 5.90464 14.2988 6.05067 14.2988 6.2002Z"
                        strokeWidth="0.2"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full bg-white justify-between items-center gap-5 min-[900px]:flex-nowrap! flex-wrap lg:p-10 md:p-8 p-6 rounded-[30px] border border-[#DBE5FF]">
            <div className="flex flex-col gap-1 lg:w-2/3 min-[900px]:w-1/2! w-full">
              <h3 className="primary-heading">It’s Your Time to Take-off</h3>
              <p className="peragraph text-paragraph-3 lg:w-3/4 w-full">
                Start your next big project and make a difference by creating
                something that truly matters to set the stage for success.
              </p>
            </div>
            <div className="lg:w-1/3 min-[900px]::w-1/2! w-full flex min-[900px]:justify-end! justify-start">
              <MainButton
                text={"Get estimation"}
                type="button"
                className="bg-accent hover:bg-black text-white hover:text-white w-max text-center uppercase"
                storkeColor="white"
                link="/"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center mt-8">
          <MainButton
            text={"View All"}
            type="button"
            className="bg-accent hover:bg-black text-white hover:text-white w-max text-center uppercase"
            storkeColor="white"
            link="/"
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
