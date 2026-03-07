import React from "react";
import MainButton from "../components/MainButton";
import CountUp from "react-countup";
import OverlayBackground from "../components/OverlayBackground";

const Home = () => {
  return (
    <div className="relative w-full lg:h-270 md:h-196.25 h-171.25  overflow-hidden flex items-center justify-center">
      {/* <!-- Moving gradient --> */}
      <OverlayBackground />

      <div className="flex flex-col justify-center items-center z-10 gap-5 max-w-7xl mx-auto">
        <h1 className="hero-heading text-center lg:w-3/4 md:w-5/6 w-full">
          <span className="text-accent">Let’s Grow Your Revenue</span> Through
          Digital Marketing.
        </h1>
        <p className="peragraph text-paragraph-2 lg:w-3/5 md:w-3/4 w-full text-center">
          Boost your sales and brand visibility with data-driven digital
          marketing strategies tailored to attract, convert, and retain loyal
          customers.
        </p>
        <MainButton
          text={"Request a Demo"}
          type="button"
          className="bg-accent hover:bg-white text-white hover:text-accent w-max text-center uppercase leading-normal"
          storkeColor="#0048ff"
        />

        <div className="flex justify-between items-center gap-5 lg:flex-nowrap flex-wrap lg:max-w-257.25 max-w-full mx-auto">
          <div className="flex gap-4 items-center primary-heading text-heading">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="cu"
              >
                <path
                  d="M25.2545 2.94275C25.2452 2.89787 25.2233 2.85658 25.1913 2.82373C25.1594 2.79089 25.1187 2.76786 25.0741 2.75736C22.1002 2.03001 15.2303 4.62165 11.5044 8.34478C10.8404 9.00338 10.235 9.71846 9.69484 10.482C8.5464 10.3781 7.39796 10.4656 6.42015 10.8921C3.65898 12.1062 2.85562 15.277 2.6314 16.6381C2.61925 16.7127 2.62444 16.7891 2.64657 16.8614C2.66869 16.9336 2.70715 16.9998 2.75898 17.0548C2.8108 17.1098 2.8746 17.1521 2.94541 17.1785C3.01623 17.2049 3.09216 17.2146 3.16734 17.2069L7.60085 16.7202C7.60389 17.0546 7.62397 17.3886 7.66101 17.7209C7.68415 17.9507 7.78664 18.1651 7.95085 18.3274L9.66749 20.0441C9.82993 20.2084 10.0446 20.3109 10.2745 20.3339C10.6049 20.3708 10.9369 20.3908 11.2693 20.3941L10.7831 24.8238C10.7755 24.8988 10.7853 24.9747 10.8117 25.0454C10.8381 25.1161 10.8804 25.1797 10.9353 25.2315C10.9902 25.2832 11.0563 25.3217 11.1284 25.3438C11.2006 25.3659 11.2768 25.3712 11.3513 25.3591C12.713 25.1404 15.8904 24.337 17.0973 21.5764C17.5239 20.5975 17.6114 19.4551 17.513 18.3121C18.2787 17.7725 18.9958 17.167 19.6562 16.5025C23.3957 12.7838 25.9709 6.06486 25.2545 2.94275ZM16.3323 11.6851C16.0056 11.3585 15.7832 10.9425 15.693 10.4895C15.6029 10.0365 15.6491 9.56692 15.8258 9.1402C16.0025 8.71347 16.3019 8.34874 16.6859 8.09212C17.0699 7.83551 17.5214 7.69854 17.9833 7.69854C18.4451 7.69854 18.8966 7.83551 19.2807 8.09212C19.6647 8.34874 19.964 8.71347 20.1407 9.1402C20.3175 9.56692 20.3637 10.0365 20.2735 10.4895C20.1834 10.9425 19.9609 11.3585 19.6343 11.6851C19.4176 11.9022 19.1603 12.0744 18.877 12.192C18.5937 12.3095 18.29 12.37 17.9833 12.37C17.6766 12.37 17.3729 12.3095 17.0896 12.192C16.8063 12.0744 16.5489 11.9022 16.3323 11.6851Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5.99594 19.25C5.45077 19.3169 4.94358 19.5641 4.55492 19.9522C3.59133 20.9191 3.5 24.5 3.5 24.5C3.5 24.5 7.08312 24.4087 8.04727 23.444C8.43696 23.0559 8.68452 22.5479 8.75 22.0019"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
