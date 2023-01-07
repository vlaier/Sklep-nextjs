import Link from "next/link";
import React from "react";

interface PaginationProps {
  howManyPages: number | string;
  currentPageNumber: number;
}
export const Pagination = ({
  howManyPages,
  currentPageNumber,
}: PaginationProps) => {
  howManyPages === "infinite";
  const pages =
    howManyPages !== "infinite"
      ? [...Array(howManyPages).keys()].map((pageNumber) => {
          return (
            <Link
              href={`/products/page/${pageNumber}`}
              key={pageNumber}
              className={`${
                pageNumber === currentPageNumber
                  ? "border-sky-300 text-sky-700 hover:border-sky-400 hover:text-sky-800"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 "
              } border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}
            >
              {pageNumber + 1}
            </Link>
          );
        })
      : [...Array(5).keys()].map((pageNumber) => {
          if (currentPageNumber < 3) {
            return (
              <Link
                href={`/products/page/${pageNumber}`}
                key={pageNumber}
                className={`${
                  pageNumber === currentPageNumber
                    ? "border-sky-300 text-sky-700 hover:border-sky-400 hover:text-sky-800"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 "
                } border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}
              >
                {pageNumber + 1}
              </Link>
            );
          } else {
            return (
              <Link
                href={`/products/page/${currentPageNumber - 2 + pageNumber}`}
                key={currentPageNumber - 1 + pageNumber}
                className={`${
                  currentPageNumber - 2 + pageNumber === currentPageNumber
                    ? "border-sky-300 text-sky-700 hover:border-sky-400 hover:text-sky-800"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 "
                } border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}
              >
                {currentPageNumber - 1 + pageNumber}
              </Link>
            );
          }
        });
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="hidden md:-mt-px md:flex">{pages}</div>
    </nav>
  );
};
