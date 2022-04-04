import React from "react";
import "./Pagination.css";

const Pagination = ({
  productPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  console.log("pagination is", productPerPage, totalProducts, paginate);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts.length / productPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log("pageNumbers", pageNumbers);

  return (
    <nav className="pagination-group">
      <button
        className="pagination-btn"
        onClick={() => {
          if (currentPage !== 1) {
            paginate(currentPage - 1);
          }
        }}
      >
        Previous
      </button>
      <ul className="pagination-body">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={number === currentPage ? "current-page" : "page-item"}
          >
            <a
              onClick={() => paginate(number)}
              href="!#"
              className={
                number === currentPage
                  ? "pagination-link-current"
                  : "pagination-link"
              }
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="pagination-btn"
        onClick={() => {
          if (currentPage < Math.ceil(totalProducts.length / productPerPage)) {
            paginate(currentPage + 1);
          }
        }}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
