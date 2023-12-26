// Modal.js
import React, { useState } from "react";

const Modal = ({ dino, onClose }) => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleClose = () => {
    setModalVisible(false);
    onClose();
  };

  const handleTextClick = () => {
    // Add any additional logic you want when clicking the text
    // For now, let's just close the modal
    handleClose();
  };

  const { name, category, image, description, secdescription } = dino;

  return (
    <div className={`modal ${modalVisible ? "visible" : "hidden"}`}>
      <div className="overlay" onClick={handleClose}></div>
      <div
        className="modal-content max-w-3xl bg-secondary text-white p-6 rounded-md"
        onClick={handleTextClick}
      >
        <div className="flex items-center mb-6">
          <img src={image} alt={name} className="h-[200px] mr-6" />
          <h3 className="font-logo w-10">{category}</h3>
        </div>
        <h3 className="text-lg font-logo -mt-4">{name}</h3>
        <p className="py-4 text-justify indent-5 cursor-pointer">
          {description}
        </p>
        <p className="-mt-2 text-justify indent-5">{secdescription}</p>
        <button
          className="btnPrimary cursor-pointer mt-1"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
