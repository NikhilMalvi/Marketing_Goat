import React from "react";
import Background from "../Background";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaRedditAlien,
  FaQuora,
} from "react-icons/fa";

const ContactDetails = () => {
  const socialIcons = [
    {
      icon: <FaYoutube />,
      link: "#",
    },
    {
      icon: <FaInstagram />,
      link: "#",
    },
    {
      icon: <FaLinkedin />,
      link: "#",
    },
    {
      icon: <FaFacebookF />,
      link: "#",
    },

    {
      icon: <FaTwitter />,
      link: "#",
    },
    {
      icon: <FaRedditAlien />,
      link: "#",
    },
    {
      icon: <FaQuora />,
      link: "#",
    },
  ];

  const locationsData = [
    {
      id: 1,
      country: "Australia",
      address: "77 New Cavendish street, Fitzrovia, WTW 6XB",
      phone: "+91 0123 456 789",
      tel: "tel:+910123456789",
      link: "/contact/australia",
    },
    {
      id: 2,
      country: "Dubai",
      address: "77 New Cavendish street, Fitzrovia, WTW 6XB",
      phone: "+91 0123 456 789",
      tel: "tel:+910123456789",
      link: "/contact/dubai",
    },
    {
      id: 3,
      country: "India",
      address: "77 New Cavendish street, Fitzrovia, WTW 6XB",
      phone: "+91 0123 456 789",
      tel: "tel:+910123456789",
      link: "/contact/india",
    },
  ];

  return (
    <Background maxWidth="7xl">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/contact/contactOverlay.png')] lg:bg-size-[28%] bg-size-[50%] bg-center bg-no-repeat opacity-100"></div>
      <div className="flex justify-between gap-10 lg:flex-nowrap flex-wrap z-10 lg:py-5">
        <div className="lg:w-1/2 w-full flex flex-col lg:gap-10 gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-urbanist sm:text-[18px] text-base sm:leading-7 leading-6 font-medium! text-[#CECECE]">
              Phone Number
            </p>
            <a
              href="tel:+910123456789"
              className="primary-heading text-background-2"
            >
              +91 0123 456 789
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-urbanist sm:text-[18px] text-base sm:leading-7 leading-6 font-medium! text-[#CECECE]">
              Email Address
            </p>
            <a
              href="mailto:hello@itsolutions.com"
              className="primary-heading text-background-2"
            >
              hello@itsolutions.com
            </a>
          </div>

          <div className="flex flex-col gap-2 sm:text-[18px] text-base">
            <p className="font-urbanist sm:leading-7 leading-6 font-medium! text-[#CECECE]">
              Follow Us
            </p>
            <div className="flex items-center text-white gap-3.75">
              {socialIcons.map((item, index) => (
                <a href={item.link} key={index}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col lg:gap-15 md:gap-10 gap-6">
          {locationsData.map((location) => (
            <div className="flex flex-col lg:gap-10 gap-6" key={location.id}>
              <div className="flex justify-between items-center gap-5">
                <h3 className="lg:text-[32px] md:text-[30px] sm:text-[28px] text-[26px] leading-none font-bold text-background-2 ">
                  {location.country}
                </h3>
                <a
                  href={location.tel}
                  className="font-urbanist sm:leading-7 leading-6 font-medium! text-[#CECECE]"
                >
                  {location.phone}
                </a>
              </div>
              <div className="flex justify-between items-center gap-5 pb-5 border-b border-[#ffffff33]">
                <p className="font-urbanist sm:leading-7 leading-6 font-medium! text-[#CECECE]">
                  {location.address}
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="14"
                  className="text-white"
                  viewBox="0 0 17 14"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path
                    opacity="0.9"
                    d="M9.80427 13.3928L16.2109 6.95277L9.80427 0.512773C9.74641 0.43679 9.6729 0.374127 9.58871 0.329024C9.50453 0.283922 9.41164 0.257434 9.31633 0.251353C9.22102 0.245271 9.12551 0.25974 9.03628 0.293778C8.94704 0.327816 8.86617 0.380628 8.79912 0.448641C8.73207 0.516654 8.68042 0.598278 8.64766 0.687989C8.6149 0.777699 8.6018 0.873401 8.60924 0.968615C8.61668 1.06383 8.64449 1.15633 8.69079 1.23986C8.73709 1.32339 8.8008 1.396 8.8776 1.45277L13.6709 6.28611L0.9176 6.28611C0.740788 6.28611 0.571219 6.35634 0.446196 6.48137C0.321171 6.60639 0.250933 6.77596 0.250933 6.95277C0.250933 7.12958 0.321171 7.29915 0.446196 7.42418C0.571219 7.5492 0.740788 7.61944 0.9176 7.61944L13.6709 7.61944L8.8776 12.4528C8.75295 12.5783 8.68327 12.7482 8.6839 12.9251C8.68452 13.102 8.7554 13.2715 8.88093 13.3961C9.00647 13.5208 9.17638 13.5904 9.35329 13.5898C9.5302 13.5892 9.69962 13.5183 9.82427 13.3928L9.80427 13.3928Z"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Background>
  );
};

export default ContactDetails;
