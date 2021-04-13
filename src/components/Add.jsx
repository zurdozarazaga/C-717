import React, { useState } from 'react';
import '../assets/styles/components/Add.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';

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

      <Modal isOpen={newElement}>
        <ModalHeader>
          Crear Nuevo Elemento
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <Label for='usuario'>Usuario</Label>
            <Input type='text' id='usuario' />
            <FormGroup>
              <Label for='password'>Contraseña</Label>
              <Input type='text' id='password' />
            </FormGroup>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button className='saveButton'>Guardar</Button>
          <Button className='closeButton' onClick={handleClickNewElement}>Cerrar</Button>
        </ModalFooter>
      </Modal>
  
    </>
  );
};

export default Add;
