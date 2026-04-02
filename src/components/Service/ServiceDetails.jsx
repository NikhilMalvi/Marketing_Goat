import React from "react";
import MainSection from "../MainSection";
import HeadingDescription from "../HeadingDescription";
import ServiceCard from "../ServiceCard";

import MainButton from "../MainButton";

const ServiceDetails = ({
  servicesData,
  serviceclass,
  cardClass,
  heading,
  description,
}) => {
  return (
    <MainSection>
      <div className="max-w-375 mx-auto">
        <HeadingDescription
          heading={heading}
          description={description}
          className="text-start mb-8"
          headingColor="text-black"
          descriptionColor="text-paragraph"
        />

        <div className={`grid ${serviceclass}`}>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              feature={service}
              className={`transition-all duration-200 ease-in ${cardClass}`}
            />
          ))}
        </div>

        <div className="flex justify-center w-full mt-8">
          <MainButton
            text={"Request a Demo"}
            type="button"
            className="bg-accent hover:bg-white text-white hover:text-accent w-max text-center border border-background uppercase"
            storkeColor="#0048FF"
            link="/"
          />
        </div>
      </div>
    </MainSection>
  );
};

export default ServiceDetails;
