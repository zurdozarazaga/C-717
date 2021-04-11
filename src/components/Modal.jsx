import React, { useState } from 'react';
import '../assets/styles/components/Modal.scss';
import { createPortal } from 'react-dom';

const modalElement = document.getElementById('modal-root');

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  return createPortal(
    isOpen ? (
      <div className='modal'>
        { children }
      </div>
    ) : null,
    modalElement,
  );
};

export default Modal;
