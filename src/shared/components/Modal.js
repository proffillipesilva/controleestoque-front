import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Modal({ isOpen, onClose, onSubmit, children, data, title = 'Modal Title' }) {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleSubmitInternal = () => {
    if (onSubmit) {
      onSubmit();
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full m-4">
        {/* Header */}
        <div className="px-6 py-4 bg-gray-100 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 h-2/4 overflow-scroll max-h-96 ">
          {children}
        </div>

        {/* Footer (Optional Submit Button) */}
        {onSubmit && (
          <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmitInternal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Salvar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;