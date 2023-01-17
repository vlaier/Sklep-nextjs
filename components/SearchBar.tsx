import React from "react";

export const SearchBar = () => {
  return (
    <div className="relative shadow-lg rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute right-5 top-3 w-6 h-6 z-10 text-gray-400 peer-active:text-sky-500 peer-focus:text-sky-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        placeholder="Szukaj..."
        className="peer py-2 rounded-full pl-8 pr-12 text-2xl  outline-sky-400 relative"
      />
    </div>
  );
};
