import React from 'react';
import '../assets/styles/components/Edit.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Edit = () => (
  <botton className='tdActions--botton'>
    <FontAwesomeIcon icon={faEdit} />
  </botton>
);

export default Edit;
