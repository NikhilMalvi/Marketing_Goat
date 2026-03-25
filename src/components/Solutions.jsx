import React from "react";
import HeadingDescription from "./HeadingDescription";

const Solutions = () => {
  return (
    <section className="w-full px-3.75 lg:py-25 py-15 relative overflow-hidden">
      <div className="max-w-375 mx-auto">
        <HeadingDescription
          heading="Solutions We’ve Delivered"
          description="Explore Our successful projects where we delivered innovative, user-focused IT solutions across fintech, 
          eCommerce, healthcare, and education with measurable impact."
          className="text-center"
          headingColor="text-black"
          descriptionColor="text-paragraph"
        />

        <div className="max-w-405 mx-auto"></div>
      </div>
    </section>
  );
};

export default Solutions;
