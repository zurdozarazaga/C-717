import React from 'react';
import '../assets/styles/components/Delete.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Delete = () => (
  <botton className='tdActions--botton'>
    <FontAwesomeIcon icon={faTrash} />
  </botton>
);

export default Delete;
