"use client";

import ViewAllProducts from "../components/viewAllProducts";
import Footer from "../components/Footer";
import TrendingProducts from "../components/trendingProducts";
import Search from "../components/Search";
import { useState } from "react";
import Image from "next/image";
import Menu from "../components/menu";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // const [selectedIngredients, setSelectedIngredients] = useState([]);

  // Callback function to update search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Function to reset search query and display all data
  const handleResetSearch = () => {
    setSearchQuery("");
  };

  // Callback function to update selected ingredients (checkboxes)
  // const handleFilterChange = (ingredients) => {
  //   setSelectedIngredients(ingredients);
  // };

  return (
    <>
      <div className="bg-customLightGreen flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="Skynn Logo"
          width={280}
          height={280}
          className="pt-6"
        />
      </div>
      <Search onSearch={handleSearch} onReset={handleResetSearch} />
      <Menu />
      {/* onFilterChange={handleFilterChange}  */}
      <TrendingProducts />
      <ViewAllProducts filterQuery={searchQuery} />
      {/* selectedIngredients={selectedIngredients} */}

      <Footer />
    </>
  );
}
