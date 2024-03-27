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
  const [checked, setChecked] = useState(false);

  // Callback function to update search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Function to reset search query and display all data
  const handleResetSearch = () => {
    setSearchQuery("");
  };

  // const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   // if (event.target.checked) {
  //   //   console.log(`Hello from ${event.target.name}`);
  //   // } else {
  //   //   console.log(`Bye from ${event.target.name}`);
  //   // }
  //   if (event.target.checked) {
  //     if (filterLabels.includes(event.target.name)) {
  //       setFilterLabels(
  //         filterLabels.filter((label) => label !== event.target.name)
  //       );
  //     } else {
  //       setFilterLabels([...filterLabels, event.target.name]);
  //     }
  //   }
  // };

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
    if(event.target.checked){
      setFilterLabels(event.target.name);
      setChecked(true);
    } else{
      setFilterLabels("");
      setChecked(false);
    }
  }

  
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
      <Menu onChange={handleCheckBoxChange} checked={checked}/>
      <TrendingProducts />
      <ViewAllProducts filterQuery={searchQuery} filterLabels={filterLabels} />
      <Footer />
    </>
  );
}
