import React, { useEffect } from 'react';
import styles from './Modal.module.css';


const Modal = ({ closeModal, children }) => {
  const modalCloseFunc = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    closeModal();
  };

  const escCloseModal = (e) => {
    if (e.key !== "Escape") {
      return;
    }
    closeModal();
  };

  useEffect(() => {
    window.addEventListener("keydown", escCloseModal);
    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  });

  return (
    <div className={styles.overlay} onClick={modalCloseFunc}>
      <div className={styles.modal}>
        <>{children}</>
      </div>
    </div>
  );
};


export default Modal;
