import React, { useRef, useState } from "react";
import Background from "./Background";
import HeadingDescription from "./HeadingDescription";

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "Can You Explain Who Is A Business Consultant?",
      answer:
        "A business consultant is a professional who helps organizations improve performance by analyzing existing problems and developing effective strategies. They provide expert advice in areas like operations, marketing, technology, and growth planning.",
    },
    {
      id: 2,
      question: "How Can You Start Offering Business Consulting Services?",
      answer:
        "To start offering business consulting services, you need strong industry knowledge, problem-solving skills, and a clear niche. Build a portfolio, establish your brand, network with clients, and offer tailored solutions to businesses based on their needs.",
    },
    {
      id: 3,
      question:
        "What Specific Web Development Expertise Does Your Consulting Service Offer?",
      answer:
        "Our consulting services include expertise in frontend and backend development, UI/UX design, performance optimization, scalable architecture, and modern frameworks like React, Node.js, and cloud-based solutions.",
    },
    {
      id: 4,
      question: "Which Sectors Do You Advise On Mobile Apps For?",
      answer:
        "We provide mobile app consulting for various industries including healthcare, fintech, eCommerce, education, logistics, and startups—delivering solutions tailored to each sector’s unique requirements.",
    },
    {
      id: 5,
      question:
        "What Sets Marketing Goat Apart From Other Consulting And Web Development Firms?",
      answer:
        "At Marketing Goat, we prioritize innovation and teamwork, enabling us to craft tailored solutions that deliver meaningful and measurable results. Our focus on quality, transparency, and client satisfaction ensures long-term success.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(1);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <Background className="bg-[#F2F6FF]!" maxWidth="7xl">
      <HeadingDescription
        heading="How can we help you?"
        description="Find the information you need below, and feel free to reach out for personalized assistance or more detailed support."
        className="mb-8 text-center"
        headingColor="text-black"
        descriptionColor="text-paragraph-3"
      />

      <div className="w-full flex gap-5 flex-col">
        {faqData.map((faq) => {
          const contentRef = useRef(null);

          return (
            <div
              className="w-full border-b border-[#bfd1ff] overflow-hidden"
              key={faq.id}
            >
              <div
                className="flex justify-between gap-2 w-full items-center pt-3.75 px-0 pb-5 cursor-pointer"
                onClick={() => toggleFaq(faq.id)}
              >
                <h3 className="font-sans lg:text-[20px] text-[17px] font-semibold w-4/5">
                  {faq.question}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="currentColor"
                  className={`fill-[#80A3FF] transition-all duration-300 ease-in cursor-pointer ${activeFaq === faq.id ? "rotate-180" : "rotate-0"} `}
                >
                  <path d="M10.6246 9.57813L18.5347 2.44709C18.6822 2.31411 18.7993 2.15624 18.8791 1.9825C18.9589 1.80876 19 1.62254 19 1.43448C19 1.05468 18.8326 0.690431 18.5347 0.42187C18.3872 0.288893 18.2121 0.183409 18.0194 0.111442C17.8267 0.0394746 17.6201 0.00243459 17.4115 0.00243458C16.9902 0.00243456 16.5862 0.15331 16.2883 0.42187L9.50135 6.55457L2.71444 0.421869C2.56737 0.288193 2.3924 0.182092 2.19961 0.109685C2.00683 0.0372782 1.80005 -7.51834e-07 1.5912 -7.60963e-07C1.38235 -7.70092e-07 1.17558 0.0372782 0.98279 0.109685C0.790005 0.182092 0.615032 0.288193 0.467962 0.421869C0.319681 0.554454 0.201984 0.712194 0.121668 0.885991C0.0413494 1.05979 -5.44732e-08 1.2462 -6.2703e-08 1.43448C-7.09329e-08 1.62275 0.0413493 1.80917 0.121668 1.98296C0.201984 2.15676 0.319681 2.3145 0.467962 2.44709L8.37811 9.57813C8.52518 9.71181 8.70015 9.81791 8.89294 9.89032C9.08572 9.96272 9.2925 10 9.50135 10C9.7102 10 9.91698 9.96272 10.1098 9.89032C10.3025 9.81791 10.4775 9.71181 10.6246 9.57813Z" />
                </svg>
              </div>

              <div
                ref={contentRef}
                style={{
                  maxHeight:
                    activeFaq === faq.id
                      ? contentRef.current?.scrollHeight + "px"
                      : "0px",
                }}
                className="w-full overflow-hidden transition-all duration-500 ease-in-out"
              >
                <p className="peragraph text-paragraph-3 pb-7.5 px-0 h-full">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Background>
  );
};

export default Faq;
