import React from "react";

const HeadingDescription = ({
  className,
  heading,
  description,
  headingColor,
  descriptionColor,
}) => {
  return (
    <div className={`flex flex-col w-full gap-2.5 ${className}`}>
      <h2 className={`primary-heading ${headingColor}`}>{heading}</h2>
      <p className={`peragraph ${descriptionColor}`}>{description}</p>
    </div>
  );
};

export default HeadingDescription;
