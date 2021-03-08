import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Content.scss';
import Montajes from '../components/Montajes';
import Desmontajes from '../components/Desmontajes';
import Activos from '../components/Activos';
import Vencimientos from '../components/Vencimientos';
import firebase from "firebase/app";
import 'firebase/firestore';
import db from '../firebase';

const Content = () => {
  const [data, setData] = useState([]);
  const db = firebase.firestore();
  useEffect(() => {
    db.collection('Elementos').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        // console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  });
  return (
    <section className='content'>
      <Montajes />
      <Desmontajes />
      <Activos />
      <Vencimientos />
    </section>

  );
};

export default Content;
