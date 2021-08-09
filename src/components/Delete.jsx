import React from 'react';
import '../assets/styles/components/Delete.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import firebase from "firebase/app";
import 'firebase/firestore';
import { ToastContainer } from 'react-toastify';

const Delete = (props) => {
  //const { idElemento } = props;
  const db = firebase.firestore();

  const onDeleteElement = async (id) => {
    if (window.confirm('¿Desea eliminar el elemento?')) {
      await db.collection('Elementos').doc(id).delete();
      console.log('elemento eliminado');
    }
  };

  return (
    <>
      <botton
        className='tdActions--botton'
        onClick={() => onDeleteElement(idElemento)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </botton>
      <ToastContainer />
    </>
  );
};

export default Delete;
