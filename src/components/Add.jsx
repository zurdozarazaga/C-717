import React, { useState } from 'react';
import '../assets/styles/components/Add.scss';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

import { openModal } from '../redux/actions/modalAction';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';

const Add = (props) => {
  // const { getCurrentId } = props;
  // const [newElement, setNewElement] = useState(false);

  // const currentId = getCurrentId();
  

  // const functionEdit = (elementoId, currentId) => {
  //   () => setCurrentId(elementoId);
  //   console.log(currentId);
  //   if (newElement === false && currentId === undefined) {
  //     setNewElement(!newElement);
  //   } else if (newElement === true && currentId === undefined) {
  //     setNewElement(!newElement);
  //   } else if (newElement === false && currentId !== undefined) {
  //     console.log('editando');
  //   };
  // };

  // const handleClickNewElement = () => {
  //   console.log(currentId);
  //   if (newElement === false && currentId === undefined) {
  //     setNewElement(!newElement);
  //   } else if (newElement === true && currentId === undefined) {
  //     setNewElement(!newElement);
  //   } else if (newElement === false && currentId !== undefined) {
  //     console.log('editando');
  //   };
  // };

  const dispatch = useDispatch();

  return (
    <>
      <label className='add--label'>Nuevo:</label>
      <a href='#mimodal'
        className='add--botton'
        onClick={() => dispatch(openModal(true))}
      >
        <FontAwesomeIcon icon={faPlusSquare} />
      </a>

      <Modal />
    </>
  );
};

export default (Add);
