"use client";
import React, { ChangeEvent, useState, KeyboardEvent } from "react";


interface SearchProps {
  onSearch: (query: string) => void;
  onReset: () => void;
}

export default function Search({ onSearch, onReset }: SearchProps) {
  const [query, setQuery] = useState<string>("");

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(query);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    // Call onReset callback when query is emptied
    if (newQuery === "") {
      onReset();
    }
  };

  return (
    <div className="bg-customLightGreen items-center flex gap-2 justify-between md:justify-center px-6  pt-3 ">
      <input
        type="text"
        placeholder="Search Products"
        className="border-2 border-[#A6A9A3] md:w-[50%] rounded-2xl p-1 my-4 w-80 text-center text-[#9a9d97] focus:outline-none placeholder-[#B9B9B9] "
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <div className="text-[#696c6a] font-medium border-2 border-[#A6A9A3] py-1 px-3 rounded-2xl bg-[#eaede6] hover:bg-[#e2e4df] hover:text-[#474547] hidden sm:block">
        <h2>Filters</h2>
      </div>
    </div>
  );
}
