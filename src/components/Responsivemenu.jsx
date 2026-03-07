import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router";
import "./Responsivemenu.css";
import {
  IoIosArrowDropdown,
  IoIosArrowDropup,
  IoIosSearch,
} from "react-icons/io";
import { TbMailFilled } from "react-icons/tb";
import { FaClock, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.svg";

import {
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";

const Responsivemenu = () => {
  const [menuopan, setmenuopan] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null); // Track which menu is open

  const [searchopan, setsearchopan] = useState(false);

  const opanmenu = () => {
    setmenuopan(!menuopan);
    if (!menuopan) {
      document.documentElement.classList.add("menu-open");
    } else {
      document.documentElement.classList.remove("menu-open");
    }
  };

  const closemenu = () => {
    setmenuopan(!menuopan);
    document.documentElement.classList.remove("menu-open");
  };

  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const searchOpaninput = () => {
    setsearchopan(!searchopan);
  };

  return (
    <section className="rftdhgf lg:hidden">
      <div
        className={`th-menu-wrapper ${menuopan ? "th-menu-active" : ""}`}
        onClick={closemenu}
      ></div>
      <div className="navbar-responsive">
        {/* hamburger icon */}
        <div className="opan-nav-icon" onClick={opanmenu}>
          <div className="opan-icons">
            <AiOutlineMenu size={28} color="#033987" />
          </div>
        </div>
        {/* <div className="nav-overlay"></div> */}

        <nav
          className={`main-menu-responsive ${menuopan ? "" : "close-active"}`}
          // style={{ display: menuopan ? "block" : "none" }}
        >
          <div className="main-menu-section">
            <div className="close-nav-icon">
              <div className="close-icons">
                <AiOutlineClose size={28} color="#033987" onClick={closemenu} />
              </div>
              {/* <div
                className={`search-box-icon ${searchopan ? "opan-input" : ""}`}
              >
                <input
                  type="search"
                  placeholder="Search..."
                  className="search-box"
                />
                <IoIosSearch
                  size={28}
                  color="#033987"
                  onClick={searchOpaninput}
                />
              </div> */}
              <div className="logo-responsive text-start w-full">
                <img src={logo} alt="" />
              </div>
            </div>

            <div className="main-menu-column">
              <ul className="main-menu-contener">
                <li
                  className="main-list grehre"
                  style={{ position: "relative" }}
                >
                  <input
                    type="search"
                    placeholder="Search..."
                    className="search-box"
                  />
                  <div className="search-icon-menu">
                    <IoIosSearch size={18} />
                  </div>
                </li>
                <li
                  className={`main-list ${
                    activeMenu === "about" ? "active-list" : ""
                  }`}
                  onClick={() => toggleSubMenu("about")}
                >
                  <div className="drop-down-menu">
                    About
                    {activeMenu === "about" ? (
                      <IoIosArrowDropup size={20} />
                    ) : (
                      <IoIosArrowDropdown size={20} />
                    )}
                  </div>

                  <div
                    className={`inner-menu ${
                      activeMenu === "about" ? "open-submenu" : ""
                    }`}
                  >
                    <ul className="inner-menu-list">
                      <li>
                        <Link to="/about" onClick={closemenu}>
                          About Us
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/" onClick={closemenu}>
                          Founders
                        </Link>
                      </li> */}
                      <li>
                        <Link to="/team" onClick={closemenu}>
                          Meet Our Team
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={`main-list ${
                    activeMenu === "service" ? "active-list" : ""
                  }`}
                  onClick={() => toggleSubMenu("service")}
                >
                  <div className="drop-down-menu">
                    Service
                    {activeMenu === "service" ? (
                      <IoIosArrowDropup size={20} />
                    ) : (
                      <IoIosArrowDropdown size={20} />
                    )}
                  </div>
                  <div
                    className={`inner-menu ${
                      activeMenu === "service" ? "open-submenu" : ""
                    }`}
                  >
                    <ul className="inner-menu-list">
                      <li>
                        <Link
                          to="/services/website-development"
                          onClick={closemenu}
                        >
                          Website Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/digital-marketing"
                          onClick={closemenu}
                        >
                          Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/application-development"
                          onClick={closemenu}
                        >
                          Application Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/graphics-design"
                          onClick={closemenu}
                        >
                          Graphics Design
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/video-editing" onClick={closemenu}>
                          Video Editing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={`main-list ${
                    activeMenu === "resources" ? "active-list" : ""
                  }`}
                  onClick={() => toggleSubMenu("resources")}
                >
                  <div className="drop-down-menu">
                    Resources
                    {activeMenu === "resources" ? (
                      <IoIosArrowDropup size={20} />
                    ) : (
                      <IoIosArrowDropdown size={20} />
                    )}
                  </div>
                  <div
                    className={`inner-menu ${
                      activeMenu === "resources" ? "open-submenu" : ""
                    }`}
                  >
                    <ul className="inner-menu-list">
                      <li>
                        <Link to="/blog" onClick={closemenu}>
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={closemenu}>
                          Portfolio
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="main-list">
                  <div className="drop-down-menu">
                    <Link to="/contact" onClick={closemenu}>
                      Contact Us
                    </Link>
                  </div>
                </li>

                {/* <li className="main-list">
                  <div className="icon-box">
                    <div className="icon-column">
                      <FiPhoneCall color="#fff" size={20} />
                    </div>
                    <div className="icon-content">
                      <h3>Contact Number</h3>
                      <p>+1234 5678 90</p>
                    </div>
                  </div>
                </li> */}

                <li className="main-list">
                  <div className="infomation-social">
                    <h3>Contact Info</h3>
                    <ul className="info-mation">
                      <li className="icons-list">
                        <a href="#">
                          <TbMailFilled color="#033987" size={18} />
                          celtustechnologies@gmail.com
                        </a>
                      </li>
                      <li className="icons-list">
                        <a href="#">
                          <FaClock color="#033987" size={18} />
                          Mon-friday, 10am - 7pm
                        </a>
                      </li>
                      <li className="icons-list">
                        <a href="#">
                          <FaPhoneAlt color="#033987" size={18} />
                          +91 9924010088
                        </a>
                      </li>
                    </ul>
                    <div className="social-icons-menu">
                      <a href="#" className="social-icon">
                        <FaInstagram />
                      </a>
                      <a href="#" className="social-icon">
                        <FaYoutube />
                      </a>
                      <a href="#" className="social-icon">
                        <FaLinkedin />
                      </a>
                      <a href="#" className="social-icon">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="social-icon">
                        <FaXTwitter />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Responsivemenu;
