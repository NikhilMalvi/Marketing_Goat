import React from "react";
import OverlayBackground from "../OverlayBackground";

const ContactHero = () => {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center px-3.75 lg:py-73 md:pt-62.5 py-50">
      {/* <!-- Moving gradient --> */}
      <OverlayBackground />

      <div className="flex z-10 max-w-375 mx-auto w-full">
        {/* breadcrumb */}
        <div className="lg:w-4/5 w-full flex flex-col justify-center items-start gap-5">
          <div className="py-3 px-7.5 bg-[#FFFFFF1A] border border-border rounded-[60px] sub-heading font-semibold! leading-6 text-center text-[#444444]">
            Contact Us
          </div>
          <h1 className="hero-heading lg:w-[90%] w-full">
            Interested in discussing a project with us?
          </h1>
          <p className="peragraph text-paragraph-2 lg:w-[90%] w-full">
            Ready to elevate your business? Partner with our expert IT agency
            for innovative digital solutions that drive growth, enhance
            efficiency, and deliver measurable results. Let’s discuss your
            project today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
