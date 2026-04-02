import React from "react";

import ContactHero from "../components/Contact/ContactHero";
import Form from "../components/Form";
import MainSection from "../components/MainSection";
import ContactDetails from "../components/Contact/ContactDetails";
import Testimonial from "../components/Testimonial";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <MainSection>
        <div className="max-w-375 mx-auto">
          <Form
            text="Get in Touch & Build together with It Solutions"
            textClass="text-black text-[30px]! leading-[40px]!"
            inputclass="bg-[#4C95FF1A] text-[#00000080] placeholder:text-[#00000080]"
            labelclass="text-paragraph-2"
            checkboxclass="border border-[#DCDCDC] rounded-[60px] text-[#808080]"
            colortype="colortype2"
            uploadclass="border-[#0000004d] text-[#909090]"
            htmlForIndex="contact"
            buttonClass="border border-accent"
          />
        </div>
      </MainSection>
      <ContactDetails />
      <Testimonial />
    </>
  );
};

export default Contact;
