import React, { useState } from 'react';
import '../assets/styles/components/Add.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';

const Add = () => {
  const [newElement, setNewElement] = useState(false);
  const handleClickNewElement = () => {
    setNewElement(!newElement);
  };
  return (
    <>
      <label className='add--label'>Nuevo:</label>
      <a href='#mimodal' onClick={handleClickNewElement} className='add--botton'>
        <FontAwesomeIcon icon={faPlusSquare} />
      </a>

      <Modal newElement={newElement} onClick={handleClickNewElement} />
    </>
  );
};

export default Add;
