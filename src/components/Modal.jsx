import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Add.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import firebase from "firebase/app";
import 'firebase/firestore';

const ModalCards = (props) => {
  console.log(props);
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

  const getData = async (values) => {
    console.log(values);
    const db = firebase.firestore();
    try {
      await db.collection('Elementos').add(values);
      console.log('elemento agregado');
    } catch (error) {
      console.log(`se produzco un error ${error}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    getData(values);
  };

  const { newElement } = props;
  const { onClick } = props;

  return (
    <>
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
            <Button id='buttonClose'  onClick={ onClick } >Cerrar</Button>
        </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCards;
