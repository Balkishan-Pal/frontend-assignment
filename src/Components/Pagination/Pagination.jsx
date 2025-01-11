import React from "react";

/* Style */
import './Pagination.css'

const Pagination = ({ totalProjects, projectsPerPage, paginate, currentPage }) => {
  const pageNumbers = Math.ceil(totalProjects / projectsPerPage);

  const disablePrev = currentPage === 1;
  const disableNext = currentPage === pageNumbers;

  const disablePagination = totalProjects === 0;

  return (
    <nav className="pagination-nav">
      <ul className="pagination">
        <li className={`page-item ${disablePrev || disablePagination ? "disabled" : ""}`}>
          <button
            onClick={() => paginate(currentPage - 1)}
            className="page-link"
            disabled={disablePrev || disablePagination}
          >
            &lt; Prev
          </button>
        </li>

        <li className={`page-item ${disableNext || disablePagination ? "disabled" : ""}`}>
          <button
            onClick={() => paginate(currentPage + 1)}
            className="page-link"
            disabled={disableNext || disablePagination}
          >
            Next &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
