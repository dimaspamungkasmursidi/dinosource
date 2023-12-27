// Modal.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ dino, onClose }) => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleClose = () => {
    setModalVisible(false);
    onClose();
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    handleClose();
  };

  const { name, category, image, description, secdescription } = dino;

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {modalVisible && (
        <>
          <motion.div
            className="modal"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="overlay"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <motion.div
              className="background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>
            <motion.div
              className="scrollable modal-content modal-overlay max-w-3xl bg-secondary text-white p-6 rounded-md"
              onClick={handleCloseClick}
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col-reverse gap-2 items-center mb-6">
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
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
