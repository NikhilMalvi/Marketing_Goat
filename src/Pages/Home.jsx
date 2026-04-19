import HomeHero from "../components/home/HomeHero";
import SectionCompoment from "../components/home/SectionCompoment";
import HomeTab from "../components/home/HomeTab";
import IndustrySection from "../components/IndustrySection";
import HomeWork from "../components/home/HomeWork";
import HomeTool from "../components/home/HomeTool";
import Benefits from "../components/Benefits";
import { featuresData } from "../components/home/featuresData";
import Solutions from "../components/Solutions";
import Testimonial from "../components/Testimonial";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Faq from "../components/Faq";
import BlogCard from "../components/Blog/BlogCard";
import PageBlog from "../components/Blog/PageBlog";
import homeFaqData from "../components/home/HomeFaq";
import homeS2img from "../assets/homeS2img.png";

const Home = () => {
  const componentData = {
    title: "A Team of SEO Experts Delivering Measurable Impact",
    description: [
      "With over 4 years of hands-on experience, our dedicated SEO team brings deep industry knowledge and proven strategies to the table. From on-page optimization to advanced technical audits and content-driven growth, we’ve consistently helped businesses boost visibility, rankings, and ROI. Backed by data and driven by results, our experts stay updated with the latest algorithm changes to ensure your brand stays ahead in search.",
      "Experienced SEO experts delivering tailored strategies that boost search rankings, drive quality traffic, and ensure long-term digital growth for your business.",
    ],
  };

  return (
    <>
      <HomeHero />
      <SectionCompoment componentData={componentData} />
      <HomeTab />
      <IndustrySection />
      <HomeWork />
      <HomeTool />
      <Benefits
        featuresData={featuresData}
        heading={"Benefits of Digital Marketing"}
        description={
          "Digital marketing offers global reach, targeted campaigns, measurable performance, and cost-effective growth, helping businesses boost visibility, engage audiences, increase conversions, and build long-term customer relationships across digital channels."
        }
        benefitsLink="/"
      />
      <Solutions />
      <Testimonial />
      <Process />
      <CTA
        className="bg-[#0042E8]"
        ctaTitle="Get Started with Our SEO Services Today!"
        ctaDescription="IT Solutions has the highly qualified and expert team of designer and developers, you need to start planning and executing your project today"
      />
      <Faq faqData={homeFaqData} />
      {/* <BlogCard /> */}
      <PageBlog limit={3} />
    </>
  );
};

export default Home;
