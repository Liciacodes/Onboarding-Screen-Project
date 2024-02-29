import React from "react";

const SuccessModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg">
        <p className="text-xl font-semibold">Signed in successfully!</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg ml-14"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
