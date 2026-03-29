import React from "react";
import HeadingDescription from "./HeadingDescription";
import testImg1 from "../assets/testImg1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import MainSection from "./MainSection";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Mehta",
      role: "Founder, TechNova",
      image: { testImg1 },
      link: "#",
      description:
        "Working with this team has been a game-changer for our business. Their expertise in frontend development helped us deliver a seamless user experience. The communication was smooth and the results exceeded our expectations.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Product Manager, FinEdge",
      image: { testImg1 },
      link: "#",
      description:
        "Their attention to detail and commitment to quality is outstanding. The UI they built for us is modern, fast, and highly responsive. We’ve seen a significant improvement in user engagement.",
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "CEO, StartupHub",
      image: { testImg1 },
      link: "#",
      description:
        "They understood our requirements perfectly and delivered exactly what we needed. The performance optimization and clean code structure really stood out.",
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "Marketing Lead, Brandify",
      image: { testImg1 },
      link: "#",
      description:
        "The team not only improved our website design but also enhanced the overall user journey. Their work directly contributed to increased conversions.",
    },
    {
      id: 5,
      name: "Karan Shah",
      role: "CTO, DevSolutions",
      image: { testImg1 },
      link: "#",
      description:
        "Highly professional and technically strong team. They delivered our project before deadline and maintained excellent code quality throughout.",
    },
  ];

  return (
    <MainSection>
      <div className="max-w-387 mx-auto">
        <div className="max-w-375 mx-auto">
          <HeadingDescription
            heading="What Client are Saying"
            description="We prioritize our clients by understanding their unique needs and delivering innovative, result-driven digital solutions that foster long-term relationships, trust, and measurable growth in an ever-evolving digital landscape."
            className="text-start mb-8"
            headingColor="text-black"
            descriptionColor="text-paragraph"
          />
        </div>
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="p-6">
                  <div className="bg-white rounded-[30px] shadow-[0px_0px_30px_0px_#4C7FFF33] lg:p-10 md:p-8 p-6">
                    <div className="flex flex-col gap-5">
                      <div className="text-accent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="57"
                          height="57"
                          viewBox="0 0 57 57"
                          fill="currentColor"
                        >
                          <path
                            opacity="0.2"
                            d="M15.4375 23.75C14.9079 23.75 14.3997 23.8308 13.8938 23.9044C14.0577 23.3534 14.2263 22.7929 14.497 22.2894C14.7678 21.5579 15.1905 20.9238 15.6109 20.2849C15.9624 19.5938 16.5823 19.1259 17.0383 18.5345C17.5157 17.9598 18.1664 17.5774 18.6818 17.1C19.1877 16.6013 19.8503 16.3519 20.3775 16.0004C20.9285 15.6845 21.4083 15.3354 21.9213 15.1692L23.2014 14.6419L24.3272 14.174L23.1753 9.57129L21.7574 9.91329C21.3038 10.0273 20.7504 10.1603 20.121 10.3194C19.4774 10.4382 18.791 10.7635 18.0263 11.0604C17.271 11.3977 16.397 11.6257 15.5848 12.1672C14.7678 12.6849 13.8249 13.1172 12.9937 13.8107C12.1885 14.5255 11.2172 15.1454 10.4999 16.055C9.71617 16.9053 8.94192 17.7983 8.34104 18.8148C7.64517 19.7838 7.17254 20.8478 6.67379 21.8999C6.22254 22.952 5.85917 24.0279 5.56229 25.0729C4.99941 27.1677 4.74766 29.1579 4.65029 30.8608C4.56954 32.566 4.61704 33.9839 4.71679 35.0099C4.75241 35.4944 4.81891 35.9647 4.86641 36.29L4.92579 36.689L4.98754 36.6748C5.40996 38.648 6.38239 40.4613 7.79233 41.905C9.20227 43.3486 10.9921 44.3636 12.9548 44.8325C14.9175 45.3014 16.9728 45.2051 18.8831 44.5546C20.7933 43.9042 22.4804 42.7263 23.7491 41.1571C25.0178 39.5879 25.8164 37.6916 26.0524 35.6875C26.2884 33.6834 25.9522 31.6535 25.0827 29.8325C24.2132 28.0115 22.846 26.4738 21.1391 25.3975C19.4322 24.3211 17.4555 23.7499 15.4375 23.75ZM41.5625 23.75C41.0329 23.75 40.5247 23.8308 40.0188 23.9044C40.1827 23.3534 40.3513 22.7929 40.622 22.2894C40.8928 21.5579 41.3155 20.9238 41.7359 20.2849C42.0874 19.5938 42.7073 19.1259 43.1633 18.5345C43.6407 17.9598 44.2914 17.5774 44.8068 17.1C45.3127 16.6013 45.9753 16.3519 46.5025 16.0004C47.0535 15.6845 47.5333 15.3354 48.0463 15.1692L49.3264 14.6419L50.4522 14.174L49.3003 9.57129L47.8824 9.91329C47.4288 10.0273 46.8754 10.1603 46.246 10.3194C45.6024 10.4382 44.916 10.7635 44.1513 11.0604C43.3984 11.4 42.522 11.6257 41.7098 12.1695C40.8928 12.6873 39.9499 13.1195 39.1187 13.813C38.3135 14.5279 37.3422 15.1478 36.6249 16.055C35.8412 16.9053 35.0669 17.7983 34.466 18.8148C33.7702 19.7838 33.2975 20.8478 32.7988 21.8999C32.3475 22.952 31.9842 24.0279 31.6873 25.0729C31.1244 27.1677 30.8727 29.1579 30.7753 30.8608C30.6945 32.566 30.742 33.9839 30.8418 35.0099C30.8774 35.4944 30.9439 35.9647 30.9914 36.29L31.0508 36.689L31.1125 36.6748C31.535 38.648 32.5074 40.4613 33.9173 41.905C35.3273 43.3486 37.1171 44.3636 39.0798 44.8325C41.0425 45.3014 43.0979 45.2051 45.0081 44.5546C46.9183 43.9042 48.6054 42.7263 49.8741 41.1571C51.1428 39.5879 51.9414 37.6916 52.1774 35.6875C52.4134 33.6834 52.0772 31.6535 51.2077 29.8325C50.3382 28.0115 48.971 26.4738 47.2641 25.3975C45.5572 24.3211 43.5805 23.7499 41.5625 23.75Z"
                          />
                        </svg>
                      </div>
                      <p className="peragraph text-paragraph-4 mb-3">
                        Partnering with Marketing Goat for our SEO needs has
                        been one of the best business decisions we've made.
                        Their team quickly identified key opportunities and
                        implemented an effective strategy that improved our
                        search rankings and significantly boosted organic
                        traffic. They communicate clearly, deliver on time, and
                        continuously optimize for better results. Despite being
                        a new agency, their knowledge and professionalism truly
                        stand out. We’re impressed by their dedication and
                        already seeing a strong return on investment.
                      </p>
                      <div className="flex gap-5 md:flex-nowrap flex-wrap justify-between items-center">
                        <div className="flex items-center gap-4 w-1/2">
                          <img
                            src={testImg1}
                            alt="Artsion Grintsevich"
                            className="lg:h-22 lg:w-22 md:h-18 md:w-18 sm:h-16 sm:w-16 h-14 w-14 rounded-full"
                          />

                          <div className="flex flex-col gap-0.5">
                            <h3 className="lg:text-[20px] md:text-[18px] text-base font-semibold leading-[100%]">
                              Artsion Grintsevich
                            </h3>
                            <p className="peragraph text-paragraph-5">
                              Head of React Native Team
                            </p>
                          </div>
                        </div>

                        <div className="w-1/2 flex gap-3 items-center md:justify-end justify-normal text-accent">
                          <span className="lg:text-[18px] font-semibold text-[16px]">
                            Let’s discuss your Creative idea
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="14"
                            viewBox="0 0 18 14"
                            fill="currentColor"
                            stroke="currentColor"
                          >
                            <path
                              d="M17.5986 6.90039C17.5986 7.145 17.5003 7.3794 17.3262 7.55176L11.502 13.3086L11.4355 13.373C11.3654 13.4339 11.2855 13.4839 11.2002 13.5215C11.0866 13.5714 10.964 13.5984 10.8398 13.6006C10.7156 13.6028 10.5919 13.5802 10.4766 13.5342C10.3612 13.4881 10.2562 13.4192 10.168 13.332C10.0797 13.2448 10.0098 13.1402 9.96289 13.0254C9.91605 12.9107 9.89332 12.7879 9.89551 12.6641C9.89772 12.5402 9.92463 12.4177 9.97559 12.3047C10.0265 12.1917 10.1001 12.0899 10.1914 12.0059L10.1924 12.0059L14.4258 7.82031L1.12695 7.82031C0.881515 7.82029 0.645965 7.72396 0.471679 7.55176C0.297282 7.37936 0.198242 7.1452 0.198242 6.90039C0.198242 6.65558 0.297282 6.42142 0.471679 6.24902C0.645965 6.07682 0.881515 5.98049 1.12695 5.98047L14.4258 5.98047L10.1924 1.79394L10.1914 1.79492C10.1001 1.71083 10.0265 1.60908 9.97559 1.49609C9.92463 1.38306 9.89772 1.26061 9.89551 1.13672C9.89332 1.01292 9.91605 0.890073 9.96289 0.77539C10.0098 0.660629 10.0797 0.556023 10.168 0.46875C10.2562 0.381624 10.3612 0.312644 10.4766 0.266601C10.5919 0.220572 10.7156 0.19803 10.8398 0.200195C10.964 0.20236 11.0866 0.22935 11.2002 0.279297C11.3139 0.329362 11.4169 0.401965 11.502 0.492187L17.3262 6.24902C17.5003 6.42138 17.5986 6.65578 17.5986 6.90039Z"
                              strokeWidth="0.4"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </MainSection>
  );
};

export default Testimonial;
