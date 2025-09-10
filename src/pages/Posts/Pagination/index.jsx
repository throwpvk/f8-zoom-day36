import React from "react";
import style from "../Posts.module.scss";

const Pagination = ({ page, totalPages, setPage, setSearchParams }) => {
  return (
    <ul className={style.paginationContainer}>
      <li
        onClick={() => {
          setPage(1);
          setSearchParams({ page: 1 });
        }}
        className={`${style.pagination} ${page === 1 ? style.disabled : ""}`}
      >
        First
      </li>
      <li
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
            setSearchParams({ page: page - 1 });
          }
        }}
        className={`${style.pagination} ${page === 1 ? style.disabled : ""}`}
      >
        Prev
      </li>
      {totalPages > 1 &&
        [...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            onClick={() => {
              setPage(index + 1);
              setSearchParams({ page: index + 1 });
            }}
            className={`${style.pagination} ${
              page === index + 1 ? style.active : ""
            }`}
          >
            {index + 1}
          </li>
        ))}
      <li
        onClick={() => {
          if (page < totalPages) {
            setPage(page + 1);
            setSearchParams({ page: page + 1 });
          }
        }}
        className={`${style.pagination} ${
          page < totalPages ? "" : style.disabled
        }`}
      >
        Next
      </li>
      <li
        onClick={() => {
          setPage(totalPages);
          setSearchParams({ page: totalPages });
        }}
        className={`${style.pagination} ${
          page < totalPages ? "" : style.disabled
        }`}
      >
        Last
      </li>
    </ul>
  );
};

export default Pagination;
