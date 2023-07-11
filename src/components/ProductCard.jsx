import React from "react";
import Star from "../assets/star.svg";
import Basket from "../assets/shopping-basket.svg";

const ProductCard = ({ name, image, price, discountedPrice, rating, sold }) => {
  return (
    <div className="h-fit rounded-lg bg-white border border-gray-300 text-black cursor-pointer">
      <div className="h-1/2">
        <img src={image} className="rounded-t-lg w-full h-full" />
      </div>
      <div className="p-3">
        <div className="font-bold text-base">
          ${price}
          <span className="text-xs font-normal text-gray-500 line-through decoration-red-700 ml-2">
            ${discountedPrice}
          </span>
        </div>
        <span className="text-base mt-3">{name}</span>
        <div className="flex items-center justify-between mt-1">
          <div className="text-xs  bg-[#FFC301] w-fit px-2 py-1 rounded-full">
            <img src={Star} className="w-4 inline-block" />
            <div className="inline-block text-white">{rating}</div>
          </div>
          <div className="text-sm">Sold {sold}</div>
          <div className="flex items-center justify-center w-8 h-8 text-center bg-[#FB6A00] rounded-full cursor-pointer">
            <img src={Basket} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
