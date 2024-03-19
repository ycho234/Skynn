'use client'
import React, { useState } from "react";
import Search from "../components/Search";
import ViewProducts from "../components/ViewProducts";
import Link from "next/link";
import data from "../data";

export default function ProductPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Callback function to update search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Function to reset search query and display all data
  const handleResetSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <h1>Product Page</h1>
      <Link href="/">Home Link</Link>
      <Search onSearch={handleSearch} onReset={handleResetSearch} />
      <ViewProducts products={data} filterQuery={searchQuery} />
    </>
  );
}
