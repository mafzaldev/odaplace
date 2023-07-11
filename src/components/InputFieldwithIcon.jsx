import React from "react";
import Dollar from "../assets/dollar.svg";

const InputFieldwithIcon = () => {
  return (
    <div class="relative w-full">
      <div class="absolute inset-y-0 left-0 flex items-center justify-center w-10 pointer-events-none bg-[#E6E8EC] rounded-l-lg">
        <img src={Dollar} alt="" />
      </div>
      <input
        type="number"
        id="simple-search"
        class="bg-gray-50 border border-gray-300 block w-full pl-12 p-2.5 text-gray-900 text-sm rounded-lg "
        required
      />
    </div>
  );
};

export default InputFieldwithIcon;
