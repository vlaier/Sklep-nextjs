import React from "react";

interface PaginationProps {
  howManyPages: number;
  currentPageNumber: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
export const Pagination = ({
  howManyPages,
  currentPageNumber,
  setPage,
}: PaginationProps) => {
  const testPages = (page: number) => {
    setPage(page);
  };
  const pages = [...Array(howManyPages).keys()].map((pageNumber) => {
    return (
      <a
        key={pageNumber}
        onClick={() => testPages(pageNumber)}
        href="#"
        className={`${
          pageNumber === currentPageNumber
            ? "border-sky-300 text-sky-700 hover:border-sky-400 hover:text-sky-800"
            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 "
        } border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}
      >
        {pageNumber + 1}
      </a>
    );
  });
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="hidden md:-mt-px md:flex">{pages}</div>
    </nav>
  );
};
