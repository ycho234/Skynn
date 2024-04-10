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
  const [filterLabels, setFilterLabels] = useState("");
  const [ricechecked, setRiceChecked] = useState(false);
  const [hlachecked, setHlaChecked] = useState(false);
  const [niachecked, setNiaChecked] = useState(false);

  // Callback function to update search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Function to reset search query and display all data
  const handleResetSearch = () => {
    setSearchQuery("");
  };

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "rice") {
      setRiceChecked(event.target.checked);
    } else if (event.target.name === "hyaluronic acid") {
      setHlaChecked(event.target.checked);
    } else if (event.target.name === "niacinamide") {
      setNiaChecked(event.target.checked);
    }

    if (event.target.checked) {
      if (event.target.name === "rice" && hlachecked && niachecked) {
        setFilterLabels("rice hyaluronic acid niacinamide");
      } else if (event.target.name === "rice" && hlachecked) {
        setFilterLabels("rice hyaluronic acid");
      } else if (event.target.name === "rice" && niachecked) {
        setFilterLabels("rice niacinamide");
      } else if (event.target.name === "rice") {
        setFilterLabels("rice");
      } else if (
        event.target.name === "hyaluronic acid" &&
        ricechecked &&
        niachecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide");
      } else if (event.target.name === "hyaluronic acid" && ricechecked) {
        setFilterLabels("rice hyaluronic acid");
      } else if (event.target.name === "hyaluronic acid" && niachecked) {
        setFilterLabels("hyaluronic acid niacinamide");
      } else if (event.target.name === "hyaluronic acid") {
        setFilterLabels("hyaluronic acid");
      } else if (
        event.target.name === "niacinamide" &&
        ricechecked &&
        hlachecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide");
      } else if (event.target.name === "niacinamide" && ricechecked) {
        setFilterLabels("rice niacinamide");
      } else if (event.target.name === "niacinamide" && hlachecked) {
        setFilterLabels("hyaluronic acid niacinamide");
      } else if (event.target.name === "niacinamide") {
        setFilterLabels("niacinamide");
      } else {
        setFilterLabels("");
      }
    }
  };

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
      <Menu
        onChange={handleCheckBoxChange}
        ricechecked={ricechecked}
        hlachecked={hlachecked}
        niachecked={niachecked}
      />
      <TrendingProducts />
      <ViewAllProducts filterQuery={searchQuery} filterLabels={filterLabels} />
      <Footer />
    </>
  );
}
