import React, { useState } from 'react';
import '../assets/styles/components/Edit.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Edit = (props) => {
  //const { getCurrentId } = props;
  //const { elementoId } = props;
  //const { functionEdit } = props;
  //const [currentId, setCurrentId] = useState('');
  //console.log(currentId);
  // ejecuto la funcion que viene de Montaje
  //getCurrentId(currentId);

  // const functiionEdit = functionEdit(elementoId, currentId);

  return (
    <botton
      className='tdActions--botton'
      // onClick={functionEdit}
    >
      <FontAwesomeIcon icon={faEdit} />
    </botton>
  );
};

export default Edit;
