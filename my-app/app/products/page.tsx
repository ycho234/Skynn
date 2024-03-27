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

  // Callback function to update search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Function to reset search query and display all data
  const handleResetSearch = () => {
    setSearchQuery("");
  };

  // const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.checked && event.target.name === "rice") {
  //     setFilterLabels(event.target.name);
  //     setRiceChecked(true);
  //   } else if (
  //     event.target.name === "hyaluronic acid" &&
  //     event.target.checked
  //   ) {
  //     setHlaChecked(true);
  //     setFilterLabels(event.target.name);
  //   } else if ((event.target.name === "rice"  && event.target.checked) || (event.target.name === "hyaluronic acid" && event.target.checked))

  // const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.name === "rice") {
  //     setRiceChecked(event.target.checked);
  //   } else if (event.target.name === "hyaluronic acid") {
  //     setHlaChecked(event.target.checked);
  //   }

  //   if (event.target.checked && event.target.name === "rice") {
  //     setFilterLabels("rice");
  //   } else if (
  //     event.target.checked &&
  //     event.target.name === "hyaluronic acid"
  //   ) {
  //     setFilterLabels("hyaluronic acid");
  //   } else {
  //     setFilterLabels("");
  //   }
  // };
  // const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, checked } = event.target;

  //   if (name === "rice") {
  //     setRiceChecked(checked);
  //   } else if (name === "hyaluronic acid") {
  //     setHlaChecked(checked);
  //   }

  //   if (checked) {
  //     setFilterLabels((prevLabels) => {
  //       const labels = prevLabels.split(", ").filter((label) => label !== "");
  //       return [...labels, name].join(", ");
  //     });
  //   } else {
  //     setFilterLabels((prevLabels) => {
  //       const labels = prevLabels.split(", ").filter((label) => label !== "");
  //       return labels.filter((label) => label !== name).join(", ");
  //     });
  //   }
  // };

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "rice") {
      setRiceChecked(event.target.checked);
    } else if (event.target.name === "hyaluronic acid") {
      setHlaChecked(event.target.checked);
    }

    if (event.target.checked && event.target.name === "rice" && hlachecked) {
      setFilterLabels("rice hyaluronic acid");
    } else if (
      event.target.checked &&
      event.target.name === "hyaluronic acid" &&
      ricechecked
    ) {
      setFilterLabels("rice hyaluronic acid");
    } else if (event.target.checked && event.target.name === "rice") {
      setFilterLabels("rice");
    } else if (
      event.target.checked &&
      event.target.name === "hyaluronic acid"
    ) {
      setFilterLabels("hyaluronic acid");
    } else {
      setFilterLabels("");
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
      />
      <TrendingProducts />
      <ViewAllProducts filterQuery={searchQuery} filterLabels={filterLabels} />
      <Footer />
    </>
  );
}
