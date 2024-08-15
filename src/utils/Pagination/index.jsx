import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        {/* Previous Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-lg ${currentPage === 1 ? 'bg-gray-300' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
          >
            Previous
          </button>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => onPageChange(pageNumber)}
              className={`px-4 py-2 border rounded-lg ${currentPage === pageNumber ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              {pageNumber}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-lg ${currentPage === totalPages ? 'bg-gray-300' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
