import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Add.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import firebase from "firebase/app";
import 'firebase/firestore';

import { toast, ToastContainer } from 'react-toastify';

import { openModal } from '../redux/actions/openModalAction';
import setData from '../redux/actions/createElement';

const ModalCards = () => {

  const initialStateValues = {
    designacion: '',
    numeroParte: '',
    numeroSerie: '',
    posicion: '',
    numeroDesmotanje: '',
    fecha: '',
  };

  //values from handleInputChange
  const [values, setValues] = useState(initialStateValues);

  //setting values from Modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatchCreator = useDispatch();

  // handleSubmit and closedModal
  const handleSubmit = (e) => {
    e.preventDefault();
    setValues(initialStateValues);
    dispatchCreator(setData(values));
  };
  const dispatch = useDispatch();
  const stateModal = useSelector((store) => store.stateModal.stateModal);

  return (
    <>
      <Modal id='modal-content' isOpen={stateModal}>
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
            <Button
              type='submit'
              id='buttonSave'
              onClick={() => dispatch(openModal(false))}
            >
              Guardar
            </Button>
            <Button
              id='buttonClose'
              onClick={() => dispatch(openModal(false))}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
      <ToastContainer />
    </>
  );
};


export default (ModalCards);
