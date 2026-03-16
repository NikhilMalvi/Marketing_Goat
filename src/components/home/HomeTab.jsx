import React, { useState } from "react";

const HomeTab = () => {
  const [tabData, setTabData] = useState([
    {
      id: 1,
      title: "Website Development",
      content: [
        <p>
          We build fast, secure, and scalable websites tailored to your business
          goals. From sleek landing pages to complex web platforms, our
          development team delivers high-performance solutions using the latest
          technologies. Whether you need a corporate website, eCommerce
          platform, or custom web application, we ensure responsive design, SEO
          best practices, and a seamless user experience across all devices.
        </p>,
        <p>
          Our websites are built not just to look great but to perform—optimized
          for speed, usability, and search engines. We follow modern coding
          standards & frameworks that make your site easy to maintain, upgrade,
          and expand as your business grows.
        </p>,
      ],
      innerContent: [
        "Custom Website Development",
        "Front-End Development",
        "Website Maintenance",
        "Performance Optimization",
        "eCommerce Development",
      ],
    },
    {
      id: 2,
      title: "Digital Marketing",
      content: [
        <p>
          We craft strategic digital marketing campaigns that drive visibility,
          engagement, and conversions. Our team specializes in SEO, social media
          marketing, content strategy, email campaigns, and paid advertising
          across multiple platforms. We combine data-driven insights with
          creative execution to ensure your brand reaches the right audience at
          the right time. From brand awareness to customer retention, we develop
          comprehensive marketing strategies tailored to your business
          objectives.
        </p>,
        <p>
          Our digital marketing approach is results-oriented and transparent. We
          track key metrics, optimize campaigns in real-time, and provide
          detailed analytics to show exactly how we're driving business growth.
          Whether you're launching a new product or scaling an existing brand,
          we help you maximize ROI and build lasting customer relationships.
        </p>,
      ],
      innerContent: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Strategy & Creation",
        "Email Marketing Campaigns",
        "Paid Advertising (PPC)",
      ],
    },
    {
      id: 3,
      title: "UI/UX Designing",
      content: [
        <p>
          We create intuitive, engaging, and visually stunning user interfaces
          that enhance the user experience and drive business results. Our UI/UX
          design process is user-centered, starting with research and user
          testing to understand your audience's needs and behaviors. We then
          craft wireframes, prototypes, and high-fidelity designs that are both
          functional and aesthetically pleasing. Our designs are optimized for
          usability, accessibility, and conversion, ensuring that every
          interaction delights users and achieves your business goals.
        </p>,
        <p>
          Our design philosophy prioritizes accessibility, usability, and
          aesthetic excellence. We use the latest design tools and best
          practices to create responsive, consistent designs that work
          seamlessly across all devices. Every pixel, color, and interaction is
          carefully considered to enhance user satisfaction and achieve your
          business goals.
        </p>,
      ],
      innerContent: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Mobile App Design",
        "Web Interface Design",
        "Design Systems & Documentation",
      ],
    },
    {
      id: 4,
      title: "Graphic Designing",
      content: [
        <>
          <p>
            We produce stunning visual designs that communicate your brand's
            message and capture your audience's attention. Our graphic design
            team creates everything from logos and brand identity to marketing
            collateral, illustrations, and visual content. We blend creativity
            with strategic thinking to ensure every design element serves your
            business goals while maintaining visual consistency across all
            platforms. Whether it's print or digital, we design with impact.
          </p>
        </>,
        <p>
          Our graphic design approach combines aesthetic excellence with
          strategic thinking. We understand color theory, typography,
          composition, and visual hierarchy to create designs that are both
          beautiful and effective. We stay current with design trends while
          maintaining timeless quality, ensuring your brand stands out in a
          competitive marketplace and leaves a lasting impression on your
          audience.
        </p>,
      ],
      innerContent: [
        "Logo & Brand Identity",
        "Marketing Materials & Collateral",
        "Packaging Design",
        "Illustration & Custom Graphics",
        "Social Media Graphics",
      ],
    },
  ]);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <section className="w-full px-3.75 lg:py-25 py-15 relative overflow-hidden">
      <div className="max-w-375 mx-auto">
        <h2 className="primary-heading">How We Build Successful Website</h2>
        <p className="peragraph text-paragraph mb-5">
          We provide specialized services in design, development, and
          marketing—dedicated to creating powerful digital experiences and
          driving tangible business success.
        </p>

        {/* tab */}
        <div className="w-full flex lg:flex-row flex-col lg:items-stretch border border-border-2 rounded-[30px]">
          {/* tab column */}
          <div className="lg:w-1/4 w-full border-r border-border-2">
            <div className="lg:flex flex-col grid md:grid-cols-4 grid-cols-1 gap-3.75 p-7.5">
              {tabData.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  className={`cursor-pointer text-center py-5 lg:px-10 px-6 rounded-2xl hover:bg-accent hover:text-white transition duration-300  ${activeTab === item.id ? "bg-accent text-white" : "bg-background-2 text-[#909090]"}`}
                  onClick={() => handleTabClick(item.id)}
                >
                  <span className="lg:text-[18px] font-normal lg:leading-7 text-sm leading-full">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* content column */}
          <div className="lg:w-3/4 w-full p-7.5">
            {tabData.map((item) => (
              <div
                key={item.id}
                className={`transition-all duration-300 ${activeTab === item.id ? "block fade-in" : "hidden"}`}
              >
                <h3 className="secondary-heading mb-5">{item.title}</h3>
                <p className="text-paragraph peragraph mb-5">
                  {item.content.map((content, index) => (
                    <span key={index} className="mb-[14.4px] block">
                      {content}
                    </span>
                  ))}
                </p>
                <ul className="list-none p-7.25 bg-[#4D7FFF24] rounded-[26px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                  {item.innerContent.map((content, index) => (
                    <li
                      key={index}
                      className="text-base font-sans font-semibold w-full flex items-center gap-2.5 text-black"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="11"
                        viewBox="0 0 20 11"
                        fill="currentColor"
                        className="mb-1"
                      >
                        <path d="M19.953 5.09476C19.91 5.01538 18.8626 4.13428 16.9162 2.55466C15.2825 1.22507 13.8872 0.105841 13.8208 0.0701207C13.4612 -0.132294 12.9766 0.169343 12.9766 0.590047C12.9766 0.875809 13.0078 0.903591 15.775 3.15396C17.2445 4.3486 18.4483 5.34083 18.4483 5.3567C18.4483 5.37258 17.2445 6.36481 15.775 7.55945C13.7739 9.18273 13.0899 9.76219 13.0391 9.86538C12.8085 10.3615 13.3322 10.9013 13.8051 10.6512C13.9732 10.5639 19.8201 5.80916 19.91 5.68612C20.0116 5.55118 20.0312 5.25351 19.953 5.09476Z"></path>
                        <path d="M16.0357 5.08671C15.9615 4.95176 10.0286 0.101759 9.8566 0.0342871C9.59083 -0.0689044 9.25862 0.0700073 9.14137 0.327986C9.05147 0.5304 9.04756 0.625654 9.12573 0.8241C9.18045 0.955073 9.57129 1.29243 11.8616 3.14988C13.335 4.34849 14.5388 5.34072 14.5388 5.35659C14.5388 5.37247 13.335 6.36469 11.8616 7.5633C9.57129 9.42075 9.18045 9.75811 9.12573 9.88908C9.04756 10.0875 9.05147 10.1828 9.14137 10.3852C9.25862 10.6432 9.59083 10.7821 9.8566 10.6789C9.97776 10.6313 15.9068 5.81698 16.0006 5.68601C16.1061 5.54313 16.1256 5.24943 16.0357 5.08671Z"></path>
                        <path d="M12.2527 5.09474C12.2098 5.01536 11.1623 4.13427 9.21594 2.55464C7.58224 1.22506 6.18695 0.105826 6.12051 0.0701056C5.85474 -0.0767439 5.49517 0.0383544 5.35447 0.316178C5.28412 0.459058 5.2763 0.546374 5.2763 1.42747V2.38001L2.87265 2.38001C0.539356 2.38001 0.461188 2.38398 0.31267 2.45939C0.211053 2.51098 0.128977 2.59433 0.0781679 2.69752C0.00390884 2.84834 4.68339e-07 2.92772 4.68339e-07 5.35669C4.68339e-07 7.78566 0.00390884 7.86504 0.0781679 8.01586C0.128977 8.11905 0.211053 8.20239 0.31267 8.25399C0.461188 8.3294 0.539356 8.33337 2.87265 8.33337L5.2763 8.33337V9.28591C5.2763 10.167 5.28412 10.2543 5.35447 10.3972C5.49126 10.6711 5.84302 10.7901 6.10488 10.6512C6.27294 10.5639 12.1199 5.80915 12.2098 5.68611C12.3114 5.55117 12.3309 5.2535 12.2527 5.09474ZM8.61796 7.11888C7.44545 8.07142 6.48008 8.84933 6.46836 8.84933C6.45663 8.84933 6.44881 8.5715 6.44881 8.23415C6.44881 7.50784 6.40191 7.36099 6.13615 7.22208C5.98763 7.14667 5.90946 7.1427 3.57616 7.1427L1.17251 7.1427V5.35669V3.57068L3.57616 3.57068C5.90946 3.57068 5.98763 3.56671 6.13615 3.4913C6.40191 3.35239 6.44881 3.20554 6.44881 2.47923C6.44881 2.14187 6.45663 1.86405 6.46836 1.86405C6.50744 1.86405 10.748 5.32494 10.748 5.35669C10.748 5.37257 9.79047 6.16635 8.61796 7.11888Z"></path>
                      </svg>
                      {content}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTab;
