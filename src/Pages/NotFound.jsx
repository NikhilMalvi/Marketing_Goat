import React from "react";
import MainButton from "../components/MainButton";
import OverlayBackground from "../components/OverlayBackground";

const NotFound = () => {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center px-3.75 lg:py-80 md:py-62.5 py-50">
      {/* <!-- Moving gradient --> */}
      <OverlayBackground />

      <div className="flex flex-col justify-center items-center z-10 gap-5 max-w-7xl mx-auto">
        <h1 className="hero-heading lg:text-[105px]! md:text-[80px]! sm:text-[60px]! lg:leading-[1.2]! text-center w-full">
          404 Not Found
        </h1>
        <p className="peragraph text-paragraph-2 lg:w-3/5 md:w-3/4 w-full text-center">
          Sorry, We couldn’t find the page you were looking for. We suggest that
          you return to main page.
        </p>
        <MainButton
          text={"Home Page"}
          type="button"
          className="bg-accent hover:bg-white text-white hover:text-accent w-max text-center uppercase"
          storkeColor="#0048ff"
          link="/"
        />
      </div>
    </div>
  );
};

export default NotFound;
