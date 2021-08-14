import React, { useState } from 'react';
import '../assets/styles/components/Edit.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/actions/openModalAction';

const Edit = (props) => {
  const dispatch = useDispatch();
  const { elementoId } = props;



  return (
    <botton
      className='tdActions--botton'
      onClick={() => dispatch(openModal(true))}
    >
      <FontAwesomeIcon icon={faEdit} />
    </botton>
  );
};

export default Edit;
