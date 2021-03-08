import React, { useState, useEffect } from 'react';
import Content from './Content';
import '../assets/styles/App.scss';
// import firebase from "firebase/app";
// import 'firebase/firestore';
// import db from '../firebase';

function Home() {
  // const [data, setData] = useState([]);
  // const db = firebase.firestore();
  // useEffect(() => {
  //   db.collection('Elementos').get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.data());
  //       // console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //   });
  // });
  return (
    <>
      <Content />
    </>
  );
}

export default Home;
