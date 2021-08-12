import React from 'react';
import '../assets/styles/components/Delete.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import onDeleteElement from '../redux/actions/deleteElementAction';

const Delete = (props) => {
  // elementoId of props
  const dispatch = useDispatch();
  const { elementoId } = props;
  // extraemos la id del elemento
  console.log(elementoId);

  // handle delete event
  const handleDelete = (id) => {
    console.log(id);
    dispatch(onDeleteElement(id));
  };

  return (
    <>
      <botton
        className='tdActions--botton'
        onClick={() => handleDelete(elementoId)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </botton>
      <ToastContainer />
    </>
  );
};

export default Delete;
