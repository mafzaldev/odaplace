import React from "react";
import Menu from "../assets/menu.svg";
import Caret from "../assets/keyboard_arrow_down.svg";

const CategoriesBar = () => {
  return (
    <div className="flex items-center py-4 gap-3 border-y-[1px] border-gray-200 my-3 text-gray-500">
      <div className="text-center">
        <img src={Menu} className="w-5 inline-block mr-1" />
        <span className="inline-block mr-1">Categories</span>
        <img src={Caret} className="w-5 inline-block" />
      </div>
      <span className="flex gap-8">
        <a href="#">Ready to Ship</a>
        <a href="#">Personal Protective</a>
        <a href="#">Buyer Central</a>
        <a href="#">Sell on Odaplace</a>
        <a href="#">Help</a>
      </span>
    </div>
  );
};

export default CategoriesBar;
