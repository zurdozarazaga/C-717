import React, { useState } from 'react';
import '../assets/styles/components/Add.scss';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

import { openModal } from '../redux/actions/openModalAction';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';

const Add = (props) => {
  
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
