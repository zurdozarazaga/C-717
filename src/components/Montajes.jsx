import React, { useState, useEffect } from 'react';
import '../assets/styles/Montajes.scss';
import Filter from './Filter';
import firebase from "firebase/app";
import Edit from './Edit';
import Delete from './Delete';
import 'firebase/firestore';
import db from '../firebase';

const Montajes = () => {

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
          {
            data.map((elemento, i) => {
              return (
                <tr>
                  <td key={i}>{ elemento.designacion }</td>
                  <th scope="row">{ elemento.numeroParte }</th>
                  <td>{ elemento.numeroSerie }</td>
                  <td>{ elemento.posicion }</td>
                  <td>{ elemento.numeroDesmontaje }</td>
                  <td> fecha </td>
                  <td>
                    <Edit />
                    <Delete />
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
