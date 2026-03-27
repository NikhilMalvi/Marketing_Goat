import React from "react";

const Background = ({ children }) => {
  return (
    <section className="w-full px-3.75 lg:my-25 my-15 relative overflow-hidden">
      <div className="max-w-450 mx-auto rounded-[34px] bg-linear-360 from-primary to-accent px-3.75 lg:py-20 py-15">
        <div className="max-w-375 mx-auto flex gap-8 flex-col">{children}</div>
      </div>
    </section>
  );
};

export default Background;
