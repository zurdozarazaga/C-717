import React from 'react';
import '../assets/styles/components/Add.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const Add = () => (
  <>
    
    <botton className='add--botton'>
    <label className='add--label'>Nuevo:</label>
      <FontAwesomeIcon icon={faPlusSquare} />
    </botton>
  </>
);

export default Add;
