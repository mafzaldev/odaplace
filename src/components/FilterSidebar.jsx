import React from "react";
import Checkbox from "./Checkbox";
import InputFieldwithIcon from "./InputFieldwithIcon";

const FilterSidebar = () => {
  return (
    <aside className="border border-gray-200 w-[20%] rounded-lg bg-white">
      <div className="flex flex-col items-start gap-4 p-4">
        <p className="font-bold">Filters</p>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Suppliers Type</p>
          <Checkbox title={"Trade Assurance"} />
          <Checkbox title={"Verified Supplier"} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Products Type</p>
          <Checkbox title={"Ready to Ship"} />
          <Checkbox title={"Paid Samples"} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Condition</p>
          <Checkbox title={"New Stuff"} />
          <Checkbox title={"Second Hand"} />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="font-bold">Min Order</p>
          <input
            type="range"
            value={30}
            className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FB6A00] border border-white"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="font-bold">Price</p>
          <InputFieldwithIcon />
          <InputFieldwithIcon />
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
