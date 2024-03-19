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
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
    />
  );
}
