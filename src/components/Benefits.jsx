import React from "react";
import Background from "./Background";
import MainButton from "./MainButton";
import HeadingDescription from "./HeadingDescription";

const Benefits = ({ heading, description, featuresData, benefitsLink }) => {
  return (
    <Background>
      <HeadingDescription
        heading={heading}
        description={description}
        className="text-center"
        headingColor="text-white"
        descriptionColor="text-[#EEEEEE]"
      />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-7.5">
        {featuresData.map((item) => (
          <div
            className="lg:p-10 md:p-8 p-6 rounded-[30px] bg-[#FFFFFF0F] w-full flex lg:gap-5 lg:flex-nowrap flex-wrap gap-x-0 gap-y-5"
            key={item.id}
          >
            <div className="text-white bg-[#FFFFFF1A] h-12.5 w-12.5 flex shrink-0 justify-center items-center p-2.5 rounded-2xl text-[25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.5998 0.0882301C11.5001 0.129246 11.3771 0.240574 11.3302 0.334324C11.2834 0.422215 11.0021 1.35386 10.7033 2.40268C10.4044 3.45151 10.0587 4.55893 9.92984 4.86362C9.02749 7.08432 7.1232 8.98862 4.89663 9.89682C4.59195 10.0199 3.44351 10.3773 2.33609 10.6937C0.203273 11.3031 0.091945 11.3558 0.00991376 11.7191C-0.0428206 11.9593 0.121242 12.2757 0.349758 12.3812C0.455226 12.4281 1.39273 12.7093 2.44155 13.0082C3.49038 13.307 4.59195 13.6527 4.89663 13.7757C7.12906 14.6898 9.02163 16.5824 9.92984 18.8089C10.0587 19.1136 10.4044 20.221 10.7033 21.2699C11.0021 22.3187 11.2834 23.2562 11.3302 23.3617C11.4357 23.5902 11.7521 23.7542 11.9923 23.7015C12.3556 23.6195 12.4084 23.5082 13.0177 21.3753C13.6271 19.2367 13.8732 18.5511 14.3185 17.7718C15.2501 16.1429 16.7853 14.7249 18.4376 13.9574C19.0587 13.6703 19.5744 13.5003 21.6193 12.9203C23.5294 12.3753 23.6584 12.3167 23.7404 11.9535C23.7814 11.7542 23.6525 11.432 23.4826 11.3265C23.4181 11.2855 22.5275 11.016 21.5021 10.723C18.9884 10.0023 18.508 9.82065 17.6173 9.27573C15.883 8.20346 14.547 6.65073 13.8146 4.85776C13.6916 4.55307 13.3459 3.45151 13.047 2.40268C12.7482 1.35386 12.4669 0.422215 12.4201 0.334324C12.3439 0.176121 12.0334 -0.00551987 11.8634 0.000339508C11.8224 0.00619888 11.7052 0.0413551 11.5998 0.0882301Z"></path>
              </svg>
            </div>

            <div className="flex flex-col gap-3.75 justify-center lg:my-3 my-0">
              <h3 className="secondary-heading-2 text-white">{item.title}</h3>
              <p className="peragraph text-[#E2E2E2]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <MainButton
          text={"Talk to our experts"}
          type="button"
          className="bg-white hover:bg-accent text-black hover:text-white w-max text-center uppercase"
          storkeColor="white"
          link={benefitsLink}
        />
      </div>
    </Background>
  );
};

export default Benefits;
