import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';


const App = () => {
  // const [ videos, setVideos ] = useState();

  // useEffect (() => {
  //   fetch(API)
  //   .then(response => response.json())
  //   .then(data => setVideos(data));
  // });
  return (
    <div className='app'>
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
