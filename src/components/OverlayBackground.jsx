import React from "react";

const OverlayBackground = () => {
  return (
    <div className=" overflow-hidden w-full h-full absolute -z-10 inset-0">
      {/* overlay */}
      <div className="bulbs1 absolute"></div>
      <div className="bulbs2 absolute"></div>
      <div className="bulbs3 absolute"></div>
      <div className="bulbs4 absolute"></div>
      <div className="lines"></div>
    </div>
  );
};

export default OverlayBackground;
