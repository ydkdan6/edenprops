import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-0"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Modal Title</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
