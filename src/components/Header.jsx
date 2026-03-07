import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import Responsivemenu from "./Responsivemenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change `50` to the scroll position where you want the effect to occur
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`w-full  px-[15px] fixed top-0 z-1000 ${scrolled ? "bg-white py-[20px]" : "bg-transparent py-[50px]"} transition-all duration-1000`}
    >
      <div className="max-w-[1500px] mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src={logo} alt="" />
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <div className="flex gap-10 border border-[#4C95FF80] rounded-full w-[544px] h-[58px] px-5 items-center justify-center">
            <div className="cursor-pointer text-paragraph-5 hover:text-heading menu-item">
              About us
            </div>
            <div className="cursor-pointer text-paragraph-5 hover:text-heading menu-item">
              Services
            </div>
            <div className="cursor-pointer text-paragraph-5 hover:text-heading menu-item">
              Packages
            </div>
            <div className="cursor-pointer text-paragraph-5 hover:text-heading menu-item">
              Blog
            </div>
            <div className="cursor-pointer text-paragraph-5 hover:text-heading menu-item">
              Our Work
            </div>
          </div>
          <div className="cursor-pointer text-white rounded-full accent px-10 py-[18.5px] bg-linear-90 from-primary to-accent hover:bg-primary-hover transition duration-300 uppercase">
            Contact us
          </div>
        </div>
        <Responsivemenu />
      </div>
    </section>
  );
};

export default Header;
