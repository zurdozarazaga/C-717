import React, { useEffect } from 'react';
import '../assets/styles/Montajes.scss';
import { connect } from 'react-redux';
import Filter from './Filter';
import Edit from './Edit';
import Delete from './Delete';

import 'firebase/firestore';
import db from '../firebase';

import * as elemtentosActions from '../actions/elementosActions';

const Montajes = (props) => {

  React.useEffect(() => {
    props.traerTodos();
  }, []);

  console.log(props);
  return (
    <>
      <Filter />
      <div className='table__container'>
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
            {/* recorre el array del query */}
            {
              props.elementos.map((elemento, i) => {
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
        </table>
      </div>
    </>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.elementosReducer;
};

export default connect(mapStateToProps, elemtentosActions)(Montajes);
