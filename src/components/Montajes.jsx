import React, { useEffect } from 'react';
import '../assets/styles/Montajes.scss';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import Filter from './Filter';
import Edit from './Edit';
import Delete from './Delete';

import 'firebase/firestore';
import db from '../firebase';

import * as elemtentosActions from '../redux/actions/elementosActions';
import { traerTodos } from '../redux/actions/elementosActions';

const Montajes = (props) => {
  const dispatch = useDispatch();
  const elementos = useSelector((store) => store.elementos.elementos);
  console.log(elementos);

  React.useEffect(() => {
    dispatch(traerTodos());
  }, []);

  return (
    <>
      <div className='table__container'>
        <Filter />
        <table summary='Elementos montados en la aeronave'>
          <caption>Elementos montados en la aeronave</caption>
          <thead>
            <tr>
              <th scope="col">Designación</th>
              <th scope="col">Número de Parte</th>
              <th scope="col">Número de Serie</th>
              <th scope="col">Posición</th>
              <th scope="col">Número de Desmontaje</th>
              <th scope="col">Fecha</th>
              <th scope="col"> Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              elementos.map((elemento, i) => {
                return (
                  <tr>
                    <td className='td__designacion' key={i}>{ elemento.designacion }</td>
                    <th className='td__numeroParte' scope="row">{ elemento.numeroParte }</th>
                    <td className='td__numeroSerie'>{ elemento.numeroSerie }</td>
                    <td className='td__posicion'>{ elemento.posicion }</td>
                    <td className='td__numeroDesmontaje'>{ elemento.numeroDesmontaje }</td>
                    <td className='td__fecha'> fecha </td>
                    <td className='td__acciones' />
                  </tr>
                );
              })
            }
          </tbody>
          {/* <Button onClick={() => dispatch(traerTodos())}> elementos</Button> */}
        </table>
      </div>
    </>
  );
};

// const mapStateToProps = (reducers) => {
//   return reducers.elementosReducer;
// };

export default (Montajes);
