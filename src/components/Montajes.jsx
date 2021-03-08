import React, { useState } from 'react';
import '../assets/styles/Montajes.scss';
import db from '../firebase';

const Montajes = () => {




  const [data, setData] = useState([]);

  return (
    <table summary="Los grupos de música punk más famosos del Reino Unido">
      <caption>Un resumen de los grupos de música punk más famosos del Reino Unido</caption>
      <thead>
        <tr>
          <th scope="col">Número de Parte</th>
          <th scope="col">Designación</th>
          <th scope="col">Número de Serie</th>
          <th scope="col">Posición</th>
          <th scope="col">Fecha</th>
        </tr>
      </thead>
      <tbody>
        {data.map(elemento=>(
          <tr>
            <th scope="row">{elemento.id}</th>
            <td>{elemento.nombre}</td>
            <td>{elemento.minutos}</td>
            <td>
              <button className='' onClick={()=>seleccionarPais(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className='' onClick={()=>seleccionarPais(elemento, 'Eliminar')}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



export default Montajes;
