import React from 'react';
import '../assets/styles/components/Add.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Add = () => (
  <>
    <a href='#mimodal' className='add--botton'>
      <label className='add--label'>Nuevo:</label>
      <FontAwesomeIcon icon={faPlusSquare} />
    </a>
  </>
);

export default Add;
