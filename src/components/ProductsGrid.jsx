import React from "react";
import Caret from "../assets/keyboard_arrow_down.svg";
import Grid from "../assets/grid-square.svg";
import FilterChip from "./FilterChip";

const ProductsGrid = () => {
  const asusLaptops = [
    {
      id: 1,
      name: "Asus ROG Zephyrus G14",
      price: 1499,
      discountedPrice: 1299,
      rating: 4.7,
      sold: 1200,
    },
    {
      id: 2,
      name: "Asus ZenBook 14",
      price: 1199,
      discountedPrice: 1099,
      rating: 4.5,
      sold: 950,
    },
    {
      id: 3,
      name: "Asus VivoBook S15",
      price: 899,
      discountedPrice: 799,
      rating: 4.3,
      sold: 800,
    },
    {
      id: 4,
      name: "Asus TUF Gaming A15",
      price: 1299,
      discountedPrice: 1099,
      rating: 4.6,
      sold: 650,
    },
    {
      id: 5,
      name: "Asus ROG Strix Scar 15",
      price: 1999,
      discountedPrice: 1799,
      rating: 4.8,
      sold: 500,
    },
    {
      id: 6,
      name: "Asus ZenBook Pro Duo",
      price: 2599,
      discountedPrice: 2299,
      rating: 4.9,
      sold: 400,
    },
    {
      id: 7,
      name: "Asus ROG Zephyrus G15",
      price: 1799,
      discountedPrice: 1599,
      rating: 4.7,
      sold: 600,
    },
    {
      id: 8,
      name: "Asus VivoBook Flip 14",
      price: 799,
      discountedPrice: 699,
      rating: 4.4,
      sold: 300,
    },
    {
      id: 9,
      name: "Asus ROG Strix G17",
      price: 1699,
      discountedPrice: 1499,
      rating: 4.6,
      sold: 450,
    },
    {
      id: 10,
      name: "Asus ZenBook 15",
      price: 1299,
      discountedPrice: 1199,
      rating: 4.5,
      sold: 550,
    },
    {
      id: 11,
      name: "Asus VivoBook 15",
      price: 699,
      discountedPrice: 599,
      rating: 4.2,
      sold: 750,
    },
    {
      id: 12,
      name: "Asus ROG Zephyrus G14 (Anime Matrix)",
      price: 1899,
      discountedPrice: 1699,
      rating: 4.8,
      sold: 250,
    },
    {
      id: 13,
      name: "Asus TUF Gaming F15",
      price: 1099,
      discountedPrice: 999,
      rating: 4.4,
      sold: 400,
    },
    {
      id: 14,
      name: "Asus ZenBook 13",
      price: 1099,
      discountedPrice: 999,
      rating: 4.3,
      sold: 350,
    },
    {
      id: 15,
      name: "Asus ROG Strix G15",
      price: 1599,
      discountedPrice: 1399,
      rating: 4.6,
      sold: 500,
    },
    {
      id: 16,
      name: "Asus VivoBook S14",
      price: 899,
      discountedPrice: 799,
      rating: 4.2,
      sold: 300,
    },
  ];

  const filterChips = [
    "Ready to Ship",
    "Paid Samples",
    "Price Minimum",
    "Price Maximum",
    "Minimal Order",
  ];

  return (
    <div className="w-[80%] p-4 text-gray-500 text-sm">
      <div className="flex justify-between items-center">
        <span>
          1-16 over 500 result <span className="text-[#FB6A00]">"Asus"</span>
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
        <span className="text-[#FB6A00]">Clear All Filters</span>
      </div>
      <div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProductsGrid;
