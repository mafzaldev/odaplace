import React from "react";
import Remove from "../assets/times-circle.svg";
const FilterChip = ({ title }) => {
  return (
    <div className="inline-block mr-3 border rounded-full py-2 px-3">
      <span className="mr-1">{title}</span>
      <img src={Remove} className="w-4 inline-block cursor-pointer" />
    </div>
  );
};

export default FilterChip;
