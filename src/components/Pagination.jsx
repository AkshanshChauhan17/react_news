import React from 'react';
import './Pagination.css';

const Pagination = ({ totalResults, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / 10);
  const maxPageButtons = 5; // Maximum number of page buttons to display

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const getPageNumbers = () => {
    const pages = [];

    // If total pages are less than maxPageButtons, show all pages
    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
      let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push('...');
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>First</button>
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
      {getPageNumbers().map((page, index) => (
        page === '...' ? (
          <span key={index} className="ellipsis">...</span>
        ) : (
          <button key={index} className={page === currentPage ? 'active' : ''} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        )
      ))}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>Last</button>
    </div>
  );
};

export default Pagination;