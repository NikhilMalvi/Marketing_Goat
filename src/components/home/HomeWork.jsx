import React from "react";

const HomeWork = () => {
  return (
    <section className="w-full px-3.75 lg:py-25 py-15 relative overflow-hidden">
      <div className="max-w-375 mx-auto">
        <div className="flex flex-col items-center gap-5 w-full text-center">
          <h2 className="primary-heading">We Work with</h2>
          <p className="peragraph text-paragraph">
            Tailored Technology Services for Every Business—from Startups to
            Enterprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"></div>
      </div>
    </section>
  );
};

export default HomeWork;
