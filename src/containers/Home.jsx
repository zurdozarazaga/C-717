import React, { useState, useEffect } from 'react';
import Content from './Content';
import '../assets/styles/App.scss';

const Home = () => {
  // const [ videos, setVideos ] = useState();

  // useEffect (() => {
  //   fetch(API)
  //   .then(response => response.json())
  //   .then(data => setVideos(data));
  // });
  return (
    <>
      <Content />
    </>
  );
};

export default Home;
