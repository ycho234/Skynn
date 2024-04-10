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
  const [tonerchecked, setTonerChecked] = useState(false);
  const [lotionchecked, setLotionChecked] = useState(false);

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
    } else if (event.target.name === "toner") {
      setTonerChecked(event.target.checked);
    } else if (event.target.name === "lotion") {
      setLotionChecked(event.target.checked);
    }

    if (event.target.checked) {
      if (
        event.target.name === "rice" &&
        hlachecked &&
        niachecked &&
        tonerchecked &&
        lotionchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide toner lotion");
      } else if (
        event.target.name === "rice" &&
        hlachecked &&
        niachecked &&
        tonerchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide toner");
      } else if (
        event.target.name === "rice" &&
        hlachecked &&
        niachecked &&
        lotionchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide lotion");
      } else if (event.target.name === "rice" && hlachecked && niachecked) {
        setFilterLabels("rice hyaluronic acid niacinamide");
      } else if (
        event.target.name === "rice" &&
        hlachecked &&
        tonerchecked &&
        lotionchecked
      ) {
        setFilterLabels("rice hyaluronic acid toner lotion");
      } else if (event.target.name === "rice" && hlachecked && tonerchecked) {
        setFilterLabels("rice hyaluronic acid toner");
      } else if (event.target.name === "rice" && hlachecked && lotionchecked) {
        setFilterLabels("rice hyaluronic acid lotion");
      } else if (event.target.name === "rice" && hlachecked) {
        setFilterLabels("rice hyaluronic acid");
      } else if (
        event.target.name === "rice" &&
        niachecked &&
        tonerchecked &&
        lotionchecked
      ) {
        setFilterLabels("rice niacinamide toner lotion");
      } else if (event.target.name === "rice" && niachecked && tonerchecked) {
        setFilterLabels("rice niacinamide toner");
      } else if (event.target.name === "rice" && niachecked && lotionchecked) {
        setFilterLabels("rice niacinamide lotion");
      } else if (event.target.name === "rice" && niachecked) {
        setFilterLabels("rice niacinamide");
      } else if (
        event.target.name === "rice" &&
        tonerchecked &&
        lotionchecked
      ) {
        setFilterLabels("rice toner lotion");
      } else if (event.target.name === "rice" && tonerchecked) {
        setFilterLabels("rice toner");
      } else if (event.target.name === "rice" && lotionchecked) {
        setFilterLabels("rice lotion");
      } else if (
        event.target.name === "hyaluronic acid" &&
        ricechecked &&
        niachecked &&
        tonerchecked &&
        lotionchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide toner lotion");
      } else if (
        event.target.name === "hyaluronic acid" &&
        ricechecked &&
        niachecked &&
        tonerchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide toner");
      } else if (
        event.target.name === "hyaluronic acid" &&
        ricechecked &&
        niachecked &&
        lotionchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide lotion");
      } else if (
        event.target.name === "hyaluronic acid" &&
        ricechecked &&
        niachecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide");
      } else if (
        event.target.name === "hyaluronic acid" &&
        ricechecked &&
        tonerchecked &&
        lotionchecked
      ) {
        setFilterLabels("rice hyaluronic acid toner lotion");
      } else if (
        event.target.name === "hyaluronic acid" &&
        ricechecked &&
        tonerchecked
      ) {
        setFilterLabels("rice hyaluronic acid toner");
      } else if (
        event.target.name === "hyaluronic acid" &&
        ricechecked &&
        lotionchecked
      ) {
        setFilterLabels("rice hyaluronic acid lotion");
      } else if (event.target.name === "hyaluronic acid" && ricechecked) {
        setFilterLabels("rice hyaluronic acid");
      } else if (
        event.target.name === "hyaluronic acid" &&
        niachecked &&
        tonerchecked &&
        lotionchecked
      ) {
        setFilterLabels("hyaluronic acid niacinamide toner lotion");
      } else if (
        event.target.name === "hyaluronic acid" &&
        niachecked &&
        tonerchecked
      ) {
        setFilterLabels("hyaluronic acid niacinamide toner");
      } else if (
        event.target.name === "hyaluronic acid" &&
        niachecked &&
        lotionchecked
      ) {
        setFilterLabels("hyaluronic acid niacinamide lotion");
      } else if (event.target.name === "hyaluronic acid" && niachecked) {
        setFilterLabels("hyaluronic acid niacinamide");
      } else if (
        event.target.name === "hyaluronic acid" &&
        tonerchecked &&
        lotionchecked
      ) {
        setFilterLabels("hyaluronic acid toner lotion");
      } else if (event.target.name === "hyaluronic acid" && tonerchecked) {
        setFilterLabels("hyaluronic acid toner");
      } else if (event.target.name === "hyaluronic acid" && lotionchecked) {
        setFilterLabels("hyaluronic acid lotion");
      } else if (event.target.name === "hyaluronic acid") {
        setFilterLabels("hyaluronic acid");
      } else if (
        event.target.name === "niacinamide" &&
        ricechecked &&
        hlachecked &&
        tonerchecked &&
        lotionchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide toner lotion");
      } else if (
        event.target.name === "niacinamide" &&
        ricechecked &&
        hlachecked &&
        tonerchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide toner");
      } else if (
        event.target.name === "niacinamide" &&
        ricechecked &&
        hlachecked &&
        lotionchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide lotion");
      } else if (
        event.target.name === "niacinamide" &&
        ricechecked &&
        hlachecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide");
      } else if (
        event.target.name === "niacinamide" &&
        ricechecked &&
        tonerchecked &&
        lotionchecked
      ) {
        setFilterLabels("rice niacinamide toner lotion");
      } else if (
        event.target.name === "niacinamide" &&
        ricechecked &&
        tonerchecked
      ) {
        setFilterLabels("rice niacinamide toner");
      } else if (
        event.target.name === "niacinamide" &&
        ricechecked &&
        lotionchecked
      ) {
        setFilterLabels("rice niacinamide lotion");
      } else if (event.target.name === "niacinamide" && ricechecked) {
        setFilterLabels("rice niacinamide");
      } else if (
        event.target.name === "niacinamide" &&
        hlachecked &&
        tonerchecked &&
        lotionchecked
      ) {
        setFilterLabels("hyaluronic acid niacinamide toner lotion");
      } else if (
        event.target.name === "niacinamide" &&
        hlachecked &&
        tonerchecked
      ) {
        setFilterLabels("hyaluronic acid niacinamide toner");
      } else if (
        event.target.name === "niacinamide" &&
        hlachecked &&
        lotionchecked
      ) {
        setFilterLabels("hyaluronic acid niacinamide lotion");
      } else if (event.target.name === "niacinamide" && hlachecked) {
        setFilterLabels("hyaluronic acid niacinamide");
      } else if (
        event.target.name === "niacinamide" &&
        tonerchecked &&
        lotionchecked
      ) {
        setFilterLabels("niacinamide toner lotion");
      } else if (event.target.name === "niacinamide" && tonerchecked) {
        setFilterLabels("niacinamide toner");
      } else if (event.target.name === "niacinamide" && lotionchecked) {
        setFilterLabels("niacinamide lotion");
      } else if (event.target.name === "niacinamide") {
        setFilterLabels("niacinamide");
      } else if (
        event.target.name === "toner" &&
        ricechecked &&
        hlachecked &&
        niachecked &&
        lotionchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide toner lotion");
      } else if (
        event.target.name === "toner" &&
        ricechecked &&
        hlachecked &&
        niachecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide toner");
      } else if (
        event.target.name === "toner" &&
        ricechecked &&
        hlachecked &&
        lotionchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide lotion");
      } else if (event.target.name === "toner" && ricechecked && hlachecked) {
        setFilterLabels("rice hyaluronic acid niacinamide");
      } else if (
        event.target.name === "toner" &&
        ricechecked &&
        niachecked &&
        lotionchecked
      ) {
        setFilterLabels("rice niacinamide toner lotion");
      } else if (event.target.name === "toner" && ricechecked && niachecked) {
        setFilterLabels("rice niacinamide toner");
      } else if (
        event.target.name === "toner" &&
        ricechecked &&
        lotionchecked
      ) {
        setFilterLabels("rice niacinamide lotion");
      } else if (event.target.name === "toner" && ricechecked) {
        setFilterLabels("rice niacinamide");
      } else if (
        event.target.name === "toner" &&
        hlachecked &&
        niachecked &&
        lotionchecked
      ) {
        setFilterLabels("hyaluronic acid niacinamide toner lotion");
      } else if (event.target.name === "toner" && hlachecked && niachecked) {
        setFilterLabels("hyaluronic acid niacinamide toner");
      } else if (event.target.name === "toner" && hlachecked && lotionchecked) {
        setFilterLabels("hyaluronic acid niacinamide lotion");
      } else if (event.target.name === "toner" && hlachecked) {
        setFilterLabels("hyaluronic acid niacinamide");
      } else if (event.target.name === "toner" && niachecked && lotionchecked) {
        setFilterLabels("niacinamide toner lotion");
      } else if (event.target.name === "toner" && niachecked) {
        setFilterLabels("niacinamide toner");
      } else if (event.target.name === "toner" && lotionchecked) {
        setFilterLabels("niacinamide lotion");
      } else if (event.target.name === "toner") {
        setFilterLabels("toner");
      } else if (
        event.target.name === "lotion" &&
        ricechecked &&
        hlachecked &&
        niachecked &&
        tonerchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide toner lotion");
      } else if (
        event.target.name === "lotion" &&
        ricechecked &&
        hlachecked &&
        niachecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide toner");
      } else if (
        event.target.name === "lotion" &&
        ricechecked &&
        hlachecked &&
        tonerchecked
      ) {
        setFilterLabels("rice hyaluronic acid niacinamide lotion");
      } else if (event.target.name === "lotion" && ricechecked && hlachecked) {
        setFilterLabels("rice hyaluronic acid niacinamide");
      } else if (
        event.target.name === "lotion" &&
        ricechecked &&
        niachecked &&
        tonerchecked
      ) {
        setFilterLabels("rice niacinamide toner lotion");
      } else if (event.target.name === "lotion" && ricechecked && niachecked) {
        setFilterLabels("rice niacinamide toner");
      } else if (
        event.target.name === "lotion" &&
        ricechecked &&
        tonerchecked
      ) {
        setFilterLabels("rice niacinamide lotion");
      } else if (event.target.name === "lotion" && ricechecked) {
        setFilterLabels("rice niacinamide");
      } else if (
        event.target.name === "lotion" &&
        hlachecked &&
        niachecked &&
        tonerchecked
      ) {
        setFilterLabels("hyaluronic acid niacinamide toner lotion");
      } else if (event.target.name === "lotion" && hlachecked && niachecked) {
        setFilterLabels("hyaluronic acid niacinamide toner");
      } else if (event.target.name === "lotion" && hlachecked && tonerchecked) {
        setFilterLabels("hyaluronic acid niacinamide lotion");
      } else if (event.target.name === "lotion" && hlachecked) {
        setFilterLabels("hyaluronic acid niacinamide");
      } else if (event.target.name === "lotion" && niachecked && tonerchecked) {
        setFilterLabels("niacinamide toner lotion");
      } else if (event.target.name === "lotion" && niachecked) {
        setFilterLabels("niacinamide toner");
      } else if (event.target.name === "lotion" && tonerchecked) {
        setFilterLabels("niacinamide lotion");
      } else if (event.target.name === "lotion") {
        setFilterLabels("lotion");
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
        tonerchecked={tonerchecked}
        lotionchecked={lotionchecked}
      />
      <TrendingProducts />
      <ViewAllProducts filterQuery={searchQuery} filterLabels={filterLabels} />
      <Footer />
    </>
  );
}
