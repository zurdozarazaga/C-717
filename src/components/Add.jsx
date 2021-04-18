import React, { useState } from 'react';
import '../assets/styles/components/Add.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';

const Add = () => {

  const initialStateValues = {
    designation: '',
    numPart: '',
    numSerial: '',
    position: '',
    numDesm: '',
    date: '',
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
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

        <Modal id='modal-content' isOpen={newElement}>
          <Form onSubmit={handleSubmit}>
            <ModalHeader id='modal-header'>
            Crear Nuevo Elemento
          </ModalHeader>

            <ModalBody id='modalBody'>
            <FormGroup>
              <Label for='designacion'>Designación</Label>
              <Input
                type='text'
                id='inputDesignation'
                onChange={handleInputChange}
                name='designation'
              />
            </FormGroup>
            <FormGroup>
              <Label for='password'>Número de Parte</Label>
              <Input
                type='text'
                id='inputNumPart'
                onChange={handleInputChange}
                name='numPart'
              />
            </FormGroup>
            <FormGroup>
              <Label for='usuario'>Número de Serie</Label>
              <Input
                type='text'
                id='inputNumSerial'
                onChange={handleInputChange}
                name='numSerial'
              />
            </FormGroup>
            <FormGroup>
              <Label for='usuario'>Posición</Label>
              <Input
                type='text'
                id='inputPosition'
                onChange={handleInputChange}
                name='position'
              />
            </FormGroup>
            <FormGroup>
              <Label for='usuario'>Número de Desmontaje</Label>
              <Input
                type='text'
                id='inputNumDesm'
                onChange={handleInputChange}
                name='numDesm'
              />
            </FormGroup>
            <FormGroup>
              <Label for='usuario'>Fecha</Label>
              <Input
                type='text'
                id='inputDate'
                onChange={handleInputChange}
                name='date'
              />
            </FormGroup>
          </ModalBody>

            <ModalFooter id='modal-footer'>
            <Button id='buttonSave'>Guardar</Button>
            <Button id='buttonClose' onClick={handleClickNewElement}>Cerrar</Button>
          </ModalFooter>
          </Form>
        </Modal>
    </>
  );
};

export default Add;
