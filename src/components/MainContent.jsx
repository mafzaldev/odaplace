import React from "react";
import FilterSidebar from "./FilterSideBar";
import ProductsGrid from "./ProductsGrid";

const MainContent = () => {
  return (
    <main className="w-full flex gap-5">
      <FilterSidebar />
      <ProductsGrid />
    </main>
  );
};

export default MainContent;
