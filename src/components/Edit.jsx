import React, { useState } from 'react';
import '../assets/styles/components/Edit.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Edit = (props) => {
  const { getCurrentId } = props;
  const { elementoId } = props;
  const [currentId, setCurrentId] = useState('');
  // ejecuto la funcion que viene de Montaje
  getCurrentId(currentId);

  return (
    <botton
      className='tdActions--botton'
      onClick={() => setCurrentId(elementoId)}
    >
      <FontAwesomeIcon icon={faEdit} />
    </botton>
  );
};

export default Edit;
