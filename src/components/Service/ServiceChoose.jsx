import React from "react";
import Background from "../Background";
import MainButton from "../MainButton";

const ServiceChoose = ({ chooseTitle, approachData }) => {
  return (
    <Background className="bg-[url('/src/assets/serviceOverlay.png')] bg-center bg-no-repeat bg-cover">
      <h2 className="primary-heading">{chooseTitle}</h2>

      <div className="flex flex-col gap-8 w-full">
        {approachData.map((approach) => (
          <div className="flex gap-5 w-full" key={approach.id}>
            <div className="text-background">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="currentColor"
                className="lg:mt-0.5 -mt-0.5"
              >
                <path d="M10.8264 0.082056C10.7335 0.120338 10.6186 0.224243 10.5749 0.311745C10.5311 0.393776 10.2686 1.26331 9.98972 2.24221C9.71082 3.22112 9.38816 4.25471 9.26785 4.53909C8.42566 6.61174 6.64832 8.38909 4.57019 9.23674C4.28582 9.35159 3.21394 9.68518 2.18035 9.98049C0.189722 10.5492 0.0858154 10.5985 0.00925285 10.9375C-0.0399659 11.1617 0.113159 11.4571 0.32644 11.5555C0.424878 11.5992 1.29988 11.8617 2.27878 12.1406C3.25769 12.4196 4.28582 12.7422 4.57019 12.8571C6.65379 13.7102 8.42019 15.4766 9.26785 17.5547C9.38816 17.8391 9.71082 18.8727 9.98972 19.8516C10.2686 20.8305 10.5311 21.7055 10.5749 21.8039C10.6733 22.0172 10.9686 22.1703 11.1928 22.1211C11.5319 22.0446 11.5811 21.9406 12.1499 19.95C12.7186 17.9539 12.9483 17.3141 13.3639 16.5867C14.2335 15.0664 15.6663 13.743 17.2085 13.0266C17.7882 12.7586 18.2694 12.6 20.178 12.0586C21.9608 11.55 22.0811 11.4953 22.1577 11.1563C22.196 10.9703 22.0757 10.6696 21.9171 10.5711C21.8569 10.5328 21.0257 10.2813 20.0686 10.0078C17.7225 9.33518 17.2741 9.16565 16.4428 8.65706C14.8241 7.65627 13.5772 6.20706 12.8936 4.53362C12.7788 4.24924 12.4561 3.22112 12.1772 2.24221C11.8983 1.26331 11.6358 0.393776 11.5921 0.311745C11.521 0.164087 11.2311 -0.00544357 11.0725 2.47955e-05C11.0343 0.00549316 10.9249 0.0383072 10.8264 0.082056Z" />
              </svg>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="secondary-heading-2">{approach.title}</h3>
              <p className="peragraph text-paragraph-3">
                {approach.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full mt-8">
        <MainButton
          text={"Talk to our experts"}
          type="button"
          className="bg-accent hover:bg-black text-white hover:text-white w-max text-center uppercase"
          storkeColor="#ffffff"
          link="/contact-us"
        />
      </div>
    </Background>
  );
};

export default ServiceChoose;
