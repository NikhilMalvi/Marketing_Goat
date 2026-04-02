import React from "react";

const ServiceCard = ({ feature, className = "" }) => {
  return (
    <div
      className={`border border-[#CCDAFF] md:p-10 p-8 rounded-[30px] bg-white ${className}`}
      key={feature.id}
    >
      <div className="flex gap-5 items-center mb-5">
        <img src={feature.icon} alt={feature.title} />
        <h3 className="secondary-heading-2">{feature.title}</h3>
      </div>
      <p className="peragraph text-paragraph-3">{feature.description}</p>
    </div>
  );
};

export default ServiceCard;
