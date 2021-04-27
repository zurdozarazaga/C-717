import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Add.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import firebase from "firebase/app";
import 'firebase/firestore';
import { toast } from 'react-toastify';
import { getQueriesForElement } from '@testing-library/dom';

const ModalCards = (props) => {
  console.log(props);
  const initialStateValues = {
    designacion: '',
    numeroParte: '',
    numeroSerie: '',
    posicion: '',
    numeroDesmotanje: '',
    fecha: '',
  };

  const { newElement } = props;
  const { onClick } = props;

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setValues({ ...values, [name]: value });
  };

  const setData = async (values) => {
    console.log(values);
    const db = firebase.firestore();
    try {
      await db.collection('Elementos').add(values);
      toast.success('Elemento Agregado!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(`se produzco un error ${error}`);
      toast.error('Se produzco un error al guardar el Elemento!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    setData(values);
    setValues({ ...initialStateValues });
    onClick();
  };

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
                name='designacion'
                placeholder='Nombre del elemento'
                value={values.designacion}
              />
            </FormGroup>
            <FormGroup>
              <Label>Número de Parte</Label>
              <Input
                type='text'
                id='inputNumPart'
                onChange={handleInputChange}
                name='numeroParte'
                placeholder='Numero de parte del elemento'
                value={values.numeroParte}
              />
            </FormGroup>
            <FormGroup>
              <Label for='usuario'>Número de Serie</Label>
              <Input
                type='text'
                id='inputNumSerial'
                onChange={handleInputChange}
                name='numeroSerie'
                placeholder='Numero de serie del elemento'
                value={values.numeroSerie}
              />
            </FormGroup>
            <FormGroup>
              <Label for='usuario'>Posición</Label>
              <Input
                type='text'
                id='inputPosition'
                onChange={handleInputChange}
                name='posicion'
                placeholder='Posición en la aeronave'
                value={values.posicion}
              />
            </FormGroup>
            <FormGroup>
              <Label for='usuario'>Número de Desmontaje</Label>
              <Input
                type='text'
                id='inputNumDesm'
                onChange={handleInputChange}
                name='numeroDesmotanje'
                placeholder='Numero de desmontaje en el SIL'
                value={values.numeroDesmotanje}
              />
            </FormGroup>
            <FormGroup>
              <Label for='usuario'>Fecha</Label>
              <Input
                type='text'
                id='inputDate'
                onChange={handleInputChange}
                name='fecha'
                placeholder='Fecha de Montaje'
                value={values.fecha}
              />
            </FormGroup>
        </ModalBody>

          <ModalFooter id='modal-footer'>
            <Button id='buttonSave'>Guardar</Button>
            <Button id='buttonClose' onClick={onClick}>Cerrar</Button>
        </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCards;
