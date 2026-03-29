import React from "react";

const MainSection = ({ children }) => {
  return (
    <section className="w-full px-3.75 lg:py-25 py-15 relative overflow-hidden">
      {children}
    </section>
  );
};

export default MainSection;
