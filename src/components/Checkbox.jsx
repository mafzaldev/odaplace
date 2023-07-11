import React from "react";

const Checkbox = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name="trade-assurance"
        id="suppliers-type"
        className="h-4 w-4 text-[#FB6A00] rounded focus:ring-[#FB6A00]"
      />
      <span className="text-gray-500 text-sm">{title}</span>
    </div>
  );
};

export default Checkbox;
