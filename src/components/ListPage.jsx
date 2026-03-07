import React from "react";

const ListPage = ({ heading, list }) => {
  return (
    <div className="flex flex-col gap-5 lg:w-max md:w-1/2 w-full">
      <h3 className="secondary-heading-2 text-white">{heading}</h3>
      <ul className="list-none flex flex-col gap-2 peragraph text-[#D5D5D5]">
        {list.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="hover:text-white transition-colors duration-300"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
