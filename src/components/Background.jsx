import React from "react";

const Background = ({ children, className, maxWidth }) => {
  return (
    <section className="w-full px-3.75 lg:my-25 my-15 relative overflow-hidden">
      <div
        className={`max-w-450 mx-auto rounded-[34px] px-3.75 lg:py-20 py-15 ${className || "bg-linear-360 from-primary to-accent"}`}
      >
        <div
          className={`max-w-${maxWidth || "375"} mx-auto flex gap-8 flex-col`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Background;
