import React, { useState, useEffect } from 'react';
import '../assets/styles/Montajes.scss';
import Filter from './Filter';
import firebase from "firebase/app";
import 'firebase/firestore';
import db from '../firebase';

const Montajes = () => {

  const [data, setData] = useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const db = firebase.firestore();
      try {
        const data = await db.collection('Elementos').get();
        const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // console.log(arrayData);
        setData(arrayData);
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
          </tr>
        </thead>
        <tbody>
          {
            data.map((elemento, i) => {
              return (
                <tr>
                  <td key={i}>{ elemento.designacion }</td>
                  <th scope="row">{ elemento.numeroParte }</th>
                  <td >{ elemento.numeroSerie }</td>
                  <td >{ elemento.posicion }</td>
                  <td >{ elemento.numeroDesmontaje }</td>
                  <td > fecha </td>
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
