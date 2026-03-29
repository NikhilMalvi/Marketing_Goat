import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div
      className="flex flex-col border border-[#CCDAFF] rounded-[20px] overflow-hidden"
      key={blog.id}
    >
      <img src={blog.image} alt={blog.title} />
      <div className="p-5 flex flex-col gap-6 w-full">
        <div className="flex justify-between gap-3">
          <span className="py-2 px-3.75 bg-[#F9F9F9] border border-[#E0E0E0] rounded-[40px] font-urbanist font-normal text-[13px] leading-[100%] text-paragraph-3">
            {blog.category}
          </span>
          <span className="font-urbanist text-sm font-normal text-paragraph-5">
            {blog.date}
          </span>
        </div>
        <h3 className="text-[20px] font-semibold leading-7.5 text-subtitle-2">
          {blog.title}
        </h3>
        <Link
          to={blog.link}
          className="peragraph text-[#4C7FFF] leading-none! hover:text-black flex items-center gap-2 transition-all ease-in-out duration-300"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="currentColor"
            stroke="currentColor"
          >
            <path
              d="M17.5986 6.90039C17.5986 7.145 17.5003 7.3794 17.3262 7.55176L11.502 13.3086L11.4355 13.373C11.3654 13.4339 11.2855 13.4839 11.2002 13.5215C11.0866 13.5714 10.964 13.5984 10.8398 13.6006C10.7156 13.6028 10.5919 13.5802 10.4766 13.5342C10.3612 13.4881 10.2562 13.4192 10.168 13.332C10.0797 13.2448 10.0098 13.1402 9.96289 13.0254C9.91605 12.9107 9.89332 12.7879 9.89551 12.6641C9.89772 12.5402 9.92463 12.4177 9.97559 12.3047C10.0265 12.1917 10.1001 12.0899 10.1914 12.0059L10.1924 12.0059L14.4258 7.82031L1.12695 7.82031C0.881515 7.82029 0.645965 7.72396 0.471679 7.55176C0.297282 7.37936 0.198242 7.1452 0.198242 6.90039C0.198242 6.65558 0.297282 6.42142 0.471679 6.24902C0.645965 6.07682 0.881515 5.98049 1.12695 5.98047L14.4258 5.98047L10.1924 1.79394L10.1914 1.79492C10.1001 1.71083 10.0265 1.60908 9.97559 1.49609C9.92463 1.38306 9.89772 1.26061 9.89551 1.13672C9.89332 1.01292 9.91605 0.890073 9.96289 0.77539C10.0098 0.660629 10.0797 0.556023 10.168 0.46875C10.2562 0.381624 10.3612 0.312644 10.4766 0.266601C10.5919 0.220572 10.7156 0.19803 10.8398 0.200195C10.964 0.20236 11.0866 0.22935 11.2002 0.279297C11.3139 0.329362 11.4169 0.401965 11.502 0.492187L17.3262 6.24902C17.5003 6.42138 17.5986 6.65578 17.5986 6.90039Z"
              strokeWidth="0.4"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
