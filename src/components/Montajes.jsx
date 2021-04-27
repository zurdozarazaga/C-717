import React, { useState, useEffect } from 'react';
import '../assets/styles/Montajes.scss';
import Filter from './Filter';
import firebase from "firebase/app";
import Edit from './Edit';
import Delete from './Delete';
import 'firebase/firestore';
import db from '../firebase';

const Montajes = () => {
  // peticion a la base de datos firebase, lo guardo en el state 'data' y lo recorro
  const [data, setData] = useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const db = firebase.firestore();
      try {
        await db.collection('Elementos').onSnapshot((data) => {
          const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          console.log(arrayData);
          setData(arrayData);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
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
          {/* recorre el array del query */}
          {
            data.map((elemento, i) => {
              return (
                <tr>
                  <td className='td__designacion' key={i}>{ elemento.designacion }</td>
                  <th className='td__numeroParte' scope="row">{ elemento.numeroParte }</th>
                  <td className='td__numeroSerie'>{ elemento.numeroSerie }</td>
                  <td className='td__posicion'>{ elemento.posicion }</td>
                  <td className='td__numeroDesmontaje'>{ elemento.numeroDesmontaje }</td>
                  <td className='td__fecha'> fecha </td>
                  <td className='td__acciones'>
                    <Edit />
                    <Delete idElemento={elemento.id} />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};
export default Montajes;
