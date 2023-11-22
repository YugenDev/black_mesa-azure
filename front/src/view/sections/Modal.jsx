import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const modalRoot = document.getElementById('modal-root');

const Modal = ({ isOpen, onClose, children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    el
  );
};

export default Modal;

