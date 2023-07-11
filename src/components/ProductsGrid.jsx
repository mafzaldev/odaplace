import React from "react";
import Caret from "../assets/keyboard_arrow_down.svg";
import Grid from "../assets/grid-square.svg";

import ProductCard from "./ProductCard";
import FilterChip from "./FilterChip";

import { filterChips, products } from "../utils";

const ProductsGrid = () => {
  return (
    <div className="w-[80%] p-4 text-gray-500 text-sm">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-black">
          1-16 over 500 result for{" "}
          <span className="text-[#FB6A00]">"Asus"</span>
        </span>
        <div>
          <span className="inline-block mr-2">Sort by:</span>
          <div className="inline-block border rounded-lg p-2 mr-2">
            <span>Best Match</span>
            <img src={Caret} className="w-5 inline-block" />
          </div>
          <div className="inline-block border rounded-lg p-2">
            <img src={Grid} className="w-5 inline-block" />
          </div>
        </div>
      </div>
      <div className="my-3">
        {filterChips.map((chip) => (
          <FilterChip key={chip} title={chip} />
        ))}
        <span className="text-[#FB6A00] cursor-pointer">Clear All Filters</span>
      </div>
      <div className="w-full grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            discountedPrice={product.discountedPrice}
            rating={product.rating}
            image={product.image}
            sold={product.sold}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
