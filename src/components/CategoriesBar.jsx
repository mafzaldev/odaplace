import React from "react";
import Menu from "../assets/menu.svg";
import Caret from "../assets/keyboard_arrow_down.svg";

const CategoriesBar = () => {
  return (
    <div className="flex items-center py-4 gap-3 border-y-[1px] border-gray-200">
      <div className="flex items-center gap-1">
        <img src={Menu} alt="" className="w-5" />
        Categories
        <img src={Caret} alt="" className="w-5" />
      </div>
      <div className="flex gap-8">
        <span>Ready to Ship</span>
        <span>Personal Protective</span>
        <span>Buyer Central</span>
        <span>Sell on Odaplace</span>
        <span>Help</span>
      </div>
    </div>
  );
};

export default CategoriesBar;
