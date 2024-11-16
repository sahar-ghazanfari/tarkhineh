import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96 relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
