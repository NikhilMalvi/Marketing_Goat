import React from "react";
import MainSection from "../MainSection";
import MainButton from "../MainButton";
import { Link } from "react-router-dom";
import blogData from "./blogData";
import BlogCard from "./BlogCard";

const PageBlog = ({ limit }) => {
  const displayedBlogs = limit ? blogData.slice(0, limit) : blogData;

  return (
    <MainSection>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 lg:flex-nowrap flex-wrap">
          <h2 className="primary-heading">Latest news & updates</h2>
          <MainButton
            text={"View All"}
            type="button"
            className="bg-accent hover:bg-black text-white hover:text-white w-max text-center uppercase"
            storkeColor="white"
            link="/blog"
          />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6.25">
          {/* card */}
          {displayedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </MainSection>
  );
};

export default PageBlog;
